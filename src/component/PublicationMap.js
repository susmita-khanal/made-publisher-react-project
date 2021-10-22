import React from "react";
import "./Publication.css";

const PublicationMap = (props) => {
  return (
    <>
      {/* <div className="publication-sec"> */}
      <div className="pub-box">
        <div className="pubinfo">
          <div className="pubimg">
            <img className="pimg" src={props.imgsrc} alt=" " />
          </div>
          <div className="pub">
            <div className="pubheading">{props.title}</div>
            <div className="pubbody">{props.body}</div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  );
};

export default PublicationMap;
