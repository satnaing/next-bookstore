import { dehydrate, Hydrate } from "@tanstack/react-query"
import getQueryClient from "./getQueryClient"
import Home from "../(pages)/(index)/page"

export async function getBooks() {
  const res = await fetch("http://localhost:1337/api/books?populate=image")
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch books")
  }

  return res.json()
}

export default async function HydratedPosts() {
  const queryClient = getQueryClient()
  await queryClient.prefetchQuery(["books"], getBooks)
  const dehydratedState = dehydrate(queryClient)

  return (
    <Hydrate state={dehydratedState}>
      <Home />
    </Hydrate>
  )
}
