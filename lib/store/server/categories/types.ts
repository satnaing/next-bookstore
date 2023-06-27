import { GetResponse } from "@/types/api"

export type Categories = GetResponse<Category[]>

export interface Category {
  id: number
  attributes: {
    name: string
    description: null
    slug: string
    featured: boolean | null
    featured_order: number | null
    createdAt: Date
    updatedAt: Date
  }
}
