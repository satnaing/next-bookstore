import { Book } from "@/types/bookQuery.types"

const qs = require("qs")

export async function getBook(slug: string): Promise<Book> {
  const res = await fetch(
    `http://localhost:1337/api/books?filters[slug][$eq]]=${slug}&populate=*`
  )

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch books")
  }

  return res.json()
}

export async function getFeaturedCategories() {
  const res = await fetch(
    `http://localhost:1337/api/categories?filters[featured][$eq]=true&sort=featured_order`
  )

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch categories")
  }

  return res.json()
}

export async function getBooksBySlug(slug: string, limit = 25): Promise<Book> {
  const res = await fetch(
    `http://localhost:1337/api/books?filters[categories][slug][$eq]]=${slug}&populate=*&pagination[limit]=${limit}`
  )

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch books")
  }

  return res.json()
}

export async function getBooksByCategory(
  slug: string,
  pageNum = 1
): Promise<Book> {
  const res = await fetch(
    `http://localhost:1337/api/books?filters[categories][slug][$eq]]=${slug}&populate=*&pagination[page]=${pageNum}&pagination[pageSize]=10`
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

  const res = await fetch(`http://localhost:1337/api/books?${query}`)

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch books")
  }

  return res.json()
}
