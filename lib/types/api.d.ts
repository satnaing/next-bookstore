export interface Meta {
  pagination: {
    page: number
    pageSize: number
    pageCount: number
    total: number
  }
}

export interface GetResponse<T> {
  data: T
  meta: Meta
}
