import { useContext } from "react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { FaMoon, FaSun } from "react-icons/fa6";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [color, setColor] = useState("light");
    const handleColor = () => {
      const html = document.documentElement;
      if (color == "light") {
        html.classList.remove("light");
        html.classList.add("dark");
        setColor("dark");
      } else {
        html.classList.remove("dark");
        html.classList.add("light");
        setColor("light");
      }
    };

    const handleLogOut = () => {
      logOut().then().catch();
    };
  const manu = (
    <>
      <li className="font-bold rounded-none dark:text-white">
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending
              ? "  "
              : isActive
              ? "bg-gradient-to-r from-[#3873b6]  to-[#5d9ee2]  text-transparent bg-clip-text border-b-[3px] border-b-[#3873b6]"
              : ""
          }
        >
          Home
        </NavLink>
      </li>

      <li className="font-bold dark:text-white">
        <NavLink
          to="add-book"
          className={({ isActive, isPending }) =>
            isPending
              ? ""
              : isActive
              ? "bg-gradient-to-r from-[#3873b6]  to-[#5d9ee2]  text-transparent bg-clip-text border-b-[3px] border-b-[#3873b6]"
              : ""
          }
        >
          Add Book
        </NavLink>
      </li>
      <li className="font-bold dark:text-white">
        <NavLink
          to="all-book"
          className={({ isActive, isPending }) =>
            isPending
              ? ""
              : isActive
              ? "bg-gradient-to-r from-[#3873b6]  to-[#5d9ee2]  text-transparent bg-clip-text border-b-[3px] border-b-[#3873b6]"
              : ""
          }
        >
          All Book
        </NavLink>
      </li>
      <li className="font-bold dark:text-white">
        <NavLink
          to="borrowed-books"
          className={({ isActive, isPending }) =>
            isPending
              ? ""
              : isActive
              ? "bg-gradient-to-r from-[#3873b6]  to-[#5d9ee2]  text-transparent bg-clip-text border-b-[3px] border-b-[#3873b6]"
              : ""
          }
        >
          Borrowed Books
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="relative z-10 dark:bg-gray-700">
      <div className="navbar  lg:w-[1100px] lg:mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu dropdown-content  mt-3 z-[1] p-2   shadow bg-base-100 rounded-none"
            >
              {manu}
            </ul>
          </div>
          <div className="flex justify-center items-center text-center">
            <img
              className="w-[100px] h-[60px]"
              src="https://i.ibb.co/rMS8tKg/imagesfff-removebg-preview.png"
              alt=""
            />
            <h1 className="font-bold text-2xl bg-gradient-to-r from-[#3873b6]  to-[#5d9ee2] inline-block text-transparent bg-clip-text">
              Book Store
            </h1>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{manu}</ul>
        </div>
        <div className="navbar-end">
          <div>
            <button onClick={handleColor} type="button">
              {color == "light" ? (
                <FaMoon className=" text-black mr-4 text-2xl"></FaMoon>
              ) : (
                <FaSun className="text-white  mr-4 text-2xl"></FaSun>
              )}
            </button>
          </div>
          {user && <p className="font-bold mr-4 dark:text-white">{user.displayName}</p>}
          {user && (
            <img
              className="rounded-full border-4 border-[#3873b6] h-[40px] w-[40px] mr-4"
              src={user?.photoURL}
              alt=""
            />
          )}

          {user ? (
            <Link
              onClick={handleLogOut}
              className="btn bg-gradient-to-r from-[#3873b6]  to-[#5d9ee2] text-white font-bold border-none w-[100px]"
            >
              Log Out
            </Link>
          ) : (
            <Link
              to="/login"
              className="btn bg-gradient-to-r from-[#3873b6]  to-[#5d9ee2] text-white font-bold border-none w-[100px]"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
