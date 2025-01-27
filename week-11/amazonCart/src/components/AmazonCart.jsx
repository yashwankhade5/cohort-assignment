import { useState } from "react";

 function AmazonsCart() {
    return<div className=" flex ">
        
        <div className=" mt-7 ">
        <div className="px-1 bg-white py-4">Shopping Cart</div>
        <div className="bg-white"><Items/>
        <Items/>
        
         </div>
      
    </div>
        <div className="bg-white mt-7  h-54 ml-4   ">
        to
    </div>
    </div>
}


function Items() {
    return<div className="flex">
      <div><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmCy16nhIbV3pI1qLYHMJKwbH2458oiC9EmA&s" alt="" srcset="" /></div>
      <div><div>The Art of Impossible: A Peak Performance Primer</div>
      <div className="flex justify-between"><div>In stock</div><div></div>₹369.00</div>
      
      </div>
    </div>
}


export default AmazonsCart;