import React from 'react';
import RItemList from './RItemList.jsx';
import YourOutFitList from './YourOutFitList.jsx';

const RelatedItems = ({
  currentProduct,
  relatedProductCarouselList,
  relatedProductStarModal,
  yourOutfitList,
  handleRelatedItemClick,
  handleAddYourOutfitClick,
  handleDeleteYourOutfitClick,
  handleItemToCurrentItemClick,
  handleStarModalClick})=>{

  const relatedItems = Array.isArray(relatedProductCarouselList) &&
  relatedProductCarouselList.map((item) => {
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

  const leftArrow = <button className='carousel_prev'>
    <svg
      width="16" height="16" fill="currentColor"
      viewBox="0 0 16 16">
      <path d="M3.86 8.753l5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z"/>
    </svg>
  </button>;

  const rightArrow = <button className='carousel_next'>
    <svg
      width="16" height="16" fill="currentColor"
      viewBox="0 0 16 16">
      <path d="M12.14 8.753l-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
    </svg>
  </button>;

  return (
    <div className='relatedItems_box'>
      <span className='relatedItems_title'>RELATED PRODUCTS</span>
      <div className ='RP_main_container'>
        {leftArrow}

        <div className='RItems_container' >
          {relatedItems}
        </div>

        {rightArrow}
      </div>

      <span className='relatedItems_title'>YOUR OUTFIT</span>

      <div className ='YrOutfit_main_container'>
        {leftArrow}
        <div className ='YrOutfit_container'>
          <button className='carousel_item' onClick={(e)=>handleAddYourOutfitClick( currentProduct.id )}>
            <svg
              width="25" height="25" viewBox="0 0 16 16">
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
              <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/><br/>
            </svg>
            <text x="50%" y="50%" fill="black" dy="1em">Add to Outfit</text>
          </button>

          {/* </button> */}
          {yourOutfitItems}
        </div>
        {rightArrow}
      </div>
    </div>
  );
};

export default RelatedItems;
