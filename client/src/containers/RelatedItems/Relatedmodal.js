import { connect } from 'react-redux';
import RelatedItemModal from '../../components/RelatedItems/RelatedItemModal.jsx';
import comparingModal from './../../actions/relatedItems/relatedItemStarModal.js';

const mapStateToProps = ( state ) => ({
  currentProduct: state.currentProduct,
  relatedProductStarModal: state.relatedProductStarModal,
  previewItem: state.previewItem,
});

const mapDispatchToProps = ( dispatch ) => ({
  handleStarModalClick: ( value ) => {
    dispatch( comparingModal( value === false ) );
  },
});

const RelatedModalContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)( RelatedItemModal );

export default RelatedModalContainer;