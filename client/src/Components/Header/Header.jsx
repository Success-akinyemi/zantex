import { Link } from 'react-router-dom';
import './Header.css'
import { IoMenu } from "react-icons/io5";
import { useEffect, useState } from 'react';

function Header({toggle}) {
    const [isScroll, setIsScroll] = useState(false)


        useEffect(() => {
                window.onscroll = () => {
                    console.log('Scrolling')
                    setIsScroll(window.scrollY === 0 ? false : true)
                }
        }, [])

  return (
    <div className={`sidePadding header ${isScroll ? 'scroll' : ''}`}>
        <div className={`logo ${isScroll ? 'gray' : ''}`}>
            <Link className='link' to='/'>Zantex</Link>
        </div>

        <div className={`menu ${isScroll ? 'gray' : ''}`}>
            <div className="country">Nigeria (EN)</div>
            <div className="support">
                <Link className='link'>Support</Link>
            </div>
            <div className="signupBtn">
                <Link className='link signupLink'>sign up</Link>
            </div>
            <div className="hamburger" onClick={toggle}>
                <IoMenu className='menuIcon' />
            </div>
        </div>
    </div>
  )
}

export default Header