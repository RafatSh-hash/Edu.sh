
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import Main from './Main/Main'
import Home from './Components/Home/Home'



const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      }

    ]
  }
])



function App() {


  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
