import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import LandingPage from './routes/LandingPage'

function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element:<LandingPage/>
    },
    {
      path:'/service',
      element:<LandingPage/>
    },
    {
      path:'/products',
      element:<LandingPage/>
    },
    {
      path:'/about',
      element:<LandingPage/>
    },
    {
      path:'/contact',
      element:<LandingPage/>
    },
  ])

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
