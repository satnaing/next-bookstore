import { BookQueryProps, Books } from "./types"
import axios from "@/lib/api/axios"
import { generateBookQuery } from "@/utils/utilFuncs"
import { useQuery } from "@tanstack/react-query"

/* ========== Get Multiple Books ========== */
export const getBooks = async (props: BookQueryProps): Promise<Books> => {
  const queryString = generateBookQuery(props)
  const response = await axios.get(`/books?populate=*&${queryString}`)
  return response.data
}

interface UseBooks {
  initialData?: Books
  filter: BookQueryProps
  enabled?: boolean
}

export const useBooks = ({ initialData, filter, enabled = true }: UseBooks) =>
  useQuery({
    queryKey: ["books", filter],
    queryFn: () => getBooks(filter),
    initialData,
    enabled: enabled,
  })

/* ========== Get Single Book ========== */
export const getBook = async (slug: string): Promise<Books> => {
  const response = await axios.get(
    `/books?filters[slug][$eq]]=${slug}&populate=*`
  )
  return response.data
}

export const useBook = ({
  initialData,
  slug,
}: {
  initialData: Books
  slug: string
}) =>
  useQuery({
    queryKey: ["books", slug],
    queryFn: () => getBook(slug),
    initialData,
  })

/* ========== Get Books by Category ========== */
export const getBooksByCategory = async ({
  slug,
  pageNum = 1,
}: {
  slug: string
  pageNum?: number
}): Promise<Books> => {
  const response = await axios.get(
    `/books?filters[categories][slug][$eq]]=${slug}&populate=*&pagination[page]=${pageNum}&pagination[pageSize]=10`
  )
  return response.data
}

export const useBooksByCategory = ({
  slug,
  pageNum,
  initialData,
}: {
  slug: string
  pageNum?: number
  initialData: Books
}) =>
  useQuery({
    queryKey: ["books", { slug, pageNum }],
    queryFn: () => getBooksByCategory({ slug, pageNum }),
    initialData,
  })

/* ========== Get Related Books ========== */
interface RelatedBooks {
  author: number
  categories: number[]
}

export const getRelatedBooks = async ({
  author,
  categories,
}: RelatedBooks): Promise<Books> => {
  const response = await axios.get(
    `/book/random?categories=${categories.toString()}&author=${author}`
  )
  return response.data
}

export const useRelatedBooks = (relatedBooks: RelatedBooks) =>
  useQuery({
    queryKey: ["relatedBooks", relatedBooks],
    queryFn: () => getRelatedBooks(relatedBooks),
    refetchOnWindowFocus: false,
    staleTime: 1000 * 60,
  })
