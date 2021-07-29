import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import ContactUs from "../contactus/ContactUs";
import ContactModel from "../ContactModel";
import { FiArrowDownCircle } from "react-icons/fi";
import GetQuote from "../contactus/GetQuot";

export default function Home() {
  const [smShow, setSmShow] = useState(false);
  return (
    <div className="home-container" id="home">
      <div className="opacity-bg">
        <div className="title">
          TAKE YOUR BUSINESS ONLINE WITH US. WE DEVELOP STYLISH WEB APP /
          FASTEST MOBILE APPS
        </div>
        <button className="button" onClick={() => setSmShow(true)}>
          Contact US
        </button>
        <Modal
          size="lg"
          show={smShow}
          onHide={() => setSmShow(false)}
          aria-labelledby="cantact-form"
        >
          <Modal.Header closeButton>
            <Modal.Title id="cantact-form">Get In Tuch</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <GetQuote />
          </Modal.Body>
        </Modal>
      </div>
    </div>
  );
}
