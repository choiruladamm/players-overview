export interface PaginationMeta {
  page: number
  limit: number
  total: number
  total_pages: number
}

export interface ApiResponse<T> {
  data: T
  meta?: PaginationMeta
}