import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import "./Follow.css";

const Follow = (props) => {
  const handleClose = () => {
    props.setFollow(false);
  };
  return (
    <div>
      {/* <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button> */}

      <Modal
        size="lg"
        className="follow-modal"
        show={props.follow}
        onHide={handleClose}
      >
        <Modal.Header
          style={{ textAlign: "center" }}
          closeButton
        ></Modal.Header>
        <Modal.Body>
          <div className="ftitle">Follow Us</div>
          <div className="finfo">
            <div className="fbody">
              Want to be kept up to date and be the first to notified about new
              publications? We welcome conversation with our readers and would
              love to hear from you.
            </div>
            <div className="social-media-section">
              <div className="icon-parts">
                <div className="icons">
                  <i className="bi bi-twitter"></i>
                </div>
                <div className="name twitter">Twitter</div>
              </div>

              <div className="icon-parts">
                <div className="icons">
                  <i className="bi bi-instagram"></i>
                </div>
                <div className="name insta">Instagram</div>
              </div>

              <div className="icon-parts">
                <div className="icon">
                  <i className="bi bi-rss"></i>
                </div>
                <div className="name feed">Rss-Feed</div>
              </div>

              <div className="icon-parts">
                <div className="icons">
                  <i className="bi bi-inbox"></i>
                </div>
                <div className="name email-add">Email-Updates</div>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Follow;
