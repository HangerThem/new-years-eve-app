import { API_URL } from "@/config/servicesConfig"

async function requestGet<Res>(
  url: string,
  cache?: "no-store" | "force-cache",
  revalidate?: number
): Promise<Res> {
  return (
    await fetch(API_URL + url, {
      method: "GET",
      cache: cache ?? "no-store",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "DELETE, POST, GET, OPTIONS",
        "Access-Control-Allow-Headers":
          "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With",
      },
    })
  ).json() as Res
}

async function requestPost<Res>(
  url: string,
  body: any,
  cache?: "no-store" | "force-cache",
  revalidate?: number
): Promise<Res> {
  return (
    await fetch(API_URL + url, {
      method: "POST",
      cache: cache ?? "no-store",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "DELETE, POST, GET, OPTIONS",
        "Access-Control-Allow-Headers":
          "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With",
      },
      body: JSON.stringify(body),
    })
  ).json() as Res
}

async function requestPostFormData<Res>(
  url: string,
  body: any,
  cache?: "no-store" | "force-cache",
  revalidate?: number
): Promise<Res> {
  return (
    await fetch(API_URL + url, {
      method: "POST",
      cache: cache ?? "no-store",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "DELETE, POST, GET, OPTIONS",
        "Access-Control-Allow-Headers":
          "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With",
      },
      body: body,
    })
  ).json() as Res
}

async function requestPatch<Res>(
  url: string,
  body: any,
  cache?: "no-store" | "force-cache",
  revalidate?: number
): Promise<Res> {
  return (
    await fetch(API_URL + url, {
      method: "PATCH",
      cache: cache ?? "no-store",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "DELETE, POST, GET, OPTIONS",
        "Access-Control-Allow-Headers":
          "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With",
      },
      body: JSON.stringify(body),
    })
  ).json() as Res
}

async function requestDelete<Res>(
  url: string,
  body?: any,
  cache?: "no-store" | "force-cache",
  revalidate?: number
): Promise<Res> {
  return (
    await fetch(API_URL + url, {
      method: "DELETE",
      cache: cache ?? "no-store",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "DELETE, POST, GET, OPTIONS",
        "Access-Control-Allow-Headers":
          "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With",
      },
      body: JSON.stringify(body),
    })
  ).json() as Res
}

export {
  requestGet,
  requestPost,
  requestPostFormData,
  requestPatch,
  requestDelete,
}
