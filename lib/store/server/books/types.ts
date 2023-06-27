import { GetResponse } from "@/types/api"

export interface BookQueryObject {
  filters?: {
    categories?: {
      slug?: {
        $eq?: string
      }
    }
    id?: {
      $in?: number[]
    }
    title?: {
      $containsi?: string
    }
  }
  populate?: string
  pagination?: {
    page?: number
    pageSize?: number
    limit?: number
  }
}

export interface BookQueryProps {
  slug?: string
  limit?: number
  pageNum?: number
  ids?: number[]
  searchTerm?: string
}

export type Books = GetResponse<Book[]>

export interface Book {
  id: number
  attributes: {
    title: string
    price: number
    description: string
    slug: string
    in_stock: boolean
    createdAt: Date
    updatedAt: Date
    publishedAt: Date
    author_id: {
      data: {
        id: number
        attributes: {
          name: string
          description: null | string
          slug: string
          createdAt: Date
          updatedAt: Date
        }
      }
    }
    categories: {
      data: {
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
      }[]
    }
    image: {
      data: {
        id: number
        attributes: {
          name: string
          alternativeText: null
          caption: null
          width: number
          height: number
          formats: {
            small: Small
            thumbnail: Small
          }
          hash: string
          ext: ".webp"
          mime: "image/webp"
          size: number
          url: string
          previewUrl: null
          provider: string
          provider_metadata: ProviderMetadata
          createdAt: Date
          updatedAt: Date
        }
      }[]
    }
  }
}

interface Small {
  name: string
  hash: string
  ext: ".webp"
  mime: "image/webp"
  path: null
  width: number
  height: number
  size: number
  url: string
  provider_metadata: ProviderMetadata
}

interface ProviderMetadata {
  public_id: string
  resource_type: "image"
}
