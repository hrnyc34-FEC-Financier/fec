import { connect } from 'react-redux';
import AddToCart from '../../components/ProductDetail/AddToCart.jsx';

const mapStateToProps = (state) => ({
  currentProductId: state.currentProductId,
  currentStyle: state.currentStyle,
});

const AddToCartContainer = connect(mapStateToProps)(AddToCart);

export default AddToCartContainer;
