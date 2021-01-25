import { connect } from 'react-redux';
import ReviewsList from '../../components/RatingsReviews/ReviewsList/ReviewsList.jsx';
import helpfulReview from '../../actions/RatingsReviews/helpfulReview.js';
import reportReview from '../../actions/RatingsReviews/reportReview.js';
import sortSelect from '../../actions/RatingsReviews/sortSelect.js';

const mapStateToProps = (state) => ({
  currentProductId: state.currentProductId,
  ratingsFilter: state.ratingsFilter,
  productRatings: state.productRatings,
  reviewsList: state.reviewsList,
  reviewSort: state.reviewSort
});

const mapDispatchToProps = (dispatch) => ({

  handleHelpfulReview: (review_id) => {
    dispatch(helpfulReview(review_id));
  },

  handleReportReview: (product_id, review_id) => {
    dispatch(reportReview(product_id, review_id));
  },

  handleSortSelect: (product_id, reviewSort) => {
    dispatch(sortSelect(product_id, reviewSort));
  }

});

const ReviewsListContainer = connect(mapStateToProps, mapDispatchToProps)(ReviewsList);

export default ReviewsListContainer;