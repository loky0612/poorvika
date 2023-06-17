import React from 'react';
import Card from './Card';
import apple from '../Images/Mobiles/apple.png';
import vivo from '../Images/Mobiles/vivo.png';
import one from '../Images/Mobiles/oneplus-9.png';
import sam from '../Images/Mobiles/sam.avif';
import realme from '../Images/Mobiles/realme.webp';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const Carousel = () => {
    const scrollLeft = () => {
        document.getElementById("content").scrollLeft -= 800;
    }
    const scrollRight = () => {
        document.getElementById("content").scrollLeft += 800;
    }
    return (
        <div className='relative'>
            <div id='content' className='caurosel p-4 flex items-center justify-start overflow-x-auto scroll-smooth scrollbar-hide'>
                <div className='absolute right-0 top-5'>
                    <button onClick={scrollLeft} className='p-2 m-2 rounded-full bg-white'><FiChevronLeft /></button>
                    <button onClick={scrollRight} className='p-2 m-2 rounded-full bg-white'><FiChevronRight /></button>
                </div>
                <div>
                    <Card src={apple} pname="Apple iPhone 14 Pro Max" price="1,79,999"/>
                </div>
                <div>
                    <Card  src="https://www.addmecart.com/wp-content/uploads/2022/11/3663.png" pname="One Plus 9 Pro 5G" price="53990"/>
                </div>
                <div>
                    <Card src={sam} pname="Samsung A04E 3GB/64GB" price="9999"/>
                </div>
                <div>
                    <Card src={one} pname="One Plus 9 8GB/128GB " price="49,840"/>
                </div>
                <div>
                    <Card src={realme} pname="Realme 9 5G" price="15999"/>
                </div>
                <div>
                    <Card src="https://i01.appmifile.com/webfile/globalimg/in/cms/3EC458F8-DBC7-156A-635D-6B13FE1A78E0.jpg" price="8999" pname="Redmi Note 9 Pro"/>
                </div>
                <div>
                    <Card src="https://asia-exstatic-vivofs.vivo.com/PSee2l50xoirPK7y/1680608348421/43cc64c5b44b7d228bb820700e972ea4.png" pname="VIVO Y36 5G" price="18,700"/>
                </div>
                <div>
                    <Card src="https://images.samsung.com/is/image/samsung/p6pim/levant/sm-m536bzbhmea/gallery/levant-galaxy-m53-5g-sm-m536-sm-m536bzbhmea-532527343?$650_519_PNG$" pname="Samsung M53 Blue 256GB" price="27,999"/>
                </div>
                <div>
                    <Card src={vivo} pname="Vivo Y16 4GB/128GB - Black" price="10,4999"/>
                </div>
            </div>
        </div>
    )
}

export default Carousel