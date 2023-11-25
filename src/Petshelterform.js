import React, { useState } from 'react';
import Nav from './nav'; 
import Footer from './footer'; 
import   './rehome.css';

function Petshelterform() {
  const [showThankYou, setShowThankYou] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent form submission

    // Get form data
   

    try {
      const formData = new FormData(e.target);
      const response = await fetch('http://localhost:3001/api/CreatePetshelterform', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        setShowThankYou(true); // Show thank you message on successful form submission
      } else {
        // Handle error if the request was not successful
        // You can set an error state or handle it in another way
        console.error('Form submission failed.');
      }
    } catch (error) {
      console.error('Error occurred during form submission:', error);
      // Handle other errors related to fetch or submission process
    }
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
            <p>Provide shelter and care for dogs and cats for a short period of time.</p>

            
            <label htmlFor="petname" className="customLabel22"> Name:</label>
            <input type="text" name="petname" id="petname" />

            <label htmlFor="phone" className="customLabel22">Phone number</label>
  <input type="tel" id="phone" name="phone"  className="another" />


            <label htmlFor="email"  className="customLabel22">Email:</label>
  <input type="email" id="email" name="email"  className="another"/>

  <label htmlFor="location"  className="customLabel22">Address:</label>
  <input type="text" name="location" id="location" className="another"/>


            <label htmlFor="petType" className="customLabel22">Open for:</label>
            <select id="petType" name="petType" className="selectstyle">
              <option value=""></option>
              <option value="dog">Dog</option>
              <option value="cat">Cat</option>
              <option value="cat">Dogs & Cats</option>
            </select>

            

  <label htmlFor="disease" className="customLabel22">Facilities</label>
  <input type="text" id="disease" name="disease"  className="another"/>

  <label htmlFor="phone" className="customLabel22">Charge(per Day)</label>
  <input type="tel" id="phone" name="phone"  className="another" />


  <label htmlFor="describe"  className="customLabel22">Additional Information:</label>
  <textarea name="describe" id="describe" cols="20" rows="10"></textarea>

  <label htmlFor="photos"  className="customLabel22">Upload photos of your Pet</label>
  <input type="file" className="photosform" id="myFile1" name="filename" />
  <input type="file" className="photosform" id="myFile2" name="filename" />
  <input type="file" className="photosform" id="myFile3" name="filename" />
  <input type="file" className="photosform" id="myFile4" name="filename" />

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

export default  Petshelterform;