import React from "react";

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {}
  }

  render() {
    const { teamName } = this.props;
    return (
      <div>
        <h1>
          Hello Team {teamName}!
        </h1>
      </div>
    );
  }
}

export default App;