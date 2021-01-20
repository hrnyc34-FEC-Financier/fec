import React from 'react';
import RItemList from './RItemList.jsx';
import YourOutFitList from './YourOutFitList.jsx';

const RelatedItems = ({ currentProduct, relatedProductCarouselList, relatedProductStarModal, yourOutfitList, handleRelatedItemClick, handleAddYourOutfitClick, handleDeleteYourOutfitClick, handleItemToCurrentItemClick, handleStarModalClick})=>{

  const relatedItems = Array.isArray(relatedProductCarouselList) &&
  relatedProductCarouselList.map( item => {
    let imageURL = item.styles[0].photos[0].thumbnail_url;
    if (imageURL !== null) {
      return <RItemList
        key={item.id}
        product={item}
        handleItemToCurrentItemClick={handleItemToCurrentItemClick}
        handleStarModalClick={handleStarModalClick}
        relatedProductStarModal={relatedProductStarModal}
        image={imageURL}/>;
    }
  });

  const yourOutfitItems = !yourOutfitList.length ? null /*something replace add button*/ :
    yourOutfitList.map( item => {
      let imageURL = item.styles[0].photos[0].thumbnail_url;
      if (imageURL !== null) {
        return <YourOutFitList
          key={item.styles[0].style_id}
          product={item}
          currentProduct={currentProduct}
          image={imageURL}
          handleAddYourOutfitClick={handleAddYourOutfitClick}
          handleDeleteYourOutfitClick={handleDeleteYourOutfitClick} />;
      }
    });

  return (
    <div className='relatedItems'>
      <span className='relatedItems_title'>RELATED PRODUCTS</span>
      <div className ='RP_main_container'>
        <button className='carousel_prev'>&lt;</button>

        <div className='RItems_container' >
          {relatedItems}
        </div>

        <button className='carousel_next'>&gt;</button>

      </div>

      <span className='relatedItems_title'>YOUR OUTFIT</span>

      <div className ='YrOutfit_main_container'>
        <div className='paddingOrButton'>
          <button value={currentProduct.id} onClick={(e)=>handleAddYourOutfitClick(e.target.value)}>Add to Outfit</button>
        </div>
        <div className ='YrOutfit_container'>
          {yourOutfitItems}
        </div>
      </div>
    </div>
  );
};

export default RelatedItems;