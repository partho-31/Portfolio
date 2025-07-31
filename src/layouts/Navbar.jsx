const Navbar = ({
  onAboutClick,
  onEducationClick,
  onTechStackClick,
  onProjectClick,
  onContactClick,
}) => {
  return (
    <div className="navbar flex justify-between items-center-center px-10 sticky top-0 z-20 bg-base-100 shadow-sm">
      <div className="">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100  rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <button>Home</button>
            </li>
            <li>
              <button>Educations</button>
            </li>
            <li>
              <button>Projects</button>
            </li>
            <li>
              <button>Skills</button>
            </li>
            <li>
              <button onClick={()=> onAboutClick()}>About</button>
            </li>
            <li>
              <button>Contact</button>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">Partho</a>
      </div>
      <div className=" hidden lg:flex">
        <ul className="menu menu-horizontal text-blue-400 font-bold px-1">
          <li>
            <button onClick="">Home</button>
          </li>
          <li>
            <button onClick={onEducationClick}>Educations</button>
          </li>
          <li>
            <button onClick={onProjectClick}>Projects</button>
          </li>
          <li>
            <button onClick={onTechStackClick}>Skills</button>
          </li>
          <li>
            <button onClick={onAboutClick}>About</button>
          </li>
          <li>
            <button onClick={onContactClick}>Contact</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
