import React from 'react';
import ProductDetailMain from './ProductDetail/ProductDetailMain.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { teamName } = this.props;
    return (
      <div className='main-grid-container'>
        <ProductDetailMain />
        {/* <h1>Hello Team {teamName}!</h1> */}
      </div>
    );
  }
}

export default App;
