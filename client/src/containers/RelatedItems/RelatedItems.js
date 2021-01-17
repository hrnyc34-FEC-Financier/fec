import { connect } from 'react-redux';
import searchRelatedItems from './../../actions/relatedItems/searchRelatedItems.js';
import RelatedItems from '../../components/RelatedItems/RItem.jsx';
import currentProduct from './../../actions/productDetail/selectProduct.js';

const mapStateToProps = ( state ) => ({
  // productList: state.productList,
  currentProduct: state.currentProduct,
  relatedProductList: state.relatedProductList,
  relatedProductCarouselList: state.relatedProductCarouselList,
  relatedProductStarModal: state.relatedProductStarModal,
  yourOutfitList: state.yourOutfitList,
  reviewsList: state.reviewsList,
});

const mapDispatchToProps = ( dispatch ) => ({
  handleRelatedItemClick: ( productId ) => dispatch( searchRelatedItems( productId ) ),
  handleItemToCurrentItemClick: ( productId ) => dispatch( currentProduct( productId ) ),
  // handleYourOutfitClick: ( productId ) => dispatch( searchRelatedItems( productId ) ),
});

const RelatedItemsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)( RelatedItems );

export default RelatedItemsContainer;