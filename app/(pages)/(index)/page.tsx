import TopBar from "@/common-layouts/TopBar"
import NavBar from "@/common-layouts/NavBar"
import Footer from "@/common-layouts/Footer"
import BooksSection from "./layouts/BooksSection"
import HeroSection from "./layouts/HeroSection"
import InstagramSection from "./layouts/InstagramSection"

export default function Home() {
  return (
    <div>
      <TopBar />
      <NavBar />
      <main>
        <HeroSection />
        <BooksSection title="Popular Now" />
        <BooksSection title="New Books" />
        <InstagramSection />
      </main>
      <Footer />
    </div>
  )
}
