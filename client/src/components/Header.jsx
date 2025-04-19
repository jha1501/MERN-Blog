import {
    Button,
    Navbar,
    NavbarBrand,
    NavbarCollapse,
    NavbarLink,
    NavbarToggle,
    TextInput,
  } from 'flowbite-react';
  import React from 'react';
  import { Link, useLocation } from 'react-router-dom';
  import { AiOutlineSearch } from 'react-icons/ai';
  import { FaMoon } from 'react-icons/fa';
  
  export default function Header() {
    const location = useLocation(); // Hook to get the current path
  
    return (
      <Navbar className="border-b-2">
        <Link
          to="/"
          className="self-center whitespace-nowrap text-sm sm:text-xl font font-semibold dark:text-white"
        >
          <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
            Pranjal's
          </span>
          Blog
        </Link>
  
        <form>
          <TextInput
            type="text"
            placeholder="Search..."
            rightIcon={AiOutlineSearch}
            className="hidden lg:inline"
          />
        </form>
  
        <Button className="w-12 h-10 lg:hidden" color="gray" pill>
          <AiOutlineSearch />
        </Button>
  
        <div className="flex gap-2 md:order-2">
          <Button className="w-12 h-10 hidden sm:inline" color="gray" pill>
            <FaMoon />
          </Button>
          <Link to="/sign-in">
            <Button className="bg-gradient-to-r from-purple-500 to-blue-500 text-white">
              Sign In
            </Button>
          </Link>
          <NavbarToggle />
        </div>
  
        <NavbarCollapse>
          <NavbarLink
            active={location.pathname === '/'}
            as="div"
            className={`${
              location.pathname === '/' ? 'text-green-950' : 'text-gray-1000'
            } hover:bg-slate-500`}
          >
            <Link to="/">Home</Link>
          </NavbarLink>
          <NavbarLink
            active={location.pathname === '/about'}
            as="div"
            className={`${
              location.pathname === '/about' ? 'text-green-950' : 'text-gray-1000'
            } hover:bg-slate-500`}
          >
            <Link to="/about">About</Link>
          </NavbarLink>
          <NavbarLink
            active={location.pathname === '/projects'}
            as="div"
            className={`${
              location.pathname === '/projects' ? 'text-green-950' : 'text-gray-1000'
            } hover:bg-slate-500`}
          >
            <Link to="/projects">Projects</Link>
          </NavbarLink>
        </NavbarCollapse>
      </Navbar>
    );
  }
  