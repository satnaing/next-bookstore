export interface Category {
  data: Datum[]
  meta: Meta
}

export interface Datum {
  id: number
  attributes: Attributes
}

export interface Attributes {
  name: string
  description: null
  createdAt: Date
  updatedAt: Date
  slug: string
  featured: boolean
  featured_order: number
}

export interface Meta {
  pagination: Pagination
}

export interface Pagination {
  page: number
  pageSize: number
  pageCount: number
  total: number
}
