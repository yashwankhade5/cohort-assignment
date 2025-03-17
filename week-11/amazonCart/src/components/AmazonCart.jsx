import { useEffect, useRef, useState } from "react";
import { RecoilRoot, useRecoilState, useRecoilValue } from "recoil";
import { quantity, totalorder } from "../store/cartItemsState";
import { datastore } from "./data";
function AmazonsCart() {
    const [cart, setcart] = useState(datastore)
    const [ purchaseshow,setpurchaseshow]=useState(false)
    function purchaseBoxShow() {
        setpurchaseshow(c=>!c)
    }
    let post = cart.map((e, index) => <Items id={index} key={index} info={e} setcart={setcart} cart={cart} />)
    return <div className="  flex ">{purchaseshow && <Purchase show={purchaseBoxShow}/>}
        <div className=" mt-7 w-300">
            <div className="rounded-t-lg text-2xl bg-white py-4 font-bold px-6">Shopping Cart</div>
            <div className="bg-white rounded-b-lg">
                {post}
            </div>
        </div>
        <OrderSum show={purchaseBoxShow} />
    </div>
}


function Items({ info, setcart, cart }) {

    const [quant, setquant] = useRecoilState(quantity(info.id))
    const [total, settotalorder] = useRecoilState(totalorder)

    useEffect(() => {
        settotalorder(prev => ({ totalitem: prev.totalitem + 1, totalprice: prev.totalprice + info.price }))

    }, [])
    function add() {
        setquant(prev => ({ ...prev, quantity: prev.quantity + 1 }))
        settotalorder(prev => ({ totalitem: prev.totalitem + 1, totalprice: prev.totalprice + info.price }))
    }
    function sub() {
        if (quant.quantity > 1) {
            settotalorder(prev => ({ totalitem: prev.totalitem - 1, totalprice: prev.totalprice - info.price }))
            setquant(prev => ({ ...prev, quantity: prev.quantity - 1 }))
        } else if (quant.quantity < 2) {
            deleteitem()

        }
    }
    function deleteitem() {
        const index = cart.indexOf(info)
        cart.splice(index, 1)
        setcart([...cart])
        settotalorder(prev => ({ totalitem: prev.totalitem - (quant.quantity), totalprice: prev.totalprice - (quant.quantity * info.price) }))
    }

    return <div className="pb-4"><div className="flex px-5  ">
        <div className="mr-7"><img className="w-25 h-23  " src={info.image} alt="" srcSet="" /></div>
        <div className="w-full font-bold"><div>{info.title}</div>
            <div className="flex justify-between pt-2"><div className="text-green-600  font-medium">In stock</div><div></div>$ {info.price}</div>
            <div className="flex relative top-3"><button className="bg-[#f2f2f2] w-6 items-center    text-center flex justify-center" onClick={sub}>-</button><div className="font-normal ml-2">{quant.quantity}</div><button className="bg-[#f2f2f2] w-6 items-center mx-2   text-center flex justify-center" onClick={add}>+</button> <div className="text-blue-600 font-[500] ml-2 cursor-pointer" onClick={deleteitem}>Delete</div></div>

        </div>

    </div><div className="pt-4"><hr className="w-19/20 ml-5   color text-gray-300 " /></div></div>

}
function OrderSum({show}) {
    const numitem = useRecoilValue(totalorder)
    return <div className="rounded-md bg-white mt-7 w-79 h-54 ml-4  p-5 ">
        <div className=" h-full font-bold ">
            <div className="py-2 ">Order Summary</div>
            <div className="flex justify-between font-normal"><span>items ({numitem.totalitem}) :</span><span>₹ {Math.round(numitem.totalprice)}</span></div>
            <div className="pt-4"><hr className="w-20/20    color text-gray-300 " /></div>
            <div className="flex justify-between py-3"><span>Order Total:</span><span>₹ {Math.round(numitem.totalprice)}</span></div>
            <div className="bg-yellow-400 font-medium my-1 flex justify-center py-2" onClick={()=>{
                show()
            }}>Proceed to buy</div>

        </div>

    </div>
}
export function Purchase({show}) {
  
    const total = useRecoilValue(totalorder)
    return <div  ><div className="border-2 bg-black opacity-30 justify-center  z-10 absolute h-screen w-full  ">

    </div><div className=" bg-white rounded-md h-88 w-100 absolute top-40 right-2/6 z-10 ">
            <div className="p-8"> <div className="font-bold text-2xl">Purchase Sucessful</div><div className="px-28 py-5">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="green" className="size-18">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>

            </div>
                <div className="text-center">Thank you for your purchase. Your order has been sucessfully processed</div>
                <div className="font-bold text-base pt-5 pb-2">Total Amount: ₹ {Math.ceil(total.totalprice)} </div>
                <div className="bg-blue-600 text-white text-center mt-3 py-2" onClick={() => {
show()
                }}>Close</div>
            </div>
        </div></div>

}


export default AmazonsCart;