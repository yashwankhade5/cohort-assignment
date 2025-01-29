import { atom,atomFamily, selectorFamily } from "recoil";
import { datastore } from "../components/data";
export const cartItem=atomFamily({
    key:"quantity",
    default:1

})

export const orderitem=selectorFamily({
    key:"itemsum",
    get:id=>({get})=>{
const items =get(cartItem(id))
return items

    }
})
export const quantity =atomFamily({
    key:"quant",
    default:id=>{
        return{"id":id,
            "quantity":1
        }
    }
})

export const totalorder=atom({
key:"torder",
default:{
   "totalitem":0,
   "totalprice":0
}
})
