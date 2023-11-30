import prisma from "@/helpers/prismaHelper"
import { NextRequest } from "next/server"

interface Params {
  params: {
    themeId: string
  }
}

type RequestWithParams = Request & Params
type NextRequestWithParams = NextRequest & Params

export async function GET({
  params,
}: RequestWithParams | NextRequestWithParams) {
  const { themeId } = params
  try {
    var theme: Theme | null = await prisma.theme.findUnique({
      where: { id: themeId },
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

  return new Response(JSON.stringify(theme), {
    headers: { "content-type": "application/json;charset=UTF-8" },
    status: 200,
  })
}

export async function PATCH(
  request: Request,
  { params }: { params: { themeId: string } }
) {
  const { name, description } = await request.json()
  const { themeId } = params

  try {
    var theme = await prisma.theme.update({
      where: { id: themeId },
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

  return new Response(JSON.stringify(theme), {
    headers: { "content-type": "application/json;charset=UTF-8" },
    status: 200,
  })
}

export async function DELETE(
  request: Request,
  { params }: { params: { themeId: string } }
) {
  const { themeId } = params

  try {
    var theme = await prisma.theme.delete({
      where: { id: themeId },
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

  return new Response(JSON.stringify(theme), {
    headers: { "content-type": "application/json;charset=UTF-8" },
    status: 200,
  })
}
