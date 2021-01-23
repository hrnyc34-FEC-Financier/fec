import React from "react";
import searchEngine from "../../lib/searchEngine.js";
import SearchBar from "./SearchBar.jsx"
import QuestionList from "./QuestionList.jsx"

class QuestionModule extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      questions: []
    }
  }

  componentDidMount() {
    searchEngine.get(`qa/questions`, {product_id: 11001})
    .then(response => this.setState({questions: response.data.results})

  render() {

    return (
      <div id="questionModule">
        <h2>QUESTIONS & ANSWERS</h2>
        <SearchBar />
        <QuestionList questions={this.state.questions} />
        <button>MORE ANSWERED QUESTIONS</button><button>ADD A QUESTION +</button>
      </div>
    );
  }
}

export default QuestionModule;