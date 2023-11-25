import React from 'react';
import { Link } from 'react-router-dom';
import './Signuppage1.css'; // Import your CSS file
import Nav from './nav';
import Footer from './footer';

const Signuppage1 = () => {
  const handleLogin = (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Simulating storing user data in URL query parameters (not recommended for sensitive info)
    const queryParams = `?email=${email}&password=${password}`;

    // Display popup after login (you can modify this logic)
    document.getElementById('popup').style.display = 'block';

    // Redirect to main page after displaying the popup (with username and password in URL)
    setTimeout(() => {
      window.location.href = `/?${queryParams}`; // Redirect to main page with username and password in URL after 2 seconds (adjust delay as needed)
    }, 2000); // 2000 milliseconds (2 seconds) delay before redirecting
  };

  return (
    <>
      <div className="wrapper123">
        <Nav />
        <div className="container123-wrapper">
          <div className="container123" id="container123">
            <div className="form-container123 log-in-container123">
              <form onSubmit={handleLogin} className='formclass123'>
                <h1 className="header123">Login</h1>
                <div className="social-container123">
                  <a href="#" className="social123"><i className="fa fa-facebook fa-2x"></i></a>
                  <a href="#" className="social123"><i className="fab fa fa-twitter fa-2x"></i></a>
                </div>
                <span>or use your account</span>
                
                <input type="email" id="email" placeholder="Email" className="email-input" />
                <input type="password" id="password" placeholder="Password" className="email-input" />
                <div className="signup-link">
              <p><span className='white'>cfnjmfjvmjfjvmjkfmvf</span> New user?<Link to="/Signup02">Sign Up</Link></p>
            </div>
                <br />
                <br />
                <button type="submit" className='budesign'>Log In</button>
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

export default Signuppage1;