import { connect } from 'react-redux';
import ReviewsList from '../../components/RatingsReviews/ReviewsList.jsx';
import setReviewsList from '../../actions/RatingsReviews/setReviewsList.js';

const mapStateToProps = (state) => ({
  currentProductId: state.currentProductId,
  reviewsList: state.reviewsList,
  // reviewDisplayLimiter: state.reviewDisplayLimiter,
  // reviewScroll: state.reviewScroll
});

const mapDispatchToProps = (dispatch) => {
  return {
    handleReviewsListChange: (product_id) => {
      dispatch(setReviewsList(product_id));
    },
  };
};

const ReviewsListContainer = connect(mapStateToProps, mapDispatchToProps)(ReviewsList);

export default ReviewsListContainer;