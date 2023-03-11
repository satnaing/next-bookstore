import { getBook } from "@/lib/api"
import BookDetails from "./layouts/BookDetails"

let mockBooks: number[] = []
for (let index = 1; index < 21; index++) {
  mockBooks.push(index)
}

type Props = {
  params: { slug: string }
}

export default async function Page({ params }: Props) {
  const initialData = await getBook(params.slug)

  return (
    <main className="main-container font-sans">
      <BookDetails slug={params.slug} initialData={initialData} />
    </main>
  )
}
