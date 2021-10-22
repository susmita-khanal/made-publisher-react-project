import React, { useState } from "react";
import "./Menu.css";
import { Link } from "react-router-dom";
import Follow from "./Follow";
import Login from "./Login";
import { Modal, Button } from "react-bootstrap";

const Menu = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [follow, setFollow] = useState(false);
  const [menu, setMenu] = useState(true);

  const handleBar = (e) => {
    e.preventDefault();
    setMenu(!menu);
  };
  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);
  return (
    <>
      <Login isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      <Follow follow={follow} setFollow={setFollow} />
      <div className="menu-section">
        <div className="left-nav">
          <div className="made">Made</div>
          <div className="publish">Publisher</div>
        </div>
        <div className="navbar">
          <div className="nav-menu">
            <div className="left-nav-menu">
              <ul className={menu ? "nav-menu active" : "nav-menu"}>
                <li>
                  <Link className="nav-link" to="/">
                    Store
                  </Link>
                </li>
                <li>
                  <Link className="nav-link" to="/journal">
                    Journal
                  </Link>
                </li>
                <li>
                  <Link className="nav-link" to="/publication">
                    Publication
                  </Link>
                </li>
                <li>
                  <Link className="nav-link" to="/about">
                    About-Us
                  </Link>
                </li>
                <li>
                  <div onClick={() => setFollow(true)}>
                    <div className="nav-link">Follow-Us</div>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="right-nav-menu">
            <div className="carts">
              <Link className="nav-link" to="/cart">
                shopping-Cart(0)
              </Link>
            </div>

            <div className="carts" onClick={() => setIsModalOpen(true)}>
              <Link className="nav-link" to="/login">
                <div className="login-cart">login</div>
              </Link>
            </div>
          </div>
          <Link onClick={handleBar} className="responsive-menu">
            <i className={menu ? "bi bi-list" : "bi bi-x"}></i>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Menu;
