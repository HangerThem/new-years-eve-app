import jsonwebtoken, { JsonWebTokenError } from "jsonwebtoken"

export const generateToken = (id: string) => {
  return jsonwebtoken.sign({ id }, process.env.JWT_SECRET as string, {
    expiresIn: "30d",
  })
}

export const verifyToken = (token: string) => {
  if (!token) {
    throw new Error("Token must be provided")
  }
  try {
    return jsonwebtoken.verify(
      token,
      process.env.NEXT_PUBLIC_JWT_SECRET as string
    )
  } catch (error) {
    if (error instanceof JsonWebTokenError) {
      return null
    }
    throw error
  }
}

export const decodeToken = (token: string) => {
  if (!token) {
    throw new Error("Token must be provided")
  }
  return jsonwebtoken.decode(token)
}

export const getTokenFromRequest = (request: any) => {
  const authorization = request.headers.get("authorization")
  console.log("authorization: ", authorization)
  if (!authorization) {
    throw new Error("Authorization header must be provided")
  }
  const token = authorization.replace("Bearer ", "")
  return token
}
