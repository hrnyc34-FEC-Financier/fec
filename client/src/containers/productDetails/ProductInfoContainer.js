import { connect } from 'react-redux';
import ProductInfo from '../../components/ProductDetail/ProductInfo.jsx';

const mapStateToProps = (state) => ({
  currentProduct: state.currentProduct,
  currentStyle: state.currentStyle,
  productAvgStarRating: state.productAvgStarRating,
});

const ProductInfoContainer = connect(mapStateToProps)(ProductInfo);

export default ProductInfoContainer;
