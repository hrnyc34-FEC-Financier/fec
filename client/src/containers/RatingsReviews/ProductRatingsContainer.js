import { connect } from 'react-redux';
import ProductRatings from '../../components/RatingsReviews/ProductRatings/ProductRatings.jsx';
// import setRatings from '../../actions/RatingsReviews/setRatings.js';
// import changeProductRating from '../../actions/RatingsReviews/productRatings/productRatings.js';
// import changeProductRecommended from '../../actions/RatingsReviews/productRatings/productRecommended.js';
// import changeProductCharacteristics from '../../actions/RatingsReviews/productRatings/productCharacteristics.js';
// import changeProductAvgRating from '../../actions/RatingsReviews/productRatings/productAvgRating.js';
// import changeRatingsFilter from '../../actions/RatingsReviews/productRatings/ratingsFilter.js';

const mapStateToProps = (state) => ({
  currentProductId: state.currentProductId,
  productRatings: state.productRatings,
  productRecommended: state.productRecommended,
  productCharacteristics: state.productCharacteristics,
  productAvgRating: state.productAvgRating,
  productAvgStarRating: state.productAvgStarRating,
  ratingsFilter: state.ratingsFilter
});

const ProductRatingsContainer = connect(mapStateToProps)(ProductRatings);

export default ProductRatingsContainer;