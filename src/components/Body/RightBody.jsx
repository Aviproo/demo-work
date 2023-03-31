import { alldata } from "../Alldata";
const RightBody = () => {
  return (
    <>
      <div className="rightbody">
        <div className="allitem">
          {alldata.map((item) => {
            return (
              <div key={item.id}>
                <div className="item">
                  <img src={item.img} className="img" />
                  <div className="dscp">{item.img_description} </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default RightBody;
