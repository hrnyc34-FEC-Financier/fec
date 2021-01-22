import { connect } from 'react-redux';
import RItem from '../../components/RelatedItems/RItem.jsx';
import currentProduct from './../../actions/productDetail/selectProduct.js';
import comparingModal from './../../actions/relatedItems/relatedItemStarModal.js';
import addRelatedItems from './../../actions/relatedItems/addRelatedItems.js';
import addYourOutfitList from './../../actions/relatedItems/addYourOutfitList.js';
import deleteYourOutfitList from './../../actions/relatedItems/deleteYourOutfitList.js';
import increaseIndex from './../../actions/relatedItems/increaseIndex.js';
import decreaseIndex from './../../actions/relatedItems/decreaseIndex.js';
import increaseYourOutfitIndex from './../../actions/relatedItems/increaseIndexYourOutfit.js';
import decreaseYourOutfitIndex from './../../actions/relatedItems/decreaseIndexYourOutfit.js';
import addPreviewItem from './../../actions/relatedItems/addPreviewItem.js';

const mapStateToProps = ( state ) => ({
  // productList: state.productList,
  currentProduct: state.currentProduct,
  relatedProductList: state.relatedProductList,
  relatedItemsListDetail: state.relatedItemsListDetail,
  relatedProductCarouselList: state.relatedProductCarouselList,
  relatedProductStarModal: state.relatedProductStarModal,
  yourOutfitList: state.yourOutfitList,
  // previewItem: state.previewItem,
  carouselRenderIndex: state.carouselRenderIndex,
  cYourOutfitRenderIndex: state.cYourOutfitRenderIndex,
});

const mapDispatchToProps = ( dispatch ) => ({
  handleRelatedItemClick: ( productId ) => dispatch( addRelatedItems( productId ) ),
  handleItemToCurrentItemClick: ( currentProductId ) => dispatch( currentProduct( currentProductId ) ),
  handleStarModalClick: ( value, productId ) => {
    dispatch( comparingModal( value === false ) );
    dispatch( addPreviewItem( productId ) );
  },
  // handleStarModalClick: ( value, productId ) => console.log('handleStarModalClick_container', value, productId ),
  handleAddYourOutfitClick: ( productId ) => dispatch( addYourOutfitList( productId ) ),
  handleDeleteYourOutfitClick: ( productId ) => dispatch( deleteYourOutfitList( productId ) ),
  handleCarouselLeftClick: () => dispatch( increaseIndex( true ) ),
  handleCarouselRightClick: () => dispatch( decreaseIndex( true ) ),
  handleYourOutfitLeftClick: () => dispatch( increaseYourOutfitIndex( true ) ),
  handleYourOutfitRightClick: () => dispatch( decreaseYourOutfitIndex( true ) ),
});

const RelatedItemsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)( RItem );

export default RelatedItemsContainer;