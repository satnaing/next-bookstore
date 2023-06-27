import axios from "@/lib/api/axios"
import { useQuery } from "@tanstack/react-query"
import { Category } from "./types"
import { GetResponse } from "@/types/api"

export const getCategories = async (): Promise<GetResponse<Category[]>> => {
  const response = await axios.get(`/api/categories`)
  return response.data
}

export const useCategories = (categories: GetResponse<Category[]>) =>
  useQuery({
    queryKey: ["categories"],
    queryFn: getCategories,
    initialData: categories,
    select: data =>
      data.data.map(({ attributes }) => ({
        name: attributes.name,
        slug: attributes.slug,
      })),
  })
