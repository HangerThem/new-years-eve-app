import React, { useEffect } from "react"
import { NextPage } from "next"
import { useRouter } from "next/navigation"
import { getToken } from "@/utils/auth"
import { verifyToken } from "@/utils/token"

const withAuth = (Component: NextPage) => {
  const Auth = (props: any) => {
    const Router = useRouter()
    let token = null

    useEffect(() => {
      token = getToken()
      if (!token) {
        Router.push("/login")
        return
      }
      const validToken = verifyToken(token as string)
      const user = validToken ? token : null
      if (!user) Router.push("/login")
    }, [])
    return <Component {...props} />
  }

  if (Component.getInitialProps) {
    Auth.getInitialProps = Component.getInitialProps
  }

  return Auth
}

export default withAuth
