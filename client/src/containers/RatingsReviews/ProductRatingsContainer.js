import { connect } from 'react-redux';
import ProductRatings from '../../components/RatingsReviews/ProductRatings.jsx';
import setRatings from '../../actions/RatingsReviews/setRatings.js';
import changeProductRating from '../../actions/RatingsReviews/productRatings/productRatings.js';
import changeProductRecommended from '../../actions/RatingsReviews/productRatings/productRecommended.js';
import changeProductCharacteristics from '../../actions/RatingsReviews/productRatings/productCharacteristics.js';
import changeProductAvgRating from '../../actions/RatingsReviews/productRatings/productAvgRating.js';
import changeRatingsFilter from '../../actions/RatingsReviews/productRatings/ratingsFilter.js';

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
    changeProductAvgRating: (productAvgRating) => {
      dispatch(changeProductAvgRating(productAvgRating));
    }
  };
};

const ProductRatingsContainer = connect(mapStateToProps, mapDispatchToProps)(ProductRatings);

export default ProductRatingsContainer;