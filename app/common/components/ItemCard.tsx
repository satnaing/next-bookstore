import Image from "next/image"
import HeartIcon from "@/icons/HeartIcon"
import sampleBook from "@/public/we-were-liars-book.jpeg"

type Props = {
  className?: string
}

const ItemCard = ({ className = "" }: Props) => {
  return (
    <article
      className={`flex flex-col gap-y-2 rounded font-sans shadow hover:shadow-lg ${className}`}
    >
      <div className="image-wrapper rounded bg-skin-card p-4 sm:p-8">
        <Image src={sampleBook} alt="We Were Liars Book" />
      </div>
      <div className="content px-4 pb-4">
        <header className="h-10 line-clamp-2">
          <h3 className="text-sm">We were liars</h3>
        </header>
        <div className="price font-medium">
          <span>MMK: </span>
          <span>7500Ks</span>
        </div>
        <div className="buttons flex gap-x-2">
          <button
            type="button"
            className="flex-1 rounded bg-skin-accent px-1 text-sm font-semibold text-white hover:bg-[#F26E5D] active:bg-skin-accent"
          >
            Add To Cart
          </button>
          <button
            type="button"
            className="basis-1/4 rounded border border-slate-300 p-1 hover:bg-skin-fill active:bg-skin-base"
            title="Add To Wishlist"
          >
            <HeartIcon className="!stroke-skin-accent stroke-2" />
          </button>
        </div>
      </div>
    </article>
  )
}

export default ItemCard
