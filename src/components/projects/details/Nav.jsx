import { Link } from "react-router";

const Nav = () => {
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
              <Link to="/">
                {" "}
                <button>Home</button>
              </Link>
            </li>
            <a
            href="https://drive.google.com/file/d/1se9kXwOPVoEPgz5aVpEGOc5IF7aVXBTS/view?usp=sharing"
            target="_blank"
          >
            {" "}
            <div className="ml-2 flex items-center gap-1">
              <img
                src="https://res.cloudinary.com/dinzf10l3/image/upload/v1752838219/resume_1_hjuvb3.png"
                alt="Resume Icon"
                className="h-6 w-full text-white"
              />{" "}
              Resume
            </div>
          </a>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">Partho</a>
      </div>
      <div className=" hidden lg:flex">
        <ul className="menu menu-horizontal text-blue-400 font-bold px-1">
          <li>
            <Link to="/">
              {" "}
              <button>Home</button>
            </Link>
          </li>
          <a
            href="https://drive.google.com/file/d/1se9kXwOPVoEPgz5aVpEGOc5IF7aVXBTS/view?usp=sharing"
            target="_blank"
          >
            {" "}
            <div className="mt-1 flex items-center gap-1">
              <img
                src="https://res.cloudinary.com/dinzf10l3/image/upload/v1752838219/resume_1_hjuvb3.png"
                alt="Resume Icon"
                className="h-6 w-full text-white"
              />{" "}
              Resume
            </div>
          </a>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
