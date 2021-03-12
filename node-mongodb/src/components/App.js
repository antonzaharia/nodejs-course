import React from "react";
import Header from "./Header";
import ContestList from "./ContestList";

class App extends React.Component {
  state = {
    contests: this.props.initialContest,
    pageHeader: "Naming Contests",
  };
  componentDidMount() {}

  render() {
    return (
      <div className="App">
        <Header message={this.state.pageHeader} />
        <ContestList contests={this.state.contests} />
      </div>
    );
  }
}
export default App;
