import axios from "axios";
import { useState } from "react";
import logo from "../lloyds/logo.png";
import "./Home.scss";
import { Loading } from "./Loader";
import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";

interface chatItem {
  query: string;
  response: string;
  error: string;
}

const Home = () => {
  const [suggestionData, setSuggestionData] = useState<string[]>([]);
  const [chatHistory, setChatHistory] = useState<chatItem[]>([]);
  const [currentChat, setCurrentChat] = useState<chatItem>({
    query: "",
    response: "",
    error: "",
  });
  const [inputText, setInputText] = useState("");

  const askAnything = async (question: string) => {
    await axios
      .post(
        "http://34.105.147.178:8002/ask_database",
        {
          question: question,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        // console.log(response.data.response);
        setCurrentChat({
          query: inputText,
          response: response.data.response || response.data.error,
          error: "",
        });
      })
      .catch((error) => {
        console.log("error", error);
        setCurrentChat({
          query: inputText,
          response: "ERROR",
          error: error.message,
        });
      });
  };
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

  // useEffect(() => {
  //   askAnything("What are top 5 transactions?");
  // });

  const handleKeyPress = (event: any) => {
    if (inputText === "") {
      return;
    }

    if (event.key === "Enter") {
      setCurrentChat({ query: inputText, response: "LOADING", error: "" });
      askAnything(inputText);
      setInputText("");

      setChatHistory((prev) => [...prev, currentChat]);
    }
  };

  const handleButtonClick = () => {
    if (inputText === "") {
      return;
    }
    setCurrentChat({ query: inputText, response: "LOADING", error: "" });
    askAnything(inputText);
    setInputText("");

    setChatHistory((prev) => [...prev, currentChat]);
  };

  const handleSearchInput = (event: any) => {
    // let filteredList = initialData;
    const searchString = event.target.value;
    setInputText(searchString);
    // console.log(searchString);

    // filteredList = filteredList.filter((item) =>
    //   item.toLowerCase().includes(searchString.toLowerCase())
    // );
    // console.log(typeof filteredList);
    // setSuggestionData(filteredList);
  };

  return (
    <div className="outer-container">
      <div className="masthead">
        <div className="container-fluid header">
          <img src={logo} alt="logo" className="lbgLogo" />
          <div className="header-second-half">
            <h5 className="lbgText">COMMERCIAL BANKING</h5>
            <span className="phoneBtn">
              <i className="fa-solid fa-phone" />
            </span>
            <button type="button" className="logoutBtn btn">
              <i className="fa-solid fa-lock" />
              Logout
            </button>
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

        <div className="chat-box">
          {currentChat.query !== "" && currentChat.response !== "" && (
            <div className="chat-container">
              <div className="chat-history">
                {chatHistory.length >= 1 &&
                  chatHistory.map((chat) => {
                    if (chat.query !== "") {
                      return (
                        <>
                          <div className="query">
                            <p>{chat.query}</p>
                          </div>
                          <div className="response">
                            <ReactMarkdown rehypePlugins={[rehypeHighlight]}>
                              {chat.response}
                            </ReactMarkdown>
                          </div>
                        </>
                      );
                    }
                  })}
              </div>

              <div className="query">
                <p>{currentChat.query}</p>
              </div>
              <div className="response">
                {currentChat.response === "LOADING" ? (
                  <Loading />
                ) : currentChat.response === "ERROR" ? (
                  <p style={{ color: "red" }}>{currentChat.error}</p>
                ) : (
                  <ReactMarkdown rehypePlugins={[rehypeHighlight]}>
                    {currentChat.response}
                  </ReactMarkdown>
                )}
              </div>
            </div>
          )}
          <div className="search-container">
            <div className="form">
              <i className="fa-solid fa-magnifying-glass fa-xl" />
              <input
                type="text"
                className="search-input"
                placeholder="Ask anything"
                onChange={handleSearchInput}
                value={inputText}
                onKeyPress={handleKeyPress}
              />
              <span>
                <i className="fa-solid fa-microphone fa-lg" />
              </span>
              <span className="search-btn" onClick={handleButtonClick}>
                <i className="fa-solid fa-arrow-up"></i>
              </span>
            </div>
            {/* {suggestionData.length > 0 && 
          <ul className="suggestion-container">
            {suggestionData.map(item => <li>{item}</li>)}
          </ul>} */}
          </div>
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
