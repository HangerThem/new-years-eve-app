import prisma from "@/helpers/prismaHelper"
import { NextRequest } from "next/server"

interface Params {
  params: {
    drinkId: string
  }
}

type RequestWithParams = Request & Params
type NextRequestWithParams = NextRequest & Params

export async function GET({
  params,
}: RequestWithParams | NextRequestWithParams) {
  const { drinkId } = params
  try {
    var drink: Drink | null = await prisma.drink.findUnique({
      where: { id: drinkId },
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

export async function PATCH(
  request: Request,
  { params }: { params: { drinkId: string } }
) {
  const { name, description } = await request.json()
  const { drinkId } = params

  try {
    var drink = await prisma.drink.update({
      where: { id: drinkId },
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
    status: 200,
  })
}

export async function DELETE(
  request: Request,
  { params }: { params: { drinkId: string } }
) {
  const { drinkId } = params

  try {
    var drink = await prisma.drink.delete({
      where: { id: drinkId },
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
