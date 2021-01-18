import { connect } from 'react-redux';
import setSelectedImage from '../../actions/productDetail/selectImage';
import Carousel from '../../components/ProductDetail/Carousel.jsx';

const mapDispatchToProps = (dispatch) => ({
  selectImage: (image, i) => dispatch(setSelectedImage(image, i)),
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
