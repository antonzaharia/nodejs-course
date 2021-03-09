import React from "react";
import ReactDOM from "react-dom";

const Header = ({ message }) => {
  return <h2 className="text-center">{message}</h2>;
};
App.propTypes = {
  message: React.PropTypes.string,
};
App.defaultProps = {
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
