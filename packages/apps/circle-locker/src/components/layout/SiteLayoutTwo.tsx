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

// Large, Non-sticky Footer
const SiteLayoutTwo = ({
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
        className={`flex flex-col max-h-screen justify-between ${
          isAuthenticated ? 'lg:pl-80' : ''
        }`}
      >
        {isAuthenticated && (
          <div className="sticky top-0 z-40 lg:px-8">{header}</div>
        )}

        {!isAuthenticated && (
          <header className="sticky top-0 z-40">{topNavigation}</header>
        )}

        <main className="flex flex-col w-full h-screen scrollbar overflow-auto">
          {!isLoading && (
            <div className="flex-1 mt-4 p-4 sm:px-6 lg:px-44 text-lg">
              {appRoutes}
            </div>
          )}
          <footer className="flex h-1/3">{footer}</footer>
        </main>

        {/* <main className="grow w-full scrollbar overflow-auto">
          {!isLoading && (
            <div className="mt-4 p-4 sm:px-6 lg:px-44 ">{appRoutes}</div>
          )}
          <footer className="mt-24 bottom-0 z-40">{footer}</footer>
        </main> */}
      </div>
    </div>
  );
};

export default SiteLayoutTwo;
