import { generateToken } from "@/utils/token"

export async function POST(request: Request) {
  const { password } = await request.json()

  if (password === process.env.PASSWORD) {
    return new Response(
      JSON.stringify({ token: generateToken(process.env.PASSWORD as string) }),
      {
        headers: { "content-type": "application/json;charset=UTF-8" },
        status: 200,
      }
    )
  }

  return new Response(JSON.stringify({ error: "Invalid password" }), {
    headers: { "content-type": "application/json;charset=UTF-8" },
    status: 401,
  })
}
