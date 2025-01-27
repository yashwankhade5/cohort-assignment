import { useState } from "react";

 function AmazonsCart() {
    return<div className=" flex ">
        
        <div className=" mt-7 w-300">
        <div className=" bg-white py-4 px-6">Shopping Cart</div>
        <div className="bg-white "><Items/>
        
         </div>
      
    </div>
        <div className="bg-white mt-7 w-79 h-54 ml-4   ">
        to
    </div>
    </div>
}


function Items() {
const [quant,setquant]=useState(0)
function add() {
   
        setquant(c=>c+1)
    
   
}
function sub() {
    if (quant>0) {
        setquant(c=>c-1)
    }
    
}

    return<div className="flex px-5 py-2 pb-5">
      <div className="mr-6"><img className="w-40 h-30 " src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmCy16nhIbV3pI1qLYHMJKwbH2458oiC9EmA&s" alt="" srcset="" /></div>
      <div className="w-full"><div>The Art of Impossible: A Peak Performance Primer</div>
      <div className="flex justify-between"><div>In stock</div><div></div>₹369.00</div>
      <div className="flex relative top-12"><button className="bg-gray-400 w-6 items-center mx-2  text-white text-center flex justify-center" onClick={sub}>-</button><div>{quant}</div><button className="bg-[#f2f2f2] w-6 items-center mx-2  text-white text-center flex justify-center"  onClick={add}>+</button> <div className="text-blue-600 font-[500]">Delete</div></div>
      
      </div>
    </div>
}


export default AmazonsCart;