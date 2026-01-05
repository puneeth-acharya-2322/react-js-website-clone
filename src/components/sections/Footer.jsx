import React from 'react';
import Image from 'next/image';
import { Instagram, Youtube, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#121212] text-white pt-[60px] pb-[40px] font-sans">
      <div className="container mx-auto px-10 max-w-[1440px]">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-5 mb-[60px]">
          
          {/* About Column */}
          <div className="flex flex-col gap-[20px]">
            <h3 className="text-[14px] font-bold tracking-[0.1em] uppercase">About</h3>
            <p className="text-[14px] text-[#767676] leading-[1.6]">
              A premium luggage company.
            </p>
            <div className="mt-2">
              <a 
                href="#" 
                className="inline-flex items-center bg-[#5865F2] text-white px-4 py-2 text-[12px] font-bold rounded-full hover:opacity-90 transition-opacity"
              >
                <span className="mr-2">💜</span> Follow on shop
              </a>
            </div>
            {/* Social Icons for Mobile/Tablet */}
            <div className="flex lg:hidden gap-5 mt-4">
              <FaFacebook />
              <FaInstagram />
              <FaPinterest />
              <FaYoutube />
              <FaTiktok />
            </div>
          </div>

          {/* Shop Column */}
          <div className="flex flex-col gap-[15px]">
            <h3 className="text-[14px] font-bold tracking-[0.1em] uppercase">Shop</h3>
            <ul className="flex flex-col gap-[10px]">
              <li><a href="#" className="text-[14px] text-[#767676] hover:text-white transition-colors uppercase tracking-wider">Luggage</a></li>
              <li><a href="#" className="text-[14px] text-[#767676] hover:text-white transition-colors uppercase tracking-wider">Bags</a></li>
              <li><a href="#" className="text-[14px] text-[#767676] hover:text-white transition-colors uppercase tracking-wider">Accessories</a></li>
              <li><a href="#" className="text-[14px] text-[#767676] hover:text-white transition-colors uppercase tracking-wider">Corporate Gifting</a></li>
            </ul>
          </div>

          {/* About Links Column */}
          <div className="flex flex-col gap-[15px]">
            <h3 className="text-[14px] font-bold tracking-[0.1em] uppercase">About</h3>
            <ul className="flex flex-col gap-[10px]">
              <li><a href="#" className="text-[14px] text-[#767676] hover:text-white transition-colors uppercase tracking-wider">Our Story</a></li>
              <li><a href="#" className="text-[14px] text-[#767676] hover:text-white transition-colors uppercase tracking-wider">M Rewards</a></li>
              <li><a href="#" className="text-[14px] text-[#767676] hover:text-white transition-colors uppercase tracking-wider">Press</a></li>
              <li><a href="#" className="text-[14px] text-[#767676] hover:text-white transition-colors uppercase tracking-wider">Terms of Service</a></li>
              <li><a href="#" className="text-[14px] text-[#767676] hover:text-white transition-colors uppercase tracking-wider">Privacy Policy</a></li>
              <li><a href="#" className="text-[14px] text-[#767676] hover:text-white transition-colors uppercase tracking-wider">Collaboration</a></li>
            </ul>
          </div>

          {/* Help Column */}
          <div className="flex flex-col gap-[15px]">
            <h3 className="text-[14px] font-bold tracking-[0.1em] uppercase">Help</h3>
            <ul className="flex flex-col gap-[10px]">
              <li><a href="#" className="text-[14px] text-[#767676] hover:text-white transition-colors uppercase tracking-wider">Contact Us</a></li>
              <li><a href="#" className="text-[14px] text-[#767676] hover:text-white transition-colors uppercase tracking-wider">FAQ</a></li>
              <li><a href="#" className="text-[14px] text-[#767676] hover:text-white transition-colors uppercase tracking-wider">Shipping</a></li>
              <li><a href="#" className="text-[14px] text-[#767676] hover:text-white transition-colors uppercase tracking-wider">Returns & Exchanges</a></li>
              <li><a href="#" className="text-[14px] text-[#767676] hover:text-white transition-colors uppercase tracking-wider">Warranty Policy</a></li>
              <li><a href="#" className="text-[14px] text-[#767676] hover:text-white transition-colors uppercase tracking-wider">Do not sell my personal information</a></li>
            </ul>
          </div>

          {/* Newsletter Column */}
          <div className="flex flex-col gap-[20px]">
            <h3 className="text-[14px] font-bold tracking-[0.1em] uppercase">Newsletter</h3>
            <p className="text-[14px] text-[#767676] leading-[1.6]">
              Sign up to our newsletter to receive exclusive offers.
            </p>
            <form className="flex flex-col gap-3">
              <input 
                type="email" 
                placeholder="E-mail" 
                className="bg-transparent border border-[#333] px-4 py-3 text-[14px] focus:outline-none focus:border-white transition-colors w-full"
              />
              <button 
                type="submit" 
                className="bg-white text-black px-6 py-3 text-[12px] font-bold uppercase tracking-widest hover:bg-opacity-80 transition-all self-start"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Social Icons Desktop */}
        <div className="hidden lg:flex gap-6 mb-8 border-t border-[#222] pt-8">
           <a href="#" className="text-white hover:text-[#767676] transition-colors"><Facebook size={20} fill="currentColor" stroke="none" /></a>
           <a href="#" className="text-white hover:text-[#767676] transition-colors"><Instagram size={20} /></a>
           <a href="#" className="text-white hover:text-[#767676] transition-colors"><PinterestIcon /></a>
           <a href="#" className="text-white hover:text-[#767676] transition-colors"><Youtube size={20} /></a>
           <a href="#" className="text-white hover:text-[#767676] transition-colors"><TiktokIcon /></a>
        </div>

        {/* Global Selectors & Copyright Bar */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-6 pt-5 border-t border-[#222]">
          <div className="flex flex-wrap items-center gap-6 text-[11px] font-bold tracking-widest uppercase text-[#767676]">
            <div className="flex items-center gap-2 cursor-pointer hover:text-white transition-colors">
              <img src="//cdn.shopify.com/static/images/flags/us.svg?format=jpg&width=20" alt="US" className="w-[20px] h-[15px]" />
              United States (USD $) <span>⌄</span>
            </div>
            <div className="flex items-center gap-2 cursor-pointer hover:text-white transition-colors border-l border-[#222] pl-6">
              English <span>⌄</span>
            </div>
            <div className="lg:border-l border-[#222] lg:pl-6 text-[10px] tracking-normal font-normal">
              © 2026 - MVST
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-2">
            <PaymentIcon src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" />
            <PaymentIcon src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" />
            <PaymentIcon src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" />
            <PaymentIcon src="https://upload.wikimedia.org/wikipedia/commons/b/b7/Google_Pay_Logo.svg" />
            <PaymentIcon src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" className="invert" />
            <PaymentIcon src="https://shopify.com/static/images/brand-assets/shopify-pay-logo.png" />
          </div>
        </div>
      </div>
    </footer>
  );
};

/* Helper Components */

const PaymentIcon = ({ src, className = "" }) => (
  <div className={`bg-[#1e1e1e] p-1.5 px-2 rounded-[2px] border border-[#222] flex items-center justify-center w-[45px] h-[28px] ${className}`}>
    <img src={src} alt="payment" className="max-h-full max-w-full grayscale brightness-200" />
  </div>
);

const FaFacebook = () => <Facebook size={20} fill="currentColor" stroke="none" />;
const FaInstagram = () => <Instagram size={20} />;
const FaYoutube = () => <Youtube size={20} />;
const FaTiktok = () => <TiktokIcon />;
const FaPinterest = () => <PinterestIcon />;

const PinterestIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0c-6.627 0-12 5.373-12 12 0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.261 7.929-7.261 4.162 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146 1.124.347 2.317.535 3.554.535 6.627 0 12-5.373 12-12 0-6.627-5.373-12-12-12z" />
  </svg>
);

const TiktokIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12.525.02c1.31 0 2.591.233 3.783.655v4.581c-.556-.191-1.145-.298-1.758-.298-2.602 0-4.711 2.109-4.711 4.711v2.96h4.711v4.711h-4.711v6.657c0 2.602-2.109 4.711-4.711 4.711-2.602 0-4.711-2.109-4.711-4.711v-12.879l.011-.144c.15-1.583 1.052-2.924 2.378-3.664.693-.388 1.487-.611 2.333-.611h2.99z" />
  </svg>
);

export default Footer;