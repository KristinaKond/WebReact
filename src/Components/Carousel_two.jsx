import React, { Children, cloneElement, useEffect, useState } from "react";

import '../Style/Carousel.css';
import logo1 from '../Photos/images_carousel/glr_photo_1.jpg';
import logo2 from '../Photos/images_carousel/glr_photo_2.jpg';
import logo3 from '../Photos/images_carousel/glr_photo_3.jpg';
import logo4 from '../Photos/images_carousel/glr_photo_4.jpg';
import logo5 from '../Photos/images_carousel/glr_photo_5.jpg';
import logo6 from '../Photos/images_carousel/glr_photo_6.jpg';
import logo7 from '../Photos/images_carousel/glr_photo_7.jpg';
import logo8 from '../Photos/images_carousel/glr_photo_8.jpg';
/*
    const root = document.documentElement;
    const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue("--marquee-elements-displayed");
    const marqueeContent = document.querySelector("ul.marquee-content");

const Carousel = () => {
    
  root.style.setProperty("--marquee-elements", marqueeContent.children.length);
  for(let i=0; i<marqueeElementsDisplayed; i++) {
    marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
  }
    return (
        <section className="carousel">
        <div className="marquee">
            <ul className="marquee-content">
              <li><i className="fab"><img src={logo1}/></i></li>
              <li><i className="fab"><img src={logo2}/></i></li>
              <li><i className="fab"><img src={logo3}/></i></li>
              <li><i className="fab"><img src={logo4}/></i></li>
              <li><i className="fab"><img src={logo5}/></i></li>
              <li><i className="fab"><img src={logo6}/></i></li>
              <li><i className="fab"><img src={logo7}/></i></li>
              <li><i className="fab"><img src={logo8}/></i></li>
            </ul>
          </div>
    </section> 
    )
}*/

const PAGE_WIDTH = 450

const Carousel = ({children}) => {
  
  const [pages,setPages] = useState([])

  useEffect(() => {
    setPages( 
      Children.map(children, child => {
        return cloneElement(child, {
        style:{
          height: '100%',
          minwidth: `${PAGE_WIDTH}px`,
          maxwidth: `${PAGE_WIDTH}px`,
        },
      })
    })
      )
  }, [])

 

  return (
    <div className="main_container">
      <div className="window">
        <div className="all_items">
        {children}
        </div>
      </div>
    </div>
  )
}


export default Carousel;