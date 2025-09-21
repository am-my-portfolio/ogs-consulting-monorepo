import React from 'react';

export interface DivisionLayoutProps {
  title: string;
  description: string;
  content: React.ReactNode;
}

const DivisionLayout = ({
  title,
  description,
  content,
}: DivisionLayoutProps) => {
  return (
    <div className="mt-10 Viewide-y Viewide-dull-secondary">
      <div className="space-y-1">
        <div className="text-lg font-medium leading-6 text-pop-secondary">
          {title}
        </div>
        <div className="max-w-2xl text-sm text-dull-secondary">
          {description}
        </div>
      </div>

      <div className="mt-5 mb-20">{content}</div>
    </div>
  );
};

export default DivisionLayout;
