import { requestPost } from "@/helpers/requestHelper"

export async function login(password: string) {
  return await requestPost<{ token: string }>("auth/login", { password })
}
