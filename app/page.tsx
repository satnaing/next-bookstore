import NavBar from "./components/NavBar"
import TopBar from "./components/TopBar"
import BooksSection from "./layouts/BooksSection"
import HeroSection from "./layouts/HeroSection"

export default function Home() {
  return (
    <div className="h-[1800px]">
      <TopBar />
      <NavBar />
      <main>
        <HeroSection />
        <BooksSection title="Popular Now" />
        <BooksSection title="New Books" />
      </main>
    </div>
  )
}
