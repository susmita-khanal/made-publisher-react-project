import React, { useState, useEffect } from "react";
import axios from "axios";
// import {useParams} from "react-router-dom";
// import Store from './Store';
import MainPage from "./MainPage";
import "./Store.css";

import { Link } from "react-router-dom";

const Storepage = ({ data }) => {
  const [post, setPost] = useState([]);
  const BlogPost = async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
    setPost(res.data);
  };
  useEffect(() => {
    BlogPost();
  }, []);
  return (
    <div>
      <div className="container">
        <div className="catagory-box">
          <div className="catagory">Catagories: </div>
          <Link className="c-part">All</Link>
          <Link className="c-part">Periodicals</Link>
          <Link className="c-part">Digital Publications</Link>
        </div>
        <div className="mapping-part">
          {post &&
            post.map((cval, i) => {
              return <MainPage key={i} data={cval} />;
            })}
        </div>
      </div>
    </div>
  );
};

export default Storepage;
