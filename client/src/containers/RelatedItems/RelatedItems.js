import { connect } from 'react-redux';
import RelatedItems from '../../components/RelatedItems/RItem.jsx';
import currentProduct from './../../actions/productDetail/selectProduct.js';
import comparingModal from './../../actions/relatedItems/relatedItemStarModal.js';
import searchRelatedItems from './../../actions/relatedItems/searchRelatedItems.js';
import yourOutfit from './../../actions/relatedItems/searchYourOutfitList.js';

const mapStateToProps = ( state ) => ({
  productList: state.productList,
  currentProduct: state.currentProduct,
  relatedProductList: state.relatedProductList,
  relatedItemsListDetail: state.relatedItemsListDetail,
  relatedProductCarouselList: state.relatedProductCarouselList,
  relatedProductStarModal: state.relatedProductStarModal,
  yourOutfitList: state.yourOutfitList,
  reviewsList: state.reviewsList,
});

const mapDispatchToProps = ( dispatch ) => ({
  handleRelatedItemClick: ( productId ) => dispatch( searchRelatedItems( productId ) ),
  handleItemToCurrentItemClick: ( productId ) => dispatch( currentProduct( productId ) ),
  handleStarModalClick: ( boolean ) => dispatch( comparingModal( !boolean ) ),
  handleYourOutfitClick: ( productId ) => dispatch( yourOutfit( productId ) ),
});

const RelatedItemsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)( RelatedItems );

export default RelatedItemsContainer;