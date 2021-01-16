import React from 'react';

let RelatedItems = ({ relatedProductList, handleRelatedItemClick })=>{
  console.log( 'relatedProductList', relatedProductList );
  let rItemNumbers = relatedProductList.map( (item, i)=>( <li key={i}> {item} </li> ) );
  return (
    <div className ='RP_container'>
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