import Breadcrumb from "@/components/Breadcrumb"
import { getCategories } from "@/store/server/categories/queries"
import CategoriesSection from "./CategoriesSection"
import { getInitialBooks } from "@/utils/utilFuncs"

export default async function Home() {
  const categories = await getCategories()
  const books = await getInitialBooks(categories)

  return (
    <main className="main-container">
      <Breadcrumb />
      <CategoriesSection categories={categories} books={books} />
    </main>
  )
}
