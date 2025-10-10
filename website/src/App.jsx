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
import { Calculator } from './calculator/Calculator';
import { EducationLoan } from './calculator/EducationLoan';
import { EMI } from './calculator/EMI';
import { TargetSip } from './calculator/TargetSip';
import { Lumpsum } from './calculator/Lumpsum';
import { StepSIP } from './calculator/StepSIP';
import { SIP } from './calculator/SIP';


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
         {
          path: "/sip",
          element: <SIP/>
        },
         {
          path: "/stepsip",
          element: <StepSIP/>
        },
        {
          path: "/lumpum",
          element: <Lumpsum/>
        },
         {
          path: "/target",
          element: <TargetSip/>
        },
         {
          path: "/emi",
          element: <EMI/>
        },
        {
          path:"/educationloan",
          element: <EducationLoan/>
        },
       
      ]
    },
  ])
  return <RouterProvider router={router} />;
}
export default App;

