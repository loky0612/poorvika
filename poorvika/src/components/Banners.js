import React from "react";

import SimpleImageSlider from "react-simple-image-slider";
import samsung from '../Images/samsung.jpg';
import ac from '../Images/ac.jpg';
import apple from '../Images/apple.jpg';
import cele from '../Images/cele.jpg';
import conet from '../Images/conet.jpg';
import fridge from '../Images/fridge.jpg';
import redmi from '../Images/redmi.jpg';
import sbi from '../Images/sbi.jpg';
import technpo from '../Images/technpo.jpg';
import watch from '../Images/watch.jpg';

const Banners = () => {
    const images = [
        { url: samsung },
        { url: cele },
        { url: ac},
        { url: apple },
        { url: conet },
        { url: fridge },
        { url: redmi },
        { url: sbi },
        { url: technpo },
        { url: watch }
      ];
  return (
    <div className='slider'>
        <SimpleImageSlider
        width="100%"
        height="50%"
        images={images}
        showBullets={true}
        showNavs={true}
        autoPlay/>
    </div>
  )
}

export default Banners