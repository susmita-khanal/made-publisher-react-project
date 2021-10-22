import React, { useEffect, useState } from "react";
import "./Cart.css";
import { ToastContainer, toast } from "react-toastify";
import SimpleReactValidator from "simple-react-validator";
import "react-toastify/dist/ReactToastify.css";

const getLocalItems = () => {
  let kuchbhi = localStorage.getItem("list");

  if (kuchbhi) {
    return JSON.parse(localStorage.getItem("list"));
  } else {
    return [];
  }
};

const Cart = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [register, setRegister] = useState(getLocalItems());

  const validator = React.useRef(new SimpleReactValidator());
  const [, forceUpdate] = useState();
  const onSubmits = (e) => {
    e.preventDefault();
    const newRegister = {
      fullName: fullName,
      email: email,
      password: password,
    };
    setRegister([...register, newRegister]);
    setEmail("");
    setFullName("");
    setPassword("");
    // localStorage.setItem("formValid", JSON.stringify());

    const formValid = validator.current.allValid();
    if (formValid) {
      toast.success("login successfully", {
        position: "top-right",
        hideProgressBar: true,
      });
    } else {
      validator.current.showMessages();
      forceUpdate(1);
    }
  };
  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(register));
  }, [register]);

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        // pauseOnFocusLoss
        // draggable
        // pauseOnHover
      />
      <div className="cart">
        <div className="cart-box">
          <div className="shop-details">
            <div className="shopping-cart">
              <span className="s s-odd">Shopping Cart</span>
              <span className="s s-mid">Item-title</span>
              <span className="s s-odd">Process Journal Eleven</span>
            </div>

            <div className="quantity-box">
              <span className="quan">quantity</span>
              <span className="price">
                <button className="btn"></button>
              </span>
            </div>
            <div className="quantity-box">
              <span className="quan">unit-price</span>
              <span className="price">25.00</span>
            </div>
            <div className="quantity-box">
              <span className="quan">line-total</span>
              <span className="price">25.00</span>
            </div>
          </div>
          <div className="shipping-box">
            <div className="shipping">Shipping Total</div>
            <div className="shipping-no">$0.00</div>
            <div className="shipping">Order Total (inc Tax)</div>
            <div className="shipping-no">
              <strong>$25.00</strong>
            </div>
            <div className="shipping">Discount Code</div>
            <div className="shipping-disc"></div>
            <input
              className="dis-code"
              type="text"
              placeholder="Enter Discount Code"
            ></input>
          </div>
          <div className="button-field">
            <span className="spantag">
              <button className="continue">continue-shopping</button>
            </span>
            <span className="spantag">
              <button className="update">update</button>
            </span>
          </div>
        </div>
        <div className="Register-box">
          <div className="a cart-heading">Register</div>
          <form onSubmit={onSubmits}>
            <input
              className="email"
              type="text"
              onChange={(e) => setFullName(e.target.value)}
              value={fullName}
              name="fullName"
              placeholder="fullName"
            />
            <div>
              {validator.current.message(
                "fullName",
                fullName,
                "required|min:6"
              )}
            </div>

            <p className="a paragraph">
              Please ensure your email address is correct
            </p>

            <input
              className="email"
              type="text"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              name="email"
              placeholder="Email Address"
            />
            {validator.current.message("email", email, "required|min:6")}
            <p className="a paragraph">
              Would you like to register an account? To save your account
              details for future purchases, simply enter as password below.
            </p>
            <div className="input-field">
              <input
                className="a password"
                type="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="password"
              />
              {validator.current.message(
                "password",
                password,
                "required|min:6"
              )}
            </div>
            <div className="input-field">
              <input
                className="a password"
                type="password"
                placeholder="confirm-password"
              />
            </div>
            <p className="a paragraph">
              If not, simply leave the password fields blank to continue
              checkout as a guest.
            </p>
            <button className="register-btn">continue</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Cart;
