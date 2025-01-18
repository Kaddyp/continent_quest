import { Outlet, Link } from "react-router-dom";
import Header from "./Header";

const Layout: React.FC = () => {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl py-6 sm:px-6 sm:py-6 lg:px-8">        
        <Header />
        <Outlet />
      </div>
    </div>
  )
};

export default Layout;