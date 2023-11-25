import React, { useState } from 'react';
import Nav from './nav'; 
import Footer from './footer'; 
import   './Adoptform.css';


const Adoptform = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent form submission

    // You can process the form data here if needed

    // Set the formSubmitted state to true to display the thank you message
    setFormSubmitted(true);
  };

  return (
    <>
    <Nav/>
    <div>
    <div id="nav-container"></div>
    <div className="container95">
      <h1>Pet Adoption </h1>
      
      {!formSubmitted ? (
        <form onSubmit={handleSubmit}>
          <label htmlFor="petname" className="specificContactLabel">Name:</label>
<input type="text" name="petname" id="petname" className="anothername"/>

<label htmlFor="phone" className="specificContactLabel">Contact:</label>
<input type="tel" id="phone" name="phone" className="anothername"/>

<label htmlFor="email" className="specificContactLabel">Email:</label>
<input type="email" id="email" name="email" className="anothername" />

<label htmlFor="location" className="specificContactLabel">Location:</label>
<input type="text" name="location" id="location" className="anothername" />

          <button type="submit" className="submitform">
            Submit
          </button>
        </form>
      ) : (
        <div id="thankYou5">
        <p>Thank you! An agent will be in contact soon.</p>
      </div>
    )}
  </div>
  </div>


    <Footer/>
    </>
  );
};

export default Adoptform;
