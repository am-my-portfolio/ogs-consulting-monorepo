import { Link, useLocation } from 'react-router-dom';
import { landing_page_navigation } from '@/helpers/navigation';

const TopNavigation = () => {
  const location = useLocation();
  const { pathname } = location;

  const login = () => {};
  return (
    <div className="flex flex-row px-4 items-center justify-between border-b bg-dull-primary">
      {/* Logo */}
      <div className="flex">
        <Link to="/">
          <img
            src="/circle-lockers-rows-sm.png"
            alt="logo"
            className="h-14 md:h-20 object-cover"
          />
        </Link>
        {pathname === '/partners' && (
          <img
            src="/logo-teen-hustl.png"
            alt="logo"
            className="h-14 md:h-20 ml-2 pb-[.1rem] pt-3 pl-3 object-cover border-l-2"
          />
        )}
      </div>

      {/* Navigation Links (Hidden on Small Screens) */}
      <nav className="hidden md:flex space-x-6 lg:space-x-12 mt-auto mb-1 text-pop-secondary font-medium">
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
