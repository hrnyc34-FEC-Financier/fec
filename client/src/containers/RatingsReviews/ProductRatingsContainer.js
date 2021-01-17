import { connect } from 'react-redux';
import ProductRatings from '../../components/RatingsReviews/ProductRatings.jsx';
import setRatings from '../../actions/RatingsReviews/setRatings.js';

const mapStateToProps = (state) => ({
  currentProductId: state.currentProductId,
  productRatings: state.productRatings,
  productRecommended: state.productRecommended,
  productCharacteristics: state.productCharacteristics,
  productAvgRating: state.productAvgRating,
  ratingsFilter: state.ratingsFilter
});

const mapDispatchToProps = (dispatch) => {
  return {
    handleProductRatingsChange: (product_id) => {
      dispatch(setRatings(product_id));
    },
  };
};

const ProductRatingsContainer = connect(mapStateToProps, mapDispatchToProps)(ProductRatings);

export default ProductRatingsContainer;