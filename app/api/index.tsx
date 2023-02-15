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
