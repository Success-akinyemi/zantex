import { Link } from 'react-router-dom';
import './DropDown.css'
import { IoClose } from "react-icons/io5";
import { dropDownsidebar } from '../../data/dropDownSidebar';
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { mainMenu } from '../../data/dropDownMainMenu';
import { useState } from 'react';
import Products from '../Helpers/Products/Products.JSX';
import Company from '../Helpers/Company/Company';
import Saftey from '../Helpers/Saftey/Saftey';
import Support from '../Helpers/Support/Support';
import Cities from '../Helpers/Cities/Cities';
import EarnWithBolt from '../Helpers/EarnWithBolt/EarnWithBolt.JSX';
import { FaSquareInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa6";

function DropDown({isOpen, toggle}) {
    const [ menuLink, setMenuLink ] = useState('1')

    const handleMenu = (id) => {
        setMenuLink(id)
    }

    const renderComponets = () => {
        switch(menuLink){
            case '1':
                return <Products />
            case '2':
                return <EarnWithBolt />
            case '3':
                return <Company />
            case '4':
                return <Saftey />
            case '5':
                return <Support />
            case '6':
                return <Cities />
        }
    }
  return (
    <div className={`dropDown ${isOpen ? 'open' : 'close'}`} >
        <div className={`sidePadding header scroll}`}>
            <div className={`logo gray`}>
                <Link className='link' to='/'>Zantex</Link>
            </div>

            <div className={`menu gray`}>
                <div className="country">Nigeria (EN)</div>
                <div className="support">
                    <Link className='link'>Support</Link>
                </div>
                <div className="signupBtn">
                    <Link className='link signupLink'>sign up</Link>
                </div>
                <div className='closeBtn' onClick={toggle} isOpen={isOpen}>
                    <IoClose className='icon' />
                </div>
            </div>
        </div>

        <div className="sidePadding content">
            <div className='menus'>
                <div className="main">
                    <div className="top">
                        {
                            mainMenu.map((item, idx) => (
                                <div key={idx} className={`links ${ menuLink === item.id ? 'active' : ''}`} onClick={() => handleMenu(item.id)}>{item.text}</div>
                            ))
                        }
                    </div>
                    <div className="bottom">
                        {renderComponets()}
                    </div>
                </div>

                <div className="side">
                    {
                        dropDownsidebar.map((item, idx) => (
                            <Link className="link sideMenu" key={idx} to={item.link} >
                                <div className='one'>
                                    <span className='icon'>
                                        {item.icon && <item.icon />}
                                    </span>
                                    <div className="info">
                                        <h3>{item.title}</h3>
                                        <p>{item.text}</p>
                                    </div>
                                </div>
                                <MdOutlineKeyboardArrowRight className='arrow' />
                            </Link>
                        ))
                    }
                </div>

            </div>

            <div className="foot">
                <div className="socials">
                    <div className="social">
                        <a href="" target='_blank' className='link'><FaFacebookF /></a>
                    </div>
                    <div className="social">
                        <a href="" className='link' target='_blank'><FaSquareInstagram /></a>
                    </div>
                    <div className="social">
                        <a href="" className='link' target='_blank'><FaXTwitter /></a>
                    </div>
                    <div className="social">
                        <a href="" className='link' target='_blank'><FaLinkedinIn /></a>
                    </div>
                    <div className="social">
                        <a href="" className='link' target='_blank'><FaTiktok /></a>
                    </div>
                </div>

                <div className="right">
                    <div className="policy">
                        <Link to='' className='link pLink'>Term & Conditions</Link>
                        <Link to='' className='link pLink'>Privacy</Link>
                        <Link to='' className='link pLink'>Cookies</Link>

                        <div className='copy'>&copy; 2024 Zantex Technology NG</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DropDown