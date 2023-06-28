import qs from "qs"
import { Book } from "@/types/Book"

export async function getBooksByIds(ids: number[]): Promise<Book> {
  const idArray = ids.length < 1 ? null : ids
  const query = qs.stringify(
    {
      filters: {
        id: {
          $in: idArray,
        },
      },
      populate: "*",
    },
    {
      encodeValuesOnly: true, // prettify URL
    }
  )

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/books?${query}`
  )

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch books")
  }

  return res.json()
}
