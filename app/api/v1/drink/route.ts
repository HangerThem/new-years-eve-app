import prisma from "@/helpers/prismaHelper"

export async function GET() {
  try {
    var drink: Drink[] = await prisma.drink.findMany({
      select: {
        id: true,
        name: true,
        description: true,
      },
    })
  } catch (error) {
    return new Response(JSON.stringify(error), {
      headers: { "content-type": "application/json;charset=UTF-8" },
      status: 500,
    })
  }

  return new Response(JSON.stringify(drink), {
    headers: { "content-type": "application/json;charset=UTF-8" },
    status: 200,
  })
}

export async function POST(request: Request) {
  const { name, description } = await request.json()

  try {
    var drink = await prisma.drink.create({
      data: {
        name,
        description,
      },
      select: {
        id: true,
        name: true,
        description: true,
      },
    })
  } catch (error) {
    return new Response(JSON.stringify(error), {
      headers: { "content-type": "application/json;charset=UTF-8" },
      status: 500,
    })
  }

  return new Response(JSON.stringify(drink), {
    headers: { "content-type": "application/json;charset=UTF-8" },
    status: 201,
  })
}