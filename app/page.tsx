import NavBar from "./components/NavBar"
import TopBar from "./components/TopBar"
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
    </div>
  )
}
