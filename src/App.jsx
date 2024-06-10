
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import './App.css'
import Parent from './Components/Parent'




const route = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path='/' element ={<Parent/>}/>
    </Route>
  )
)

function App() {

  return (
    <>

    <RouterProvider router={route}/>



   
    </>
  )
}

export default App
