import React from 'react';
import RItemList from './RItemList.jsx';
import YourOutFitList from './YourOutFitList.jsx';

let RelatedItems = ({ relatedProductList, relatedProductCarouselList, relatedProductStarModal, yourOutfitList, handleRelatedItemClick })=>{
  console.log( 'relatedProductCarouselList', relatedProductCarouselList);
  console.log( 'relatedProductImg', relatedProductCarouselList[0]);

  const relatedItems = relatedProductCarouselList.map( item => <RItemList key={item.style_id} product={item} />);

  return (
    <div className ='RItems_container'>

      <div className ='Carousel1'>Carousel #1
        <div className='RItemsList_container' >
          {relatedItems}
        </div>
      </div>

      <div className ='Carousel2'>Carousel #2
        <button value='11003' onClick={(e)=>handleRelatedItemClick(e.target.value)}>test</button>
      </div>

    </div>
  );
};

export default RelatedItems;