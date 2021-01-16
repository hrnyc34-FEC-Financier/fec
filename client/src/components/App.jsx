import React from "react";
import QuestionModule from "./QuestionsAnswers/QuestionModule.jsx";
import searchEngine from "../lib/searchEngine.js";


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {}
  }

  render() {

    return (
      <div id="container">
        <h1 id="hello">
          Hello Team!
        </h1>
        <QuestionModule />
      </div>
    );
  }
}

export default App;