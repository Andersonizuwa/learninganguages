import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    // Function to check if the viewport width is less than a certain threshold
    const handleResize = () => {
      setIsMobileView(window.innerWidth < 768); // Adjust the threshold as needed
    };

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Call handleResize to set initial isMobileView state
    handleResize();

    // Clean up event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className="flex justify-between items-center gap-5">
        <div>
          <img src="/assets/logo.svg" alt="logo" />
        </div>
        <button className='btn bg-white text-[#7270dd] border-none hover:bg-[#7270dd] hover:text-white capitalize rounded-full' onClick={toggleMenu}>
          {!isOpen ?
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
            </svg>
            :
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          }
        </button>
      </div>
      {(isMobileView || isOpen) && (
        <div className={`flex flex-col items-center gap-5 ${isOpen ? 'block' : 'hidden'}`}>
          <p>Courses</p>
          <p>About Us</p>
          <p>Teacher</p>
          <p>Pricing</p>
          <p>Careers</p>
          <p>Blog</p>
        </div>
      )}
    </div>
  );
};

export default Navbar;
