export async function getBook(slug: string) {
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

export async function getBooksBySlug(slug: string, limit = 25) {
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

export async function getBooksByCategory(slug: string, pageNum = 1) {
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
