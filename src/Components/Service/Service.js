import React from "react";
import Banner from "../../assets/banner.jpg";
import UXUIPlanning from "../../assets/ux-ui-planning.png";
import WebsiteDevelopment from "../../assets/webdevelopment.png";
import ServiceImage from "../../assets/service.png";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Foundation from "../Foundation/Foundation";

const Service = () => {
  return (
    <div>
      <Navbar />
      {/* Services */}
      <div className="container p-3">
        <div className="d-flex flex-column flex-lg-row align-items-center justify-content-between">
          <img src={ServiceImage} width={500} alt="service" className="img-fluid"/>
          <div>
            <h1 className="text-center me-5 fw-semibold fs-1">Our Service</h1>
            <p className="w-100 lh-lg highlight-color">
              Welcome to the world of Sky Brain Softwares, where excellence
              isn't just a goal – it's woven into the very fabric of everything
              we do. Prepare to be spellbound by our extraordinary offerings,
              where each service is tailored with precision to meet your
              distinct needs. We don't just provide solutions; we forge enduring
              partnerships on the path to triumph. Our mission is crystal clear:
              to catapult your business to heights never before imagined.
              Embrace the unparalleled essence of Sky Brain Softwares – a realm
              where innovation dances effortlessly with efficiency, ensuring
              that your victory is our relentless pursuit.
            </p>
          </div>
        </div>
      </div>
      {/* UX DESIGN */}
      <div className="container p-3">
        <h1 className="text-center">UX Design</h1>
        <p className="w-100 py-3 lh-lg highlight-color">
          At Sky Brain Softwares, UX design is our expertise, our pride. We
          craft innovative designs tailored to your needs, meticulously aligned
          with your vision. Our process involves thorough analysis, ensuring
          seamless alignment with your objectives. We're committed to exceeding
          expectations, creating transformative experiences. With us, expect
          every detail curated for your digital success. Experience the
          difference with our unparalleled approach – where creativity meets
          functionality, and innovation thrives.
        </p>
        <div className="d-flex flex-column flex-md-row justify-content-evenly align-items-center">
          <img src={UXUIPlanning} width={500} alt="ui/ux" className="img-fluid" />
          <div>
            <p className="d-flex align-items-center text-nowrap highlight-color">
              <span className="border-point"></span>UX Research
            </p>
            <p className="d-flex align-items-center text-nowrap highlight-color">
              <span className="border-point"></span>Information Architecture
            </p>
            <p className="d-flex align-items-center text-nowrap highlight-color">
              <span className="border-point"></span>Wireframing
            </p>
            <p className="d-flex align-items-center text-nowrap highlight-color">
              <span className="border-point"></span>Interaction Design
            </p>
            <p className="d-flex align-items-center text-nowrap highlight-color">
              <span className="border-point"></span>UX Testing
            </p>
          </div>
        </div>
      </div>
      {/* UI DESIGN */}
      <div className="container p-3">
        <h1 className="text-center">UI Design</h1>
        <p className="w-100 py-3 lh-lg highlight-color">
          At Sky Brain Softwares, UI design is our passion, driving our pursuit
          of excellence. We're dedicated to delivering cutting-edge designs that
          captivate and innovate, ensuring every element reflects your unique
          identity. With meticulous attention to detail, we craft interfaces
          that elevate your digital presence. Our process begins with a deep
          dive into your brand and audience, ensuring immersive user
          experiences. From sleek layouts to intuitive navigation, we create
          exceptional UI designs that redefine industry standards. Experience
          the difference with our tailored approach – where creativity thrives,
          and your brand shines brighter than ever.
        </p>
        <div className="d-flex flex-column flex-md-row justify-content-evenly align-items-center">
          <div>
            <p className="d-flex align-items-center text-nowrap highlight-color">
              <span className="border-point"></span>Web Design
            </p>
            <p className="d-flex align-items-center text-nowrap highlight-color">
              <span className="border-point"></span>Mobile Design
            </p>
            <p className="d-flex align-items-center text-nowrap highlight-color">
              <span className="border-point"></span>Landing Page
            </p>
            <p className="d-flex align-items-center text-nowrap highlight-color">
              <span className="border-point"></span>Wearable Designs
            </p>
          </div>

          <img src={UXUIPlanning} width={500} alt="ui/ux" className="img-fluid" />
        </div>
      </div>
      {/* Web Development*/}
      <div className="container p-3">
        <h1 className="text-center">Web Development</h1>
        <p className="w-100 py-3 lh-lg highlight-color">
          At Sky Brain Softwares, we excel in web development, always
          implementing the best practices to ensure your online success. Through
          meticulous analysis of previous content, we tailor unique solutions
          optimized for search engines, making it easier for people to find you
          online.
          Our process begins with understanding your brand and goals, allowing
          us to create websites that not only look stunning but also drive
          results. With responsive layouts and intuitive navigation, we ensure a
          seamless user experience that keeps visitors engaged.
          But our commitment doesn't end there. We stay updated on the latest
          trends and technologies, guaranteeing your digital presence stays
          ahead of the competition. Trust Sky Brain Softwares for exceptional
          web development that boosts your online visibility and drives growth.
          Experience the difference with our tailored approach – where
          innovation meets expertise, and your success is our priority.
        </p>
        <div className="d-flex flex-column flex-md-row justify-content-evenly align-items-center">
          <img src={WebsiteDevelopment} width={500} alt="websitedev" className="img-fluid" />
          <div>
            <p className="d-flex align-items-center text-nowrap highlight-color">
              <span className="border-point"></span>Custom Application
              Development
            </p>
            <p className="d-flex align-items-center text-nowrap highlight-color">
              <span className="border-point"></span>E-Commerce Website
            </p>
            <p className="d-flex align-items-center text-nowrap highlight-color">
              <span className="border-point"></span>Content Management System
            </p>
            <p className="d-flex align-items-center text-nowrap highlight-color">
              <span className="border-point"></span>Webpage Hosting
            </p>
          </div>
        </div>
      </div>
      <Foundation />
      <Footer />
    </div>
  );
};

export default Service;
