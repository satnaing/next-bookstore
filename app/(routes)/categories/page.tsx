import Breadcrumb from "@/components/Breadcrumb"
import { getCategories } from "@/store/server/categories/queries"
import CategoriesSection from "./CategoriesSection"

export default async function Home() {
  const categories = await getCategories()

  return (
    <main className="main-container">
      <Breadcrumb />
      <CategoriesSection categories={categories} />
    </main>
  )
}
