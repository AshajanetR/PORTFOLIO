 import logo from "../assets/kevinRushLogo.png";
 import ar from "../assets/A.png"
 import { FaLinkedin } from "react-icons/fa";
 import { FaGithub } from "react-icons/fa";
 import { FaSquareXTwitter } from "react-icons/fa6";
 import { FaInstagram } from "react-icons/fa";
 const Navbar = () => {
  return (
    <nav className=" mb-20 flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
            <img className="mx-2 w-10 h-10" src={ar}  alt="logo" />
        </div>
        <div className="m-8 flex gap-4 justify-center items-center text-2xl">
            <a href="https://www.linkedin.com/in/ashajanet-r/"><FaLinkedin /></a>
            <a href="https://github.com/AshajanetR"><FaGithub /></a>
            <a href=""><FaSquareXTwitter /></a>
            <a href=""><FaInstagram /></a>

        </div>
    </nav>
  );
};

export default Navbar