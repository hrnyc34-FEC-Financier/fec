import { connect } from 'react-redux';
import setSelectedImage from '../../actions/productDetail/selectImage';
import thumbGallery from '../../components/ProductDetail/ThumbGallery.jsx';

const mapDispatchToProps = (dispatch) => ({
  selectImage: (image, i) => dispatch(setSelectedImage(image, i)),
});

const mapStateToProps = (state) => ({
  currentImage: state.currentImage,
  thumbGallery: state.thumbGallery,
  currentImageIndex: state.currentImageIndex,
});

const thumbGalleryContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(thumbGallery);

export default thumbGalleryContainer;
