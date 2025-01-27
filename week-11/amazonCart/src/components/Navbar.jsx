import { BrowserRouter, Link } from "react-router-dom";

function Navbar() {
    return<div className="bg-[#232f3e] px-1 py-3">
        <Link to="/" className="text-white px-6 ">amazon.in</Link>
    </div>
}

export default Navbar