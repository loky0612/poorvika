import React from 'react';
import './Header.css';
import logo from '../Images/Poorvika.png';
import SimpleImageSlider from "react-simple-image-slider";
import samsung from '../Images/samsung.jpg';
import ac from '../Images/samsung.jpg';
import apple from '../Images/apple.jpg';
import cele from '../Images/cele.jpg';
import conet from '../Images/conet.jpg';
import fridge from '../Images/fridge.jpg';
import redmi from '../Images/redmi.jpg';
import sbi from '../Images/sbi.jpg';
import technpo from '../Images/technpo.jpg';
import watch from '../Images/watch.jpg';

const Header = () => {
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
    <div className='header'>
        <div className='container flex'>
            <div className='logo'>
                <img src={logo} alt='logo'/>
            </div>
            <div className='searchbar'>
                <i class="fa fa-search icon"></i>
                <input type="text" placeholder='Search Products, Brands, Offers' />
            </div>
            <div className='nav'>
                <ul>
                    <li>Delivery</li>
                    <li>Locate</li>
                    <li>Items</li>
                    <li>My account</li>
                </ul>
            </div>
        </div>
        <div className='slider'>
            <SimpleImageSlider
            width={1520}
            height={504}
            images={images}
            showBullets={true}
            showNavs={true}
            autoPlay
            />
        </div>
        <div>
            
        </div>
    </div>
  )
}

export default Header;