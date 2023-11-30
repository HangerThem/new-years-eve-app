import {
  requestDelete,
  requestGet,
  requestPost,
  requestPatch,
} from "@/helpers/requestHelper"

export const getDrinks = async () => {
  return await requestGet<Drink[]>("drink")
}

export const getDrink = async (id: string) => {
  return await requestGet<Drink>(`drink/${id}`)
}

export const createDrink = async ({
  name,
  description,
}: {
  name: string
  description?: string
}) => {
  return await requestPost<Drink>("drink", { name, description })
}

export const updateDrink = async (drink: Drink) => {
  return await requestPatch<Drink>(`drink/${drink.id}`, drink)
}

export const deleteDrink = async (id: string) => {
  return await requestDelete<Drink>(`drink/${id}`)
}
