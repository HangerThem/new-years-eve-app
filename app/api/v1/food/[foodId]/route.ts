import prisma from "@/helpers/prismaHelper"
import { NextRequest } from "next/server"

interface Params {
  params: {
    foodId: string
  }
}

type RequestWithParams = Request & Params
type NextRequestWithParams = NextRequest & Params

export async function GET({
  params,
}: RequestWithParams | NextRequestWithParams) {
  const { foodId } = params
  try {
    var food: Food | null = await prisma.food.findUnique({
      where: { id: foodId },
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

export async function PATCH(
  request: Request,
  { params }: { params: { foodId: string } }
) {
  const { name, description } = await request.json()
  const { foodId } = params

  try {
    var food = await prisma.food.update({
      where: { id: foodId },
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
    status: 200,
  })
}

export async function DELETE(
  request: Request,
  { params }: { params: { foodId: string } }
) {
  const { foodId } = params

  try {
    var food = await prisma.food.delete({
      where: { id: foodId },
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
