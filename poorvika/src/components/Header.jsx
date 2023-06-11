import React from 'react';
import './Header.css';
import logo from '../Images/Poorvika.png';
import Banners from './Banners';

const Header = () => {
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
        <Banners/>
    </div>
  )
}

export default Header;
