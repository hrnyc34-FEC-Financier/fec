import { connect } from 'react-redux';
import RItem from '../../components/RelatedItems/RItem.jsx';
import currentProduct from './../../actions/productDetail/selectProduct.js';
import comparingModal from './../../actions/relatedItems/relatedItemStarModal.js';
import addYourOutfitList from './../../actions/relatedItems/addYourOutfitList.js';
import deleteYourOutfitList from './../../actions/relatedItems/deleteYourOutfitList.js';
import increaseIndex from './../../actions/relatedItems/increaseIndex.js';
import decreaseIndex from './../../actions/relatedItems/decreaseIndex.js';
import increaseYourOutfitIndex from './../../actions/relatedItems/increaseIndexYourOutfit.js';
import decreaseYourOutfitIndex from './../../actions/relatedItems/decreaseIndexYourOutfit.js';
import addPreviewItem from './../../actions/relatedItems/addPreviewItem.js';
import getRelatedItemIds from './../../actions/relatedItems/getRelatedItemIds.js';

const mapStateToProps = ( state ) => ({
  currentProduct: state.currentProduct,
  currentImage: state.currentImage,
  currentStyleList: state.currentStyleList,
  productAvgStarRating: state.productAvgStarRating,

  relatedProductList: state.relatedProductList,
  relatedProductCarouselList: state.relatedProductCarouselList,
  relatedProductStarModal: state.relatedProductStarModal,
  yourOutfitList: state.yourOutfitList,
  carouselRenderIndex: state.carouselRenderIndex,
  cYourOutfitRenderIndex: state.cYourOutfitRenderIndex,
  saveTimeList: state.saveTimeList,
});

const mapDispatchToProps = ( dispatch ) => ({
  handleItemToCurrentItemClick: ( currentProductId, updatedNeedArr, wholeData) => {
    dispatch( currentProduct( currentProductId ) );
    dispatch( getRelatedItemIds( currentProductId, updatedNeedArr, wholeData) );
  },
  handleStarModalClick: ( value, productId, productList ) => {
    dispatch( comparingModal( value === false ) );
    dispatch( addPreviewItem( productId, productList ) );
  },
  handleAddYourOutfitClick: ( currentItem, styleList, starRating ) => dispatch( addYourOutfitList( currentItem, styleList, starRating ) ),
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