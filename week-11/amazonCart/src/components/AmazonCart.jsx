import { useState } from "react";
import { RecoilRoot, useRecoilState, useRecoilValue } from "recoil";
import { cartItem, orderitem } from "../store/cartItemsState";
import { datastore } from "./data";
 function AmazonsCart() {
    const [itemcount, setcount]=useState(3)
    const [cart,setcart]=useState(datastore)




    let post = cart.map((e,index)=><Items id={index} key={index} info={e} setcart={setcart} cart={cart}/>)
   
   
    return<RecoilRoot><div className="  flex ">
        
        <div className=" mt-7 w-300">
        <div className="rounded-t-lg text-2xl bg-white py-4 font-bold px-6">Shopping Cart</div>
        <div className="bg-white rounded-b-lg">
            {post}
        
         </div>
      
    </div>
        <OrderSum/>
    </div></RecoilRoot>
}


function Items({id, info,setcart,cart}) {
    
const [quantity,setquantity]=useRecoilState(cartItem(id))
function add() {
   
        setquantity(c=>JSON.parse(c)+1)
    
   
}
function sub() {
 if(quantity>1){
        setquantity(c=>c-1)
 }else if(quantity<2){
deleteitem()
 }
    
}
function deleteitem() {
    const index=cart.indexOf(info)
    let newarr=cart.splice(index,1)
    setcart([...cart]) 
    console.log(cart)
}

    return<div className="pb-4"><div className="flex px-5  ">
      <div className="mr-7"><img className="w-25 h-23  " src={info.image} alt="" srcSet="" /></div>
      <div className="w-full font-bold"><div>{info.title}</div>
      <div className="flex justify-between pt-2"><div className="text-green-600  font-medium">In stock</div><div></div>₹ {info.price}</div>
      <div className="flex relative top-3"><button className="bg-gray-400 w-6 items-center   text-white text-center flex justify-center" onClick={sub}>-</button><div className="font-normal ml-2">{quantity}</div><button className="bg-[#f2f2f2] w-6 items-center mx-2  text-white text-center flex justify-center"  onClick={add}>+</button> <div className="text-blue-600 font-[500] ml-2 cursor-pointer" onClick={deleteitem}>Delete</div></div>
      
      </div>
      
    </div><div className="pt-4"><hr className="w-19/20 ml-5   color text-gray-300 " /></div></div>
    
}
function OrderSum() {
    const numitem=useRecoilValue(orderitem(1))
    return<div className="rounded-md bg-white mt-7 w-79 h-54 ml-4  p-5 ">
    <div className=" h-full font-bold ">
        <div className="py-2 ">Order Summary</div>
        <div className="flex justify-between font-normal"><span>items ({numitem}) :</span><span>₹2473.00</span></div>
        <div className="pt-4"><hr className="w-20/20    color text-gray-300 " /></div>
        <div className="flex justify-between py-3"><span>Order Total:</span><span>₹2473.00</span></div>
        <div className="bg-yellow-400 font-medium my-1 flex justify-center py-2">Proceed to buy</div>

</div>

</div>
}


export default AmazonsCart;