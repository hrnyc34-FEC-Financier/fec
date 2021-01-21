import { connect } from 'react-redux';
import QuestionModule2 from "../../components/QuestionsAnswers/QuestionModulev2.jsx"

const mapStateToProps = (state) => ({
  currentProductId: state.currentProductId,
  questionList: state.questionList,
  showAddQuestionModal: state.showAddQuestionModal,
  currentProduct: state.currentProduct
});

const QAModuleContainer = connect(mapStateToProps)(QuestionModule2);


export default QAModuleContainer;