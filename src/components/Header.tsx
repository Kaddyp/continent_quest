import React from "react";
import Logo from '../logo.png';
const Header: React.FC = () => {
  return (
    <header>
      <nav className="px-4 py-2">
        <div className="flex items-center">
          <a href="/">            
            <img src={Logo} alt='logo' width={'36px'} height={'36px'} className=""/> 
          </a>
          <div className="hidden md:block">
            <div className="ml-5 flex items-baseline space-x-4">
              <h1 className="text-2xl font-bold">Continent Quest</h1>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
