import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <div className="bg-info">
      <div
        className="d-flex flex-column gap-3 mx-5 flex-md-row justify-content-around align-items-evenly py-5"
        id="contact-us"
      >
        <div>
           <h3 style={{ color: "rgb(0, 0, 49)" }}>Are you ready?</h3>
          <h1 style={{ color: "rgb(0, 0, 49)" }}>Wanna Hatch Some Websites</h1> 
          <div>
            <p className="fs-4">
              <i className="pe-2">
              <MdEmail/>
              </i>
            skybrainsoftwares@gmail.com
            </p>
          </div>
          <div>
            <p className="fs-4">
              <i className="pe-2">
                <FaPhoneAlt />
              </i>
              +91 770-891-0376
            </p>
          </div>
        </div>
        <div className="d-flex flex-column">
           <form>
                <h3>Contact Us</h3>
                <input type="text" className="form-control rounded px-4 py-2 mb-3 border-0" placeholder="Enter the Name"></input>
                <input type="text" className="form-control rounded px-4 py-2 mb-3 border-0" placeholder="Enter the Email"></input>
                <textarea className="form-control rounded px-4 py-2 mb-3 border-0" placeholder="Enter the Message"></textarea>
                <button type="button" class="form-control btn btn-primary px-5 py-2">Send</button>
            </form>
        </div>
      </div>
      <p className="text-center text-light">
        © 2024 Sky Brain Software's. All rights reserved.  
      </p>
    </div>
  );
};

export default Footer;
