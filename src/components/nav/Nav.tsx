import useMediaQuery from "../../hooks/useMediaQuery";
import { useState } from "react";
import Logo from "../../assets/images/logo.svg";
import HamburgerIcon from "../../assets/images/icon-menu.svg";
import CloseIcon from "../../assets/images/icon-menu-close.svg";
import NavLink from "./NavLink";
import { motion } from "framer-motion";

const Nav = () => {
  const isLargeScreen = useMediaQuery("(min-width: 1060px)");
  const [toggleMenu, setToggleMenu] = useState<boolean>(false);

  return (
    <nav className="flex items-center justify-between w-[90%] mx-auto mt-4 h-20 md:mt-20 md:w-4/5">
      {/* LEFT SIDE - LOGO */}
      <div>
        <img alt="logo" src={Logo} />
      </div>
      {/* RIGHT SIDE */}
      {isLargeScreen ? (
        // LARGE SCREEN NAV MENU
        <div className="flex items-center justify-between gap-10 text-neutral-dark-gray-blue">
          <NavLink text="Home" />
          <NavLink text="New" />
          <NavLink text="Popular" />
          <NavLink text="Trending" />
          <NavLink text="Categories" />
        </div>
      ) : (
        // HAMBURGER ICON
        <div>
          <button
            className="w-[50px] h-[50px]"
            onClick={() => setToggleMenu(!toggleMenu)}
          >
            <img className="w-full" alt="hamburger-icon" src={HamburgerIcon} />
          </button>
        </div>
      )}
      {/* MOBILE MODAL MENU */}
      {!isLargeScreen && (
        <>
          {/* DARKEN BACKGROUND MODAL */}
          <motion.div
            animate={toggleMenu ? "visible" : ["hidden", "removed"]}
            transition={{ duration: 0.2 }}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 0.5, zIndex: 30 },
              removed: { display: "none", transition: { delay: 0.2 } },
            }}
            className="fixed right-0 bottom-0 z-30 h-full w-full bg-neutral-dark-blue"
          ></motion.div>
          {/* MODAL MENU FLYOUT */}
          <motion.div
            animate={toggleMenu ? "visible" : ["hidden", "removed"]}
            transition={{ duration: 0.2 }}
            variants={{
              hidden: { opacity: 0, x: 100 },
              visible: { opacity: 1, x: 0, zIndex: 40 },
              removed: { display: "none", transition: { delay: 0.2 } },
            }}
            className="fixed right-0 bottom-0 z-40 h-full w-[70%] bg-neutral-off-white"
          >
            <div className="grid w-5/6 mx-auto pt-4">
              {/* X ICON */}
              <button
                className="w-[50px] h-[50px] justify-self-end"
                onClick={() => setToggleMenu(!toggleMenu)}
              >
                <img alt="mobile-menu-close-icon" src={CloseIcon} />
              </button>
              {/* MODAL MENU ITEMS */}
              <div className="flex flex-col mt-20  gap-8 text-xl text-neutral-dark-blue">
                <NavLink text="Home" />
                <NavLink text="New" />
                <NavLink text="Popular" />
                <NavLink text="Trending" />
                <NavLink text="Categories" />
              </div>
            </div>
          </motion.div>
        </>
      )}
    </nav>
  );
};

export default Nav;
