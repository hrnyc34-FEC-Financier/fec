import { connect } from 'react-redux';
import ProductOverview from '../../components/ProductDetail/ProductOveriew.jsx';

const mapStateToProps = (state) => ({
  currentProduct: state.currentProduct,
});

const ProductOverviewContainer = connect(mapStateToProps)(ProductOverview);

export default ProductOverviewContainer;
