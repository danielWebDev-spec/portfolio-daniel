import Logo from "../assets/logo.png";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { useState } from "react";

function Navbar() {
  const [nav, setNav] = useState(false);

  const onClick = () => setNav(!nav);
  return (
    <div className="px-4 fixed w-full h-[80px] flex justify-between items-center bg-[#0a192f] text-gray-300">
      {/* Logo */}
      <div>
        {/* <img src={Logo} alt="Daniel" style={{ width: 50 }} /> */}
        <h1 className="text-4xl text-pink-600 font-extrabold border-b-2 border-pink-600">
          DD
        </h1>
      </div>
      {/* Menu */}
      <div className="hidden md:block">
        <ul className="flex">
          <li>Home</li>
          <li>About</li>
          <li>Skills</li>
          <li>Work</li>
          <li>Contact</li>
        </ul>
      </div>

      {/* Hamburger */}
      <div className="md:hidden z-10 cursor-pointer" onClick={onClick}>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile Menu */}

      <div
        className={
          nav
            ? "md:hidden absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center duration-500"
            : "hidden duration-300"
        }
      >
        <ul className="flex-col">
          <li className="py-6 text-4xl">Home</li>
          <li className="py-6 text-4xl">About</li>
          <li className="py-6 text-4xl">Skills</li>
          <li className="py-6 text-4xl">Work</li>
          <li className="py-6 text-4xl">Contact</li>
        </ul>
      </div>

      {/* Social Icons */}
      <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
            <a
              href="/"
              className="flex justify-between items-center w-full text-gray-300"
            >
              <h4>LinkedIn:</h4> <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
            <a
              href="/"
              className="flex justify-between items-center w-full text-gray-300"
            >
              <h4>Github:</h4> <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]">
            <a
              href="/"
              className="flex justify-between items-center w-full text-gray-300"
            >
              <h4>Email:</h4> <HiOutlineMail size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]">
            <a
              href="/"
              className="flex justify-between items-center w-full text-gray-300"
            >
              <h4>Resume:</h4> <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
