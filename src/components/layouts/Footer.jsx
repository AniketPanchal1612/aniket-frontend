import React from "react";
import {ReactComponent as Logo} from '../../assets/logo_new.svg'
const Footer = () => {
  return (
    <div className="flex flex-row mt-12 p-4 justify-around text-left space-y-2 flex-wrap text-gray-600 text-xs lg:text-sm ">
      <div className="hidden md:block lg:block w-1/5">
        <Logo />
        <p className="">
          NestAway is India's fastest growing<strong className="text-black">"Managed Home Rental Network"</strong> 
          attempting to provide better rental solutions via design & technology.
          We help find, book rental homes of choice across Indian cities. We
          assist with move-in, provide home maintenance services from cleaning,
          damages to rent payment & even move-out. Whatever be your budget,
          whatever you may call a home (a bed, a room or an entire house), we
          have something for you!
        </p>
      </div>
      <div>
        <h2 className="font-bold text-black">Nestaway</h2>
        <ul className="space-y-1 lg:space-y-2 mt-2 cursor-pointer">
          <li>About Us</li>
          <li>Our Brand Book</li>
          <li>Career</li>
          <li>Blog</li>
          <li>Contact Us</li>
        </ul>
      </div>

      <div>
        <h2 className="font-bold text-black">For owners & tenants</h2>
        <ul className="space-y-1 lg:space-y-2 mt-2 cursor-pointer">
          <li>List your propery</li>
          <li>Rent predictor</li>
          <li>Refer a tenant</li>
          <li>Coupon codes</li>
          <li>Top societies</li>
        </ul>
      </div>

      <div>
        <h2 className="font-bold text-black lg:mt-0 md:mt-0">More Inoformation</h2>
        <ul className="space-y-1 lg:space-y-2 mt-2 cursor-pointer">
          <li>Help Center</li>
          <li>Privacy policy</li>
          <li>Terms of Use</li>
          
        </ul>
      </div>
    </div>
  );
};

export default Footer;
