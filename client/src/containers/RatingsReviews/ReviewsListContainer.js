import { connect } from 'react-redux';
import ReviewsList from '../../components/RatingsReviews/ReviewsList/ReviewsList.jsx';
import setReviewsList from '../../actions/RatingsReviews/setReviewsList.js';
import reportReview from '../../actions/RatingsReviews/reportReview.js';
import helpfulReview from '../../actions/RatingsReviews/helpfulReview.js';

const mapStateToProps = (state) => ({
  currentProductId: state.currentProductId,
  reviewsList: state.reviewsList,
  reviewDisplayLimiter: state.reviewDisplayLimiter,
  reviewFeedback: state.reviewFeedbackReducer,
  reviewImageModal: state.reviewImageModal,
  reviewScroll: state.reviewScroll,
  reviewSort: state.reviewSort
});

const mapDispatchToProps = (dispatch) => ({
  handleHelpfulReview: (review_id) => {
    dispatch(helpfulReview(review_id));
  },
  handleReportingReview: (product_id, review_id) => {
    dispatch(reportReview(product_id, review_id));
  },
});

const ReviewsListContainer = connect(mapStateToProps, mapDispatchToProps)(ReviewsList);

export default ReviewsListContainer;