import { useRouteError, Link } from "react-router-dom"

export default function ErrorPage() {
  const error = useRouteError()
  console.error(error)

  return (
    <div className="flex flex-col items-center justify-center gap-2 h-screen" id="error-page">
      <h1 className="text-4xl font-bold">Oops!</h1>
      <h2 className="text-3xl text-gray-500">{error.status}</h2>
      <p>Sorry, an unexpected error has occurred. Go back to <Link to="/" className="text-blue-500 underline">Home</Link>.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  )
}