import {
  requestDelete,
  requestGet,
  requestPost,
  requestPatch,
} from "@/helpers/requestHelper"

export const getThemes = async () => {
  return await requestGet<Theme[]>("theme")
}

export const getTheme = async (id: string) => {
  return await requestGet<Theme>(`theme/${id}`)
}

export const createTheme = async ({
  name,
  description,
}: {
  name: string
  description?: string
}) => {
  return await requestPost<Theme>("theme", { name, description })
}

export const updateTheme = async (food: Theme) => {
  return await requestPatch<Theme>(`theme/${food.id}`, food)
}

export const deleteTheme = async (id: string) => {
  return await requestDelete<Theme>(`theme/${id}`)
}
