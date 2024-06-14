import { useState } from 'react'
import Home from "./pages/Home"
import BookDetail from './components/BookDetail'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import ErrorPage from './pages/ErrorPage'
import Layout from './components/Layout'

const router = createBrowserRouter([
  {
    path:'/',
    element: <Layout/>,
    children:[
      {
      path:"/",
      element: <Home/>,
      errorElement:<ErrorPage/>
      },
      {
        path:"books",
        element: <h1>Books</h1>
      },
      {
        path:"books/:id",
        element: <BookDetail/>
      },
      {
        path:"login",
        element: <h1>Login</h1>
      }
    ]
  }
]
)


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <RouterProvider router={router} />
    </>
  )
}

export default App
