import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white fixed bottom-0 w-full" >
      <div className="md:flex md:justify-between md:items-center sm:px-12 px-4 bg-[#ffffff19] py-7">
        <h1
          className="lg:text-4xl text-3xl md:mb-0 mb-6 lg:leading-normal font-semibold
         md:w-2/5"
        >
          <span className="text-teal-400">Fake Store AB</span>
        </h1>
        <div>
            <div className="flex justify-between p-4">
              <a>Instagram</a>
              <a>X</a>
              <a>Facebook</a>
            </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-center pt-2 text-gray-400 text-sm pb-12">
        <span>© 2024 Grupp 5. All rights reserved.</span>
        <span>Terms · Privacy Policy</span>
      </div>
    </footer>
  );
};

export default Footer;


