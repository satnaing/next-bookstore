import NavBar from "./components/NavBar"
import TopBar from "./components/TopBar"
import BooksSection from "./layouts/BooksSection"
import Footer from "./layouts/Footer"
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
