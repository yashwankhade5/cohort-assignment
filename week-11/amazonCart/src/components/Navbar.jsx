import { BrowserRouter, Link } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { useState } from "react";
import { totalorder,totalgoods} from "../store/cartItemsState";

function Navbar() {
  const [v, s] = useState(true);
  const items = useRecoilValue(totalorder); // This will give the total order state
 
  return (
    <div className="bg-[#232f3e] py-3 flex justify-between px-10">
      <Link to="/" className="text-white px-6">
        amazon.in
      </Link>
      <span className="flex px-1 justify-between">
        <span className="mr-3 text-white">Hello, User</span>
        <span
          onClick={() => {
            s((v) => !v);
            console.log("hi");
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="white"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
            />
          </svg>
          <div className="bg-red-500 w-4 h-4 relative -top-8 left-3 text-white text-xs rounded-full text-center">
            {items.totalitem} {/* Displaying the total items here */}
          </div>
        </span>
      </span>
      
    </div>
  );
}

export default Navbar;
