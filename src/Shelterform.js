import React, { useState } from 'react';
import Nav from './nav'; 
import Footer from './footer'; 
import   './rehome.css';

function Shelterform() {
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
            <p>Provide shelter and care for dogs and cats for a short period of time.</p>

           

            <label htmlFor="petType" className="customLabel22">Pet Type:</label>
            <select id="petType" name="petType" className="selectstyle">
              <option value=""></option>
              <option value="dog">Dog</option>
              <option value="cat">Cat</option>
            </select>

            <label htmlFor="petname" className="customLabel22">Pet's Name:</label>
            <input type="text" name="petname" id="petname" />

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

  <label htmlFor="duration"  className="customLabel22">Behaviour:</label>
  <input type="text" id="duration" name="duration"  className="another"/>

  <label htmlFor="disease" className="customLabel22">Any Disease:</label>
  <input type="text" id="disease" name="disease"  className="another"/>

  <label htmlFor="weight" className="customLabel22">Weight (in kg):</label>
  <input type="number" id="weight" name="weight"  className="another"/>

  <label htmlFor="phone" className="customLabel22">Contact:</label>
  <input type="tel" id="phone" name="phone"  className="another" />

  <label htmlFor="email"  className="customLabel22">Email:</label>
  <input type="email" id="email" name="email"  className="another"/>

  <label htmlFor="location"  className="customLabel22">Location:</label>
  <input type="text" name="location" id="location" className="another"/>

  <label htmlFor="vax"  className="customLabel22">Vaccination:</label>
  <select id="vax" name="vax"  className="selectstyle">
    <option value=""></option>
    <option value="done">Done</option>
    <option value="not">Not done</option>
    <option value="some">Some are done</option>
  </select>

  <label htmlFor="describe"  className="customLabel22">Describe Your Pet:</label>
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

export default Shelterform;