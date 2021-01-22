import { connect } from 'react-redux';
import ReviewModal from '../../components/RatingsReviews/postReview/ReviewModal.jsx';
import postReview from '../../actions/RatingsReviews/postReview.js';

const mapStateToProps = (state) => ({
  currentProduct: state.currentProduct,
  productCharacteristics: state.productCharacteristics,
});

const mapDispatchToProps = (dispatch) => ({
  handleSubmitReview: (e, currentProductId, reviewInfo) => {
    dispatch(postReview(e, currentProductId, reviewInfo));
  }
});

const ReviewModalContainer = connect(mapStateToProps, mapDispatchToProps)(ReviewModal);

export default ReviewModalContainer;