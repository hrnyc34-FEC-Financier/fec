import { connect } from 'react-redux';
import AddToCart from '../../components/ProductDetail/AddToCart.jsx';
import addToOutfitList from '../../actions/relatedItems/addYourOutfitList';

const mapDispatchToProps = (dispatch) => ({
  addToOutfitList: (productId) => dispatch(addToOutfitList(productId)),
});

const mapStateToProps = (state) => ({
  currentStyle: state.currentStyle,

  currentProduct: state.currentProduct,
  outfitList: state.yourOutfitList,
});

const AddToCartContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddToCart);

export default AddToCartContainer;
