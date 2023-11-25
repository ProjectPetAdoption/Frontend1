import React, { useState } from 'react';
import Nav from './nav'; 
import Footer from './footer'; 
import   './rehome.css';

function Stayformm() {
  const [showThankYou, setShowThankYou] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent form submission

    // You can process the form data here if needed

    // Show the thank you message
    setShowThankYou(true);
  };

  return (
    <>
    <Nav/>
    <div>
      <div id="upper"></div>
      <div className="container88">
        {showThankYou ? (
          <div id="thankYou" style={{ display: 'block' }}>
            <p>Thank you! An agent will be in contact soon.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} id="petForm">
            <h1 className='heads'>Pet Shelter and Care</h1>
            <p>Offer your pet a loving home with a responsible, caring owner.</p>

            <label htmlFor="petname" className="customLabel22">Name</label>
            <input type="text" name="petname" id="petname" />

            
            <label htmlFor="phone" className="customLabel22">Phone</label>
  <input type="tel" id="phone" name="phone"  className="another" />

  <label htmlFor="email"  className="customLabel22">Email:</label>
  <input type="email" id="email" name="email"  className="another"/>


            <label htmlFor="petType" className="customLabel22">Pet Type:</label>
            <select id="petType" name="petType" className="selectstyle">
              <option value=""></option>
              <option value="dog">Dog</option>
              <option value="cat">Cat</option>
            </select>


            <label htmlFor="age" className="customLabel22">Age:</label>
            <input type="text" id="age" name="age" />


            <label htmlFor="gender" className="customLabel22">Gender:</label>
            <select id="gender" name="gender"  className="selectstyle">
              <option value=""></option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>

            <label htmlFor="breed"  className="customLabel22">Breed:</label>
  <input type="text" id="breed" name="breed" />

  

  <label htmlFor="disease" className="customLabel22">Any Disease:</label>
  <input type="text" id="disease" name="disease"  className="another"/>

  <label htmlFor="weight" className="customLabel22">Weight (in kg):</label>
  <input type="number" id="weight" name="weight"  className="another"/>


  <label htmlFor="describe"  className="customLabel22">Additional Information</label>
  <textarea name="describe" id="describe" cols="5" rows="6"></textarea>

  

            <button type="submit" className="submitform">
              Submit
            </button>
          </form>
        )}
      </div>
    </div>

    <Footer/>
    </>
  );
}

export default Stayformm;
