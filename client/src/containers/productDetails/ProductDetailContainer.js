import { connect } from 'react-redux';
import ProductDetailMain from '../../components/ProductDetail/ProductDetailMain.jsx';

const mapStateToProps = (state) => ({
  productList: state.productList,
  currentProduct: state.currentProduct,
  currentProductId: state.currentProductId,
  currentStyle: state.currentStyle,
  currentStyleList: state.currentStyleList,
  currentImage: state.currentImage,
  thumbGallery: state.thumbGallery,
});

const ProductDetailContainer = connect(mapStateToProps)(ProductDetailMain);

export default ProductDetailContainer;
