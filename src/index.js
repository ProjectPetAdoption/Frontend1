import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import FAQ from './faq';
import Rehome from './rehome';

import Adopt from './Adoption';
import AdoptaDog from './AdoptaDog';
import AdoptaCat from './AdoptaCat';
import Petpage from './Petpage';

import Adoptform from './Adoptform';
import Homeshelter from './Homeshelter';
import Stay from './Stay';
import Petshelterform from './Petshelterform';
import Stayformm from './Stayform';
import Signuppage1 from './Signuppage1';
import Signup02 from './Signup02';

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/faq" element={<FAQ />} />
      <Route path="/AdoptaDog" element={<AdoptaDog/>} />
      <Route path="/AdoptaCat" element={<AdoptaCat/>} />
      <Route path="/Petpage" element={<Petpage/>} />
      <Route path="/Adoptform" element={<Adoptform/>} />
      <Route path="/rehome" element={<Rehome/>} />
      <Route path="/Homeshelter" element={<Homeshelter/>} />
      <Route path="/Stay" element={<Stay/>} />
      <Route path="/Petshelterform" element={<Petshelterform/>} />
      <Route path="/Stayform" element={<Stayformm/>} />
      <Route path="/Signuppage1" element={<Signuppage1/>} />
      <Route path="/Adoption" element={<Adopt />} />
      <Route path="/Signup02" component={<Signup02 />} />

      
      <Route path="/" element={<App />} />
    </Routes>
  </Router>,
  document.getElementById('root')
);
