import React from 'react';
import RItemList from './RItemList.jsx';
import YourOutFitList from './YourOutFitList.jsx';

const RelatedItems = ({
  currentProduct,
  saveTimeList,
  relatedProductList,
  relatedProductStarModal,
  relatedProductCarouselList,
  yourOutfitList,
  carouselRenderIndex,
  cYourOutfitRenderIndex,
  productAvgStarRating,
  handleAddYourOutfitClick,
  handleDeleteYourOutfitClick,
  handleItemToCurrentItemClick,
  handleStarModalClick,
  handleCarouselLeftClick,
  handleCarouselRightClick,
  handleYourOutfitLeftClick,
  handleYourOutfitRightClick,
})=>{

  const slicedRelatedItemList = relatedProductCarouselList.slice(carouselRenderIndex + 1);
  const slicedYourOutfitList = yourOutfitList.slice(cYourOutfitRenderIndex + 1);

  let mappingList = slicedRelatedItemList;
  if (carouselRenderIndex === 0) {
    mappingList = relatedProductCarouselList;
  }

  let mappingYrOutfitList = slicedYourOutfitList;
  if (cYourOutfitRenderIndex === 0) {
    mappingYrOutfitList = yourOutfitList;
  }

  const relatedItems = Array.isArray(mappingList) &&
  mappingList.map((item) => {
    let imageURL = !item.styles[0].photos[0].url ? null : item.styles[0].photos[0].url;
    if (imageURL !== null) {
      return <RItemList
        key={'RI' + item.id}
        product={item}
        handleItemToCurrentItemClick={handleItemToCurrentItemClick}
        currentProduct={currentProduct}
        handleStarModalClick={handleStarModalClick}
        relatedProductStarModal={relatedProductStarModal}
        image={imageURL}
        relatedProductList={relatedProductList}
        saveTimeList={saveTimeList} />;
    }
  });

  const yourOutfitItems = Array.isArray(mappingYrOutfitList) &&
  mappingYrOutfitList.map( item => {
    let imageURL = item.styles[0].photos[0].url;
    if ( imageURL !== null ) {
      return <YourOutFitList
        key={'YO' + item.id}
        handleItemToCurrentItemClick={handleItemToCurrentItemClick}
        currentProduct={currentProduct}
        product={item}
        image={imageURL}
        saveTimeList={saveTimeList}
        productAvgStarRating={productAvgStarRating}
        relatedProductList={relatedProductList}
        handleAddYourOutfitClick={handleAddYourOutfitClick}
        handleDeleteYourOutfitClick={handleDeleteYourOutfitClick}/>;
    }
  });

  const imgLeftArrow = <svg
    width="25" height="25" fill="currentColor"
    viewBox="0 0 20 20">
    <path d="M3.86 8.753l5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z"/>
  </svg>;

  const imgRightArrow = <svg
    width="25" height="25" fill="currentColor"
    viewBox="0 0 20 20">
    <path d="M12.14 8.753l-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
  </svg>;

  const imgAddIcon = <svg
    width="30" height="30" viewBox="0 0 16 16">
    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
  </svg>;

  const relatedItemLeftArrow = <button className='carousel_prev' id='centerAlign' onClick={handleCarouselLeftClick } >
    {imgLeftArrow }
  </button>;

  const relatedItemRightArrow = <button className='carousel_next' id='centerAlign' onClick={ handleCarouselRightClick }>
    {imgRightArrow}
  </button>;

  const yourOutfitLeftArrow = <button className='carousel_prev' id='centerAlign' onClick={ handleYourOutfitLeftClick } >
    {imgLeftArrow }
  </button>;

  const yourOutfitRightArrow = <button className='carousel_next' id='centerAlign' onClick={ handleYourOutfitRightClick }>
    {imgRightArrow}
  </button>;

  return (
    <div className="ri_container">
      <></>
      <div className="relatedItems_box">
        <div className='first_title'>RELATED PRODUCTS</div>

        <div className ='RP_main_container'>
          <div className='centerAlignP'>
            { carouselRenderIndex === 0 ? null : relatedItemLeftArrow }</div>

          <div className='RItems_container' >
            { relatedItems }
          </div>

          <div className='centerAlignP'>
            { relatedProductCarouselList.length - carouselRenderIndex <= 4 || carouselRenderIndex > 5 ? null : relatedItemRightArrow }</div>
        </div>

      </div>

      <div className="yourOutfit_box">
        <div className='second_title'>YOUR OUTFIT</div>

        <div className ='YrOutfit_main_container'>
          <div className='centerAlignP'>
            { cYourOutfitRenderIndex === 0 ? null : yourOutfitLeftArrow }</div>
          <div className='placeHolderP'><button
            className='placeHolder'
            onClick={ ()=> handleAddYourOutfitClick( currentProduct.id ) }>
            {imgAddIcon}<br /><br />
            ADD TO OUTFIT
          </button></div>

          <div className ='YrOutfit_container'>
            { yourOutfitItems }
          </div>

          <div className='centerAlignP'>
            { yourOutfitList.length - cYourOutfitRenderIndex <= 4 || cYourOutfitRenderIndex > 5 ? null : yourOutfitRightArrow }</div>
        </div>

      </div>

      <></>
    </div>
  );
};

export default RelatedItems;