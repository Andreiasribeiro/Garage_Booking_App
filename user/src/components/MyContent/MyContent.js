import React from 'react';
import StyleMyContent from './StyleMyContent.css';
import hyunday from './../assets/hyunday.svg';
import Kia from './../assets/Kia.svg';
import mitsubishi from './../assets/mitsubishi.svg';
import toyota from './../assets/toyota.svg';
import nissan from './../assets/nissan.svg';



function MyContent() {

  return (
    <div>
      <section className="brands">
       
        <div className="brands-card">
          <img className="brands-img" src={hyunday} alt="Hyunday" ></img>
        </div>

        <div className="brands-card">
          <img className="brands-img" src={Kia} alt="Kia" ></img>
        </div>

        <div className="brands-card">
          <img className="brands-img" src={mitsubishi} alt="Mitsubishi" ></img>
        </div>

        <div className="brands-card">
          <img className="brands-img" src={toyota} alt="Toyota" ></img>
        </div>

        <div className="brands-card">
          <img className="brands-img" src={nissan} alt="Nissan" ></img>
        </div>

      </section> {/*close "brands"*/}



      <section className="our-company" id="about">

        <div className="text-box">
          <h2>OUR COMPANY</h2>
          <p>
          AR Motor Garage is a vehicle servicing provider and retailer of car parts and accessories. We provide a range of services to keep you on the road. Whether you are preparing your car for a road test or polishing your new motor, our aim is to provide you the motorist, with the largest online range of automotive brands and products at the best prices.
          </p>
        </div>

      </section>{/*close "our-company"*/}
    </div>
  );

}

export default MyContent;