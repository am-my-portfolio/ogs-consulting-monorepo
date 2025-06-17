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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Content */}
        <div className="col-span-1">
          <div className="text-4xl md:text-6xl font-bold text-pop-secondary leading-tight">
            {title}
          </div>
          <div className="flex space-x-12 text-pop-primary">{subTitle}</div>
          <div className="text-lg md:text-2xl text-dull-secondary/50">
            {description}
          </div>
          <div>{leftContent}</div>
        </div>

        {/* Right Image */}
        <div className="col-span-1">{rightContent}</div>
      </div>
    </div>
  );
};

export default ColumnLayout;
