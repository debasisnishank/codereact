import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout'
import Home from './components/Home/Home'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import User from './components/User/User'
import Github, { githubinfoLoader } from './components/Github/Github'

//1st way of making routig
// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout />,
//     children: [
//       {
//         path: '',
//         element: <Home />
//       },
//       {
//         path: 'about',
//         element: <About />
//       }
//       ,
//       {
//         path: '/contact',
//         element: <Contact />
//       }

//     ]
//   }

// ])


//2nd way to create routing 
const router = createBrowserRouter(
  createRoutesFromElements(
    // Outlet here nesting done inside of Layout
    <Route path='/' element={<Layout />}>

      <Route path='' element={<Home />} />
      <Route path='contact' element={<Contact />} />
      <Route path='about' element={<About />} >
        {/* nesting inside the about  , /about/nsk */}
        <Route path='nsk' />

      </Route>
      <Route path='user/:userid' element={<User />} />
      <Route
        loader={githubinfoLoader}
        path='github'
        element={<Github />

        } />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
