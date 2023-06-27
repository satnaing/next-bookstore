import { BookQueryProps, Books } from "./types"
import axios from "@/lib/api/axios"
import { generateBookQuery } from "@/utils/utilFuncs"
import { useQuery } from "@tanstack/react-query"

export const getBooks = async (props: BookQueryProps): Promise<Books> => {
  const queryString = generateBookQuery(props)
  const response = await axios.get(`/api/books?populate=*&${queryString}`)
  return response.data
}

interface UseBooks {
  initialData?: Books
  filter: BookQueryProps
}

export const useBooks = ({ initialData, filter }: UseBooks) =>
  useQuery({
    queryKey: ["books", filter],
    queryFn: () => getBooks(filter),
    initialData,
  })
