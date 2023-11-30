import prisma from "@/helpers/prismaHelper"

export async function GET() {
  try {
    var activity: Activity[] = await prisma.activity.findMany({
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

  return new Response(JSON.stringify(activity), {
    headers: { "content-type": "application/json;charset=UTF-8" },
    status: 200,
  })
}

export async function POST(request: Request) {
  const { name, description } = await request.json()

  try {
    var activity = await prisma.activity.create({
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

  return new Response(JSON.stringify(activity), {
    headers: { "content-type": "application/json;charset=UTF-8" },
    status: 201,
  })
}
