import { connect } from 'react-redux';
import RItem from '../../components/RelatedItems/RItem.jsx';
import currentProduct from './../../actions/productDetail/selectProduct.js';
import comparingModal from './../../actions/relatedItems/relatedItemStarModal.js';
import addRelatedItems from './../../actions/relatedItems/addRelatedItems.js';
import addYourOutfitList from './../../actions/relatedItems/addYourOutfitList.js';
import deleteYourOutfitList from './../../actions/relatedItems/deleteYourOutfitList.js';

const mapStateToProps = ( state ) => ({
  // productList: state.productList,
  currentProduct: state.currentProduct,
  relatedProductList: state.relatedProductList,
  relatedItemsListDetail: state.relatedItemsListDetail,
  relatedProductCarouselList: state.relatedProductCarouselList,
  relatedProductStarModal: state.relatedProductStarModal,
  yourOutfitList: state.yourOutfitList,
  reviewsList: state.reviewsList,
});

const mapDispatchToProps = ( dispatch ) => ({
  handleRelatedItemClick: ( productId ) => dispatch( addRelatedItems( productId ) ),
  handleItemToCurrentItemClick: ( currentProductId ) => dispatch( currentProduct( currentProductId ) ),
  handleStarModalClick: ( productId, value ) => {
    dispatch( comparingModal( value === false ) );
  },
  // handleStarModalClick: ( productId, value ) => console.log('handleStarModalClick_container', productId, value ),
  handleAddYourOutfitClick: ( productId ) => dispatch( addYourOutfitList( productId ) ),
  handleDeleteYourOutfitClick: ( productId ) => dispatch( deleteYourOutfitList( productId ) ),
});

const RelatedItemsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)( RItem );

export default RelatedItemsContainer;