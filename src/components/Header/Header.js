import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut().then().catch();
  };
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

            {user?.email ? (
              <>
                <li className="font-semibold">
                  <Link to="/myreviews">My Reviews</Link>
                </li>
                <li className="font-semibold">
                  <Link to="/addservice">Add Service</Link>
                </li>
                <li className="font-semibold">
                  <button onClick={handleLogOut} className="btn-ghost">
                    Log Out
                  </button>
                </li>
              </>
            ) : (
              <li className="font-semibold">
                <Link to="/login">Log In</Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
