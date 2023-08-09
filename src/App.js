import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { routers } from './routers';
import { getRouters } from './utility/getBrowserRouter';
import './App.scss';
function App() {
  return (
    <div>
      <RouterProvider router={getRouters(routers)}></RouterProvider>
    </div>
  );
}

export default App;
