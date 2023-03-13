"use client"

import CaretDownIcon from "@/icons/CaretDownIcon"
import Link from "next/link"
import { usePathname } from "next/navigation"

type Props = {
  pageCount: number
  currentPage: number
}

type Pages = {
  page: number
  slug: string
}[]

const Pagination = ({ pageCount, currentPage = 1 }: Props) => {
  const pathname = usePathname()
  let pages: Pages = []
  for (let i = 1; i <= pageCount; i++) {
    pages.push({ page: i, slug: `${pathname}?page=${i}` })
  }
  return (
    <nav aria-label="pagination">
      <ul className="pagination flex items-center gap-x-3 font-sans">
        <li className="pagination__item pagination__item--previous-page">
          {currentPage < 2 ? (
            <span className="flex cursor-not-allowed opacity-50">
              <CaretDownIcon className="rotate-90 scale-90" />
              Previous
            </span>
          ) : (
            <Link href={`${pathname}?page=${currentPage - 1}`} className="flex">
              <CaretDownIcon className="rotate-90 scale-90" />
              Previous
            </Link>
          )}
        </li>
        {pages.map(({ page, slug }) => (
          <li key={slug} className="">
            <Link
              href={`${slug}`}
              className={`${
                currentPage === page
                  ? "rounded-sm border border-skin-dark bg-skin-muted"
                  : "border border-skin-base"
              } px-3 py-1`}
            >
              <span className="sr-only">page </span>
              {page}
            </Link>
          </li>
        ))}

        <li className="pagination__item pagination__item--next-page">
          {currentPage < pageCount ? (
            <Link href={`${pathname}?page=${currentPage + 1}`} className="flex">
              Next <CaretDownIcon className="-rotate-90 scale-90" />
            </Link>
          ) : (
            <span className="flex cursor-not-allowed opacity-50">
              Next <CaretDownIcon className="-rotate-90 scale-90" />
            </span>
          )}
        </li>
      </ul>
    </nav>
  )
}

export default Pagination
