import React from 'react';
import RItemList from './RItemList.jsx';
import YourOutFitList from './YourOutFitList.jsx';

const RelatedItems = ({
  currentProduct,
  relatedProductCarouselList,
  relatedProductStarModal,
  yourOutfitList,
  handleAddYourOutfitClick,
  handleDeleteYourOutfitClick,
  handleItemToCurrentItemClick,
  handleStarModalClick,
  handleCarouselLeftClick,
  handleCarouselRightClick,
  carouselRenderIndex
})=>{
  var a = relatedProductCarouselList.length - carouselRenderIndex > 4;
  console.log('aaaaaaaa:', a)


  const slicedRelatedItemList = relatedProductCarouselList.slice(carouselRenderIndex + 1);

  const relatedItems = Array.isArray(slicedRelatedItemList) &&
  slicedRelatedItemList.map((item) => {
    let imageURL = item.styles[0].photos[0].thumbnail_url;
    if (imageURL !== null) {
      return <RItemList
        key={item.id}
        product={item}
        currentProduct={currentProduct}
        handleItemToCurrentItemClick={handleItemToCurrentItemClick}
        handleStarModalClick={handleStarModalClick}
        relatedProductStarModal={relatedProductStarModal}
        image={imageURL}/>;
    }
  });

  const yourOutfitItems =
  yourOutfitList.map( item => {
    let imageURL = item.styles[0].photos[0].thumbnail_url;
    if ( imageURL !== null ) {
      return <YourOutFitList
        key={item.styles[0].style_id}
        product={item}
        currentProduct={currentProduct}
        image={imageURL}
        handleAddYourOutfitClick={handleAddYourOutfitClick}
        handleDeleteYourOutfitClick={handleDeleteYourOutfitClick} />;
    }
  });

  const leftArrow = <button className='carousel_prev' onClick={ handleCarouselLeftClick } >
    <svg
      width="16" height="16" fill="currentColor"
      viewBox="0 0 16 16">
      <path d="M3.86 8.753l5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z"/>
    </svg>
  </button>;

  const rightArrow = <button className='carousel_next' onClick={ handleCarouselRightClick }>
    <svg
      width="16" height="16" fill="currentColor"
      viewBox="0 0 16 16">
      <path d="M12.14 8.753l-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
    </svg>
  </button>;

  return (
    <div id='relatedItems_box'>

      <div className='relatedItems_inner_box'>

        <div className='first_title'>RELATED PRODUCTS</div>

        <div className ='RP_main_container'>
          { carouselRenderIndex === 0 ? null : leftArrow }
          <div className='RItems_container' >
            { relatedItems }
          </div>
          { relatedProductCarouselList.length - carouselRenderIndex <= 5 ? null : rightArrow }
        </div>

        <div className='second_title'>YOUR OUTFIT</div>

        <div className ='YrOutfit_main_container'>
        { carouselRenderIndex === 0 ? null : leftArrow }
          <div className ='YrOutfit_container'>
            <button
              className='carousel_item'
              onClick={ ()=> handleAddYourOutfitClick( currentProduct.id ) }>
              <svg
                width="25" height="25" viewBox="0 0 16 16">
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
              </svg> Add to Outfit
            </button>
            { yourOutfitItems }
          </div>
          { relatedProductCarouselList.length - carouselRenderIndex <= 5 ? null : rightArrow }
        </div>

      </div>
    </div>
  );
};

export default RelatedItems;