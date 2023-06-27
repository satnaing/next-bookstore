import axios from "@/lib/api/axios"
import { useQuery } from "@tanstack/react-query"
import { Category } from "./types"
import { GetResponse } from "@/types/api"

export const getCategories = async (
  featured: boolean
): Promise<GetResponse<Category[]>> => {
  const params = featured
    ? "?filters[featured][$eq]=true&sort=featured_order"
    : ""
  const response = await axios.get(`/api/categories${params}`)
  return response.data
}

export const useCategories = ({
  categories,
  featured = false,
}: {
  categories: GetResponse<Category[]>
  featured?: boolean
}) =>
  useQuery({
    queryKey: featured ? ["categories", { featured: true }] : ["categories"],
    queryFn: () => getCategories(featured),
    initialData: categories,
    select: data =>
      data.data.map(({ attributes }) => ({
        name: attributes.name,
        slug: attributes.slug,
      })),
  })
