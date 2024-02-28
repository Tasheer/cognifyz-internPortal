import React from 'react';
import { FaLocationDot } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";


const Footer = () => {

    const scrollToTop = () => {
        const buttonSection = document.getElementById('top');
        if (buttonSection) {
            window.scrollTo({
                top: buttonSection.offsetTop,
                behavior: 'smooth',
            });
        }
    }

    return (
        <div className='footer'>
            <div className='logo'>
                <img src="https://cognifyz.com/wp-content/uploads/2022/06/fdhgfs.png" alt="" />
                <p style={{color:'white'}}>
                Face challenges as opportunities, <br /> much like Cognifyz Technologies <br /> navigates innovation. With determination <br /> and belief in your potential, every hurdle <br /> becomes a stepping stone to success.
                </p>
            </div>
            <div>
                <button onClick={scrollToTop}>
                    Back to top
                </button>
            </div>
            <div className='Contact' id='contact-section'>
                <div>
                    <FaLocationDot />
                    <span>
                        Nagpur, Maharashtra
                    </span>
                </div>
                <div>
                    <IoMdMail />
                    <span>
                        cognifyztechnologies@gmail.com
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Footer;