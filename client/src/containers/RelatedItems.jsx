import { connect } from 'react-redux';
import relatedItemsSearch from './../actions/relatedItemsSearch.jsx';
import RelatedItems from '../components/RelatedItems/RItem.jsx';

let mapStateToProps = ( state ) => ({
  relatedProductList: state.relatedProductList
});
let mapDispatchToProps = ( dispatch ) => ({
  handleRelatedItemClick: ( productId ) => dispatch( relatedItemsSearch( productId ) ),
  // handleRelatedItemClick: ( productId ) => console.log('handleRelatedItemClick : ', productId),
});

let RelatedItemsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)( RelatedItems );

export default RelatedItemsContainer;