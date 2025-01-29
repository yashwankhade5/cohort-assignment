import { atomFamily, selectorFamily } from "recoil";

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