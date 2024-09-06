import './footer.css';

import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
const Footer = () => {
    return(
        <div className='footer '>
            <div className='Box1 squareBox'></div>
            <div className='Box2 squareBox'></div>
            <div className='Box3 squareBox'></div>
            <div className='Box4 squareBox'></div>
            <div className='footerTop flex-space-between'>
                <h2 className='logo'>BRISA</h2>
                <div className='footerList'>
                    <li>Home</li>
                    <li>Overview</li>
                    <li>Log</li>
                </div>
                <div className='footerList'>
                    <li>About</li>
                    <li>Privacy and Policy</li>
                    <li>Terms and Condition</li>
                </div>
                <div className='footerList'>
                    <li>Subscribe and More</li>
                    <li className='address'>Brisa@gamil.com</li>
                </div>
                <div className='footerList'>
                    <li>Follow Us</li>
                    <li><FaFacebookF /> <FaInstagram /> <FaTwitter /></li>
                </div>
            </div>
            <div className='footerBottom'>
                <li>Copyright @ 2024</li>
                <hr />
                <li>Created by ABC Media</li>
            </div>
        </div>
    )
}
export default Footer;