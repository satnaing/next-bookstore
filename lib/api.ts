import qs from "qs"
import { Book } from "@/types/Book"
import { Category } from "@/types/Category"

export async function getBooksByCategory(
  slug: string,
  pageNum = 1
): Promise<Book> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/books?filters[categories][slug][$eq]]=${slug}&populate=*&pagination[page]=${pageNum}&pagination[pageSize]=10`
  )

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch books")
  }

  return res.json()
}

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

export async function getBooksByTitle(searchTearm: string): Promise<Book> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/books?filters[title][$containsi]=${searchTearm}&populate=*`
  )

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch books")
  }

  return res.json()
}

export async function getCategoryBySlug(slug: string): Promise<Category> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/categories?filters[slug][$eq]]=${slug}&populate=*`
  )

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch books")
  }

  return res.json()
}

export async function getRelatedBooks(
  author: number,
  categories: number[]
): Promise<Book> {
  const res = await fetch(
    `${
      process.env.NEXT_PUBLIC_BACKEND_URL
    }/api/book/random?categories=${categories.toString()}&author=${author}`
  )

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch books")
  }

  return res.json()
}
