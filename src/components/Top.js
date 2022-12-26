import React from "react";
import { BiArrowToTop } from "react-icons/bi";
import {animateScroll as Scroll} from "react-scroll"

const Top = () => {
  const scroll = () => {
    Scroll.scrollToTop()
  }
  return (
    <div className="totop" onClick={scroll}
    >
      <BiArrowToTop size="1.2em"/>
    </div>
  );
};

export default Top;
