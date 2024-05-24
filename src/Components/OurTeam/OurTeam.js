import React from "react";
import Banner from "../../assets/banner.jpg";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
//Photos
import Sasi from "../../assets/Team-photos/sasikumar.JPG";
import Rohit from "../../assets/Team-photos/Rohit-Designer.jpg";
import NoImage from "../../assets/Team-photos/No-Image002.jpg";
//Resume
import SasiResume from "../../assets/resumes/sasikumar-resume.pdf";
import AshwinResume from "../../assets/resumes/Ashwin-Resume.pdf";

const OurTeam = () => {
  return (
    <div>
      <Navbar />
      <div className="container pt-4">
        <h3 className="text-center fw-bold">OUR TEAM</h3>
        <h2 className="text-center my-4">
          We Beleive in What We Do and We Love It
        </h2>
        <p className="text-center my-4 fs-5 highlight-color">
          We create beautiful, mobile friendly, search engine optimized websites that attract visitors and convert them intoleads and customers.
          <br/>
         Our talented in-house team creates an dynamic website for you.
        </p>
      </div>
       
      <div className="team-members">
        <h3 className="text-center mb-3 fw-bold">Our Creative Team Members</h3>
        <div className="row justify-content-center gap-5 mb-5">
          <div className="card col-6" style={{ width: "18rem" }}>
            <img className="card-img-top" src={NoImage} alt="No-Image" />
            <div className="card-body">
              <h5 className="card-title">Jaiten Jesuraj . J</h5>
              <p className="text-dark">Founder & Director</p>
              <div>
                Expertise in Areas
                <li className="">Web Designing</li>
                <li className="">Full-Stack Developer</li>
              </div>
            </div>
          </div>
          <div className="card col-6" style={{ width: "18rem" }}>
            <img className="card-img-top" src={NoImage} alt="No-Image" />
            <div className="card-body">
              <h5 className="card-title">Habbeb</h5>
              <p className="text-dark">Co-Founder</p>
              <div>
                Expertise in Areas
                <li className="">Motion Graphic Designer</li>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center gap-5 mb-5">
          <div className="card col-3" style={{ width: "18rem" }}>
            <img className="card-img-top" src={NoImage} alt="No-Image" />
            <div className="card-body">
              <h5 className="card-title">Ashwin Rupak S.A.B</h5>
              <p className="text-dark">DEVELOPER</p>
              <div>
                Expertise in Areas
                <li>React JS</li>
                <li>Full-Stack Developer</li>
              </div>
              <a className="btn btn-info mt-2" href={AshwinResume} download="ashwin-resume.pdf">RESUME</a>
            </div>
          </div>
          <div className="card col-3" style={{ width: "18rem" }}>
            <img className="card-img-top" src={NoImage} alt="No-Image" />
            <div className="card-body">
              <h5 className="card-title">Logesh</h5>
              <p className="text-dark">DEVELOPER</p>
              <div>
                Expertise in Areas
                <li>Angular</li>
                <li>MySQL,MongoDB</li>
              </div>
            </div>
          </div>
          <div className="card col-3" style={{ width: "18rem" }}>
            <img className="card-img-top" src={Sasi} alt="No-Image" />
            <div className="card-body">
              <h5 className="card-title">Sasikumar.S</h5>
              <p className="text-dark">DEVELOPER</p>
              <div>
                Expertise in Areas
                <li className="">React JS</li>
              </div>
              <a className="btn btn-info mt-2" href={SasiResume} download="sasikumar-resume.pdf">RESUME</a>
            </div>
          </div>
          <div className="card col-3" style={{ width: "18rem"}}>
            <img className="card-img-top w-100" src={Rohit} alt="No-Image" style={{}}/>
            <div className="card-body">
              <h5 className="card-title">Rohit</h5>
              <p className="text-dark">DESIGNER</p>
              <div>
                Expertise in Areas
                <li className="">UX & UI Designer</li>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default OurTeam;
