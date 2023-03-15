import LoadingIcon from "@/icons/LoadingIcon"

const LoadingOverlay = () => {
  return (
    <div className="absolute inset-0 z-50 flex h-screen w-full flex-col items-center justify-center bg-skin-muted">
      <LoadingIcon className="h-8 w-8" />
      <span className="text-lg">Loading ...</span>
    </div>
  )
}
export default LoadingOverlay
