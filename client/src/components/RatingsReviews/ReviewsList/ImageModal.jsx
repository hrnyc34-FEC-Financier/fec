import React from "react";

const ImageModal = ({imageSrc}) => {
  return (
    <span className="modalImageContainer">
      <img src={imageSrc} className="modalImage"></img>
    </span>
  );
};

export default ImageModal;