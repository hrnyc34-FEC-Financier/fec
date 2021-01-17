import { connect } from 'react-redux';
import StyleSelector from '../../components/ProductDetail/StyleSelector.jsx';
import setSelectedStyle from '../../actions/productDetail/selectStyle.js';

const mapDispatchToProps = (dispatch) => ({
  styleChange: (e) => dispatch(setSelectedStyle(JSON.parse(e.target.value))),
});

const mapStateToProps = (state) => ({
  currentStyle: state.currentStyle,
  currentStyleList: state.currentStyleList,
});

const StyleSelectorContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(StyleSelector);

export default StyleSelectorContainer;
