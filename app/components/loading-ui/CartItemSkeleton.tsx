import CancelIcon from "@/icons/CancelIcon"

const CartItemSkeleton = () => {
  return (
    <tr className="grid animate-pulse grid-cols-[auto_2fr_auto] grid-rows-[2fr_1fr_1fr_1fr] gap-x-2 border-b py-2 font-sans md:table-row">
      <td className="row-span-4 w-32 md:w-16">
        <div className="relative h-44 w-full md:h-36 md:py-2 md:px-4">
          <div className="h-full bg-slate-200 object-contain md:py-2" />
        </div>
      </td>
      <td className="col-start-2 row-start-1 md:max-w-[10rem] md:pl-2">
        <span className="font-medium italic line-clamp-2 md:line-clamp-4">
          <div className="h-4 w-20 rounded bg-slate-200" />
        </span>
      </td>
      <td className="col-span-2 col-start-2 row-start-2 md:text-right">
        <div className="h-4 w-1/2 rounded bg-slate-200 md:ml-auto" />
      </td>
      <td className="col-span-2 col-start-2 row-start-3 md:text-center">
        <button
          type="button"
          title="Reduce Quantity"
          className={`rounded border bg-skin-muted px-3 py-1 text-2xl leading-none`}
        >
          -
        </button>
        <span className="mx-2 inline-block w-5 text-center">
          <div className="mx-auto h-4 w-4 rounded bg-slate-200" />
        </span>
        <button
          type="button"
          title="Reduce Quantity"
          className="rounded border bg-skin-muted px-3 py-1 text-2xl leading-none"
        >
          +
        </button>
      </td>
      <td className="col-span-2 col-start-2 row-start-4 md:max-w-[5rem] md:text-right">
        <div className="mt-2 h-4 w-28 rounded bg-slate-200 md:mt-0 md:ml-auto md:w-20" />
      </td>
      <td className="col-span-1 col-start-3 row-span-1 row-start-1 md:text-center">
        <button title="Remove" type="button">
          <CancelIcon />
        </button>
      </td>
    </tr>
  )
}

export default CartItemSkeleton
