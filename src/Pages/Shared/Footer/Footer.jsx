import "aos/dist/aos.css";

import { FaFacebookF, FaInstagramSquare, FaTwitter } from "react-icons/fa";
import Container from "../../../components/Container";
import Logo from "../../../components/logo";
const Footer = () => {
  return (
    <footer
      data-aos="fade-up"
      data-aos-duration="1500"
      data-aos-delay="200"
      className="bg-slate-100 dark:bg-black"
    >
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 justify-between py-16 border-b border-slate-600 dark:border-white gap-12">
          <div className="flex flex-col space-y-6">
            <Logo></Logo>
            <p className="font-caveat text-lg my-6">
              Harmonize Your Passion for Music
            </p>
            <div className="flex items-center gap-4">
              <div className="p-2 custom-button border-[#de5e02] rounded-full cursor-pointer dark:text-white">
                <FaFacebookF className=" text-lg"></FaFacebookF>
              </div>
              <div className="p-2 custom-button border-[#de5e02] rounded-full cursor-pointer dark:text-white">
                <FaTwitter className=" text-lg"></FaTwitter>
              </div>
              <div className="p-2 custom-button border-[#de5e02] rounded-full cursor-pointer dark:text-white">
                <FaInstagramSquare className=" text-lg"></FaInstagramSquare>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between gap-12 lg:gap-4">
            <div className="flex flex-col space-y-4">
              <h1 className="font-righteous font-extrabold text-xl ">
                Company
              </h1>
              <ul className="space-y-2 font-medium">
                <li>
                  <a className="cursor-pointer hover:text-[#de5e02]">
                    About Us
                  </a>
                </li>
                <li>
                  <a className="cursor-pointer hover:text-[#de5e02]">
                    Terms Of Use
                  </a>
                </li>
                <li>
                  <a className="cursor-pointer hover:text-[#de5e02]">Privacy</a>
                </li>
                <li>
                  <a className="cursor-pointer hover:text-[#de5e02]">Sitemap</a>
                </li>
              </ul>
            </div>
            <div className="flex flex-col space-y-4">
              <h1 className="font-righteous font-extrabold text-xl ">
                Customer Services
              </h1>
              <ul className="space-y-2 font-medium">
                <li>
                  <a className="cursor-pointer hover:text-[#de5e02]">
                    Support Center
                  </a>
                </li>
                <li>
                  <a className="cursor-pointer hover:text-[#de5e02]">
                    Returns & Exchange
                  </a>
                </li>
                <li>
                  <a className="cursor-pointer hover:text-[#de5e02]">
                    Shipping & Delivery
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex flex-col space-y-4">
              <h1 className="font-righteous font-extrabold text-xl ">
                Quick Contact
              </h1>
              <ul className="space-y-2 ">
                <li>
                  <p className="font-bold">Phone:</p>
                  <p className="font-medium">01500317777</p>
                </li>
                <li>
                  <p className="font-bold">Email:</p>
                  <p className="font-medium">harmonyacademy.com</p>
                </li>
                <li>
                  <p className="font-bold">Address:</p>
                  <p className="font-medium">Dhaka, Bangladesh</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <p className="text-center font-pacifico text-slate-900 dark:text-white tracking-widest py-4">
          Copyright 2023 &copy; Owned by Harmony Academy.
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
