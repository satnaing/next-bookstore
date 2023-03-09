import CancelIcon from "@/icons/CancelIcon"
import { generateUniqueArray } from "@/utils/utilFuncs"

const CartDropdownSkeleton = ({ num }: { num: number }) => {
  // Generate Unique set of numbers array
  const numOfCards = generateUniqueArray(num)

  return (
    <>
      {numOfCards.map(id => (
        <li
          key={id}
          className="grid animate-pulse grid-cols-[auto_2fr_auto] grid-rows-[2fr_1fr_1fr] gap-x-2 border-b py-2 font-sans text-sm"
        >
          <div className="row-span-4 w-24">
            <div className="relative h-32 w-full">
              <div className="h-full bg-slate-200 object-contain py-1" />
            </div>
          </div>
          <div className="col-start-2 row-start-1 w-36">
            <span className="font-medium italic line-clamp-2">
              <div className="h-4 rounded bg-slate-200"></div>
            </span>
          </div>
          <div className="col-span-2 col-start-2 row-start-2 flex items-center">
            <div className="h-3 w-1/2 rounded bg-slate-200"></div>
          </div>
          <div className="col-span-2 col-start-2 row-start-3">
            <button
              type="button"
              title="Reduce Quantity"
              className={`rounded border bg-slate-200 py-1 px-3 leading-none`}
            >
              -
            </button>
            <span className="mx-2 inline-block w-4 text-center">
              <div className="h-2 rounded bg-slate-200"></div>
            </span>
            <button
              type="button"
              title="Reduce Quantity"
              className="rounded border bg-slate-200 py-1 px-3 leading-none"
            >
              +
            </button>
          </div>
          <div className="col-span-1 col-start-3 row-span-1 row-start-1">
            <button title="Remove" type="button">
              <CancelIcon />
            </button>
          </div>
        </li>
      ))}
    </>
  )
}

export default CartDropdownSkeleton
