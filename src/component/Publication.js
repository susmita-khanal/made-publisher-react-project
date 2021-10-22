import React from "react";
import Sdata from "./Sdata";
import PublicationMap from "./PublicationMap";

const Publication = () => {
  return (
    <div>
      <div className="publication-map">
        {
          Sdata.map((val) => {
            return (
              <PublicationMap
                imgsrc={val.imgscr}
                title={val.title}
                body={val.body}
              />
            );
          })

          /* <PublicationMap />
        <PublicationMap />
        <PublicationMap />
        <PublicationMap />
        <PublicationMap /> */
        }
      </div>
    </div>
  );
};

export default Publication;

// import React from 'react';
// import "./Publication.css"

// const Publication = () => {

//   return (
//     <>
//       <div className="publication">
//         <div className="pub-box">
// <img className="publication-image" src="https://www.madepublishers.com/assets/Uploads/_resampled/CroppedImageWzg4MCw1OTBd-NOURISED-ED01-01-COVER.jpg"
// alt=""/>
// <div className="publication-info">
//   <div className="publication-heading">
//   Nourished Journal One
//   </div>
//   <div className="publication-heading">
//   Nourished Journal is a bi-annual lifestyle publication. Some of the features in Edition One include
//   actor Shiva Rose, edible flowers recipes, Lauri Kranz from Edible Gardens LA, how to make fermented
//    foods, a yoga breakdown, Strala Yoga founder Tara Stiles, director Kinga Burza, travel from Byron Bay
//    ur guide to Los Angeles, and five minutes with designer Jenni Kayne.
//   </div>
// </div>
//         </div>
//       </div>
//     </>
//   )
// }

// export default Publication
