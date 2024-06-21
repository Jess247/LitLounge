import { useState } from 'react'
import Home from "./pages/Home"
import BookDetail from './pages/BookDetail'
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
import { AuthProvider } from './components/AuthContext'
import Protected from './components/Protected'

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
        element: <Protected element={<MyBooks/>}/>
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
    <AuthProvider>
      <MyBooksProvider>
        <RouterProvider router={router} />
      </MyBooksProvider>
    </AuthProvider>
    </>
  )
}

export default App
