import {
  requestDelete,
  requestGet,
  requestPost,
  requestPatch,
} from "@/helpers/requestHelper"

export const getFoods = async () => {
  return await requestGet<Food[]>("food")
}

export const getFood = async (id: string) => {
  return await requestGet<Food>(`food/${id}`)
}

export const createFood = async ({
  name,
  description,
}: {
  name: string
  description?: string
}) => {
  return await requestPost<Food>("food", { name, description })
}

export const updateFood = async (food: Food) => {
  return await requestPatch<Food>(`food/${food.id}`, food)
}

export const deleteFood = async (id: string) => {
  return await requestDelete<Food>(`food/${id}`)
}
