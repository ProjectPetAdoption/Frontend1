import React, { useState } from 'react';
import { Link } from 'react-router-dom';


import './Adoption.css';
import Nav from './nav'; 
import Footer from './footer'; 


const Adopt = () => {

  const handleCardClick = () => {
   

    window.location.href = '/Petpage';
  };



    const [selectedState, setSelectedState] = useState('');
    const [selectedDistrict, setSelectedDistrict] = useState('');
    
    const states = [
        "Andra Pradesh",
        "Arunachal Pradesh",
        "Assam",
        "Bihar",
        "Chhattisgarh",
        "Goa",
        "Gujarat",
        "Haryana",
        "Himachal Pradesh",
        "Jammu and Kashmir",
        "Jharkhand",
        "Karnataka",
        "Kerala",
        "Madhya Pradesh",
        "Maharashtra",
        "Manipur",
        "Meghalaya",
        "Mizoram",
        "Nagaland",
        "Odisha",
        "Punjab",
        "Rajasthan",
        "Sikkim",
        "Tamil Nadu",
        "Telangana",
        "Tripura",
        "Uttarakhand",
        "Uttar Pradesh",
        "West Bengal",
        "Andaman and Nicobar Islands",
        "Chandigarh",
        "Dadar and Nagar Haveli",
        "Daman and Diu",
        "Delhi",
        "Lakshadweep",
        "Pondicherry"
      ];
    
    const AndraPradesh = ["Anantapur","Chittoor","East Godavari","Guntur","Kadapa","Krishna","Kurnool","Prakasam","Nellore","Srikakulam","Visakhapatnam","Vizianagaram","West Godavari"];
    const ArunachalPradesh = ["Anjaw","Changlang","Dibang Valley","East Kameng","East Siang","Kra Daadi","Kurung Kumey","Lohit","Longding","Lower Dibang Valley","Lower Subansiri","Namsai","Papum Pare","Siang","Tawang","Tirap","Upper Siang","Upper Subansiri","West Kameng","West Siang","Itanagar"];
    const Assam = ["Baksa","Barpeta","Biswanath","Bongaigaon","Cachar","Charaideo","Chirang","Darrang","Dhemaji","Dhubri","Dibrugarh","Goalpara","Golaghat","Hailakandi","Hojai","Jorhat","Kamrup Metropolitan","Karbi Anglong","Karimganj","Kokrajhar","Lakhimpur","Majuli","Morigaon","Nagaon","Nalbari","Dima Hasao","Sivasagar","Sonitpur","South Salmara Mankachar","Tinsukia","Udalguri","West Karbi Anglong"];
    const Bihar = ["Araria","Arwal","Aurangabad","Banka","Begusarai","Bhagalpur","Bhojpur","Buxar","Darbhanga","East Champaran","Gaya","Gopalganj","Jamui","Jehanabad","Kaimur","Katihar","Khagaria","Kishanganj","Lakhisarai","Madhepura","Madhubani","Munger","Muzaffarpur","Nalanda","Nawada","Patna","Purnia","Rohtas","Saharsa","Samastipur","Saran","Sheikhpura","Sheohar","Sitamarhi","Siwan","Supaul","Vaishali","West Champaran"];
    const Chhattisgarh = ["Balod","Baloda Bazar","Balrampur","Bastar","Bemetara","Bijapur","Bilaspur","Dantewada","Dhamtari","Durg","Gariaband","Janjgir Champa","Jashpur","Kabirdham","Kanker","Kondagaon","Korba","Koriya","Mahasamund","Mungeli","Narayanpur","Raigarh","Raipur","Rajnandgaon","Sukma","Surajpur","Surguja"];
    const Goa = ["North Goa","South Goa"];
    const Gujarat = ["Ahmedabad","Amreli","Anand","Aravalli","Banaskantha","Bharuch","Bhavnagar","Botad","Chhota Udaipur","Dahod","Dang","Devbhoomi Dwarka","Gandhinagar","Gir Somnath","Jamnagar","Junagadh","Kheda","Kutch","Mahisagar","Mehsana","Morbi","Narmada","Navsari","Panchmahal","Patan","Porbandar","Rajkot","Sabarkantha","Surat","Surendranagar","Tapi","Vadodara","Valsad"];
    const Haryana = ["Ambala","Bhiwani","Charkhi Dadri","Faridabad","Fatehabad","Gurugram","Hisar","Jhajjar","Jind","Kaithal","Karnal","Kurukshetra","Mahendragarh","Mewat","Palwal","Panchkula","Panipat","Rewari","Rohtak","Sirsa","Sonipat","Yamunanagar"];
    const HimachalPradesh = ["Bilaspur","Chamba","Hamirpur","Kangra","Kinnaur","Kullu","Lahaul Spiti","Mandi","Shimla","Sirmaur","Solan","Una"];
    const JammuKashmir = ["Anantnag","Bandipora","Baramulla","Budgam","Doda","Ganderbal","Jammu","Kargil","Kathua","Kishtwar","Kulgam","Kupwara","Leh","Poonch","Pulwama","Rajouri","Ramban","Reasi","Samba","Shopian","Srinagar","Udhampur"];
    const Jharkhand = ["Bokaro","Chatra","Deoghar","Dhanbad","Dumka","East Singhbhum","Garhwa","Giridih","Godda","Gumla","Hazaribagh","Jamtara","Khunti","Koderma","Latehar","Lohardaga","Pakur","Palamu","Ramgarh","Ranchi","Sahebganj","Seraikela Kharsawan","Simdega","West Singhbhum"];
    const Karnataka = ["Bagalkot","Bangalore Rural","Bangalore Urban","Belgaum","Bellary","Bidar","Vijayapura","Chamarajanagar","Chikkaballapur","Chikkamagaluru","Chitradurga","Dakshina Kannada","Davanbreedre","Dharwad","Gadag","Gulbarga","Hassan","Haveri","Kodagu","Kolar","Koppal","Mandya","Mysore","Raichur","Ramanagara","Shimoga","Tumkur","Udupi","Uttara Kannada","Yadgir"];
    const Kerala = ["Alappuzha","Ernakulam","Idukki","Kannur","Kasaragod","Kollam","Kottayam","Kozhikode","Malappuram","Palakkad","Pathanamthitta","Thiruvananthapuram","Thrissur","Wayanad"];
    const MadhyaPradesh = ["Agar Malwa","Alirajpur","Anuppur","Ashoknagar","Balaghat","Barwani","Betul","Bhind","Bhopal","Burhanpur","Chhatarpur","Chhindwara","Damoh","Datia","Dewas","Dhar","Dindori","Guna","Gwalior","Harda","Hoshangabad","Indore","Jabalpur","Jhabua","Katni","Khandwa","Khargone","Mandla","Mandsaur","Morena","Narsinghpur","Neemuch","Panna","Raisen","Rajgarh","Ratlam","Rewa","Sagar","Satna",
    "Sehore","Seoni","Shahdol","Shajapur","Sheopur","Shivpuri","Sidhi","Singrauli","Tikamgarh","Ujjain","Umaria","Vidisha"];
    const Maharashtra = ["Ahmednagar","Akola","Amravati","Aurangabad","Beed","Bhandara","Buldhana","Chandrapur","Dhule","Gadchiroli","Gondia","Hingoli","Jalgaon","Jalna","Kolhapur","Latur","Mumbai City","Mumbai Suburban","Nagpur","Nanded","Nandurbar","Nashik","Osmanabad","Palghar","Parbhani","Pune","Raigad","Ratnagiri","Sangli","Satara","Sindhudurg","Solapur","Thane","Wardha","Washim","Yavatmal"];
    const Manipur = ["Bishnupur","Chandel","Churachandpur","Imphal East","Imphal West","Jiribam","Kakching","Kamjong","Kangpokpi","Noney","Pherzawl","Senapati","Tamenglong","Tengnoupal","Thoubal","Ukhrul"];
    const Meghalaya = ["East Garo Hills","East Jaintia Hills","East Khasi Hills","North Garo Hills","Ri Bhoi","South Garo Hills","South West Garo Hills","South West Khasi Hills","West Garo Hills","West Jaintia Hills","West Khasi Hills"];
    const Mizoram = ["Aizawl","Champhai","Kolasib","Lawngtlai","Lunglei","Mamit","Saiha","Serchhip","Aizawl","Champhai","Kolasib","Lawngtlai","Lunglei","Mamit","Saiha","Serchhip"];
    const Nagaland = ["Dimapur","Kiphire","Kohima","Longleng","Mokokchung","Mon","Peren","Phek","Tuensang","Wokha","Zunheboto"];
    const Odisha = ["Angul","Balangir","Balasore","Bargarh","Bhadrak","Boudh","Cuttack","Debagarh","Dhenkanal","Gajapati","Ganjam","Jagatsinghpur","Jajpur","Jharsuguda","Kalahandi","Kandhamal","Kendrapara","Kendujhar","Khordha","Koraput","Malkangiri","Mayurbhanj","Nabarangpur","Nayagarh","Nuapada","Puri","Rayagada","Sambalpur","Subarnapur","Sundergarh"];
    const Punjab = ["Amritsar","Barnala","Bathinda","Faridkot","Fatehgarh Sahib","Fazilka","Firozpur","Gurdaspur","Hoshiarpur","Jalandhar","Kapurthala","Ludhiana","Mansa","Moga","Mohali","Muktsar","Pathankot","Patiala","Rupnagar","Sangrur","Shaheed Bhagat Singh Nagar","Tarn Taran"];
    const Rajasthan = ["Ajmer","Alwar","Banswara","Baran","Barmer","Bharatpur","Bhilwara","Bikaner","Bundi","Chittorgarh","Churu","Dausa","Dholpur","Dungarpur","Ganganagar","Hanumangarh","Jaipur","Jaisalmer","Jalore","Jhalawar","Jhunjhunu","Jodhpur","Karauli","Kota","Nagaur","Pali","Pratapgarh","Rajsamand","Sawai Madhopur","Sikar","Sirohi","Tonk","Udaipur"];
    const Sikkim = ["East Sikkim","North Sikkim","South Sikkim","West Sikkim"];
    const TamilNadu = ["Ariyalur","Chennai","Coimbatore","Cuddalore","Dharmapuri","Dindigul","Erode","Kanchipuram","Kanyakumari","Karur","Krishnagiri","Madurai","Nagapattinam","Namakkal","Nilgiris","Perambalur","Pudukkottai","Ramanathapuram","Salem","Sivaganga","Thanjavur","Theni","Thoothukudi","Tiruchirappalli","Tirunelveli","Tiruppur","Tiruvallur","Tiruvannamalai","Tiruvarur","Vellore","Viluppuram","Virudhunagar"];
    const Telangana = ["Adilabad","Bhadradri Kothagudem","Hyderabad","Jagtial","Jangaon","Jayashankar","Jogulamba","Kamareddy","Karimnagar","Khammam","Komaram Bheem","Mahabubabad","Mahbubnagar","Mancherial","Medak","Medchal","Nagarkurnool","Nalgonda","Nirmal","Nizamabad","Peddapalli","Rajanna Sircilla","Ranga Reddy","Sangareddy","Siddipet","Suryapet","Vikarabad","Wanaparthy","Warangal Rural","Warangal Urban","Yadadri Bhuvanagiri"];
    const Tripura = ["Dhalai","Gomati","Khowai","North Tripura","Sepahijala","South Tripura","Unakoti","West Tripura"];
    const UttarPradesh = ["Agra","Aligarh","Allahabad","Ambedkar Nagar","Amethi","Amroha","Auraiya","Azamgarh","Baghpat","Bahraich","Ballia","Balrampur","Banda","Barabanki","Bareilly","Basti","Bhadohi","Bijnor","Budaun","Bulandshahr","Chandauli","Chitrakoot","Deoria","Etah","Etawah","Faizabad","Farrukhabad","Fatehpur","Firozabad","Gautam Buddha Nagar","Ghaziabad","Ghazipur","Gonda","Gorakhpur","Hamirpur","Hapur","Hardoi","Hathras","Jalaun","Jaunpur","Jhansi","Kannauj","Kanpur Dehat","Kanpur Nagar","Kasganj","Kaushambi","Kheri","Kushinagar","Lalitpur","Lucknow","Maharajganj","Mahoba","Mainpuri","Mathura","Mau","Meerut","Mirzapur","Moradabad","Muzaffarnagar","Pilibhit","Pratapgarh","Raebareli","Rampur","Saharanpur","Sambhal","Sant Kabir Nagar","Shahjahanpur","Shamli","Shravasti","Siddharthnagar","Sitapur","Sonbhadra","Sultanpur","Unnao","Varanasi"];
    const Uttarakhand  = ["Almora","Bbreedshwar","Chamoli","Champawat","Dehradun","Haridwar","Nainital","Pauri","Pithoragarh","Rudraprayag","Tehri","Udham Singh Nagar","Uttarkashi"];
    const WestBengal = ["Alipurduar","Bankura","Birbhum","Cooch Behar","Dakshin Dinajpur","Darjeeling","Hooghly","Howrah","Jalpaiguri","Jhargram","Kalimpong","Kolkata","Malda","Murshidabad","Nadia","North 24 Parganas","Paschim Bardhaman","Paschim Medinipur","Purba Bardhaman","Purba Medinipur","Purulia","South 24 Parganas","Uttar Dinajpur"];
    const AndamanNicobar = ["Nicobar","North Middle Andaman","South Andaman"];
    const Chandigarh = ["Chandigarh"];
    const DadraHaveli = ["Dadra Nagar Haveli"];
    const DamanDiu = ["Daman","Diu"];
    const Delhi = ["Central Delhi","East Delhi","New Delhi","North Delhi","North East Delhi","North West Delhi","Shahdara","South Delhi","South East Delhi","South West Delhi","West Delhi"];
    const Lakshadweep = ["Lakshadweep"];
    const Puducherry = ["Karaikal","Mahe","Puducherry","Yanam"];
  
    const handleStateChange = (e) => {
      setSelectedState(e.target.value);
      setSelectedDistrict('');
    };

    const handleDistrictChange = (e) => {
        setSelectedDistrict(e.target.value);
      };

      const handleSearch = () => {
        // Logic for handling the search functionality goes here
        console.log('Search clicked! Implement your search logic here.');
      };
  
    const getDistricts = () => {
      switch (selectedState) {
        case "Andra Pradesh":
            return AndraPradesh;
            
        case "Arunachal Pradesh":
            return ArunachalPradesh;
            
        case "Assam":
            return Assam;
            
        case "Bihar":
            return Bihar;
            
        case "Chhattisgarh":
            return Chhattisgarh;
            
        case "Goa":
            return Goa;
            
        case  "Gujarat":
            return Gujarat;
            
        case "Haryana":
            return Haryana;
            
        case "Himachal Pradesh":
            return HimachalPradesh;
            
        case "Jammu and Kashmir":
            return JammuKashmir;
            
        case "Jharkhand":
            return Jharkhand;
            
        case  "Karnataka":
            return Karnataka;
            
        case "Kerala":
            return Kerala;
            
        case  "Madya Pradesh":
            return MadhyaPradesh;
            
        case "Maharashtra":
            return Maharashtra;
            
        case  "Manipur":
            return Manipur;
            
        case "Meghalaya":
            return Meghalaya ;
            
        case  "Mizoram":
            return Mizoram;
            
        case "Nagaland":
            return Nagaland;
            
        case  "Odisha":
            return Odisha;
            
        case "Punjab":
            return Punjab;
            
        case  "Rajasthan":
            return Rajasthan;
            
        case "Sikkim":
            return Sikkim;
            
        case  "Tamil Nadu":
            return TamilNadu;
            
        case  "Telangana":
            return Telangana;
            
        case "Tripura":
            return Tripura ;
            
        case  "Uttarakhand":
            return Uttarakhand;
            
        case  "Uttar Pradesh":
            return UttarPradesh;
            
        case "West Bengal":
            return WestBengal;
            
        case  "Andaman and Nicobar Islands":
            return AndamanNicobar;
            
        case "Chandigarh":
            return Chandigarh;
            
        case  "Dadar and Nagar Haveli":
            return DadraHaveli;
            
           
            
        case "Daman and Diu":
            return DamanDiu;
            
        case  "Delhi":
            return Delhi;
            
        case "Lakshadeep":
            return Lakshadweep ;
            
        
        case "Puducherry":
          return Puducherry;
        default:
          return [];
      }
    };


    
  
    // Rest of your component
  
    
    return (
        <>
        <Nav/>
          <div className="mainf">
            <form className="mainform">
              {/* Dropdown to select state */}
              <div className="form-group col-md-4">
                <select className="form-control" value={selectedState} onChange={handleStateChange}>
                  <option value="">Select State</option>
                  {states.map((state, index) => (
                    <option key={index} value={state}>
                      {state}
                    </option>
                  ))}
                </select>
              </div>
    
              {/* Dropdown to select district */}
              <div className="distr">
                <select className="form-control" value={selectedDistrict} onChange={handleDistrictChange}>
                  <option value="">Select District</option>
                  {getDistricts().map((district, index) => (
                    <option key={index} value={district}>
                      {district}
                    </option>
                  ))}
                </select>
              </div>
    
    
              {/* Search button */}
              <button className="bmainf" onClick={handleSearch}>
                Search
              </button>
            </form>
          </div>
          
    
          {/* Dogs and Cats content */}
          <div>
          <div className="mcont">
          <Link to="/AdoptaDog" >
          <div className="dogadp" id="dogadp">
            <br />
            <p className="adptext">Dogs</p>
          </div>
        </Link>
        <Link to="/AdoptaCat">
          <div className="catadp" id="catadp">
            <br />
            <p className="adptext">Cats</p>
          </div>
        </Link>
          </div>
    </div>
          
          <div className="megacontainer">
      <div className="container91">
        <div className="moref1">
          <h2 style={{ color: 'rgb(71, 196, 245)' }}>Age</h2>
          <hr style={{ color: 'gray' }} />
          <input type="checkbox" id="0-3Months" className="customCheckbox" />
          <label htmlFor="0-3Months" className="customLabel">0-3 Months</label><br />
          <hr style={{ color: 'gray' }} />
          <input type="checkbox" id="3-6Months" className="customCheckbox" />
          <label htmlFor="3-6Months" className="customLabel">3-6 Months</label><br />
          <hr style={{ color: 'gray' }} />
          <input type="checkbox" id="6-12Months" className="customCheckbox"/>
          <label htmlFor="6-12Months"  className="customLabel">6-12 Months</label><br />
          <hr style={{ color: 'gray' }} />
          <input type="checkbox" id="1-2Years" className="customCheckbox"/>
          <label htmlFor="1-2Years" className="customLabel">1-2 Years</label><br />
          <hr style={{ color: 'gray' }} />
          <input type="checkbox" id="2PlusYears " className="customCheckbox"/>
          <label htmlFor="2PlusYears" className="customLabel">2+ Years</label><br />
          <hr style={{ color: 'gray' }} />
        </div>
        <div className="moref2">
          <h2 style={{ color: 'rgb(71, 196, 245)' }}>Gender</h2>
          <hr style={{ color: 'gray' }} />
          <input type="checkbox" id="male" className="customCheckbox"/>
          <label htmlFor="male" className="customLabel">Male</label><br />
          <hr style={{ color: 'gray' }} />
          <input type="checkbox" id="female" className="customCheckbox" />
          <label htmlFor="female" className="customLabel">Female</label><br />
          <hr style={{ color: 'gray' }} />
        </div>
      </div>
    
    



    <div>
      <div className="container90">
      <div className="cards" onClick={handleCardClick}>
          <div className="sec1">
            <img src="dogpetsample.jpeg" alt="" />
          </div>
          <div className="sec2">
            <div className="Name"><b>Name</b></div>
            <div className="sec2a">
              <div className="Breed">Breed</div>
              <div className="Gender">Gender</div>
              <div className="Age">Age</div>
            </div>
            <div className="sec2b">
              <div className="Weight">Weight</div>
              <div className="Location">Location</div>
            </div>
          </div>
        </div>
        <div className="cards" onClick={handleCardClick}>
          <div className="sec1">
            <img src="catpetsample.jpg" alt="" />
          </div>
          <div className="sec2">
            <div className="Name"><b>Name</b></div>
            <div className="sec2a">
              <div className="Breed">Breed</div>
              <div className="Gender">Gender</div>
              <div className="Age">Age</div>
            </div>
            <div className="sec2b">
              <div className="Weight">Weight</div>
              <div className="Location">Location</div>
            </div>
          </div>
        </div>
        <div className="cards" onClick={handleCardClick}>
          <div className="sec1">
            <img src="French-bulldog.jpg" alt="" />
          </div>
          <div className="sec2">
            <div className="Name"><b>Name</b></div>
            <div className="sec2a">
              <div className="Breed">Breed</div>
              <div className="Gender">Gender</div>
              <div className="Age">Age</div>
            </div>
            <div className="sec2b">
              <div className="Weight">Weight</div>
              <div className="Location">Location</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    
    <Footer/>
        </>
      );
    }
    
    export default Adopt;