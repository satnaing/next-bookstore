import TopBar from "@/common-layouts/TopBar"
import NavBar from "@/common-layouts/NavBar"
import Footer from "@/common-layouts/Footer"
import BooksSection from "./layouts/BooksSection"
import HeroSection from "./layouts/HeroSection"
import InstagramSection from "./layouts/InstagramSection"
import { getFeaturedCategories } from "app/api"

export default async function Home() {
  const initialData = await getFeaturedCategories()

  return (
    <div>
      <TopBar />
      <NavBar />
      <main>
        <HeroSection />
        <BooksSection categories={initialData} />
        <InstagramSection />
      </main>
      <Footer />
    </div>
  )
}
