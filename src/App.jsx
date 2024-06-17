import { useState } from 'react'
import Home from "./pages/Home"
import BookDetail from './components/BookDetail'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import ErrorPage from './pages/ErrorPage'
import Layout from './components/Layout'
import MyBooks from "./pages/MyBooks"
import Login from "./pages/Login"
import Registration from './pages/Registration'
import { MyBooksProvider } from './components/MyBooksProvider'

const router = createBrowserRouter([
  {
    path:'/',
    element: <Layout/>,
    errorElement:<ErrorPage/>,
    children:[
      {
      path:"/",
      element: <Home/>,
      },
      {
        path:"books",
        element: <MyBooks/>
      },
      {
        path:"books/:id",
        element: <BookDetail/>
      },
      {
        path:"login",
        element: <Login/>
      },
      {
        path:"registration",
        element: <Registration/>
      }
    ]
  }
]
)


function App() {

  return (
    <>
    <MyBooksProvider>
      <RouterProvider router={router} />
    </MyBooksProvider>
    </>
  )
}

export default App
