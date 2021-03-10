import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

const Header = ({ message }) => {
  return <h2 className="text-center">{message}</h2>;
};
Header.propTypes = {
  message: PropTypes.string,
};
Header.defaultProps = {
  message: "Hello!",
};

const App = () => {
  return (
    <div className="App">
      <Header message="Naming Contest" />
      <div> Content </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
