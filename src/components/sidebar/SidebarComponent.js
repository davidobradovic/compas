
import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

import { AiOutlineStock, AiOutlineTeam, AiOutlinePieChart } from 'react-icons/ai'
import { RxDashboard } from 'react-icons/rx'
import { TbReportAnalytics, TbChessBishop, TbListDetails, TbSubtask, TbFileInvoice } from 'react-icons/tb'
import { IoBagCheckOutline } from 'react-icons/io5'
import { LuBoxes } from 'react-icons/lu'
import { CgMenuMotion } from 'react-icons/cg'
import { PiTableLight } from 'react-icons/pi'
import { MdOutlineVerifiedUser } from 'react-icons/md'
import { BsFiles, BsBoxSeam, BsCartCheck, BsBoxes, BsShopWindow, BsTruck } from 'react-icons/bs';
import { LuFileBadge, LuLayoutDashboard } from 'react-icons/lu';
import { FaCashRegister } from 'react-icons/fa'
import { GrOverview } from 'react-icons/gr'
import { RiAdminLine, RiBillLine } from 'react-icons/ri'
import { SlSettings } from 'react-icons/sl'
import { GoTable } from 'react-icons/go'
import { useAppData } from '../../provider/AppProvider';

// ... (your icon imports)

function SidebarComponent({ children }) {
    const [isOpen, setIsOpen] = useState(false);
    const { selectedNav, functionSelectNav } = useAppData();

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
            title: 'Zalihe',
            icon: <LuBoxes size={21} />,
            url: '/supplies'
        },
        {
            title: 'Tabele',
            icon: <PiTableLight size={21} />, // Replace with your tables icon,
            url: '/tables',
            submenu: [
                { title: 'Top Korisnici', url: '/products/top-users', icon: <MdOutlineVerifiedUser size={21} /> },
                { title: 'Top Proizvodi', url: '/products/top-products', icon: <BsCartCheck size={21} /> },
                { title: 'Mrtva zaliha', url: '/products/mrtva-zaliha', icon: <BsBoxes size={21} /> },
                { title: 'VP zaliha', url: '/products/vp-zaliha', icon: <AiOutlineStock size={21} /> },
                { title: 'MP zaliha', url: '/products/mp-zaliha', icon: <BsShopWindow size={21} /> },
                { title: 'Daily Overview', url: '/products/daily-overview', icon: <TbListDetails size={21} /> }
            ]
        },
        {
            title: 'Veleprodajne Radnje',
            icon: <RiAdminLine size={21} />, // Replace with your tables icon,
            url: '/vp-actions',
            submenu: [
                { title: 'Proizvod Radnje', url: '/products/top-users', icon: <BsCartCheck size={21} /> },
                { title: 'Zaliha Radnje', url: '/products/top-products', icon: <BsBoxes size={21} /> },
                { title: 'Skladista Radnje', url: '/products/top-products', icon: <BsShopWindow size={21} /> },
                { title: 'Veleprodajni racuni', url: '/products/mrtva-zaliha', icon: <RiBillLine size={21} /> },
                { title: 'Garancija Radnje', url: '/products/vp-zaliha', icon: <TbFileInvoice size={21} /> },
                { title: 'Zahtjev za analitiku', url: '/products/mp-zaliha', icon: <AiOutlinePieChart size={21} /> },
                { title: 'Zahtjev za tabelu', url: '/products/daily-overview', icon: <GoTable size={21} /> },
                { title: 'MP Racuni', url: '/products/daily-overview', icon: <FaCashRegister size={21} /> },
                { title: 'Narudzbe', url: '/products/daily-overview', icon: <BsTruck size={21} /> }
            ]
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
                    {isOpen === true ? <h1 className='text-black'>Sidebar</h1> : null}
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
                                        key={j}
                                        to={'/dashboard' + item.url}
                                        className='p-3 hover:bg-black hover:text-white flex items-center bg-white text-black flex items-center gap-2'
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
