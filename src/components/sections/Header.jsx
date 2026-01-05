"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { Search, User, ShoppingBag, ChevronDown, Menu, X } from 'lucide-react';

const Header = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuItems = [
    {
      title: 'Suitcases',
      href: '/collections/all-collections-1',
      megaMenu: {
        links: [
          {
            title: 'Aluminum',
            href: '/collections/aluminum-collections',
            subLinks: [
              { title: 'TREVA', href: '/collections/treva' },
              { title: 'SPACE', href: '/collections/space-aluminum-luggage' },
            ],
          },
          {
            title: 'Carbon Fiber',
            href: '/collections/carbon-fiber-collection',
            subLinks: [
              { title: 'CARBON S', href: '/collections/carbon-s-1' },
              { title: 'CARBON X', href: '/collections/carbon-x-1' },
            ],
          },
          {
            title: 'Polycarbonate',
            href: '/collections/polycarbonate-collections',
            subLinks: [
              { title: 'ESSENTIAL', href: '/collections/polycarbonate-collections' },
            ],
          },
        ],
        promos: [
          {
            title: 'CARBON X 2.0',
            image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/df07f944-c474-404e-8e67-b719fa236490-mvstselect-com/assets/images/XU_03092_1-2.png',
            href: '/collections/carbon-x-1',
          },
          {
            title: 'Carbon S 2.0',
            image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/df07f944-c474-404e-8e67-b719fa236490-mvstselect-com/assets/images/Y4A6857-2-4_5-3.jpg',
            href: '/collections/carbon-s-1',
          },
        ],
      },
    },
    {
      title: 'Bags',
      href: '/collections/bags',
      megaMenu: {
        links: [
          {
            title: 'Bags',
            href: '/collections/bags',
            subLinks: [
              { title: 'Duffle Bag Garment Bag 2 in 1', href: '/products/garment-duffel-bag' },
              { title: 'Duffle Bag', href: '/products/duffle-bag' },
            ],
          },
        ],
        promos: [
          {
            title: 'DUFFLE BAG',
            image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/df07f944-c474-404e-8e67-b719fa236490-mvstselect-com/assets/images/XU_08648_1_25e63296-256c-4f5a-9c96-9e76af89df0b-4.png',
            href: '/products/duffle-bag',
          },
        ],
      },
    },
    {
      title: 'Accessories',
      href: '/collections/accesssories',
      megaMenu: {
        links: [
          {
            title: 'Accessories',
            href: '/collections/accesssories',
            subLinks: [
              { title: 'RFID-Blocking Alcantara Slim Wallet', href: '/products/slim-wallet' },
              { title: 'Alcantara Luggage Tag', href: '/products/alcantara-luggage-tag' },
              { title: 'Alcantara Keychain Tag', href: '/products/alcantara-keychain-tag' },
              { title: 'The Toiletry Bag', href: '/products/the-toiletry-bag' },
              { title: 'Premium Luggage Cover', href: '/products/luggage-cover-for-carbon-fiber-collections' },
            ],
          },
        ],
        promos: [],
      },
    },
    { title: 'M Rewards', href: '#smile-home' },
    {
      title: 'LAST CHANCE',
      href: '/collections/trek-aluminum-suitcase',
      megaMenu: {
        links: [
          { title: 'TREK', href: '/collections/trek-aluminum-suitcase', subLinks: [] },
        ],
        promos: [
          {
            title: 'Final TREK Clearance',
            image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/df07f944-c474-404e-8e67-b719fa236490-mvstselect-com/assets/images/Y-jaydonguiler-Img-14-Unlimited-5.jpg',
            href: '/collections/trek-aluminum-suitcase',
          },
          {
            title: 'Almost Gone',
            image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/df07f944-c474-404e-8e67-b719fa236490-mvstselect-com/assets/images/Y-vadymbattenko-Img-7-Unlimited_fc9d5d19-0424-41fc-6.jpg',
            href: '/products/trek-aluminum-suitcase-black',
          },
        ],
      },
    },
  ];

  return (
    <div className="relative z-50">
      {/* Announcement Bar */}
      <div className="bg-[#121212] text-white py-2.5 px-10 text-center">
        <p className="text-[10px] md:text-[11px] font-semibold tracking-[0.1em] uppercase leading-tight">
          FREE SHIPPING & RETURNS for all Contiguous us and select Canada & Europe orders
        </p>
      </div>

      {/* Main Header */}
      <header 
        className="bg-[#121212] text-white h-[80px] md:h-[100px] border-b border-[#262626] transition-all duration-300 sticky top-0"
        onMouseLeave={() => setActiveMenu(null)}
      >
        <div className="container mx-auto h-full px-5 md:px-10 flex items-center justify-between">
          
          {/* Logo - Mobile/Tablet Left aligned, Desktop Left */}
          <div className="flex-shrink-0">
            <a href="/" className="block">
              <img 
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/df07f944-c474-404e-8e67-b719fa236490-mvstselect-com/assets/images/500px_png02_725cc26e-d0a6-421d-b993-1435983ccf06-1.png" 
                alt="MVST" 
                className="w-[120px] md:w-[150px] object-contain"
              />
            </a>
          </div>

          {/* Primary Mobile Menu Trigger */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop Navigation Menu */}
          <nav className="hidden md:flex items-center justify-center flex-grow">
            <ul className="flex items-center gap-8">
              {menuItems.map((item) => (
                <li 
                  key={item.title} 
                  className="relative h-[100px] flex items-center"
                  onMouseEnter={() => item.megaMenu && setActiveMenu(item.title)}
                >
                  <a 
                    href={item.href} 
                    className="text-[14px] font-semibold tracking-wider uppercase hover:opacity-70 transition-opacity flex items-center gap-1"
                  >
                    {item.title}
                  </a>

                  {/* Mega Menu Dropdown */}
                  {item.megaMenu && activeMenu === item.title && (
                    <div 
                      className="fixed left-0 top-[125px] w-full bg-[#121212] border-t border-[#262626] shadow-2xl animate-in fade-in slide-in-from-top-2 duration-300"
                      onMouseEnter={() => setActiveMenu(item.title)}
                    >
                      <div className="container mx-auto px-10 py-12 flex gap-16">
                        {/* Links Columns */}
                        <div className="flex gap-16 flex-grow">
                          {item.megaMenu.links.map((col) => (
                            <div key={col.title} className="flex flex-col gap-6 min-w-[180px]">
                              <a href={col.href} className="text-[14px] font-bold tracking-widest uppercase hover:opacity-70">
                                {col.title}
                              </a>
                              <ul className="flex flex-col gap-4">
                                {col.subLinks.map((sub) => (
                                  <li key={sub.title}>
                                    <a href={sub.href} className="text-[14px] text-[#767676] hover:text-white transition-colors uppercase">
                                      {sub.title}
                                    </a>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>

                        {/* Promo Images */}
                        {item.megaMenu.promos.length > 0 && (
                          <div className="flex gap-10">
                            {item.megaMenu.promos.map((promo) => (
                              <a key={promo.title} href={promo.href} className="group w-[240px] flex flex-col gap-5 items-center">
                                <div className="overflow-hidden bg-[#1D1D1D] aspect-[4/5] w-full">
                                  <img 
                                    src={promo.image} 
                                    alt={promo.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                  />
                                </div>
                                <span className="text-[14px] font-bold uppercase tracking-widest text-center">
                                  {promo.title}
                                </span>
                              </a>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* Secondary Navigation (Right side) */}
          <div className="hidden md:flex items-center gap-6">
            {/* Country Selector */}
            <div className="flex items-center gap-2 cursor-pointer group hover:opacity-70">
              <img 
                src="https://cdn.shopify.com/static/images/flags/us.svg?format=jpg&width=60" 
                alt="US" 
                className="w-4 h-3 object-cover" 
              />
              <span className="text-[10px] font-bold tracking-widest">USD $</span>
              <ChevronDown size={10} className="text-[#767676]" />
            </div>

            {/* Language Selector */}
            <div className="flex items-center gap-1 cursor-pointer group hover:opacity-70">
              <span className="text-[10px] font-bold tracking-widest">ENGLISH</span>
              <ChevronDown size={10} className="text-[#767676]" />
            </div>

            {/* Icons */}
            <div className="flex items-center gap-5 ml-4">
              <a href="/account" className="hover:opacity-70 transition-opacity">
                <User size={20} strokeWidth={1.5} />
              </a>
              <button className="hover:opacity-70 transition-opacity">
                <Search size={20} strokeWidth={1.5} />
              </button>
              <button className="hover:opacity-70 transition-opacity relative">
                <ShoppingBag size={20} strokeWidth={1.5} />
              </button>
            </div>
          </div>

          {/* Mobile Right Icons (Always visible) */}
          <div className="md:hidden flex items-center gap-4">
            <button className="hover:opacity-70 transition-opacity">
              <Search size={22} strokeWidth={1.5} />
            </button>
            <button className="hover:opacity-70 transition-opacity">
              <ShoppingBag size={22} strokeWidth={1.5} />
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 top-[125px] bg-[#121212] z-[100] md:hidden overflow-y-auto">
            <div className="p-8 pb-32">
              <ul className="flex flex-col gap-10">
                {menuItems.map((item) => (
                  <li key={item.title}>
                    <div className="flex justify-between items-center border-b border-[#262626] pb-4">
                      <a href={item.href} className="text-[20px] font-bold uppercase tracking-widest">
                        {item.title}
                      </a>
                      {item.megaMenu && <ChevronDown size={20} />}
                    </div>
                  </li>
                ))}
              </ul>
              
              <div className="mt-12 flex flex-col gap-8 text-[12px] font-bold tracking-[0.2em] text-[#767676]">
                <div className="flex items-center gap-4">
                  <img src="https://cdn.shopify.com/static/images/flags/us.svg?format=jpg&width=60" alt="US" className="w-6 h-4" />
                  <span>UNITED STATES (USD $)</span>
                </div>
                <div>ENGLISH</div>
                <div className="flex items-center gap-3">
                  <User size={18} />
                  <span>ACCOUNT</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>
    </div>
  );
};

export default Header;