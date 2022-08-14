import { useState } from "react";
import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  console.log(logo)

  return (
    <nav className="flex items-center justify-between w-full py-6 navbar">
      <img src={logo.src} alt="hoobank" className="w-[124px] h-[32px]" />

      <div className="items-center justify-center hidden list-none sm:flex">
        {navLinks.map((nav, index) => (
          <div
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] ${active === nav.title ? "text-white" : "text-dimWhite"
              } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
            onClick={() => setActive(nav.title)}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </div>
        ))}
      </div>

      <div className="flex items-center sm:hidden">
        <img
          src={toggle ? close.src : menu.src}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle(!toggle)}
        />

        <div className={`${!toggle ? "hidden" : "flex"} p-6 bg-black-gradient absolute top-12 right-0 mx-4 my-2 w-[140px] rounded-xl sidebar`}>
          {/* .sidebar { animation: slide-top 0.5s;} */}

          <ul className="flex flex-col ">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-medium cursor-pointer text-[16px] ${active === nav.title ? "text-white" : "text-dimWhite"
                  } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
