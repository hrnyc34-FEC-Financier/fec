import React from 'react';

const RelatedItemModal = ({
  currentProduct,
  previewItem,
  handleStarModalClick,
  relatedProductStarModal }) => {

  let closingIcon = <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
    <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
  </svg>;

  if (!!previewItem.id) {
    var a = {};
    var b = {};
    var aa = {};
    var bb = {};
    var abCheck = {};

    for (var i = 0; i < currentProduct.features.length; i++) {
      var key = currentProduct.features[i].feature + ': ' + currentProduct.features[i].value;
      a[key] = true;
    }

    for (var j = 0; j < previewItem.features.length; j++) {
      var key = previewItem.features[j].feature + ': ' + previewItem.features[j].value;
      b[key] = true;
    }
    aa = a;
    bb = b;
    var aKey = Object.keys(a);
    var bKey = Object.keys(b);

    if (aKey.length >= bKey.length) {
      for (var i = 0; i < bKey.length; i++) {
        if (aKey.includes(bKey[i])) {
          var foundKey = bKey[i];
          abCheck[foundKey] = true;
        }
      }
    } else {
      for (var i = 0; i < aKey.length; i++) {
        if (bKey.includes(aKey[i])) {
          var foundKey = aKey[i];
          abCheck[foundKey] = true;
        }
      }
    }

    var foundKey = Object.keys(abCheck);
    if (foundKey.length) {
      for (var key of foundKey) {
        delete a[key];
        delete b[key];
      }
    }

    var totalFeature = Object.keys(a).concat(Object.keys(b)).concat(Object.keys(abCheck));

    // console.log('mapping id', 'RM' + previewItem.id, relatedProductStarModal);

    var contents = totalFeature.map(( item, i )=> {
      var aChecker = aa[item] ? <>&#10003;</> : null;
      var bChecker = bb[item] ? <>&#10003;</> : null;


      return (
        <div id="comparingPage_content" key={'RM' + i}>
          <a>{ aChecker }</a>
          <a>{ item }</a>
          <a>{ bChecker }</a></div>
      );
    });

    return (
      <div className="comparingPage">
        <span className='comparingModalTitle'>COMPARING</span>
        <span id='close_X' onClick={ ()=> handleStarModalClick(relatedProductStarModal) }>
          {closingIcon} </span><br /><br />
        <span className='currentItemTitle'>{currentProduct.name}</span>
        <span className='previewItemTitle'>{previewItem.name}</span><br />

        <div className="comparingPage_container">
          { contents }
        </div>


      </div>
    );
  } else {
    return (
      <></>
    );
  }
};
export default RelatedItemModal;