import React from 'react';
import { FaArrowRightLong } from "react-icons/fa6";
import { RxDividerVertical } from "react-icons/rx";


const Navbar = () => {

    const scrollToContact = () => {
        const contactSection = document.getElementById('contact-section');
        if (contactSection) {
            window.scrollTo({
                top: contactSection.offsetTop,
                behavior: 'smooth',
            });
        }
    }

    return (
        <div className='navbar'>

            <div></div>

            <div className='nav'>
                <div>
                    Home
                </div>

                <div>
                    <RxDividerVertical />
                </div>

                <div>
                    About us
                </div>

                <div>
                    <RxDividerVertical />
                </div>

                <div onClick={scrollToContact}>
                        Contact us
                </div>

            </div>

            <div className='apply'>
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLScd5TRLHUVC8kle_6k4JceWTcfknRoNsuRB6Q4ymhGrAIsnSA/viewform">
                <button className='apply-btn'>
                    <span>
                        Apply now for internship
                    </span>
                    <FaArrowRightLong />
                </button>
                    </a>
            </div>

        </div>
    )
}

export default Navbar;