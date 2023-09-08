import React from "react";
import PRODUCTS  from "../../products";
import Product from "./product";
import "./shop.css";

const Shop = () => {
    return(
        <div className="shop">
            <div className="shopTitle">
            Shopping page is coming soon...
        </div>
        <div className="products">
        
            {PRODUCTS.map((product)=>(
                <Product data={product} />

            ))}

        </div>
        </div>
    );

};

//if fullstack app then inside div of products we would fetch api for product data
//but since it is only react project so json object 

export default Shop;