import Link from "next/link";
import { useEffect } from "react";
import { useAuth } from "../contexts/auth";
export default function Header() {
  const { user, logout } = useAuth();
  return (
    <header className="" >
      <nav data-testid="nav" className="flex flex-wrap items-center justify-between w-full px-4 py-4 text-gray-700 bg-white text-md md:py-0">
        <div className="flex flex-row items-center space-x-1">
          <img
            className="mr-2 logo "
            src="https://i.pinimg.com/474x/7d/9c/1f/7d9c1fb259e09760c50fc9f336ffe21f.jpg"
            alt="Logo"
          />
          <Link href="/">
            <a className="px-2 py-4 font-semibold border-yellow-500 text-b-500 hover:text-yellow-500">
              Home
            </a>
          </Link>
          <Link href="/browse">
            <a className="px-2 py-4 font-semibold text-gray-500 transition duration-300 hover:text-yellow-500">
              Browse
            </a>
          </Link>
          <Link href="#">
            <a className="px-2 py-4 font-semibold text-gray-500 transition duration-300 hover:text-yellow-500">
              About Us
            </a>
          </Link>
          <Link href="/SearchResult">
            <a>

            </a>
          </Link>

        </div>
        <div className="flex items-center justify-between mx-2">
          {user ? (
            <>
              <Link href="/">
                <button
                  id = 'logout'
                  onClick={logout}
                  className="px-4 py-2 mr-2 font-semibold text-yellow-600 bg-transparent border border-yellow-500 rounded hover:bg-yellow-500 hover:text-white hover:border-transparent focus:outline-none"
                >
                  Logout
                </button>
              </Link>
              <Link href="/itemForm">
                <button id='add-item-button' className="px-4 py-2 mr-2 font-semibold text-yellow-600 bg-transparent border border-yellow-500 rounded hover:bg-yellow-500 hover:text-white hover:border-transparent focus:outline-none">
                  Add item
                </button>
              </Link>
              <Link href="/profile">
                <button className="px-4 py-2 mr-2 font-semibold text-yellow-600 bg-transparent border border-yellow-500 rounded hover:bg-yellow-500 hover:text-white hover:border-transparent">
                  Profile
                </button>
              </Link>
            </>
          ) : (
            <>
              <Link href="/loginForm">
                <button className="px-4 py-2 mr-2 font-semibold text-yellow-600 bg-transparent border border-yellow-500 rounded hover:bg-yellow-500 hover:text-white hover:border-transparent focus:outline-none" id='login-button'>
                  Login
                </button>
              </Link>
              <Link href="/signUpForm">
                <button  id='register-button' className="px-4 py-2 font-bold text-white bg-yellow-500 border border-yellow-500 rounded hover:bg-yellow-700">
                  Register
                </button>
              </Link>
            </>
          )}
          
        </div>
      </nav>
    </header>
  );
}
