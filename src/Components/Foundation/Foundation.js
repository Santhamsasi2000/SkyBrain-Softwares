import { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const Foundation = () => {
  const [counterOn, setCounterOn] = useState(false);
  return (
    <div className="container">
     <div className="row mb-5 p-3 bg-info">
      <div className="col-6 col-sm-3">
        <p className=" fw-bold fs-5" style={{ color: " rgb(0, 0, 49)" }}>
          Established
        </p>
        <ScrollTrigger onEnter={()=>setCounterOn(true)} onExit={()=>setCounterOn(false)} >
          <p className="fw-bold">
            {
             counterOn && <CountUp start={0} end={2022} duration={1} delay={0} separator="" />
            }
          </p>
        </ScrollTrigger> 
      </div>
      <div className="col-sm-3 col-6">
        <p className="fw-bold fs-5" style={{ color: " rgb(0, 0, 49)" }}>
          Project
        </p>
        <ScrollTrigger onEnter={()=>setCounterOn(true)} onExit={()=>setCounterOn(false)} >
          <p className="fw-bold">
            {
             counterOn && <CountUp start={0} end={10} duration={2} delay={0} />
            }
            +
          </p>
        </ScrollTrigger> 
      </div>
      <div className="col-sm-3 col-6">
        <p className="fw-bold fs-5" style={{ color: " rgb(0, 0, 49)" }}>
          Customers
        </p>
        <ScrollTrigger onEnter={()=>setCounterOn(true)} onExit={()=>setCounterOn(false)} >
          <p className="fw-bold">
            {
             counterOn && <CountUp start={0} end={12} duration={2} delay={0} />
            }
            +
          </p>
        </ScrollTrigger> 
      </div>
      <div className="col-sm-3 col-6">
        <p className="fw-bold fs-5" style={{ color: " rgb(0, 0, 49)" }}>
          Employees
        </p>
        <ScrollTrigger onEnter={()=>setCounterOn(true)} onExit={()=>setCounterOn(false)} >
          <p className="fw-bold">
            {
             counterOn && <CountUp start={0} end={10} duration={2} delay={0} />
            }
            +
          </p>
        </ScrollTrigger> 
      </div>
     </div>
    </div>
  );
};

export default Foundation;
