import { getAllCategories } from "@/lib/api"
import Breadcrumb from "@/components/Breadcrumb"
import CategoriesSection from "./CategoriesSection"

export default async function Home() {
  const initialData = await getAllCategories()

  return (
    <main className="main-container">
      <Breadcrumb />
      <CategoriesSection categories={initialData} />
    </main>
  )
}
