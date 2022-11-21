import TopBar from "@/common-layouts/TopBar"
import NavBar from "@/common-layouts/NavBar"
import Footer from "@/common-layouts/Footer"

type Props = {
  params: { category: string }
  searchParams: { id: string }
}

export default function Page({ params, searchParams }: Props) {
  return (
    <div>
      <TopBar />
      <NavBar />
      <main className="bg-yellow-400">
        <h1>Category</h1>
        <p>{params.category}</p>
        <p>{searchParams.id}</p>
      </main>
      <Footer />
    </div>
  )
}
