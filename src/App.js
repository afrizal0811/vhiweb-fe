import React from 'react'
import { RouterProvider } from 'react-router-dom'
import './App.scss'
import { routers } from './routers'
import { getRouters } from './utility/getBrowserRouter'
function App() {
  return (
    <div>
      <RouterProvider router={getRouters(routers)}></RouterProvider>
    </div>
  )
}

export default App
