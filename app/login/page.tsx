"use client"

import { useState } from "react"
import { Button, Form, Input, Label } from "@/components/styled"
import { login } from "@/services/userServices"
import styled from "styled-components"
import { setToken } from "@/utils/auth"
import { useRouter } from "next/navigation"

const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;

  form {
    width: 250px;

    h1 {
      margin-bottom: 1rem;
      color: #fff;
    }

    label {
      color: #fff;
    }
  }
`

export default function Login() {
  const [password, setPassword] = useState("")
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const user = await login(password)
    if (!user.token) return
    setToken(user.token)
    router.push("/")
  }

  return (
    <LoginContainer>
      <Form onSubmit={handleSubmit}>
        <h1>Login</h1>
        <Label htmlFor="password">Password</Label>
        <Input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <Button type="submit">Login</Button>
      </Form>
    </LoginContainer>
  )
}
