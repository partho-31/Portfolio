const Navbar = ({
  onAboutClick,
  onEducationClick,
  onTechStackClick,
  onProjectClick,
  onContactClick,
}) => {
  return (
    <div className="navbar w-screen sm:px-10 sticky top-0 z-20 bg-base-100 shadow-sm">
      {/* LEFT SIDE (hamburger + name on lg hidden) */}
      <div className="flex flex-1 items-center">
        {/* Hamburger for small screens */}
        <div className="dropdown lg:hidden">
          <div tabIndex={0} role="button" className="btn btn-ghost">
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
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <button>Home</button>
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

        {/* Logo shown ONLY on large screen */}
        <a className="btn btn-ghost text-xl hidden lg:flex">Partho</a>
      </div>

      {/* RIGHT SIDE */}
      <div className="flex-none">
        {/* Logo shown on small screen (RIGHT SIDE) */}
        <a className="btn btn-ghost text-xl lg:hidden">Partho</a>

        {/* Menu for large screens */}
        <ul className="menu menu-horizontal text-blue-400 font-bold px-1 hidden lg:flex">
          <li>
            <button>Home</button>
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
