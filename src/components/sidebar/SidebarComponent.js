
import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

import { AiOutlineStock, AiOutlinePieChart } from 'react-icons/ai'
import { RxDashboard } from 'react-icons/rx'
import { TbReportAnalytics, TbChessBishop, TbListDetails, TbFileInvoice, TbReport } from 'react-icons/tb'
import { IoBagCheckOutline } from 'react-icons/io5'
import { CgMenuMotion } from 'react-icons/cg'
import { PiTableLight } from 'react-icons/pi'
import { MdOutlineVerifiedUser } from 'react-icons/md'
import { BsCartCheck, BsBoxes, BsShopWindow, BsTruck } from 'react-icons/bs';
import { FaCashRegister } from 'react-icons/fa6'
import { RiAdminLine, RiBillLine } from 'react-icons/ri'
import { SlSettings } from 'react-icons/sl'
import { SiWebmoney } from 'react-icons/si'
import { GoTable } from 'react-icons/go'
import { useAppData } from '../../provider/AppProvider';

// ... (your icon imports)

function SidebarComponent({ children }) {
    const [isOpen, setIsOpen] = useState(false);
    const { selectedNav, functionSelectNav, functionSelecSubtNav,
        selectedSubNav, userType } = useAppData();

    // Use state to track open submenus
    const [openSubmenu, setOpenSubmenu] = useState(null);

    const toggleSideBar = () => setIsOpen(!isOpen);

    const toggleSubmenu = (index) => {
        if (openSubmenu === index) {
            setOpenSubmenu(null);
        } else {
            setOpenSubmenu(index);
        }
    };

    const navButtons = [
        {
            title: 'Komandna tabla',
            icon: <RxDashboard size={21} />,
            url: '/'
        },
        {
            title: 'Analitika',
            icon: <TbReportAnalytics size={21} />, // Replace with your analyses icon
            url: '/analyses'
        },
        {
            title: 'Proizvodi',
            icon: <TbChessBishop size={21} />, // Replace with your product icon,
            url: '/products'
        },
        {
            title: 'Porudzbine',
            icon: <IoBagCheckOutline size={21} />,
            url: '/orders'
        },
        {
            title: 'Tabele',
            icon: <PiTableLight size={21} />, // Replace with your tables icon,
            url: '/tables',
            submenu: [
                { title: 'Top Analitika', url: '/tables/top-data', icon: <MdOutlineVerifiedUser size={21} /> },
                { title: 'Mrtva zaliha', url: '/tables/mrtva-zaliha', icon: <BsBoxes size={21} /> },
                { title: 'VP zaliha', url: '/tables/vp-supplies', icon: <AiOutlineStock size={21} /> },
                { title: 'MP zaliha', url: '/tables/mp-zaliha', icon: <BsShopWindow size={21} /> },
                { title: 'Daily Overview', url: '/tables/daily-overview', icon: <TbListDetails size={21} /> }
            ]
        },
        {
            title: 'Veleprodajne Radnje',
            icon: <RiAdminLine size={21} />, // Replace with your tables icon,
            url: '/vp-actions',
            submenu: [
                { title: 'Proizvod Radnje', url: '/vp-actions/product-actions', icon: <BsCartCheck size={21} /> },
                { title: 'Zaliha Radnje', url: '/vp-actions/supplies-actions', icon: <BsBoxes size={21} /> },
                { title: 'Skladista Radnje', url: '/vp-actions/stocks-actions', icon: <BsShopWindow size={21} /> },
                { title: 'Veleprodajni racuni', url: '/vp-actions/vp-invoices', icon: <RiBillLine size={21} /> },
                { title: 'Reklamacije', url: '/vp-actions/complaints-actions', icon: <TbReport size={21} /> },
                { title: 'Garancija Radnje', url: '/vp-actions/warranty-actions', icon: <TbFileInvoice size={21} /> },
                { title: 'Zahtjev za analitiku', url: '/vp-actions/request-for-analyses', icon: <AiOutlinePieChart size={21} /> },
                { title: 'Zahtjev za tabelu', url: '/vp-actions/request-for-table', icon: <GoTable size={21} /> },
                { title: 'MP Racuni', url: '/vp-actions/mp-invoices', icon: <FaCashRegister size={21} /> },
                { title: 'Narudzbe', url: '/vp-actions/orders-actions', icon: <BsTruck size={21} /> }
            ]
        },
        {
            title: 'Fiskalne Kase',
            icon: <FaCashRegister size={21} />,
            url: '/fiscal-cash-register' 
        },
        {
            title: 'Online Prodavnica',
            icon: <SiWebmoney size={21} />,
            url: '/online-shop' 
        },
        {
            title: 'Settings',
            icon: <SlSettings size={21} />, // Replace with your tables icon,
            url: '/settings'
        },
        

    ];

    return (
        <div className='page-screen'>
            <div
                style={
                    isOpen === true
                        ? { width: 400, height: '100vh', backgroundColor: 'white' }
                        : { height: '100vh', backgroundColor: 'white' }
                }
                className='flex flex-col text-black p-5 gap-4 navigation-container overflow-auto'
            >
                <div className='w-full flex items-center mb-10 justify-between'>
                    {isOpen === true ? <img style={{ width: 120 }} src={require('../../assets/sidebar.png')} /> : null}
                    <button
                        onClick={toggleSideBar}
                        style={{ height: 40, width: 40 }}
                        className='bg-black text-white'
                    >
                        <CgMenuMotion size={25} className='ml-2' />
                    </button>
                </div>
                {/* Sidebar content */}
                {navButtons.map((button, i) => (
                    <div key={i}>
                        <div
                            className="cursor-pointer"
                            onClick={() => toggleSubmenu(i)}
                        >
                            <Link
                                onClick={() => functionSelectNav(i)}
                                to={'/dashboard' + button.url}
                                className={`p-3 hover:bg-black hover:text-white flex items-center ${selectedNav === i ? 'bg-black text-white' : 'bg-white text-black'}`}
                            >
                                {button.icon} {isOpen === true ? <span className='ml-2'>{button.title}</span> : null}
                            </Link>
                        </div>
                        {button.submenu && openSubmenu === i && isOpen === true && (
                            <div className='pl-6'>
                                {button.submenu.map((item, j) => (
                                    <Link
                                        onClick={() => functionSelecSubtNav(j)}
                                        key={j}
                                        to={'/dashboard' + item.url}
                                        className={`p-3 hover:bg-black hover:text-white flex items-center gap-2 ${selectedSubNav === j ? 'bg-black text-white' : 'bg-white text-black'}`}
                                    >
                                        {item.icon}
                                        {item.title}
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>
            <main style={{ backgroundColor: '#ddd' }} className='main-container'>
                {children}
            </main>
        </div>
    );
}

export default SidebarComponent;
