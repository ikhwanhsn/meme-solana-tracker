const Navbar = () => {
  return (
    <nav className="navbar bg-background text-text shadow-md md:px-12 px-3 fixed z-30 top-0 left-0">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
            className="menu menu-sm dropdown-content bg-background text-text rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Tools</a>
            </li>
            <li>
              <a>Others</a>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">Meme Solana Tracker</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>Tools</a>
          </li>
          <li>
            <a>Others</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn text-white hidden md:block">Connect Wallet</a>
      </div>
    </nav>
  );
};

export default Navbar;
