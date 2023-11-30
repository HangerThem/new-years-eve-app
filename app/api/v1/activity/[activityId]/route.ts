import prisma from "@/helpers/prismaHelper"
import { NextRequest } from "next/server"

interface Params {
  params: {
    activityId: string
  }
}

type RequestWithParams = Request & Params
type NextRequestWithParams = NextRequest & Params

export async function GET({
  params,
}: RequestWithParams | NextRequestWithParams) {
  const { activityId } = params
  try {
    var activity: Activity | null = await prisma.activity.findUnique({
      where: { id: activityId },
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

export async function PATCH(
  request: Request,
  { params }: { params: { activityId: string } }
) {
  const { name, description } = await request.json()
  const { activityId } = params

  try {
    var activity = await prisma.activity.update({
      where: { id: activityId },
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
    status: 200,
  })
}

export async function DELETE(
  request: Request,
  { params }: { params: { activityId: string } }
) {
  const { activityId } = params

  try {
    var activity = await prisma.activity.delete({
      where: { id: activityId },
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
