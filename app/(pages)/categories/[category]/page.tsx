import TopBar from "@/common-layouts/TopBar"
import NavBar from "@/common-layouts/NavBar"
import Footer from "@/common-layouts/Footer"
import ScrollUp from "@/common-components/ScrollUp"
import { getBooksByCategory } from "app/api"
import BooksContainer from "./layouts/BooksContainer"

let mockBooks: number[] = []
for (let index = 1; index < 21; index++) {
  mockBooks.push(index)
}

type Props = {
  params: { category: string }
  searchParams: { id: string }
}

export default function Page({ params, searchParams }: Props) {
  return (
    <div className="flex min-h-screen flex-col">
      <TopBar />
      <NavBar />
      <main className="padding-x max-width py-6">
        <h1 className="text-2xl font-bold capitalize">{params.category}</h1>
        <div className="item-wrapper my-4 grid grid-cols-2 gap-x-4 gap-y-6 sm:grid-cols-3 md:grid-cols-4 md:gap-x-6 lg:grid-cols-5">
          {mockBooks.map(num => (
            <ItemCard key={num} />
          ))}
        </div>
        <div className="my-10 flex flex-col items-center gap-y-2 lg:flex-row lg:justify-between">
          <span className="font-sans">Showing 1 ~ 20 of 207</span>
          <Pagination />
        </div>
      </main>
      <Footer />
      <ScrollUp />
    </div>
  )
}
