// 
// import './index.css'
// import './App.css';

// import { EduvestPg } from "./eduvest/EduvestPg"

// export const App=()=>{
//   return(
//     <>
//     <EduvestPg/>
//     </>
//   )
// }

import './index.css'
import './App.css';



import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AppLayout } from './component/AppLayout';
import { EduvestPg } from './eduvest/EduvestPg';
import { Calculator } from './calculator/calculator';

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <EduvestPg />
        },
{
          path: "/calculator",
          element: <Calculator />
        },
      ]
    },
  ])
  return <RouterProvider router={router} />;
}
export default App;

