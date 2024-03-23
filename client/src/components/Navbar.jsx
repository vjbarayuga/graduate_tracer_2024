import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { RxHamburgerMenu } from 'react-icons/rx';
import { FaTimes } from 'react-icons/fa';
import logo from '../assets/ISPSC_LOGO_new.png';

function Navbar({
  isAdmin,
  showSearchLink,
  setActiveForm,
  user,
  handleLogout,
  idVisible,
}) {
  // nav is starting off false
  const [nav, setNav] = useState(false);
  // so when user clicks the hamburger button, it goes from false(!nav) to true(nav)
  const handleClick = () => setNav(!nav);

  return (
    <nav
      className="flex justify-between p-5 items-center border-b bg-[#e7e7e7d1] nav"
      style={{ zIndex: 1000 }}
    >
      {/* <nav className="flex justify-between p-5 items-center border-b bg-[#e7e7e7d1] nav"> */}
      {/* Logo */}
      {/* <div className="flex items-center">
        <img src={logo} alt="Logo" className="h-8 mr-2" />
        <h1 className="text-4xl logo">ISPSC Alumni Tracer App</h1>
      </div>
      <ul className="hidden  md:flex gap-6">
        <Link to="/dashboard">
          <li>Home</li>
        </Link>
        {isAdmin && showSearchLink && (
          <Link to="/search">
            <li>Search</li>
          </Link>
        )}
        {isAdmin && showSearchLink && (
          <Link to="/search-course">
            <li>Search Course</li>
          </Link>
        )} */}
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="h-8 mr-2" />
        <h1 className="text-4xl logo">ISPSC Alumni Tracer App</h1>
      </div>
      <ul className="hidden md:flex gap-6">
        <Link to="/dashboard" onClick={() => setActiveForm('alumni')}>
          <li>Home</li>
        </Link>
        {/* {isAdmin && showSearchLink && (
          <Link to="/search" onClick={() => setActiveForm('alumniSearch')}>
            <li>Search</li>
          </Link>
        )} */}
        {isAdmin && showSearchLink && (
          <Link
            to="/search-course"
            onClick={() => setActiveForm('searchCourse')}
          >
            <li>Batch Tracer</li>
          </Link>
        )}
        {/* <Link to="/about">
          <li>About</li>
        </Link>
        <Link to="/contact">
          <li>Contact Us</li>
        </Link> */}
      </ul>

      {/* User Profile and Logout */}
      {user && (
        <div className="flex items-center">
          <div className="text-right">
            <h2 className="text-2xl font-bold">
              Hi {user.username} {idVisible ? user.id : ''}!
            </h2>
          </div>
          <button
            onClick={handleLogout}
            className="ml-4 text-red-500 hover:text-blue-600 px-4 py-2"
          >
            Logout
          </button>
        </div>
      )}

      {/* Hamburger or Close Icon */}
      <div className=" md:hidden z-10" onClick={handleClick}>
        {nav ? (
          <FaTimes size={25} color="white" />
        ) : (
          <RxHamburgerMenu size={25} />
        )}
      </div>

      {/* Mobile Menu */}
      <ul
        className={`${
          nav
            ? 'text-white opacity-100 transform translate-x-0'
            : 'opacity-0 transform -translate-y-full'
        } transition-transform absolute w-full h-screen bg-zinc-800/80 flex flex-col justify-center items-center text-2xl`}
        onClick={() => setNav(false)}
      >
        <Link to="/dashboard">
          <li className="hover:text-teal-700">Home</li>
        </Link>
        {isAdmin && showSearchLink && (
          <Link to="/search">
            <li className="hover:text-teal-700">Search User</li>
          </Link>
        )}
        {isAdmin && showSearchLink && (
          <Link to="/search-course">
            <li className="hover:text-teal-700">Search Course</li>
          </Link>
        )}
        {/* <Link to="/about">
          <li className="hover:text-teal-700">About</li>
        </Link>
        <Link to="/contact">
          <li className="hover:text-teal-700">Contact Us</li>
        </Link> */}
      </ul>
    </nav>
  );
}

export default Navbar;
