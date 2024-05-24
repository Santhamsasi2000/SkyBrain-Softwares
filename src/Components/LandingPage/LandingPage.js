import React from "react";
import Banner from "../../assets/banner.jpg";
import WebDev from "../../assets/webdevelop.png";
import WebsitePlanning from "../../assets/websiteplanning.png";
import UXUIPlanning from "../../assets/ux-ui-planning.png";
import WebsiteDevelopment from "../../assets/webdevelopment.png";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import { HashLink } from "react-router-hash-link";
import Foundation from "../Foundation/Foundation";

const LandingPage = () => {
  return (                                      
    <div>
      <Navbar />
      {/* Background Image */}
      <div className="w-100 h-100vh">
        <img className="w-100 h-100 img-fluid" src={Banner} alt="banner"/>
      </div>
      {/* Website Development */}
      <div className="container my-3">
        <h2 className="text-center mb-2">WEBSITE DEVELOPMENT</h2>
        <div className="d-flex flex-column flex-lg-row  justify-content-center align-items-center">
          <img src={WebDev} width={500} alt="WebDev" className="img-fluid"/>
          <p className="lh-lg highlight-color">
            Welcome to Sky Brain Softwares, where we specialize in crafting
            cutting-edge websites and dynamic applications. Our team harnesses
            the power of advanced programming languages to create stunning,
            user-friendly interfaces that captivate and impress. From sleek
            designs to seamless functionality, we bring your digital visions to
            life with finesse. If you're seeking top-tier web and app
            development services, look no further than Sky Brain Softwares.
            <br/>
            <br/>
            <HashLink to="/#contact-us">
              <p className="btn btn-success">Contact us </p>
            </HashLink>
          </p>
        </div>
      </div>

      <div className="container">
        <h2 className="text-center">
          YOUR WEB DESIGN PARTNER SKY BRAIN SOFTWARES
        </h2>
        {/* Website Planning */}
        <div className="mt-4">
          <h3 className="text-center">WEBSITE PLANNING</h3>

          <div className="d-flex flex-column flex-sm-row justify-content-evenly align-items-center">
            <img src={WebsitePlanning} width={300} alt="webplan" className="img-fluid" />
            <div>
              <p className="d-flex align-items-center text-nowrap highlight-color">
                <span className="border-point"></span>Define Your Goals
              </p>
              <p className="d-flex align-items-center text-nowrap highlight-color">
                <span className="border-point"></span>Conduct Market Research
              </p>
              <p className="d-flex align-items-center text-nowrap highlight-color">
                <span className="border-point"></span>Design User Interface
              </p>
              <p className="d-flex align-items-center text-nowrap highlight-color">
                <span className="border-point"></span>Develop Content Strategy
              </p>
              <p className="d-flex align-items-center text-nowrap highlight-color">
                <span className="border-point"></span>Test and Debug
              </p>
              <p className="d-flex align-items-center text-nowrap highlight-color">
                <span className="border-point"></span>Launch and Promote
              </p>
            </div>
          </div>
        </div>
        {/* UX/UI PLANNING */}
        <div className="mt-4">
          <h3 className="text-center">UX/UI PLANNING</h3>
          <div className="d-flex flex-column flex-md-row justify-content-evenly align-items-center">
            <img src={UXUIPlanning} width={400} alt="ui/ux" className="img-fluid"/>

            <div>
              <p className="d-flex align-items-center text-nowrap highlight-color">
                <span className="border-point"></span>UX/UI Planning
              </p>
              <p className="d-flex align-items-center text-nowrap highlight-color">
                <span className="border-point"></span>Wireframes and Mockups
              </p>
              <p className="d-flex align-items-center text-nowrap highlight-color">
                <span className="border-point"></span>Branding and Interactive
                Design
              </p>
            </div>
          </div>
        </div>
        {/* DEVELOPMENT */}
        <div className="mt-4">
          <h3 className="text-center">DEVELOPMENT</h3>
          <div className="d-flex flex-column flex-md-row justify-content-evenly align-items-center">
            <img src={WebsiteDevelopment} width={400} alt="webdev" className="img-fluid" />
            <div>
              <p className="d-flex align-items-center text-nowrap highlight-color">
                <span className="border-point"></span>Web Development
              </p>
              <p className="d-flex align-items-center text-nowrap highlight-color">
                <span className="border-point"></span>App Development
              </p>
              <p className="d-flex align-items-center text-nowrap highlight-color">
                <span className="border-point"></span>E-Commerce Website
                Building
              </p>
              <p className="d-flex align-items-center text-nowrap highlight-color">
                <span className="border-point"></span>Server Hosting
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Skill Set of Our Team */}
      <div className="container d-flex flex-column align-items-center"> 
        <h3 className="text-uppercase mt-2 mb-5">Skill Set of Our Team</h3>
        <div className="responsive-border d-flex bg-primary justify-content-between align-items-center  mb-3 px-3">
              <p>UX/UI Design</p>
              <p>95%</p>
        </div>
        <div className="responsive-border d-flex bg-primary justify-content-between align-items-center mb-3 px-3">
             <p>Web Development</p>
             <p>98%</p>
          </div>
          <div className="responsive-border d-flex bg-primary justify-content-between align-items-center mb-3 px-3">
             <p>App Development</p>
             <p>89%</p>
          </div>
          <div className="responsive-border d-flex bg-primary justify-content-between align-items-center  mb-3 px-3">
             <p>Customer Service</p>
             <p>97%</p>
          </div>
          <div className="responsive-border d-flex bg-primary justify-content-between align-items-center  mb-3 px-3">
             <p>Consulting Service</p>
             <p>91%</p>
          </div>
        </div>

      <div className="container p-5">
        <div>
          <h3 className="text-center text-uppercase">Why choose us</h3>
          <span className="white-underline"></span>
        </div>

        <div className="d-flex justify-content-center">
          <div
            class="accordion accordion-flush py-5 w-75"
            id="accordionFlushExample"
          >
            <div class="accordion-item">
              <h2 class="accordion-header" id="flush-headingOne">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseOne"
                  aria-expanded="false"
                  aria-controls="flush-collapseOne"
                >
                  Experience and Qualification
                </button>
              </h2>
              <div
                id="flush-collapseOne"
                class="accordion-collapse collapse"
                aria-labelledby="flush-headingOne"
                data-bs-parent="#accordionFlushExample"
              >
                <div class="accordion-body">
                  At Sky Brain Softwares, our dedicated team of talented
                  developers delivers exceptional designs and high-quality
                  development for web and app projects. With our passion for
                  innovation and commitment to excellence, we bring your ideas
                  to life with precision and flair. Experience the difference
                  with us – where innovation meets excellence, and your success
                  is our priority.
                </div>
              </div>
            </div>
            <div class="accordion-item mt-5">
              <h2 class="accordion-header" id="flush-headingTwo">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseTwo"
                  aria-expanded="false"
                  aria-controls="flush-collapseTwo"
                >
                  Design Quality
                </button>
              </h2>
              <div
                id="flush-collapseTwo"
                class="accordion-collapse collapse"
                aria-labelledby="flush-headingTwo"
                data-bs-parent="#accordionFlushExample"
              >
                <div class="accordion-body">
                  At Sky Brain Softwares, we pride ourselves on delivering
                  top-tier design and quality in both websites and apps. Our
                  creations are not just functional; they're masterpieces
                  crafted with care and expertise. Choose us for a digital
                  experience that transcends the ordinary, where every pixel
                  tells a story of innovation and excellence. Let Sky Brain
                  Softwares be your trusted partner in transforming your digital
                  dreams into stunning realities.
                </div>
              </div>
            </div>
            <div class="accordion-item mt-5">
              <h2 class="accordion-header" id="flush-headingFour">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseFour"
                  aria-expanded="false"
                  aria-controls="flush-collapseThree"
                >
                  Customer Satisfaction
                </button>
              </h2>
              <div
                id="flush-collapseFour"
                class="accordion-collapse collapse"
                aria-labelledby="flush-headingFour"
                data-bs-parent="#accordionFlushExample"
              >
                <div class="accordion-body">
                  At Sky Brain Softwares, client satisfaction is our ultimate
                  priority. Those who entrust us with their projects are
                  consistently delighted with the results. Our dedication to
                  excellence ensures that every website and app we create not
                  only meets but exceeds expectations. Join the ranks of
                  satisfied clients who have experienced the transformative
                  power of our work. Choose Sky Brain Softwares for a
                  partnership built on trust, innovation, and
                  unparalleled quality.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Foundation/>
      <Footer />
    </div>
  );
};

export default LandingPage;
