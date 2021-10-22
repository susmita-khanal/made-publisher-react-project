import React from "react";
import { Link } from "react-router-dom";

const MainPage = ({ data }) => {
  return (
    <>
      <div className="mainpage">
        <Link className="datalink" to={`/singlePage/${data.id}`}>
          <div className="image-box">
            <img
              className="img"
              src="https://www.madepublishers.com/assets/bulkUpload/_resampled/CroppedImageWzkxMCw2MDBd-00-PROCESS-ED11-Covers.jpg"
              alt=""
            />
          </div>
          <div className="info">
            <div className="title">{data?.id}</div>
            <div className="mid">{data?.title}</div>
            <div className="price">$ 2.98 USD</div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default MainPage;
