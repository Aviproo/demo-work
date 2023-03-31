import { Link } from "react-router-dom";
import { alldata } from "../Alldata";
import Department from "../Body/Department";

const Clothing = () => {
  return (
    <>
      <div className="clothing">
        <Department />
        <div className="rightbody">
          <div className="allitem">
            {alldata.map((item) => {
              return (
                <Link to={`../OrderList/Id_${item.id}`} className="link">
                  <div key={item.id}>
                    <div className="item">
                      <img src={item.img} className="img" />
                      <div className="dscp">
                        {item.img_description}
                        <div className="item_cost">{item.cost} </div>
                        <div className="item_address">{item.address} </div>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
export default Clothing;
