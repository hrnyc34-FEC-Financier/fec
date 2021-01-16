import { connect } from 'react-redux';
import ProductDetailMain from '../../components/ProductDetail/ProductDetailMain.jsx';
const mapStateToProps = (state) => ({
  productList: state.productList,
  currentProduct: state.currentProduct,
  currentProductId: state.currentProductId,
});

const ProductDetailContainer = connect(mapStateToProps)(ProductDetailMain);

export default ProductDetailContainer;
