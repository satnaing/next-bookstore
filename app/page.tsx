import NavBar from "./components/NavBar"
import TopBar from "./components/TopBar"
import HeroSection from "./layouts/HeroSection"

export default function Home() {
  return (
    <div className="h-[1400px]">
      <TopBar />
      <NavBar />
      <main>
        <HeroSection />
      </main>
    </div>
  )
}
