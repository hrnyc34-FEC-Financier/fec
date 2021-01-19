import React from 'react';
import RItemList from './RItemList.jsx';
import YourOutFitList from './YourOutFitList.jsx';

let RelatedItems = ({ currentProduct, relatedProductCarouselList, relatedProductStarModal, yourOutfitList, handleRelatedItemClick, handleYourOutfitClick})=>{
  // console.log( 'currentProduct', currentProduct);
  // console.log( 'relatedProductCarouselList', relatedProductCarouselList);

  const relatedItems = relatedProductCarouselList.map( item => {
    let imageURL = item.styles[0].photos[0].thumbnail_url;
    if (imageURL !== null) {
      return <RItemList key={item.id} product={item} />;
    }
  });

  const yourOutfitItems = yourOutfitList.map( item => {
    let imageURL = item.styles[0].photos[0].thumbnail_url;
    if (imageURL !== null) {
      return <YourOutFitList key={item.id} product={item} />;
    }
  });
  return (
    <div>
      <div className ='Carousel1'>Carousel #1
        <div className='RItemsList_container' >
          {relatedItems}<br />
        </div>
        <button value={currentProduct.id} onClick={(e)=>handleRelatedItemClick(e.target.value)}>test</button>
      </div>
      <div className ='Carousel2'>Carousel #2
        <div className ='RItems_container'>
          {yourOutfitItems}
        </div>
        <button value={currentProduct.id} onClick={(e)=>handleYourOutfitClick(e.target.value)}>Add</button>
      </div>

    </div>
  );
};

export default RelatedItems;