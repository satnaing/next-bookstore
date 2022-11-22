import CaretDownIcon from "@/icons/CaretDownIcon"
import Link from "next/link"

const Pagination = () => {
  return (
    <nav aria-label="pagination">
      <ul className="pagination flex items-center gap-x-1 font-sans">
        <li className="pagination__item pagination__item--previous-page">
          <Link href="#">
            <CaretDownIcon className="rotate-90 scale-90" />
            Previous
          </Link>
        </li>
        <li className="pagination__item">
          <Link href="#" className="px-3">
            <span className="sr-only">page </span>1
          </Link>
        </li>
        <li className="pagination__item">
          <Link href="#" className="px-3">
            <span className="sr-only">page </span>2
          </Link>
        </li>
        <li className="pagination__item pagination__item--is-active">
          <Link href="#" className="px-3" aria-current="page">
            <span className="sr-only">page</span>3
          </Link>
        </li>
        <li className="pagination__item">
          <Link href="#" className="px-3">
            <span className="sr-only">page </span>4
          </Link>
        </li>
        <li className="pagination__item">
          <Link href="#" className="px-3">
            <span className="sr-only">page </span>5
          </Link>
        </li>
        <li className="pagination__item pagination__item--next-page">
          <Link href="#">
            Next <CaretDownIcon className="-rotate-90 scale-90" />
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Pagination
