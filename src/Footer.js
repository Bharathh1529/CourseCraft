import React from 'react';
import './Footer.css';
import CourseCraftLogo from './Logoo.png';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import AppleIcon from '@mui/icons-material/Apple';
import AndroidIcon from '@mui/icons-material/Android';

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-content'>
                <div className='footer-logo'>
                    <img src={CourseCraftLogo} className='logo' alt="CourseCraft Logo" />
                </div>
                <div className='footer-company-info'>
                    <p>CourseCraft is your gateway to knowledge. We provide quality education for all ages.</p>
                </div>
                <div className='footer-columns'>
                    <div className='footer-column'>
                        <h4>Company</h4>
                        <a href='/about'>About Us</a>
                        <a href='/contact'>Contact Us</a>
                        <a href='/careers'>Careers</a>
                    </div>
                    <div className='footer-column'>
                        <h4>Resources</h4>
                        <a href='/blog'>Blog</a>
                        <a href='/help'>Help & Support</a>
                        <a href='/affiliate'>Affiliate</a>
                    </div>
                    <div className='footer-column'>
                        <h4>Legal</h4>
                        <a href='/terms'>Terms of Use</a>
                        <a href='/privacy'>Privacy Policy</a>
                        <a href='/cookie'>Cookie Settings</a>
                    </div>
                    <div className='footer-column'>
                        <h4>Follow Us</h4>
                        <div className='social-icons'>
                            <a href='/'><FacebookIcon /> Facebook</a>
                            <a href='/'><TwitterIcon /> Twitter</a>
                            <a href='/'><LinkedInIcon /> LinkedIn</a>
                            <a href='/'><InstagramIcon /> Instagram</a>
                            <a href='/'><YouTubeIcon /> YouTube</a>
                        </div>
                    </div>
                    <div className='footer-column'>
                        <h4>Get the App</h4>
                        <div className='app-icons'>
                            <a href='/'><AppleIcon /> App Store</a>
                            <a href='/'><AndroidIcon /> Google Play</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className='footer-bottom'>
                <p>&copy; 2024 CourseCraft, Inc. All rights reserved.</p>
                <div className='legal-links'>
                    <a href='/terms'>Terms & Conditions</a>
                    <a href='/privacy'>Privacy Policy</a>
                    <a href='/sitemap'>Sitemap</a>
                </div>
            </div>
        </div>
    );
}

export default Footer;
