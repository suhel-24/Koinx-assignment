import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const links = [
    {
      id: 1,
      link: "Crypto Taxes",
    },
    {
      id: 2,
      link: "Free Tools",
    },
    {
      id: 3,
      link: "Resource Center",
    },
  ];
  const [menu, setmenu] = useState(true);
  const handleClick = (link) => {
    setmenu(!menu);
    const section = document.getElementById(link.toLowerCase());
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  return (
    <div className="text-black flex justify-between items-center w-full px-5 h-20 ">
      <div className="flex items-center text-lg font-medium">
        <img src="src\assets\Logo.svg" alt="SVG Image" />
        <span className="pb-3">&#8482;</span>
      </div>
      <div>
        <ul className="md:flex hidden items-center">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 capitalize cursor-pointer text-xl font-medium hover:scale-105 duration-200"
              onClick={() => {
                const section = document.getElementById(link.toLowerCase());
                if (section) {
                  section.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }
              }}
            >
              {link}
            </li>
          ))}
          <button className="text-xl font-medium px-4 mx-5 bg-custom-blue rounded-lg cursor-pointer py-1">
            Get Started
          </button>
        </ul>
      </div>
      <div
        className="block md:hidden cursor-pointer z-10"
        onClick={() => setmenu(!menu)}
      >
        {menu ? <FaBars size={25} /> : <FaTimes size={25} />}
      </div>
      {!menu && (
        <ul className="flex flex-col justify-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-600 text-gray-500 md:hidden">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 capitalize cursor-pointer py-6 text-3xl"
              onClick={() => handleClick(link)}
            >
              {link}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navbar;
