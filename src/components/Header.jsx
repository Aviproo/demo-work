import { Route, Link, Routes, BrowserRouter } from "react-router-dom";

import Clothing from "./Header_components/Clothing";
import Entertainment from "./Header_components/Entertainment";
import Growing from "./Header_components/Growing";
import Kitchen from "./Header_components/kitchen";
import Music from "./Header_components/Music";
import Pets from "./Header_components/Pets";
import Travle from "./Header_components/Travle";
import clothing from "../assets/clothing.png";
import entertainment from "../assets/entertainment.png";
import growing from "../assets/growing.png";
import kitchen from "../assets/kitchen.png";
import music from "../assets/music.png";
import pets from "../assets/pets.png";
import sports from "../assets/sports.png";
import travel from "../assets/travel.png";
import Id_0 from "./OrderList/Id_0";
import Id_1 from "./OrderList/Id_1";
import Id_2 from "./OrderList/Id_2";
import Id_3 from "./OrderList/Id_3";
import Id_4 from "./OrderList/Id_4";
import Id_5 from "./OrderList/Id_5";
import Id_6 from "./OrderList/Id_6";
import Id_7 from "./OrderList/Id_7";
import Id_8 from "./OrderList/Id_8";
import Id_9 from "./OrderList/Id_9";
import Id_10 from "./OrderList/Id_10";
import Id_11 from "./OrderList/Id_11";
import OrderId_0 from "./OederFilling/OrderId_0";
import OrderId_1 from "./OederFilling/OrderId_1";
import OrderId_2 from "./OederFilling/OrderId_2";
import OrderId_3 from "./OederFilling/OrderId_3";
import OrderId_4 from "./OederFilling/OrderId_4";
import OrderId_5 from "./OederFilling/OrderId_5";
import OrderId_6 from "./OederFilling/OrderId_6";
import OrderId_7 from "./OederFilling/OrderId_7";
import OrderId_8 from "./OederFilling/OrderId_8";
import OrderId_9 from "./OederFilling/OrderId_9";
import OrderId_10 from "./OederFilling/OrderId_10";
import OrderId_11 from "./OederFilling/OrderId_11";
const Header = () => {
  return (
    <>
      <BrowserRouter>
        <div className="header">
          <Link to="/Clothing" className="headerlist">
            <div>
              <img src={clothing} alt="" className="header_img" />
            </div>
            Clothing
          </Link>
          <Link to="/Entertainment" className="headerlist">
            <div>
              <img src={entertainment} alt="" className="header_img" />
            </div>
            Entertainment
          </Link>
          <Link to="/Music" className="headerlist">
            <div className="clothing_img">
              <img src={music} alt="" className="header_img " />
            </div>
            Music
          </Link>
          <Link to="/Pets" className="headerlist">
            <div>
              <img src={pets} alt="" className="header_img" />
            </div>
            Pets
          </Link>
          <Link to="/kitchen" className="headerlist">
            <div>
              <img src={kitchen} alt="" className="header_img" />
            </div>
            kitchen
          </Link>
          <Link to="/Travle" className="headerlist">
            <div>
              <img src={travel} alt="" className="header_img" />
            </div>
            Travle
          </Link>
          <Link to="/Growing" className="headerlist">
            <div>
              <img src={growing} alt="" className="header_img" />
            </div>
            Growing and Garden
          </Link>
          <Link to="/"></Link>
        </div>
        <Routes>
          <Route path="/Clothing" element={<Clothing />} />
          <Route path="/" element={<Clothing />} />
          <Route path="/Entertainment" element={<Entertainment />} />
          <Route path="/Music" element={<Music />} />
          <Route path="/Pets" element={<Pets />} />
          <Route path="/kitchen" element={<Kitchen />} />
          <Route path="/Travle" element={<Travle />} />
          <Route path="/Growing" element={<Growing />} />
          <Route path="/OrderList/Id_0" element={<Id_0 />} />
          <Route path="/OrderList/Id_1" element={<Id_1 />} />
          <Route path="/OrderList/Id_2" element={<Id_2 />} />
          <Route path="/OrderList/Id_3" element={<Id_3 />} />
          <Route path="/OrderList/Id_4" element={<Id_4 />} />
          <Route path="/OrderList/Id_5" element={<Id_5 />} />
          <Route path="/OrderList/Id_6" element={<Id_6 />} />
          <Route path="/OrderList/Id_7" element={<Id_7 />} />
          <Route path="/OrderList/Id_8" element={<Id_8 />} />
          <Route path="/OrderList/Id_9" element={<Id_9 />} />
          <Route path="/OrderList/Id_10" element={<Id_10 />} />
          <Route path="/OrderList/Id_11" element={<Id_11 />} />
          <Route path="/OrderFilling/OrderId_0" element={<OrderId_0 />} />
          <Route path="/OrderFilling/OrderId_1" element={<OrderId_1 />} />
          <Route path="/OrderFilling/OrderId_2" element={<OrderId_2 />} />
          <Route path="/OrderFilling/OrderId_3" element={<OrderId_3 />} />
          <Route path="/OrderFilling/OrderId_4" element={<OrderId_4 />} />
          <Route path="/OrderFilling/OrderId_5" element={<OrderId_5 />} />
          <Route path="/OrderFilling/OrderId_6" element={<OrderId_6 />} />
          <Route path="/OrderFilling/OrderId_7" element={<OrderId_7 />} />
          <Route path="/OrderFilling/OrderId_8" element={<OrderId_8 />} />
          <Route path="/OrderFilling/OrderId_9" element={<OrderId_9 />} />
          <Route path="/OrderFilling/OrderId_10" element={<OrderId_10 />} />
          <Route path="/OrderFilling/OrderId_11" element={<OrderId_11 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default Header;
