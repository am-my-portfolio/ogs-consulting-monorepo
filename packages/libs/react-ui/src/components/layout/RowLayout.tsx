import React from 'react';

export interface RowLayoutProps {
  titleLeft?: string;
  subTitleLeft?: string;
  titleCentered?: string;
  titleRight?: string;
  subTitleRight?: string;
  description?: React.ReactNode | string;
  content?: React.ReactNode;
}

const RowLayout = ({
  titleLeft,
  subTitleLeft,
  titleCentered,
  titleRight,
  subTitleRight,
  description,
  content,
}: RowLayoutProps) => {
  return (
    <div className="flex flex-col justify-center items-center">
      {/* Row 1: Left Aligned */}
      <div className="w-full text-left gap-3">
        <div className="text-3xl md:text-5xl font-bold text-pop-secondary leading-tight">
          {titleLeft}
        </div>
        <div className="text-lg md:text-2xl text-dull-secondary/80">
          {subTitleLeft}
        </div>
      </div>

      {/* Row 1: Center Aligned */}
      <div className="text-center">
        <h1 className="text-3xl md:text-5xl font-bold text-pop-secondary leading-tight">
          {titleCentered}
        </h1>
      </div>

      {/* Row 1: Right Aligned */}
      <div className="w-full text-right">
        <h1 className="text-3xl md:text-5xl font-bold text-pop-secondary leading-tight">
          {titleRight}
        </h1>
        <h2 className="text-lg md:text-2xl text-dull-secondary/50">
          {subTitleRight}
        </h2>
      </div>

      {/* Row 2 */}
      <div className="md:mx-44 mt-4 text-center text-dull-secondary text-xl">
        {description}
      </div>

      {/* Row 3 */}
      <div>{content}</div>
    </div>
  );
};

export default RowLayout;
