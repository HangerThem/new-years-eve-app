import prisma from "@/helpers/prismaHelper"

export async function GET() {
  try {
    var food: Food[] = await prisma.food.findMany({
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

  return new Response(JSON.stringify(food), {
    headers: { "content-type": "application/json;charset=UTF-8" },
    status: 200,
  })
}

export async function POST(request: Request) {
  const { name, description } = await request.json()

  try {
    var food = await prisma.food.create({
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

  return new Response(JSON.stringify(food), {
    headers: { "content-type": "application/json;charset=UTF-8" },
    status: 201,
  })
}