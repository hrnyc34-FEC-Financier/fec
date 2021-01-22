import { connect } from 'react-redux';
import ReviewModal from '../../components/RatingsReviews/postReview/ReviewModal.jsx';
import postReview from '../../actions/RatingsReviews/postReview.js';

const mapStateToProps = (state) => ({
  currentProduct: state.currentProduct,
  productCharacteristics: state.productCharacteristics,
  reviewModal: state.reviewModal,
  reviewRating: state.reviewRating,
  reviewCharacteristics: state.reviewCharacteristics,
  reviewSummary: state.reviewSummary,
  reviewBody: state.reviewBody,
  reviewPhotos: state.reviewPhotos,
  reviewRecommendation: state.reviewRecommendation,
  reviewUser: state.reviewUser,
  reviewEmail: state.reviewEmail,
  reviewWordCount: state.reviewWordCount
});

const mapDispatchToProps = (dispatch) => ({
  handleSubmitReview: (currentProductId, reviewInfo) => {
    dispatch(postReview(currentProductId, reviewInfo));
  }
});

const ReviewModalContainer = connect(mapStateToProps, mapDispatchToProps)(ReviewModal);

export default ReviewModalContainer;