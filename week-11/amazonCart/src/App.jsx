import { useState } from 'react'
import { AmazonsCart,Navbar } from "./components";
import { BrowserRouter, Link, Outlet,Routes,Route } from "react-router-dom";
import './App.css'

function App() {
 

  return (
    <BrowserRouter future={{ v7_startTransition: true,v7_relativeSplatPath: true  }}>
    <Routes>
      <Route path="/" element={<Layout/>}>
      <Route index element={<AmazonsCart/>}/>
      <Route path="*"element={<NotFound/>}></Route>
     </Route>
     
     </Routes>
     </BrowserRouter>
    
        
  )
}
function Layout() {
  return<div className='bg-[#f2f2f2] h-screen '>
<Navbar/>
<Outlet/>
  </div>
}

function NotFound() {
  return<div>Not Found</div>
}

export default App
