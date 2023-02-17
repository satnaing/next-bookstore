import TopBar from "@/common-layouts/TopBar"
import NavBar from "@/common-layouts/NavBar"
import Footer from "@/common-layouts/Footer"
import BookDetails from "./BookDetails"
import ScrollUp from "@/common-components/ScrollUp"

let mockBooks: number[] = []
for (let index = 1; index < 21; index++) {
  mockBooks.push(index)
}

type Props = {
  params: { slug: string }
}

export default function Page({ params }: Props) {
  return (
    <div className="flex min-h-screen flex-col">
      <TopBar />
      <NavBar />
      <main className="padding-x max-width w-full py-6 font-sans">
        <BookDetails slug={params.slug} />
      </main>
      <Footer />
      <ScrollUp />
    </div>
  )
}
