import React from 'react';

export interface SiteLayoutProps {
  isLoading?: boolean;
  isAuthenticated: boolean;
  sideMenu?: React.ReactNode;
  header?: React.ReactNode;
  topNavigation?: React.ReactNode;
  appRoutes?: React.ReactNode;
  footer?: React.ReactNode;
}
const SiteLayout = ({
  isLoading,
  isAuthenticated,
  sideMenu,
  header,
  topNavigation,
  appRoutes,
  footer,
}: SiteLayoutProps) => {
  return (
    <div>
      {/* the X value needs to match b/w the lg:w-X of the side column and the lg:pl-X of the main column  */}

      {/* Left Column  */}
      {isAuthenticated && (
        <div className="hidden lg:fixed lg:flex lg:flex-col lg:inset-y-0 lg:z-50 lg:w-80">
          {sideMenu}
        </div>
      )}

      {/* Main Column   */}
      <div
        className={`flex flex-col h-screen justify-between ${isAuthenticated ? 'lg:pl-80' : ''}`}
      >
        {isAuthenticated && (
          <div className="sticky top-0 z-40 lg:px-8">{header}</div>
        )}

        {!isAuthenticated && (
          <header className="sticky top-0 z-40">
            {topNavigation}
          </header>
        )}

        <main className="grow w-full mt-4 p-4 sm:px-6 lg:px-44 scrollbar overflow-auto ">
          {!isLoading && <div>{appRoutes}</div>}
        </main>

        <footer className="sticky bottom-0 z-40">{footer}</footer>
      </div>
    </div>
  );
};

export default SiteLayout;
