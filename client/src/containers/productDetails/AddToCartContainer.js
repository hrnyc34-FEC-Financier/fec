import { connect } from 'react-redux';
import AddToCart from '../../components/ProductDetail/AddToCart.jsx';
import changeSize from '../../actions/productDetail/currentSize.js';

const mapDispatchToProps = (dispatch) => ({
  sizeChange: (e) => dispatch(changeSize(e.target.value)),
});

const mapStateToProps = (state) => ({
  currentProductId: state.currentProductId,
  currentStyle: state.currentStyle,
  currentSku: state.currentSize,
});

const AddToCartContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddToCart);

export default AddToCartContainer;
