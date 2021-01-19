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

  const yourOutfitItems = Array.isArray(yourOutfitList) &&
  yourOutfitList.map( item => {
    // let id = Number.parseInt(Object.keys(item));
    // let imageURL = item[id].styles[0].photos[0].thumbnail_url;
    let imageURL = item.styles[0].photos[0].thumbnail_url;
    if (imageURL !== null) {
      return <YourOutFitList
        key={item.id}
        product={item}
        currentProduct={currentProduct}
        image={imageURL}
        handleAddYourOutfitClick={handleAddYourOutfitClick}
        handleDeleteYourOutfitClick={handleDeleteYourOutfitClick} />;
    }
  });
  return (
    <>
      <div className ='Carousel1'>RELATED PRODUCTS

        <div className='RItems_container' >
          {relatedItems}<br />
        </div>
      </div>

      <div className ='Carousel2'>YOUR OUTFIT
        <div className ='YrOutfit_container'>
          {yourOutfitItems}
        </div>
        <button value={currentProduct.id} onClick={(e)=>handleAddYourOutfitClick(e.target.value)}>Add to Outfit</button>
      </div>

    </>
  );
};

export default RelatedItems;