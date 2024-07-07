import React from 'react';
import { BsPinterest, BsTwitter } from 'react-icons/bs';
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="bg-gray-200 mt-12"> {/* Added margin top */}
      <div className="container pt-20"> {/* Adjusted padding top */}
        <div className="grid md:grid-cols-3 gap-16">
          <div className="space-y-4">
            <h2 className="text-xl font-bold">
              <span className="text-accent">A</span>bout <span className="text-accent">U</span>s
            </h2>
            <p className="leading-[1.8]">
              Your insights will help us refine our menu, enhance our service, and create an environment that feels like a home away from home.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-bold">
              <span className="text-accent">T</span>he <span className="text-accent">R</span>estaurant
            </h2>
            <ul className="space-y-2">
              <li>About Us</li>
              <li>Chefs</li>
              <li>Events</li>
              <li>Contact Us</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-bold">
              <span className="text-accent">F</span>ollow <span className="text-accent">U</span>s
            </h2>
            <div className="flex gap-8 text-accent text-2xl pt-2">
              <FaFacebookF/>
              <BsTwitter/>
              <BsPinterest/>
              <FaLinkedinIn/>
            </div>
          </div>
        </div>

        <div className="text-center mt-8">
          <div className="h-px bg-gray-300 mt-6 mb-4"></div> {/* Thin line */}
          <p className="text-sm text-gray-500">&copy; 2024 Hexerve Solutions. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
