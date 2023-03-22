export interface Book {
  data: BookDatum[]
  meta: Meta
}

export interface BookDatum {
  id: number
  attributes: BookAttributes
}

export interface BookAttributes {
  title: string
  description: string
  price: number
  createdAt: Date
  updatedAt: Date
  publishedAt: Date
  slug: string
  in_stock: boolean
  author_id: AuthorID
  categories: Categories
  image: Image
}

export interface AuthorID {
  data: Data
}

export interface Data {
  id: number
  attributes: DataAttributes
}

export interface DataAttributes {
  name: string
  description: null
  createdAt: Date
  updatedAt: Date
  slug: string
}

export interface Categories {
  data: CategoriesDatum[]
}

export interface CategoriesDatum {
  id: number
  attributes: CategoryAttributes
}

export interface CategoryAttributes {
  name: string
  description: null
  createdAt: Date
  updatedAt: Date
  slug: string
  featured: boolean
  featured_order: number
}

export interface Image {
  data: ImageDatum[]
}

export interface ImageDatum {
  id: number
  attributes: ImageAttributes
}

export interface ImageAttributes {
  name: string
  alternativeText: null
  caption: null
  width: number
  height: number
  formats: Formats
  hash: string
  ext: string
  mime: string
  size: number
  url: string
  previewUrl: null
  provider: string
  provider_metadata: ProviderMetadata
  createdAt: Date
  updatedAt: Date
}

export interface Formats {
  small?: Small
  thumbnail: Small
}

export interface Small {
  name: string
  hash: string
  ext: string
  mime: string
  path: null
  width: number
  height: number
  size: number
  url: string
  provider_metadata: ProviderMetadata
}

export interface ProviderMetadata {
  public_id: string
  resource_type: string
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
