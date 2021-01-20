import { connect } from 'react-redux';
import setSelectedImage from '../../actions/productDetail/selectImage';
import ImageGallery from '../../components/ProductDetail/ImageGallery.jsx';
import changeView from '../../actions/productDetail/currentView.js';

const mapDispatchToProps = (dispatch) => ({
  selectImage: (image, i) => dispatch(setSelectedImage(image, i)),
  toggleView: (view) => dispatch(changeView(!view)),
});

const mapStateToProps = (state) => ({
  currentImage: state.currentImage,
  thumbGallery: state.thumbGallery,
  currentImageIndex: state.currentImageIndex,
  view: state.view,
});

const ImageGalleryContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ImageGallery);

export default ImageGalleryContainer;
