import React from 'react';

let RelatedItems = ({ relatedProductList, relatedProductCarouselList, relatedProductStarModal, yourOutfitList, handleRelatedItemClick })=>{
  console.log( 'relatedProductCarouselList', relatedProductCarouselList );

  let rItemNumbers = relatedProductList.map( (item, i)=> { return (<li key={i}>{item}</li>); } );

  return (
    <div className ='RItems_container'>
      <div className ='Carousel1'>
        Carousel #1 <br />
        <button value='11003' onClick={(e)=>handleRelatedItemClick(e.target.value)}>test</button>
        <br />
        <ol>
          {rItemNumbers}
        </ol>
      </div>
      <div className ='Carousel2'>Carousel #2</div>
    </div>
  );
};

export default RelatedItems;