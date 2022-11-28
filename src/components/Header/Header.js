import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div className="navbar bg-base-100 border-b border-white mb-4">
        <div className="flex-1">
          <Link to="/" className="btn btn-ghost normal-case text-xl">
            KhaonLine
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal p-0">
            <li>
              <Link to="/blogs">Blogs</Link>
            </li>

            <li>
              <Link to="/login">Log In</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
