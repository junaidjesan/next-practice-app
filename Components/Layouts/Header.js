import Link from 'next/link';
import React from 'react';

const Header = () => {
  return (
    <div>
      <div className="navbar bg-base-200 mx-auto">
        <div className="flex-1">
          <Link href='/' className='text-3xl font-bold'>Users App</Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li><Link href='/all-users'>Users</Link></li>
            <li><Link href='/add-users'>Add Users</Link></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;