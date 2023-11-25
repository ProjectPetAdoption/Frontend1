import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Stay.css'; // Import your CSS file
import Nav from './nav'; 
import Footer from './footer'; 


const Stay = () => {


  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const slides = document.querySelectorAll('.slide');
    slides.forEach((slide, index) => {
      slide.style.left = `${index * 100}%`;
    });
  }, []);

  const goPrev = () => {
    setCounter((prevCounter) => prevCounter - 1);
    slideImage();
  };

  const goNext = () => {
    setCounter((prevCounter) => prevCounter + 1);
    slideImage();
  };

  const slideImage = () => {
    const slides = document.querySelectorAll('.slide');
    slides.forEach((slide) => {
      slide.style.transform = `translateX(-${counter * 100}%)`;
    });
  };

  return (
    <>
    <Nav/>
    <div className="megacontainer22">
        <div className="container140">
          <main className="slider4"   >
            <img src="staypic1.jpeg" className="slide" alt="" />
            <img src="staypic2.jpeg" className="slide" alt="" />
            <img src="staypic3.jpeg" className="slide" alt="" />
            <img src="staypic4.jpeg" className="slide" alt="" />
          </main>

          



          <div className="nav34">
            <button onClick={goPrev} className="prev12">←</button>
            <button onClick={goNext} className="next12">→</button>
          </div>
        </div>

      <div className="container58">
        <h1 className="text13">Shelter Home</h1>
        <br />
        <hr />
        <br />
        <h3 className="text23"><span className="span1">Address</span> <br /> <span className="span2">Plot 123, Street XYZ, Abc Area, City, PIN Code</span></h3>
        <br />
        <h3 className="text33"><span className="span1">Capacity</span> <br /> <span className="span2">X Dogs, Y Cats</span></h3>
        <br />
        <h3 className="text44"><span className="span1">Facilities</span></h3>
        <div className="facs">
          <ul>
            <b>
              <li><span className="span3">One</span></li>
              <li><span className="span3">Two</span></li>
              <li><span className="span3">Three</span></li>
            </b>
          </ul>
        </div>
        <br />
        <br />
        
        <Link to ="/Stayform">
        <button className="bbook" id="bookbutton">Book</button>
        </Link>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Stay;