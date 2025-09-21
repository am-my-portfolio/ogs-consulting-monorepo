import React from 'react';

export interface PageLayoutProps {
  pageTitle: string;
  description: string;
  tabs: React.ReactNode;
  search: React.ReactNode;
  pageContent: React.ReactNode;
}

const PageLayout = ({
  pageTitle,
  description,
  tabs,
  search,
  pageContent,
}: PageLayoutProps) => {
  return (
    <main className="flex-1 not-italic">
      <div className="relative mx-auto">
        <div className="pb-16 pt-10">
          {/* Page Titles */}
          <div className="px-4 sm:px-6 lg:px-0">
            <h1 className="text-3xl font-bold tracking-tight text-pop-secondary">
              {pageTitle}
            </h1>
            <div className="max-w-2xl text-sm text-dull-secondary pt-2">
              {description}
            </div>
          </div>
          {/* End Page Titles */}

          <div className="px-4 sm:px-6 lg:px-0">
            <div className="py-6">
              {tabs}
              {search}
              {pageContent}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default PageLayout;
