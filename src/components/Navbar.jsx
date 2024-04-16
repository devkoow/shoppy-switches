import React from 'react';
import { Link } from 'react-router-dom';
import { FaRegPenToSquare } from 'react-icons/fa6';
import Button from './ui/Button';
import User from './User';
import { useAuthContext } from './context/AuthContext';

export default function Navbar() {
  const { user, login, logout } = useAuthContext();
  return (
    <header className="flex justify-between border-b border-gray-300">
      <Link to="/">
        <img
          src="logo.png"
          alt="logo"
          style={{ width: '150px', height: '150px' }}
        ></img>
      </Link>

      <nav className="flex items-center gap-4 font-semibold">
        <Link to="/products">Products</Link>
        {user && <Link to="/carts">Carts</Link>}
        {user && user.isAdmin && (
          <Link to="/products/new" className="text-2xl">
            <FaRegPenToSquare />
          </Link>
        )}
        {user && <User user={user} />}
        {!user ? (
          <Button text={'Login'} onClick={login} />
        ) : (
          <Button text={'Logout'} onClick={logout} />
        )}
      </nav>
    </header>
  );
}
