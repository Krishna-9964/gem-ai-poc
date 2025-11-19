import Home from "./components/Home";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FasterPayment from "./components/FasterPayment";
import MastHead from "./components/MastHead";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <div className="outer-container">
        <MastHead />
        <div className="container-fluid main-content">
          <Routes>
            <Route path="/" element={getComponent("/home")} />
            <Route
              path="/faster-payment"
              element={getComponent("/faster-payment")}
            />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

const getComponent = (path: string) => {
  switch (path) {
    case "/home":
      return <Home />;
      break;
    case "/faster-payment":
      return <FasterPayment />;
      break;
    default:
      return <h3 style={{ color: "red" }}>{`The url ${path} not found.`}</h3>;
  }
};
