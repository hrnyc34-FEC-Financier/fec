import { connect } from 'react-redux';
import setSelectedImage from '../../actions/productDetail/selectImage';
import Carousel from '../../components/ProductDetail/Carousel.jsx';
import changeImageIndex from '../../actions/productDetail/currentImageIndex.js';
const mapDispatchToProps = (dispatch) => ({
  selectImage: (i) => dispatch(changeImageIndex(i)),
});

const mapStateToProps = (state) => ({
  currentImage: state.currentImage,
  thumbGallery: state.thumbGallery,
  currentImageIndex: state.currentImageIndex,
});

const CarouselContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Carousel);

export default CarouselContainer;
