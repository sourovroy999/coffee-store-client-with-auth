import React from 'react';
import { NavLink } from 'react-router';

const Header = () => {
    return (
      <div className="navbar px-10 bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost sm:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <NavLink>Home</NavLink>
        <NavLink>Add Coffee</NavLink>
        
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">daisyUI</a>
  </div>
  <div className="navbar-center hidden sm:flex">
    <ul className="menu menu-horizontal px-1 gap-10">
     <NavLink to={'/'}>Home</NavLink>
        <NavLink to={'/addCoffee'}>AddCoffee</NavLink>
       
    </ul>
  </div>
  <div className="navbar-end gap-7">
    <NavLink to={'/users'}>users</NavLink>
    <NavLink to={'/login'}>Login</NavLink>
        <NavLink to={'/signUp'}>SignUp</NavLink>
  </div>
</div>
    );
};

export default Header;