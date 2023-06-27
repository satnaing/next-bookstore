import BooksSection from "./layouts/BooksSection"
import HeroSection from "./layouts/HeroSection"
import InstagramSection from "./layouts/InstagramSection"
import { getCategories } from "@/store/server/categories/queries"

export default async function Home() {
  const categories = await getCategories(true)

  return (
    <main>
      <HeroSection />
      <BooksSection categories={categories} />
      <InstagramSection />
    </main>
  )
}
