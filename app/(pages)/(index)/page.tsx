import BooksSection from "./layouts/BooksSection"
import HeroSection from "./layouts/HeroSection"
import InstagramSection from "./layouts/InstagramSection"
import { getFeaturedCategories } from "@/lib/api"

export default async function Home() {
  const initialData = await getFeaturedCategories()

  return (
    <main>
      <HeroSection />
      <BooksSection categories={initialData} />
      <InstagramSection />
    </main>
  )
}
