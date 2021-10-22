import React, { useState, useHistory, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import { Modal, Button } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import SimpleReactValidator from "simple-react-validator";
import "react-toastify/dist/ReactToastify.css";

//to getItem
const gersettledItem = () => {
  let item = localStorage.getItem("anything");
  if (item) {
    return JSON.parse(localStorage.getItem("anything"));
  } else {
    return [];
  }
};

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const [, forceUpdate] = useState();
  const validator = React.useRef(new SimpleReactValidator());

  const [allEntry, setAllEntry] = useState(gersettledItem());

  const onSubmits = (e) => {
    e.preventDefault();
    const newEntry = { email: email, password: password };
    setAllEntry([...allEntry, newEntry]);
    console.log(allEntry);
    setEmail("");
    setPassword("");

    const abc = validator.current.allValid();
    if (abc) {
      toast.success(`login successfully`, {
        position: "top-right",
        hideProgressBar: true,
      });
    } else {
      validator.current.showMessages();
      forceUpdate(1);
    }
  };
  useEffect(() => {
    localStorage.setItem("anything", JSON.stringify(allEntry));
  }, [allEntry]);

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleClose = () => {
    props.setIsModalOpen(false);
  };

  return (
    <>
      <Modal
        className="bd-example-modal-lg"
        //
        size="lg"
        show={props.isModalOpen}
        onHide={handleClose}
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <form onSubmit={onSubmits}>
            <div className="login">
              <div className="login-page">
                <h2 className="login-heading">Login</h2>
                <p className="login-paragraph">
                  Welcome back. If you already have an account with us, please
                  login below.
                </p>
                <div className="error">
                  {emailError}
                  {passwordError}
                </div>
                <div className="login-info">
                  <div className="login-field">
                    <input
                      className="login-input"
                      type="text"
                      name="email"
                      value={email}
                      onChange={handleEmail}
                      placeholder="Email Address"
                    />
                    {validator.current.message(
                      "email",
                      email,
                      "required|email"
                    )}
                  </div>
                  <div className="login-field">
                    <input
                      className="login-input"
                      type="password"
                      name="password"
                      value={password}
                      autoComplete="off"
                      onChange={handlePassword}
                      placeholder="Password"
                    />
                    {validator.current.message(
                      "password",
                      password,
                      "required|min:6|max:8"
                    )}
                  </div>
                  <div className="check-field">
                    <input type="checkbox"></input>
                    <label className="check" htmlFor="check">
                      Remember me next time?
                    </label>
                  </div>
                  <div className="logged">
                    <button className="login-btn">Login</button>
                  </div>
                  <div>
                    <Link className="login-link">I've lost my password?</Link>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </Modal.Body>
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={true}
          closeOnClick
          rtl={false}
        />
      </Modal>
    </>
  );
};

export default Login;
