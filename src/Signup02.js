import React from 'react';

import './Signuppage1.css'; // Import your CSS file
import Nav from './nav';
import Footer from './footer';



const Signup02 = () => {
  const handleSignUp = async (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phoneNumber = document.getElementById('phoneNumber').value;
    const password = document.getElementById('password').value;

    // Save data to MongoDB via API
    try {
      const response = await fetch('/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name,
          email,
          phoneNumber,
          password
        })
      });

      if (response.ok) {
        // Save to local storage
        localStorage.setItem('signupEmail', email);
        localStorage.setItem('signupPassword', password);

        // Display popup after login (you can modify this logic)
        document.getElementById('popup').style.display = 'block';

        // Redirect to main page after displaying the popup (with username and password in URL)
        const queryParams = `?email=${email}&password=${password}`;
        setTimeout(() => {
          window.location.href = `/Signuppage1?password=${password}&url=${queryParams}`;
        }, 2000); // 2000 milliseconds (2 seconds) delay before redirecting
      } else {
        // Handle error
      }
    } catch (error) {
      console.error('Error:', error);
      // Handle error
    }
  };

  return (
    <>
      <div className="wrapper123">
        <Nav />
        <div className="container123-wrapper">
          <div className="container123" id="container123">
            <div className="form-container123 log-in-container123">
            <form onSubmit={handleSignUp} className='formclass123'>
                <h1 className="header123">Sign Up</h1>
                
                
                <input type="name" id="name" placeholder="Name" className="email-input" />
                <input type="email" id="email" placeholder="Email" className="email-input" />
                
                <input type="text" id='phoneNumber' placeholder="Phone Number" className="email-input" />
                <input type="password" id="password" placeholder="Password" className="email-input" />
                <input type="password" id="password" placeholder="Re-Enter Password" className="email-input" />
                <br />
                <br />
                <button type="submit" className='budesign'>Sign-Up</button>
              </form>
             
            </div>
            <div className="overlay-container123">
              <div className="overlay123" id="popup">
                {/* Popup content */}
                <div className="overlay-panel123 overlay-right123">
                  <h1>Welcome to AdoptMe!</h1>
                  <p className='par12'>Your doorway to heartwarming connections with pets in need. Experience the joy of adoption and create lasting bonds with our furry friends.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Signup02;