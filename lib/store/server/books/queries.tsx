import { BookQueryProps, Books } from "./types"
import axios from "@/lib/api/axios"
import { generateBookQuery } from "@/utils/utilFuncs"
import { useQuery } from "@tanstack/react-query"

/* ========== Get Multiple Books ========== */
export const getBooks = async (props: BookQueryProps): Promise<Books> => {
  const queryString = generateBookQuery(props)
  const response = await axios.get(`/api/books?populate=*&${queryString}`)
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
    `/api/books?filters[slug][$eq]]=${slug}&populate=*`
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
    `/api/book/random?categories=${categories.toString()}&author=${author}`
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
