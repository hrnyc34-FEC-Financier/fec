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
import addTimeSaverList from './../../actions/relatedItems/addTimeSaverList.js';
import getRelatedItemIds from './../../actions/relatedItems/getRelatedItemIds.js';

const mapStateToProps = ( state ) => ({
  // relatedItemsListDetail: state.relatedItemsListDetail,
  // previewItem: state.previewItem,
  currentProduct: state.currentProduct,
  relatedProductList: state.relatedProductList,
  relatedProductCarouselList: state.relatedProductCarouselList,
  relatedProductStarModal: state.relatedProductStarModal,
  yourOutfitList: state.yourOutfitList,
  carouselRenderIndex: state.carouselRenderIndex,
  cYourOutfitRenderIndex: state.cYourOutfitRenderIndex,
  productAvgStarRating: state.productAvgStarRating,
  saveTimeList: state.saveTimeList,
});

const mapDispatchToProps = ( dispatch ) => ({
  handleRelatedItemClick: ( productId ) => dispatch( addRelatedItems( productId ) ),
  handleItemToCurrentItemClick: ( currentProductId, updatedNeedArr, wholeData ) => {
    dispatch( currentProduct( currentProductId ) );
    updatedNeedArr === null ?
      dispatch( getRelatedItemIds( currentProductId, null, wholeData) ) :
      dispatch( getRelatedItemIds( currentProductId, updatedNeedArr, wholeData) );
  },
  handleStarModalClick: ( value, productId ) => {
    dispatch( comparingModal( value === false ) );
    dispatch( addPreviewItem( productId ) );
  },
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