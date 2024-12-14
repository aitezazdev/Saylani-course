import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full px-5 py-7 bg-zinc-800 text-white">
      <ul className="flex justify-center">
        <li className="space-x-10">
          <Link className="hover:text-blue-500" to="/">All</Link>
          <Link className="hover:text-blue-500" to="/fullstack">Full Stack Development</Link>
          <Link className="hover:text-blue-500" to="/datascience">Data Science</Link>
          <Link className="hover:text-blue-500" to="/cybersecurity">Cyber Security</Link>
          <Link className="hover:text-blue-500" to="/career">Career</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
