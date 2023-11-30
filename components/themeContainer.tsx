"use client"

import React, { useState, useEffect } from "react"
import { getThemes, createTheme, deleteTheme } from "@/services/themeServices"
import {
  Container,
  Dialog,
  Form,
  Label,
  Input,
  TextArea,
  Button,
} from "@/components/styled"

const ThemeContainer = () => {
  const [themes, setThemes] = useState<Theme[]>([])
  const [showDialog, setShowDialog] = useState<boolean>(false)

  useEffect(() => {
    getThemes().then((themes) => setThemes(themes))
  }, [])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const name = form.themeName.value
    if (!name) return
    const description = form.description.value
    const theme = await createTheme({ name, description })
    setThemes([...themes, theme])
    setShowDialog(false)
  }

  const handleDeleteTheme = async (id: string) => {
    await deleteTheme(id)
    setThemes(themes.filter((theme) => theme.id !== id))
  }

  return (
    <Container>
      <Dialog open={showDialog}>
        <Form onSubmit={(e) => handleSubmit(e)}>
          <Button onClick={() => setShowDialog(false)} className="close">
            ×
          </Button>
          <h1>Add Theme</h1>
          <Label htmlFor="themeName">Name</Label>
          <Input id="themeName" name="themeName" type="text" />
          <Label htmlFor="description">Description</Label>
          <TextArea id="description" name="description" />
          <Button type="submit">Add Theme</Button>
        </Form>
      </Dialog>
      <h2>Theme</h2>
      <ul>
        {themes.map((theme) => (
          <li key={theme.id}>
            <div>
              <h3>{theme.name}</h3>
              <Button
                onClick={() => handleDeleteTheme(theme.id)}
                className="remove"
              >
                x
              </Button>
            </div>
            <p>{theme.description}</p>
          </li>
        ))}
      </ul>
      <Button onClick={() => setShowDialog(true)}>Add Theme</Button>
    </Container>
  )
}

export default ThemeContainer
