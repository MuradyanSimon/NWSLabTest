import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes/Routes";
import Navbar from "./components/NavBar";
import { connect } from "react-redux";
import { createAddCategories } from "./Redux/Actions";
import { useEffect } from "react";

const App = (props) => {
  const dispatch = props.dispatch;
  useEffect(() => {
    let myHeaders = new Headers();
    myHeaders.append("x-api-key", "cb0af4f5-b816-4a85-9834-0a2cf513dd95");
    myHeaders.append("Content-Type", "application/json");

    let requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch("https://api.thecatapi.com/v1/categories", requestOptions)
      .then((response) => response.json())
      .then((result) => dispatch(createAddCategories(result)))
      .catch((error) => console.log("error", error));
    // eslint-disable-next-line
  }, []);

  return (

      <BrowserRouter>
        <div className="App">
            <Navbar />
            <Routes />{" "}
        </div>
      </BrowserRouter>

  );
};

export default connect()(App);
