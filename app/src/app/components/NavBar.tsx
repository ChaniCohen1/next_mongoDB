import React from 'react';
import ButtonLink from './ButtonLink';

const NavBar = () => {
  const navBarItems = [
    { href: '/pages/firstPage', text: 'first page' },
    { href: '/pages/login', text: 'login' },
    { href: '/pages/contact', text: 'contact' },
    { href: '/pages/users', text: 'users'},
    { href: '/pages/todos', text: 'todos'}
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-green-400 shadow-md z-50 py-3 flex justify-end">
      <a className='mx-3 px-4 py-2 text-black font-semibold rounded transition duration-300 m-5' href="../">website</a>
      {navBarItems.map((item, index) => (
        <ButtonLink key={index} href={item.href} text={item.text} />
      ))}
    </nav>
  );
};

export default NavBar;
