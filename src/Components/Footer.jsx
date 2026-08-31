import React from "react";

const Footer = () => {
  return (
    <footer className="p-8">
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 py-4">
        {/* "footer sm:footer-horizontal bg-base-300 text-base-content p-10" */}
        <div className="mt-8 sm:mt-0 w-full sm:col-span-2">
          <h1 className="text-4xl font-bold bg-[#be0d0d1f] bg-linear-to-r from-[#900101] to-[#00188e] dark:from-[#3a9dff] bg-clip-text text-transparent">
            ARTIFY Industries Ltd.
          </h1>
          <p className="dark:text-white/80 text-black/89">Providing reliable tech since 2025</p>
          <div className="footer-section contact lg:mt-0 mt-8">
            <h2 className="footer-title mt-2 mb-[-5px] underline">
              Contact Info:
            </h2>
            <ul className="list-none">
              <li>
                <strong>Address:</strong> 123 Main Street, Dhaka, Bangladesh
              </li>
              <li>
                <strong>Phone:</strong> +880 1640-852353
              </li>
              <li>
                <strong>Email:</strong>artify.info@gmail.com
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 md:mt-0">
          <h6 className="footer-title">Services</h6>
          <ul>
            <li>
              <a className="link link-hover">Branding</a>
            </li>
            <li>
              <a className="link link-hover">Design</a>
            </li>
            <li>
              <a className="link link-hover">Marketing</a>
            </li>
            <li>
              <a className="link link-hover">Advertisement</a>
            </li>
          </ul>
        </div>
        <div className="mt-8 lg:mt-0">
          <h6 className="footer-title">Company</h6>
          <ul>
            <li>
              <a className="link link-hover">About us</a>
            </li>
            <li>
              <a className="link link-hover">Contact</a>
            </li>
            <li>
              <a className="link link-hover">Jobs</a>
            </li>
            <li>
              <a className="link link-hover">Press kit</a>
            </li>
          </ul>
        </div>
        <div className="mt-8 lg:mt-0">
          <h6 className="footer-title">Legal</h6>
          <ul>
            <li>
              <a className="link link-hover">Terms of use</a>
            </li>
            <li>
              <a className="link link-hover">Privacy policy</a>
            </li>
            <li>
              <a className="link link-hover">Cookie policy</a>
            </li>
          </ul>
        </div>
        <div className="mt-8 lg:mt-0">
          <h6 className="footer-title">Social</h6>
          <div className="flex gap-4 mb-4">
            <a href="https://www.linkedin.com/in/nazmul-hoque-9931972a4/">
              <i className="text-2xl fa-brands fa-linkedin-in"></i>
            </a>
            <a href="https://github.com/Nazmul214088">
              <i className="text-2xl fa-brands fa-github"></i>
            </a>
            <a href="https://www.facebook.com/profile.php?id=100009155794520">
              <i className="text-2xl fa-brands fa-facebook-f"></i>
            </a>
            <a href="https://x.com/NazmulHoqu26155">
              <i className="text-2xl fa-brands fa-x-twitter"></i>
            </a>
            <a href="https://www.youtube.com/@NazmulHoque-e1o">
              <i className="text-2xl fa-brands fa-youtube"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="footer sm:footer-horizontal footer-center bg-base-300 dark:bg-[#2d3c53] text-base-content p-4 dark:text-white rounded-md">
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by
            ARTIFY Industries Ltd.
          </p>
        </aside>
      </div>
    </footer>
  );
};

export default Footer;
