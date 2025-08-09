import React from 'react';

export interface SolutionCardProps {
  item: {
    title: string;
    description: string;
    icon: string;
  };
}

const SolutionCard = ({ item }: SolutionCardProps) => {
  return (
    <div className="flex flex-col h-full bg-dull-primary/90 rounded-md">
      <div className="mt-6 text-left">
        <i
          className={`${item.icon} text-5xl mx-4 text-pop-primary shrink-0`}
          aria-hidden="true"
        ></i>
      </div>
      <div className="flex flex-col gap-y-6 p-4 mt-4">
        <p className="text-xl font-bold text-dull-secondary/90 border-b-2 border-dull-secondary/80">
          {item.title}
        </p>
        <p className="text-md text-dull-secondary/70">{item.description}</p>
      </div>
    </div>
  );
};

export default SolutionCard;
