import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Nav from './nav'; 
import Footer from './footer'; 
import   './Petpage.css';


const Petpage = () => {
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
    <div className="megabox">
      <div className="desc">
        <p className="text1"><b>Name</b></p>
        <br />
        <br />
        <p className="text3">
          Description Description Description DesriptionnDescription Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description (Your long description here)
        </p>
        <br />
        <br />
        <br />
        <br />
        <br />
        {/* Additional details for the dog */}
        <p className="text2"><b>Age -</b> xyz</p>
        <p className="text2"><b>Gender -</b> xyz</p>
        <p className="text2"><b>Breed -</b> xyz</p>
        <p className="text2"><b>Behaviour -</b> xyz</p>
        <p className="text2"><b>Any Disease -</b> xyz</p>
        <p className="text2"><b>Weight (in kgs) -</b> xyz</p>
        <p className="text2"><b>Contact -</b> xyz</p>
        <p className="text2"><b>Email -</b> xyz</p>
        <p className="text2"><b>Vaccination -</b> xyz</p>
        <br />
        <br />
        <Link to="/Adoptform">
      <button className="badopt">Adopt</button>
    </Link>
      </div>
      <div className="images">
        <main >
          {/* Images */}
          <img src="staypic1.jpeg" className="slide" alt="" />
          <img src="staypic2.jpeg" className="slide" alt="" />
          <img src="staypic3.jpeg" className="slide" alt="" />
          <img src="staypic4.jpeg" className="slide" alt="" />
        </main>
        <div className="nav">
          <button onClick={goPrev} className="prev">←</button>
          <button onClick={goNext} className="next">→</button>
        </div>
      </div>
    </div>

    <Footer/>

    </>
  );
};



export default Petpage;

