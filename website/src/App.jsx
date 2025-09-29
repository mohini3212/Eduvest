// 
import './index.css'
import './App.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AppLayout } from './component/AppLayout';
import { EduvestPg } from './eduvest/EduvestPg';


const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
               {path: "/", element: <EduvestPg />},
       
      ]
    },
  ])
  return <RouterProvider router={router} />;
}
export default App;


