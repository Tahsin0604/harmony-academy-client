import { Link, NavLink } from "react-router-dom";
import Container from "../../../components/Container";
import { useEffect, useState, useCallback } from "react";
import { FaBars, FaMoon, FaSun } from "react-icons/fa";

const NavBar = () => {
  const theme = localStorage.getItem("theme") || "light";
  const [darkMode, setDarkMode] = useState(theme);
  const [isFixed, setFixed] = useState(false);
  const [navOpen, setNavOpen] = useState(false);
  const handleFixedPosition = () => {
    const scrollingPosition = window.scrollY;
    if (scrollingPosition > 60) {
      setFixed(true);
    } else {
      setFixed(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleFixedPosition);
    return () => {
      window.removeEventListener("scroll", handleFixedPosition);
    };
  }, []);
  useEffect(() => {
    if (darkMode === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);
  const handleTheme = (buttonTheme) => {
    setDarkMode(buttonTheme);
    localStorage.setItem("theme", buttonTheme);
  };
  const handleNavButton = useCallback(() => {
    setNavOpen(!navOpen);
  }, [navOpen]);
  const navList = (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive
            ? "text-orange-500 font-righteous text-lg tracking-wide"
            : "font-righteous text-lg tracking-wide hover:text-orange-500"
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/instructors"
        className={({ isActive }) =>
          isActive
            ? "text-orange-500 font-righteous text-lg tracking-wide"
            : " font-righteous text-lg tracking-wide hover:text-orange-500"
        }
      >
        Instructors
      </NavLink>
      <NavLink
        to="/classes"
        className={({ isActive }) =>
          isActive
            ? "text-orange-500 font-righteous text-lg tracking-wide"
            : " font-righteous text-lg tracking-wide hover:text-orange-500"
        }
      >
        Classes
      </NavLink>
    </>
  );
  return (
    <nav
      className={`fixed inset-x-0 z-10   transition duration-200 ease-in-out ${
        isFixed
          ? " dark:bg-black shadow dark:shadow-none shadow-slate-500 bg-white text-black dark:text-white pt-0"
          : " pt-8 text-white"
      }`}
    >
      <Container>
        <div className="flex justify-between items-center py-4">
          <Link to="/">
            <h1 className="font-pacifico text-2xl tracking-wider">
              <span className="text-orange-700">H</span>armony{" "}
              <span className="text-orange-700">A</span>
              cademy
            </h1>
          </Link>

          <div className="flex items-center space-x-4">
            <div className="hidden lg:flex items-end gap-8">
              <ul className="flex flex-row justify-center items-center space-x-6">
                {navList}
              </ul>
            </div>
            {darkMode === "dark" ? (
              <button
                className="px-3 py-2 custom-button border-[#de5e02]"
                onClick={() => {
                  handleTheme("light");
                }}
              >
                <FaMoon></FaMoon>
              </button>
            ) : (
              <button
                className="px-3 py-2 custom-button border-[#de5e02]"
                onClick={() => {
                  handleTheme("dark");
                }}
              >
                <FaSun></FaSun>
              </button>
            )}
            <button className="lg:hidden" onClick={handleNavButton}>
              <FaBars className="fa-solid fa-bars text-lg"></FaBars>
            </button>
          </div>
        </div>
        {navOpen && <div className="flex flex-col">{navList}</div>}
      </Container>
    </nav>
  );
};

export default NavBar;
