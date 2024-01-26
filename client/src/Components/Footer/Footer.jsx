import './Footer.css'
import ZantexLogo from '../../assets/zantexLogo.png'
import { company, partnerWithZandex } from '../../data/footer'
import { Link } from 'react-router-dom'
import { FaSquareInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa6";

function Footer() {
  return (
    <div className='footer'>
        <div className="sidePadding content">
            <div className='one'>
                <img src={ZantexLogo} alt="logo" className="logoImg" />
                <span className='country'>Nigeria</span>
                <span className='language'>English</span>
            </div>
            <div className='two'>
                <h3 className="heading">Zandex</h3>
            </div>

            <div className='three'>
                <h3 className="heading">Partner with zandex</h3>
                <div className="links">
                    {partnerWithZandex.map((item, idx) => (
                        <Link key={idx} className='link footerLink' to={item.link}>{item.text}</Link>
                    ))}
                </div>
            </div>

            <div className='four'>
                <h3 className="heading">Company</h3>
                <div className="links">
                    {company.map((item, idx) => (
                        <Link key={idx} className='link footerLink' to={item.link}>{item.text}</Link>
                    ))}
                </div>
            </div>
        </div>

        <div className='sidePadding middle'>
            <div className="top">
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

                <div className="address">
                    <p className='head'>Address</p>
                    <p className='text'>20. 1st Ave Efab City Estate, Abuja</p>
                </div>
            </div>

            <hr />

            <div className="bottom">
                <div className='copy'>&copy; 2024 Zantex Technology NG</div>

                <div className="policy">
                    <Link to='' className='link pLink'>Suppliers</Link>
                    <Link to='' className='link pLink'>Term & Conditions</Link>
                    <Link to='' className='link pLink'>Privacy</Link>
                    <Link to='' className='link pLink'>Cookies</Link>
                    <Link to='' className='link pLink'>Security</Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer