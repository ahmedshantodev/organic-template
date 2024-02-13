import React from "react";
import Container from "./Container";
import Image from "../components/Image";
import logo from "../assets/Organic-logo.png";
import Icon from "./Icon";
import { CiSearch } from "react-icons/ci";
import { BsBagHeart } from "react-icons/bs";

const Navbar = () => {
  return (
    <nav className="py-[31px] sticky top-0 bg-white">
      <Container>
        <div className="logo flex justify-between items-center">
          <Image imageLink={logo} />
          <div className="nav">
            <ul className="flex justify-center capitalize font-inter">
              <li className=" pr-12">
                <a href="#">home</a>
              </li>
              <li className=" pr-12">
                <a href="#">Accessories</a>
              </li>
              <li className=" pr-12">
                <a href="#">Category</a>
              </li>
              <li className=" pr-12">
                <a href="#">shop</a>
              </li>
              <li className=" pr-12">
                <a href="#">about us</a>
              </li>
              <li className=" pr-12">
                <a href="#">faqs</a>
              </li>
            </ul>
          </div>
          <div className="icons flex gap-3">
            <a href="#">
              <Icon iconName={<BsBagHeart className=" text-[24px] hover:text-orrange hover:scale-110 transition-all duration-200 ease-in-out"/>} />
            </a>
            <a href="#">
              <Icon iconName={<CiSearch className=" text-[24px] hover:text-orrange hover:scale-110 transition-all duration-200 ease-in-out"/>} />
            </a>
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
