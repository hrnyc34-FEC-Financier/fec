import React from 'react';

let relatedItems = ({ relatedProductList, handleRelatedItemClick })=>{
  let rItemNumbers = relatedProductList.map( (item, i)=>( <li> {item} </li> ) );
  return (
    <div>
      Carousel #1
      <ol>
        {rItemNumbers}
      </ol>
      Carousel #2
    </div>
  );
};

export default relatedItems;