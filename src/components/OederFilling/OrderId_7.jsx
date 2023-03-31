import { useState } from "react";
import { alldata } from "../Alldata";
const OrderId_7 = () => {
  const [data, setdata] = useState({
    name: "",
    Phone: "",
    Email: "",
    Address: "",
    Street: "",
    Pincode: "",
    City: "",
    State: "",
    Country: "",
  });

  function onchange(e) {
    setdata({
      ...data,
      [e.target.name]: e.target.value,
    });
  }
  function click(e) {
    console.log(data);
  }
  return (
    <>
      <div className="orderfilling">
        <div className="filled_detail">
          <div>
            <img src={alldata[7].img} alt="" />
          </div>

          <div className="filled_address">
            <div>Nike Air</div>
            <div>
              Product varient <span>-RED</span>
            </div>
            <div>
              Quality <span>-1</span>
            </div>
            <div>
              Buying Price <span>-1800</span>
            </div>
          </div>
        </div>
        <div className="deliverydetails">
          <div className="ctmname">Enter Delivery Address</div>
          <div>
            <div>Customer Name</div>
            <input
              className="input"
              type="name"
              name="name"
              value={data.name}
              onChange={onchange}
            />
          </div>
          <div className="phonemail">
            <div>
              Phone
              <div>
                <input
                  className="phoneinput"
                  type="phone"
                  name="Phone"
                  value={data.Phone}
                  onChange={onchange}
                />
              </div>
            </div>
            <div>
              Email
              <div>
                <input
                  name="Email"
                  type="email"
                  value={data.Email}
                  className="phoneinput"
                  onChange={onchange}
                />
              </div>
            </div>
          </div>
          <div className="alldiv">
            <div>Address</div>
            <input
              className="input"
              onChange={onchange}
              value={data.Address}
              type="text"
              name="Address"
            />
          </div>
          <div className="alldiv">
            <div>Street</div>
            <input
              className="input"
              onChange={onchange}
              value={data.Street}
              name="Street"
              type="text"
            />
          </div>
          <div className="alldiv">
            <div>Pincode</div>
            <input
              className="input"
              onChange={onchange}
              value={data.Pincode}
              name="Pincode"
              type="number"
            />
          </div>
          <div className="alldiv">
            <div>City</div>
            <input
              className="input"
              name="City"
              onChange={onchange}
              value={data.City}
              type="City"
            />
          </div>
          <div className="alldiv">
            <div>State</div>
            <input
              name="State"
              className="input"
              onChange={onchange}
              value={data.State}
              type="text"
            />
          </div>
          <div className="alldiv">
            <div>Country</div>
            <input
              name="Country"
              className="input"
              onChange={onchange}
              value={data.Country}
              type="text"
            />
          </div>
          <button onClick={click} className="cnt">
            Continue
          </button>
        </div>
      </div>
    </>
  );
};
export default OrderId_7;
