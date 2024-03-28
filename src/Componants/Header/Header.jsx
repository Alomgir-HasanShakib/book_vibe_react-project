import { NavLink } from "react-router-dom";

const Header = () => {
  const links = (
    <>
      <li>
        <NavLink
          to="/"
          style={({ isActive, isTransitioning }) => {
            return {
              fontWeight: isActive ? "bold" : "",
              backgroundColor: isActive ? "transparent" : "",
              border: isActive ? "1px solid #23BE0A" : "",
              color: isActive ? "#23BE0A" : "black",
              viewTransitionName: isTransitioning ? "slide" : "",
            };
          }}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/listedbook"
          style={({ isActive, isTransitioning }) => {
            return {
              fontWeight: isActive ? "bold" : "",
              backgroundColor: isActive ? "transparent" : "",
              border: isActive ? "1px solid #23BE0A" : "",
              color: isActive ? "#23BE0A" : "black",
              viewTransitionName: isTransitioning ? "slide" : "",
            };
          }}
        >
          Listed Books
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/readpage"
          style={({ isActive, isTransitioning }) => {
            return {
              fontWeight: isActive ? "bold" : "",
              backgroundColor: isActive ? "transparent" : "",
              border: isActive ? "1px solid #23BE0A" : "",
              color: isActive ? "#23BE0A" : "black",
              viewTransitionName: isTransitioning ? "slide" : "",
            };
          }}
        >
          Pages to Read
        </NavLink>
      </li>
      <li>
      <NavLink
          to="/about"
          style={({ isActive, isTransitioning }) => {
            return {
              fontWeight: isActive ? "bold" : "",
              backgroundColor: isActive ? "transparent" : "",
              border: isActive ? "1px solid #23BE0A" : "",
              color: isActive ? "#23BE0A" : "black",
              viewTransitionName: isTransitioning ? "slide" : "",
            };
          }}
        >
          About
        </NavLink>
      </li>
      <li>
      <NavLink
          to="/contact"
          style={({ isActive, isTransitioning }) => {
            return {
              fontWeight: isActive ? "bold" : "",
              backgroundColor: isActive ? "transparent" : "",
              border: isActive ? "1px solid #23BE0A" : "",
              color: isActive ? "#23BE0A" : "black",
              viewTransitionName: isTransitioning ? "slide" : "",
            };
          }}
        >
          Contact
        </NavLink>
      </li>
    </>
  );

  return (
    <div>
      {/* =============================navbar================================ */}
      <nav>
        <div className="navbar bg-base-100 sans ">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
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
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 font-semibold text-xl"
              >
                {links}
              </ul>
            </div>
            <a className="btn btn-ghost text-xl md:text-[28px] font-bold">
              Book Vibe
            </a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 font-semibold text-xl">
              {links}
            </ul>
          </div>
          <div className="navbar-end">
            <a className="btn bg-[#23BE0A] px-2 md:px-7 text-white mr-2 hover:bg-transparent hover:border-[#23BE0A] hover:text-[#23BE0A]">
              Sign In
            </a>
            <a className="btn bg-[#59C6D2] px-2 md:px-7 hover:bg-transparent hover:border-[#59C6D2] hover:text-[#59C6D2] text-white">
              Sign Up
            </a>
          </div>
        </div>
      </nav>
      {/* =============================Banner================================ */}
    </div>
  );
};

export default Header;
