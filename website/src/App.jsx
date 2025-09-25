// import "./App.css"
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import { AppLayout } from "./components/AppLayout";
// import { Navbar } from "./pages/Navbar";
// import { Footer } from "./components/Footer";

// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { ReactQueryDevtools } from '@tanstack/react-query-devtools';



// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: (
//         <>
//         <ScrollToTop />
//         <AppLayout />
//       </>
//     ),


//     children: [


//       {
//         path: "/navbar",
//         element: <Navbar />,
//       },


//       {
//         path: "/footer",
//         element: <Footer />,
//       }

//     ]
//   }
// ])

// export const App = () => {
//   const queryClient = new QueryClient();

//   return (
//     <QueryClientProvider client={queryClient}>
//       <RouterProvider router={router}></RouterProvider>
//       <ReactQueryDevtools initialIsOpen={false} />
//     </QueryClientProvider>
//   )
// }

// export default App;

// 
import './index.css'
import './App.css';



import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AppLayout } from './component/AppLayout';
import { FrontPg } from './frontpage/Frontpg';
import { EduvestPg } from './eduvest/EduvestPg';

// import AppLayout from './components/layout/AppLayout';






const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {path: "/", element: <FrontPg />},
        {path: "/home", element: <EduvestPg />},
       
      ]
    },
  ])
  return <RouterProvider router={router} />;
}
export default App;


