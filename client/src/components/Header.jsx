import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { FaLandmark } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

import OutsideClickHandler from "react-outside-click-handler";

import Hamburger from "hamburger-react";
import { useSelector } from "react-redux";

const Header = () => {
  const  {currentUser}  = useSelector((state) => state.user);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set('searchTerm', searchTerm);
    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`);
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const searchTermFromUrl = urlParams.get('searchTerm');
    if (searchTermFromUrl) {
      setSearchTerm(searchTermFromUrl);
    }
  }, [location.search]);


  const [isOpen, setOpen] = useState(false);

  let timeoutId;

  const setDelayedState = (state, delay) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      setOpen(state);
    }, delay);
  };

  const handleToggle = () => {
    setDelayedState(!isOpen, 100);
  };

  const closeMenu = () => {
    setDelayedState(false, 100);
  };

  const handleLinkClick = () => {
    // Close the menu with a delay to allow time for navigation
    setDelayedState(false, 100);
  };
  return (
    <header className="bg-slate-200 shadow-md font-inter">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <Link to="/">
          <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
            <span className="flex items-center mr-1">
              <FaLandmark />
            </span>
            <span className="text-slate-500">Real</span>
            <span className="text-slate-700">Estate</span>
          </h1>
        </Link>
        <form onSubmit={handleSubmit} className="bg-slate-100 p-3 rounded-lg flex items-center">
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent focus:outline-none w-24 sm:w-64"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <FaSearch className="text-slate-600" />
        </form>
        <ul className="flex items-center gap-4 font-semibold">
          <Link to="/">
            <li className="hidden sm:inline text-slate-700 hover:underline">
              Home
            </li>
          </Link>
          <Link to="/about">
            <li className="hidden sm:inline text-slate-700 hover:underline">
              About
            </li>
          </Link>
          <Link to="/profile">
            {currentUser ? (
              <img className="hidden sm:inline   rounded-full h-12 w-12 object-cover" src={currentUser.avatar}/>
            ) : (
              <li className="hidden sm:inline text-slate-700 hover:underline">
                Sign in
              </li>
            )}
          </Link>
        </ul>
        <div className=" sm:hidden">
          <OutsideClickHandler
            onOutsideClick={() => {
              closeMenu();
            }}
          >
            <Hamburger size={24} toggled={isOpen} toggle={handleToggle} />
          </OutsideClickHandler>
        </div>
      </div>
      {isOpen && (
        <div className="sm:hidden text-left w-24 -right-2 absolute bg-neutral-200 rounded-md font-inter font-semibold p-3">
          {/* Render your mobile menu items here */}
          <Link
            to="/"
            className="block text-slate-700 hover:underline mb-2"
            onClick={handleLinkClick}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="block text-slate-700 hover:underline mb-2"
            onClick={handleLinkClick}
          >
            About
          </Link>
          <Link
            to="/profile"
            className="block text-slate-700 hover:underline mb-2"
            onClick={handleLinkClick}
          >
            {currentUser ? (
              <img className="rounded-full h-12 w-12 object-cover" src={currentUser.avatar} alt="profile" />
            ) : (
              <li className="sm:inline list-none text-slate-700 hover:underline">
                Sign in
              </li>
            )}
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
