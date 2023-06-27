import { getBooks } from "@/store/server/books/queries"
import {
  BookQueryProps,
  BookQueryObject,
  Books,
} from "@/store/server/books/types"
import { Categories } from "@/store/server/categories/types"
import { Image } from "@/types/Book"
import qs from "qs"

export const defaultStroke = (className: string): string =>
  new RegExp("stroke-*", "g").test(className) ? "" : "stroke-2 stroke-skin-dark"

export const generateUniqueArray = (num: number) => {
  let numbers = new Set<number>()
  while (numbers.size < num) {
    let randomNum = Math.floor(Math.random() * (num - 1 + 1)) + 1
    numbers.add(randomNum)
  }

  return Array.from(numbers)
}

export const getOptimizedImage = (image: Image) =>
  image.data[0].attributes.formats.small?.url || image.data[0].attributes.url

export const generateBookQuery = ({
  slug,
  limit = 10,
  pageNum = 1,
  ids = [],
  searchTerm = "",
}: BookQueryProps) => {
  const queryObject: BookQueryObject = {}

  if (slug) {
    queryObject.filters = {
      categories: {
        slug: {
          $eq: slug,
        },
      },
    }
  }

  if (limit) {
    queryObject.pagination = {
      limit: limit,
    }
  }

  if (pageNum) {
    queryObject.pagination = {
      page: pageNum,
      pageSize: limit,
    }
  }

  if (ids.length > 0) {
    queryObject.filters = {
      id: {
        $in: ids,
      },
      ...queryObject.filters,
    }
  }

  if (searchTerm) {
    queryObject.filters = {
      title: {
        $containsi: searchTerm,
      },
      ...queryObject.filters,
    }
  }

  return qs.stringify(queryObject, {
    encodeValuesOnly: true, // prettify URL
  })
}

export const getInitialBooks = async (categories: Categories) => {
  const books: Record<string, Books> = {}
  await Promise.all(
    categories.data.map(async ({ attributes }) => {
      const slug = attributes.slug
      const booksRes = await getBooks({ slug, limit: 5 })
      books[slug] = booksRes
    })
  )
  return books
}
