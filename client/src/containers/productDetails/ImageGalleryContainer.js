import { connect } from 'react-redux';
import ImageGallery from '../../components/ProductDetail/ImageGallery.jsx';

const mapStateToProps = (state) => ({
  productList: state.productList,
  currentProduct: state.currentProduct,
  currentProductId: state.currentProductId,
  currentStyle: state.currentStyle,
  currentStyleList: state.currentStyleList,
  currentImage: state.currentImage,
  thumbGallery: state.thumbGallery,
});

const ImageGalleryContainer = connect(mapStateToProps)(ImageGallery);

export default ImageGalleryContainer;
