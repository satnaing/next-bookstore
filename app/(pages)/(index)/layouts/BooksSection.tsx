import Link from "next/link"
import BookRow from "@/common-components/BookRow"
import CaretDownIcon from "@/icons/CaretDownIcon"

type Props = {
  title: string
}

const BooksSection = ({ title }: Props) => {
  return (
    <section className="mx-auto max-w-6xl px-4 py-6 md:px-8">
      <div className="flex items-baseline justify-between">
        <h2 className="text-2xl font-bold capitalize md:text-3xl">{title}</h2>
        <SeeAll href="/" />
      </div>
      <div className="item-wrapper my-4 grid grid-cols-2 gap-x-4 gap-y-6 sm:grid-cols-3 md:grid-cols-4 md:gap-x-6 lg:grid-cols-5">
        <BookRow />
      </div>
      <div className="mt-8 flex items-center justify-center md:hidden">
        <SeeAll href="/" bottom />
      </div>
    </section>
  )
}

type SeeAllType = {
  href: string
  bottom?: boolean
}

const SeeAll = ({ href, bottom = false }: SeeAllType) => (
  <Link
    href={href}
    className={`${
      bottom ? "flex" : "hidden md:flex"
    } items-center font-sans font-medium`}
  >
    See All
    <CaretDownIcon className="-rotate-90 scale-75" />
  </Link>
)

export default BooksSection
