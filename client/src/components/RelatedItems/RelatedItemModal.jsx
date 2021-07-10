import React from 'react';

const RelatedItemModal = ({
  currentProduct,
  previewItem,
  handleStarModalClick,
  relatedProductStarModal,
}) => {
  let closingIcon = <svg width='16' height='16' fill='currentColor' viewBox='0 0 16 16'>
      <path d='M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z' />
      <path d='M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z' />
    </svg>;

  if ( !!previewItem.id ) {
    let a = {};
    let b = {};
    let aa = {};
    let bb = {};
    let abCheck = {};

    for ( let i = 0; i < currentProduct.features.length; i++ ) {
      let key = currentProduct.features[i].feature + ': ' +  currentProduct.features[i].value;
      a[key] = true;
    }

    for ( let j = 0; j < previewItem.features.length; j++ ) {
      let key = previewItem.features[j].feature + ': ' + previewItem.features[j].value;
      b[key] = true;
    }
    aa = a;
    bb = b;
    let aKey = Object.keys(a);
    let bKey = Object.keys(b);

    if ( aKey.length >= bKey.length ) {
      for ( var i = 0; i < bKey.length; i++ ) {
        if ( aKey.includes(bKey[i]) ) {
          let foundKey = bKey[i];
          abCheck[foundKey] = true;
        }
      }
    } else {
      for ( let i = 0; i < aKey.length; i++ ) {
        if ( bKey.includes(aKey[i]) ) {
          let foundKey = aKey[i];
          abCheck[foundKey] = true;
        }
      }
    }

    let foundKey = Object.keys(abCheck);
    if ( foundKey.length ) {
      for ( const key of foundKey ) {
        delete a[key];
        delete b[key];
      }
    }

    let totalFeature = Object.keys( a )
      .concat( Object.keys( b ) )
      .concat( Object.keys( abCheck ) );

    let contents = totalFeature.map((item) => {
      let aChecker = aa[item] ? <>&#10003;</> : null;
      let bChecker = bb[item] ? <>&#10003;</> : null;

      return (
        <div id='comparingPage_content' key={ 'RM' + i }>
          <a>{ aChecker }</a>
          <a>{ item }</a>
          <a>{ bChecker }</a>
        </div>
      );
    });

    return (
      <div className='comparingPage'>
        <span className='comparingModalTitle'>COMPARING</span>
        <span
          id='close_X'
          onClick={() => handleStarModalClick( relatedProductStarModal )}
        >
          { closingIcon }{' '}
        </span>
        <br />
        <br />
        <span className='currentItemTitle'>{ currentProduct.name }</span>
        <span className='previewItemTitle'>{ previewItem.name }</span>
        <br />

        <div className='comparingPage_container'>{ contents }</div>
      </div>
    );
  } else {
    return <></>;
  }
};
export default RelatedItemModal;
