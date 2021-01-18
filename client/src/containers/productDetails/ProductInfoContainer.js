import { connect } from 'react-redux';
import ProductInfo from '../../components/ProductDetail/ProductInfo.jsx';

const mapStateToProps = (state) => ({
  currentProduct: state.currentProduct,
  currentStyle: state.currentStyle,
});

const ProductInfoContainer = connect(mapStateToProps)(ProductInfo);

export default ProductInfoContainer;
