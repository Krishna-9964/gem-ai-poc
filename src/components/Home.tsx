import "./Home.scss";
import logo from "../lloyds/logo.png";
import { useEffect, useRef, useState } from "react";
import axios from "axios";

const Home = () => {
  const initialData = [
    "ArtificialIntelligence",
    "MachineLearning",
    "Blockchain",
    "CloudComputing",
    "Cybersecurity",
    "BigData",
    "InternetOfThings",
    "VirtualReality",
    "AugmentedReality",
    "QuantumComputing",
    "5G",
    "Automation",
    "DevOps",
    "DataScience",
    "Cryptocurrency",
    "SoftwareEngineering",
    "WebDevelopment",
    "MobileApps",
    "Networking",
    "Robotics",
    "DigitalTransformation",
    "EdgeComputing",
    "SmartDevices",
    "WearableTech",
    "NaturalLanguageProcessing",
  ];
  const [suggestionData, setSuggestionData] = useState<string[]>([]);
  const [result, setResult] = useState({loading : false, error : false, data : null})
  

  const askAnything = async (question : string) => {
    // try{
        // setResult({loading : true, error : false, data : null})
        // const response =
         await axios.post('http://34.147.185.183:8003/ask_database', {
          question: question
        },{
          headers:{
            'Content-Type':'application/json'
          }
        })
        // .then(response => setResult({loading : true, error : false, data : response.data.response}))
        // .catch(error => setResult({loading : false, error : true, data : null}));
        .then(resopnse => console.log(resopnse.data.response))
        .catch(error => console.log('error', error));
        
    // }
    // catch(error){
    //   console.error(error);
    //   setResult({loading : false, error : true, data : null});
    //   throw error;
    // }
  }
  // const makeRequest = () => {
  //   axios
  //     .get("http://localhost:3001/test")
  //     .then((response) => {
  //       console.log(response.data);
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching data:", error);
  //       console.log("Failed to fetch");
  //     });
  // };

  useEffect(()=> {
    askAnything('What are top 5 transactions?');  
  })
    

  const handleSearchInput = (event:any) => {
    let filteredList = initialData
    const searchString = event.target.value;
    console.log(searchString)

    filteredList = filteredList.filter(item => 
      item.toLowerCase().includes(searchString.toLowerCase())
    )
    console.log(typeof filteredList)
    setSuggestionData(filteredList)
  }

  return (
    <div className="outer-container">
      <div className="masthead">
        <div className="container-fluid header">
          <img src={logo} alt="logo" className="lbgLogo" />
          <div className="header-second-half">
            <h5 className="lbgText">COMMERCIAL BANKING</h5>
            <span className="phoneBtn"><i className="fa-solid fa-phone"/></span>
            <button type="button" className="logoutBtn btn">
              <i className="fa-solid fa-lock"/>Logout</button>
          </div>
        </div>
        <div className="navbar">
          <ul>
            <li>Home</li>
            <li>Admin</li>
            <li>Payments</li>
            <li>Reports</li>
          </ul>
        </div>
      </div>
      <div className="container-fluid main-content">
        {/* <div className="search-bar d-flex">
          <input
            className="input-text"
            type="text"
            placeholder="Ask anything"
            value={promptText}
            onChange={(event) => setPromptText(event.target.value)}
          />
          <button type="button" className="btn btn-outline-primary" onClick={makeRequest}>
            Search
          </button>
        </div> */}
        {/* <p>{result.loading ? "Loading..." : result.error ? "Error" : result.data ? result.data : "hello"}</p> */}
        <div className="search-container">
          <form action="/search" method="GET">
          <i className="fa-solid fa-magnifying-glass fa-xl"/>
            <input
              type="text"
              name="q"
              className="search-input"
              placeholder="Ask anything"
              onChange={handleSearchInput}
            />
            <span><i className="fa-solid fa-microphone fa-lg"/></span>
            <span className="search-btn"><i className="fa-solid fa-arrow-up"></i></span>

          </form>
          {/* {suggestionData.length > 0 && 
          <ul className="suggestion-container">
            {suggestionData.map(item => <li>{item}</li>)}
          </ul>} */}
          
        </div>
      </div>
      <div className="navbar">
        <ul>
          <li>Cookies</li>
          <li>Commercial banking</li>
          <li>Security</li>
          <li>Legacy</li>
          <li>Privacy</li>
        </ul>
      </div>
    </div>
  );
};

export default Home;


// curl -X POST http://34.147.185.183:8000/ask_database -H "Content-Type: application/json" -d '{"question":"What is my average balance?"}'