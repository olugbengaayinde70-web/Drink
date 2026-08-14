import React, { useState } from 'react'

function Head() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#drinks-section', label: 'Our Drinks' },
    { href: '#about-section', label: 'About us' },
    { href: '#gallery-section', label: 'Gallery' },
    { href: '#footer', label: 'Contact us' }
  ]

  return (
    <header className='h-auto md:h-[80px] w-full flex items-center justify-between px-4 md:px-8 py-4 md:py-0 shadow-lg sticky top-0 z-50' style={{backgroundColor: '#FFF9F2'}}>
        {/* Logo Section */}
        <div className='h-[70px] flex items-center gap-3 md:gap-4 flex-shrink-0 group cursor-pointer top'>
            <div className='h-[58px] w-[58px] flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:-rotate-12'>
              <img src="/Adklogo.png" alt="ADK Trading logo" className='w-full h-full object-contain' />
            </div>
            <div className='flex flex-col justify-center'>
                <h1 className='font-extrabold text-xl md:text-2xl transition-colors duration-300 group-hover:scale-105' style={{color: '#D91E18'}}>ADK Trading</h1>
                <p className='font-bold text-xs md:text-sm' style={{color: '#B91814'}}>Trading Store</p>
            </div>
        </div>

        {/* Hamburger Menu Button */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className='md:hidden flex flex-col gap-1.5 w-8 h-8 items-center justify-center'
        >
          <div className={`w-6 h-0.5 transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} style={{backgroundColor: '#D91E18'}}></div>
          <div className={`w-6 h-0.5 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`} style={{backgroundColor: '#D91E18'}}></div>
          <div className={`w-6 h-0.5 transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} style={{backgroundColor: '#D91E18'}}></div>
        </button>

        {/* Navigation Menu */}
        <nav className={`${isMenuOpen ? 'flex' : 'hidden'} md:flex absolute md:relative top-20 md:top-auto left-0 md:left-auto right-0 md:right-auto w-full md:w-auto flex-col md:flex-row items-center gap-2 md:gap-8 md:bg-transparent px-4 md:px-0 py-4 md:py-0 rounded-lg md:rounded-none shadow-lg md:shadow-none`} style={{backgroundColor: isMenuOpen ? '#FFF1E5' : 'transparent'}}>
            {navItems.map((item) => (
              <a 
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault()
                  setIsMenuOpen(false)
                  const id = item.href.replace('#','')
                  const el = document.getElementById(id)
                  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
                }}
                className='relative font-semibold text-sm md:text-base group py-2 md:py-0 w-full md:w-auto text-center md:text-left transition-colors duration-300'
                style={{color: '#D91E18'}}
              >
                {item.label}
                <span className='absolute bottom-0 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-500 rounded-full' style={{background: 'linear-gradient(to right, #D91E18, #F04438)'}}></span>
              </a>
            ))}
        </nav>

        {/* CTA Button */}
        <a href="https://wa.me/2348032821294" target="_blank" rel="noopener noreferrer" className='hidden md:block px-6 py-2 bg-gradient-to-r from-red-600 to-red-500 text-white font-bold rounded-lg shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-300 relative overflow-hidden group ml-4'>
          <span className='relative z-10'>Order Now</span>
          <div className='absolute inset-0 bg-gradient-to-r from-red-700 to-red-600 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10'></div>
        </a>

        {/* Mobile CTA Button */}
        <a href="https://wa.me/2348032821294" target="_blank" rel="noopener noreferrer" className='md:hidden px-4 py-2 bg-gradient-to-r from-red-600 to-red-500 text-white font-bold text-sm rounded-lg shadow-md hover:shadow-lg active:scale-95 transition-all duration-300'>
          Order
        </a>
    </header>
  )
}

export default Head