import { Link, useLocation } from 'react-router-dom';
import { landing_page_navigation } from '@/helpers/navigation';
import { BaseButton } from '@am-ogs/react-ui';

// import ThemeToggle from "@/components/ThemeToggle";

const TopNavigation = () => {
  const location = useLocation();
  const { pathname } = location;

  const login =() => {

  }
  return (
    <div className="flex flex-row px-8 py-2 items-center justify-between border-b shadow-md bg-dull-primary">
      {/* Logo */}
      <div className="flex">
        <Link to="/">
          <img
            src="/3.png"
            alt="logo"
            className="p-2 h-14 object-cover"
          />
        </Link>
        {pathname === '/at-home' && (
          <img
            src="/5.png"
            alt="logo"
            className="p-2 h-14 object-cover border-l-2"
          />
        )}
      </div>

      {/* Navigation Links (Hidden on Small Screens) */}
      <nav className="hidden md:flex space-x-10 text-pop-secondary font-medium">
        {landing_page_navigation.map((page, index) => (
          <div
            key={index}
            className="text-pop-secondary hover:text-pop-primary transition text-sm"
          >
            <Link to={`/${page.action}`}>{page.name}</Link>
          </div>
        ))}

        {/* <ThemeToggle className="ml-24" /> */}
      </nav>

      {/* <BaseButton text="Start Your Return" handler={login} /> */}
    </div>
  );
};

export default TopNavigation;
