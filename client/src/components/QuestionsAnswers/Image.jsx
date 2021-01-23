import React from "react";

const Image = ({imagesrc, close}) => {

    return (
      <span id="addImagePage">
        <img src={imagesrc} id="currentImage"></img>
      </span>
    )
  }

export default Image;
