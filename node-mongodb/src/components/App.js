import React from "react";
import Header from "./Header";
import ContestPreview from "./ContestPreview";

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
        <div>
          {this.state.contests.map((contest) => (
            <ContestPreview key={contest.id} contest={contest} />
          ))}
        </div>
      </div>
    );
  }
}
export default App;
