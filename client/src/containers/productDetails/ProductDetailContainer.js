import { connect } from 'react-redux';
import ProductDetailMain from '../../components/ProductDetail/ProductDetailMain.jsx';
const mapStateToProps = (state) => ({
  productList: state.productList,
});

const ProductDetailContainer = connect(mapStateToProps)(ProductDetailMain);

export default ProductDetailContainer;
