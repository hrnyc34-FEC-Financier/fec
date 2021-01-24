import { connect } from 'react-redux';
import ReviewModal from '../../components/RatingsReviews/postReview/ReviewModal.jsx';
import postReview from '../../actions/RatingsReviews/postReview.js';

const mapStateToProps = (state) => ({
  currentProductId: state.currentProductId,
  currentProduct: state.currentProduct,
  productCharacteristics: state.productCharacteristics,
});

const mapDispatchToProps = (dispatch) => ({

  handleSubmitReview: (review) => {
    dispatch(postReview(review));
  }

});

const ReviewModalContainer = connect(mapStateToProps, mapDispatchToProps)(ReviewModal);

export default ReviewModalContainer;