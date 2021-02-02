import { connect } from 'react-redux';
import AddToCart from '../../components/ProductDetail/AddToCart.jsx';
import addToOutfitList from '../../actions/relatedItems/addYourOutfitList';

const mapDispatchToProps = (dispatch) => ({
  addToOutfitList: (productId, styleList, starRating) => dispatch(addToOutfitList(productId, styleList, starRating)),
});

const mapStateToProps = (state) => ({
  currentStyle: state.currentStyle,

  currentProduct: state.currentProduct,
  outfitList: state.yourOutfitList,
  currentStyleList: state.currentStyleList,
  productAvgStarRating: state.productAvgStarRating,
});

const AddToCartContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddToCart);

export default AddToCartContainer;
