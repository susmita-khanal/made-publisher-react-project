import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./SinglePage.css";
import SStore from "./SStore";
const SinglePage = () => {
  const [detailData, setDetailData] = useState({});
  const [quantity, setQuantity] = useState(0);
  const { id } = useParams();
  const BlogDetail = async () => {
    const res = await axios.get(
      `http://jsonplaceholder.typicode.com/posts/${id}`
    );
    console.log(res.data);
    setDetailData(res.data);
  };
  useEffect(() => {
    BlogDetail();
  }, []);

  const handleQuantity = () => {
    setQuantity(quantity + 1);
  };
  return (
    <div>
      <div className="journal-container">
        <div className="journal-box">
          <div className="journal-single-image">
            <img
              className="journal-image"
              src="https://www.madepublishers.com/assets/Uploads/_resampled/CroppedImageWzg4MCw1OTBd-MADE-ED02-00.jpg"
              alt=""
            />
            <div className="single-info">
              <div className="single-data1">{detailData.id}</div>
              {/* <li className="single-data">{detailData.title}</li>
        <li className="single-data">{detailData.body}</li> */}
              <div className="single-data1">Process Journal Eleven</div>
              <div className="single-data">
                Process Journal is a quarterly released graphic design
                pubdivcation. The aim of the journal is not only to serve as a
                source of inspiration for designers and graphic designers
                adivke, but also to take a look at the ‘process’ behind some of
                the world’s most influential creative work. Printed on high
                quadivty uncoated stocks utidivsing a five-colour printing
                process, the journal comprises 88 pages of advertising-free
                content.   Edition Ten Features: Studio Round, Accept & Proceed,
                Bleed, TOKO, Zak Group and Double standards.
              </div>
              <div className="single-data">Product Notes</div>
              <div className="single-data2">
                Free shipping worldwide from Berdivn, Germany.
              </div>
              <div className="single-data2 money">$20.00USD</div>
            </div>
            <div className="button">
              <div className="quantity">Quantity</div>
              <button onClick={handleQuantity} className="journal-button">
                {quantity}
              </button>
              <button className="addtocart">Add To Cart</button>
            </div>
          </div>
        </div>
      </div>
      <div className="products">
        <div className="product-box">
          <div>
            <div className="relatedproducts">
              Related Products
              <i className="bi bi-arrow-right"></i>
            </div>
          </div>
        </div>
        <div className="relatedimage">
          {SStore.map((c) => {
            return (
              <>
                <div className="imagesec">
                  <div className="simages">
                    <img className="imgsource" src={c.imgscr} alt=""></img>
                  </div>
                  <div className="storetitle">{c.title}</div>
                  <div className="subtitle">{c.stitle}</div>
                  <div className="sprice">{c.price}</div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SinglePage;
