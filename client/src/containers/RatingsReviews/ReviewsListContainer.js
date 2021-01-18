import { connect } from 'react-redux';
import ReviewsList from '../../components/RatingsReviews/ReviewsList.jsx';
import setReviewsList from '../../actions/RatingsReviews/setReviewsList.js';

const mapStateToProps = (state) => ({
  currentProductId: state.currentProductId,
  reviewsList: state.reviewsList,
  reviewDisplayLimiter: state.reviewDisplayLimiter,
  reviewFeedback: state.reviewFeedbackReducer,
  reviewHelpful: state.reviewHelpful,
  reviewImageModal: state.reviewImageModal,
  reviewReported: state.reviewReported,
  reviewScroll: state.reviewScroll,
  reviewSort: state.reviewSort
});

const ReviewsListContainer = connect(mapStateToProps)(ReviewsList);

export default ReviewsListContainer;