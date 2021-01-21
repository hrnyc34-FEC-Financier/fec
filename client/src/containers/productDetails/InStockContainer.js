import { connect } from 'react-redux';
import InStock from '../../components/ProductDetail/InStock.jsx';
import changeSize from '../../actions/productDetail/currentSize.js';

const mapDispatchToProps = (dispatch) => ({
  sizeChange: (e) => dispatch(changeSize(e.target.value)),
});

const mapStateToProps = (state) => ({
  currentProductId: state.currentProductId,
  currentStyle: state.currentStyle,
  currentSku: state.currentSize,
});

const InStockContainer = connect(mapStateToProps, mapDispatchToProps)(InStock);

export default InStockContainer;
