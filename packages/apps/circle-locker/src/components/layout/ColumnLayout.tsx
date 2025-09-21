import React from 'react';

export interface ColumnLayoutProps {
  title?: string;
  subTitle?: React.ReactNode | string;
  description?: React.ReactNode | string;
  leftContent?: React.ReactNode;
  rightContent?: React.ReactNode;
}

const ColumnLayout = ({
  title,
  subTitle,
  description,
  leftContent,
  rightContent,
}: ColumnLayoutProps) => {
  return (
    <div className="flex justify-center items-center">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-10 items-center">
        {/* Left Content */}
        <div className="col-span-1 md:col-span-3">
          <div className="text-3xl md:text-5xl font-bold text-pop-secondary leading-tight">
            {title}
          </div>
          <div className="flex space-x-12 text-pop-primary">{subTitle}</div>
          <div className="text-dull-secondary/50">
            {description}
          </div>
          <div>{leftContent}</div>
        </div>

        {/* Right Image */}
        <div className="col-span-1 md:col-span-2">{rightContent}</div>
      </div>
    </div>
  );
};

export default ColumnLayout;
