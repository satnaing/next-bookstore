import BookDetails from "./BookDetails"

let mockBooks: number[] = []
for (let index = 1; index < 21; index++) {
  mockBooks.push(index)
}

type Props = {
  params: { slug: string }
}

export default function Page({ params }: Props) {
  return (
    <main className="main-container font-sans">
      <BookDetails slug={params.slug} />
    </main>
  )
}
