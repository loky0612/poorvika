import React from 'react';
import './Header.css';
import logo from '../Images/Poorvika.png';
import Banners from './Banners';
import Carousel from './Carousel';

const Header = () => {
    return (
        <div className='header'>
            <div className='Header h-12 w-full flex items-center justify-around'>
                <img className='h-9' src="https://img.poorvika.com/common/Poorvika-english-logo.svg" alt="logo" />
                <form>
                    <input className='search h-9 indent-6 rounded-3xl' type='text' placeholder='Search for Products, Brands, Offers' />
                </form>
                <div>
                    <ul className='li flex'>
                        <li className='p-2 pr-10 font-semibold text-white'>Delivery</li>
                        <li className='p-2 pr-10 font-semibold text-white'>Locate</li>
                        <li className='p-2 pr-10 font-semibold text-white'>Items</li>
                        <li className='p-2 pr-10 font-semibold text-white'>My account</li>
                    </ul>
                </div>
            </div>
            <Banners />
            <div className='flash h-[70px] pl-14 w-full bg-blue-100 flex items-center'></div>
            <div className='con bg-blue-100'>
                <div className='ho'>
                    <Carousel />
                </div>
                <div className="on">
                    <a target='_blank' href='https://poorvika.com/s?categories_slug=categories_slug%3A%3D%5B%60oppo-f23-5g-mobiles%60%5D&stock_status=stock_status%3A%3D%5B%60In%20Stock%60%5D'><img className='h-[366px] ml-2 w-[250px]' src="https://img.poorvika.com/HomePage-Banner/Side-Banner/May-2023/oppo-f23-5g-2.webp" alt="one" /></a>
                </div>
            </div>
        </div>
    )
}

export default Header;
