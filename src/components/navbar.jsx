import React from "react";
import {Link} from "react-router-dom";
import {ShoppingCart} from "phosphor-react";
import "./navbar.css";


const Navbar = () =>{
return(
    <div className="navbar">
     <div className="links">
        <Link to="/" > Shop </Link>
        <Link to="/cart"> <ShoppingCart size={40} /> </Link>

     </div>
    </div>
);
};

//to say where to go if clicking 
//phosphor-react if for css and images

export default Navbar;