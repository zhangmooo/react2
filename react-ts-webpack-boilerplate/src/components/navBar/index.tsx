import React from 'react';
import { FaReact } from 'react-icons/fa'; //从react-icons库中当如一个FaReact的图标组件
import { Link } from 'react-router-dom';
const data = [
  {
    label: 'HOME', //显示内容
    to: '/', //链接
  },
  {
    label: 'ABOUT ME',
    to: '/about',
  },
  {
    label: 'CONTACT',
    to: '/contact',
  },
  {
    label: 'PORTFOLIO',
    to: '/portfolito',
  },
  {
    label: 'RESUME',
    to: '/resume',
  },
];
export const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
        <div className="navbarcontainer">
          <Link to={'/'} className="navbar_container_logo">
            <FaReact size={30} />
          </Link>
        </div>
      </nav>
    </div>
  );
};
