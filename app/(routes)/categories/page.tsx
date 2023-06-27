import Breadcrumb from "@/components/Breadcrumb"
import { getCategories } from "@/store/server/categories/queries"
import CategoriesSection from "./CategoriesSection"

export default async function Home() {
  const initialData = await getCategories()

  return (
    <main className="main-container">
      <Breadcrumb />
      <CategoriesSection categories={initialData} />
    </main>
  )
}
