import cookie from "cookiejs"

export const setToken = (token: string) => {
  cookie.set("token", token)
}

export const getToken = () => {
  return cookie.get("token")
}

export const removeToken = () => {
  cookie.remove("token")
}
