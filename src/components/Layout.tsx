import { Outlet, Link } from "react-router-dom";

const Layout: React.FC = () => {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl py-6 sm:px-6 sm:py-6 lg:px-8">
        <nav className="px-4 py-2">       
          <h1 className="text-2xl font-bold">Continent Quest</h1>
        </nav>
        <Outlet />
      </div>
    </div>
  )
};

export default Layout;