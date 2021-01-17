import { connect } from 'react-redux';
import searchRelatedItems from './../../actions/relatedItems/searchRelatedItems.js';
import RelatedItems from '../../components/RelatedItems/RItem.jsx';

let mapStateToProps = ( state ) => ({
  // productList: state.productList,
  currentProduct: state.currentProduct,
  reviewsList: state.reviewsList,
  relatedProductList: state.relatedProductList,
  relatedProductCarouselList: state.relatedProductCarouselList,
  relatedProductStarModal: state.relatedProductStarModal,
  yourOutfitList: state.yourOutfitList
});

let mapDispatchToProps = ( dispatch ) => ({
  handleRelatedItemClick: ( productId ) => {
    // console.log('checking state',yourOutfitList )
   return dispatch( searchRelatedItems( productId ) )
  },
  // handleYourOutfitClick: ( productId ) => dispatch( searchRelatedItems( productId ) ),
});

let RelatedItemsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)( RelatedItems );

export default RelatedItemsContainer;