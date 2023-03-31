import React from "react";
import { alldata } from "../Alldata";
import { useState } from "react";
import { Link } from "react-router-dom";
const Id_8 = () => {
  const [data, setdata] = useState(1);
  function add() {
    setdata(data + 1);
  }
  return (
    <div>
      {
        <div className="product">
          <div className="place_order">Place Your Order Securly</div>
          <div className="product_picture">Product Picture</div>
          <img src={alldata[8].img} alt="" className="product_img" />
          <div className="product_name">Product Name*</div>
          <div className="nikeair">Nike Air </div>
          <div className="product_quality">
            <div className="product_name">Varient*</div>
            <div>Quality</div>
          </div>
          <div className="product_quality">
            <div className="red">Red</div>
            <div className="one">{data}</div>
          </div>
          <div className="product_price">
            <div className="price">Product Price*</div>
            <div className="price_price">1800</div>
          </div>
          <div className="productbutton">
            <button onClick={add}>Add More</button>
            <Link to="../OrderFilling/OrderId_8">
              <button>Continue</button>
            </Link>
          </div>
        </div>
      }
    </div>
  );
};

export default Id_8;
