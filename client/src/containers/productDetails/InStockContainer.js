import { connect } from 'react-redux';
import InStock from '../../components/ProductDetail/InStock.jsx';
import changeSize from '../../actions/productDetail/currentSize.js';
import searchEngine from '../../lib/searchEngine.js';
const mapDispatchToProps = (dispatch) => ({
  sizeChange: (e) => dispatch(changeSize(e.target.value)),
  checkout: (skuId) => {
    return searchEngine
      .post('cart', { sku_id: skuId })
      .then((res) => console.log(res))
      .cath((err) => console.error(err));
  },
});

const mapStateToProps = (state) => ({
  currentProductId: state.currentProductId,
  currentStyle: state.currentStyle,
  currentSku: state.currentSize,
});

const InStockContainer = connect(mapStateToProps, mapDispatchToProps)(InStock);

export default InStockContainer;
