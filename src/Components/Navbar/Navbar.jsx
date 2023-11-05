import { NavLink } from "react-router-dom";

const Navbar = () => {
  const manu = (
    <>
      <li className="font-bold rounded-none">
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

      <li className="font-bold">
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
    </>
  );

  return (
    <div className="relative z-10">
      <div className="navbar  w-[1100px] mx-auto">
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
              className="menu dropdown-content  mt-3 z-[1] p-2  w-52  shadow bg-base-100 rounded-none"
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
          <a className="btn">Button</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
