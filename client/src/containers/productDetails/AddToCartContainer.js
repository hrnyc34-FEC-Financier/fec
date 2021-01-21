import { connect } from 'react-redux';
import AddToCart from '../../components/ProductDetail/AddToCart.jsx';
import changeSize from '../../actions/productDetail/currentSize.js';

const mapStateToProps = (state) => ({
  currentStyle: state.currentStyle,
});

const AddToCartContainer = connect(mapStateToProps)(AddToCart);

export default AddToCartContainer;
