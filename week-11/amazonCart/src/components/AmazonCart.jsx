import { useState } from "react";

 function AmazonsCart() {
    return<div className="  flex ">
        
        <div className=" mt-7 w-300">
        <div className="rounded-t-lg text-2xl bg-white py-4 font-bold px-6">Shopping Cart</div>
        <div className="bg-white rounded-b-lg"><Items/>
        <Items/>
        <Items/>
         </div>
      
    </div>
        <div className="rounded-md bg-white mt-7 w-79 h-54 ml-4  p-5 ">
            <div className=" h-full font-bold ">
                <div className="py-2 ">Order Summary</div>
                <div className="flex justify-between font-normal"><span>items ({2}) :</span><span>₹2473.00</span></div>
                <div className="pt-4"><hr className="w-20/20    color text-gray-300 " /></div>
                <div className="flex justify-between py-3"><span>Order Total:</span><span>₹2473.00</span></div>
                <div className="bg-yellow-400 font-medium my-1 flex justify-center py-2">Proceed to buy</div>

        </div>
        
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

    return<div className="pb-4"><div className="flex px-5  ">
      <div className="mr-7"><img className="w-25 h-23  " src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" alt="" srcset="" /></div>
      <div className="w-full font-bold"><div>The Art of Impossible: A Peak Performance Primer</div>
      <div className="flex justify-between pt-2"><div className="text-green-600  font-medium">In stock</div><div></div>₹369.00</div>
      <div className="flex relative top-3"><button className="bg-gray-400 w-6 items-center   text-white text-center flex justify-center" onClick={sub}>-</button><div className="font-normal ml-2">{quant}</div><button className="bg-[#f2f2f2] w-6 items-center mx-2  text-white text-center flex justify-center"  onClick={add}>+</button> <div className="text-blue-600 font-[500] ml-2">Delete</div></div>
      
      </div>
      
    </div><div className="pt-4"><hr className="w-19/20 ml-5   color text-gray-300 " /></div></div>
}


export default AmazonsCart;