import React from "react";

//styled components
import { ComponentBtn } from "./StyleBtn";

//images
import ArrowUp from "./img/up-arrow.png";

const BtnBackToTop = (props) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <ComponentBtn onClick={scrollToTop}>
      <figure>
        <img src={ArrowUp} alt="ArrowUp" />
      </figure>
    </ComponentBtn>
  );
};

export default BtnBackToTop;
