import { useState } from 'react'
import { AmazonsCart,Navbar } from "./components";
import { BrowserRouter, Link, Outlet,Routes,Route } from "react-router-dom";
import './App.css'
import { Purchase } from "./components/AmazonCart";
import {} from "./store/cartItemsState"
import { RecoilRoot } from 'recoil';
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
  return<RecoilRoot><div className='bg-[#f2f2f2]  min-h-screen pb-10 '>
<Navbar/>
<Outlet/>
  </div></RecoilRoot>
}

function NotFound() {
  return<div>Not Found</div>
}

export default App
