import React, { useEffect } from 'react';
import Browse from './Browse'; // Correct casing
import Login from './Login';
import { createBrowserRouter, RouterProvider} from 'react-router-dom';


const Body = () => {
  

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },

  ])




  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
