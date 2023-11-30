import {
  requestDelete,
  requestGet,
  requestPost,
  requestPatch,
} from "@/helpers/requestHelper"

export const getActivities = async () => {
  return await requestGet<Activity[]>("activity")
}

export const getActivity = async (id: string) => {
  return await requestGet<Activity>(`activity/${id}`)
}

export const createActivity = async ({
  name,
  description,
}: {
  name: string
  description?: string
}) => {
  return await requestPost<Activity>("activity", { name, description })
}

export const updateActivity = async (activity: Activity) => {
  return await requestPatch<Activity>(`activity/${activity.id}`, activity)
}

export const deleteActivity = async (id: string) => {
  return await requestDelete<Activity>(`activity/${id}`)
}
