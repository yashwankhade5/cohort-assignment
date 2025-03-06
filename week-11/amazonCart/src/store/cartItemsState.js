import { atom,atomFamily, selector, selectorFamily } from "recoil";
import { datastore } from "../components/data";

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

export const totalgoods=selector({
    key:"good",
    get:({get})=>{
        const numberofgood =get(totalorder)
        return numberofgood.totalitem
    }
})