import { getBook } from "@/store/server/books/queries"
import BookDetails from "./layouts/BookDetails"
import RelatedBooks from "./layouts/RelatedBooks"

let mockBooks: number[] = []
for (let index = 1; index < 21; index++) {
  mockBooks.push(index)
}

type Props = {
  params: { slug: string }
}

export default async function Page({ params }: Props) {
  const initialData = await getBook(params.slug)

  const data = initialData.data[0]
  const currentBookId = Number(data.id)
  const authorId = Number(data.attributes.author_id.data.id)
  const categoryIds = data.attributes.categories.data.map(({ id }) =>
    Number(id)
  )

  return (
    <>
      <BookDetails slug={params.slug} initialData={initialData} />
      <hr className="border border-skin-dark opacity-5" />
      <RelatedBooks
        author={authorId}
        categories={categoryIds}
        currentBookId={currentBookId}
      />
    </>
  )
}
