import { connect } from 'react-redux';
import StyleSelector from '../../components/ProductDetail/StyleSelector.jsx';

const mapStateToProps = (state) => ({
  currentStyle: state.currentStyle,
  currentStyleList: state.currentStyleList,
});

const StyleSelectorContainer = connect(mapStateToProps)(StyleSelector);

export default StyleSelectorContainer;
