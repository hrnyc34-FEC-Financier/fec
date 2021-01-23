import { connect } from 'react-redux';
import ProductRatings from '../../components/RatingsReviews/ProductRatings/ProductRatings.jsx';
import { changeRatingsFilter, resetRatingsFilter } from '../../actions/RatingsReviews/productRatings/ratingsFilter.js';

const mapStateToProps = (state) => ({
  currentProductId: state.currentProductId,
  productRatings: state.productRatings,
  productRecommended: state.productRecommended,
  productCharacteristics: state.productCharacteristics,
  productAvgRating: state.productAvgRating,
  productAvgStarRating: state.productAvgStarRating,
  ratingsFilter: state.ratingsFilter
});

const mapDispatchToProps = (dispatch) => ({

  handleRatingsFilter: (ratingsSelected) => {
    dispatch(changeRatingsFilter(ratingsSelected));
  },

  handleResetRatingsFilter: () => {
    dispatch(resetRatingsFilter());
  }

});

const ProductRatingsContainer = connect(mapStateToProps, mapDispatchToProps)(ProductRatings);

export default ProductRatingsContainer;