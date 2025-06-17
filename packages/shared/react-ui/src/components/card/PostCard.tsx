import React from 'react';
import SanitizeHTML from '@/components/base/SanitizedHtml';

export interface SolutionCardProps {
  item: {
    title: string;
    description: string;
    icon: string;
  };
}

const SolutionCard = ({ item }: any) => {
  return (
    <div className="flex flex-col h-72 bg-dull-primary/90 rounded-md">
      {/* Title, no-scroll */}
      <div className="flex min-h-fit py-1 my-2 mx-4 gap-4 border-b-2 border-dull-secondary/80">
        {item.featuredImage === null ? (
          <div
            className="fa-solid fa-image text-7xl text-pop-primary"
            aria-hidden="true"
          />
        ) : (
          // Image must be the Featured Image in Wordpress
          <img
            src={item.featuredImage?.node?.sourceUrl}
            alt="logo"
            className="h-20 w-20 object-cover rounded-md"
          />
        )}

        <div className="mt-2 text-xl font-bold text-dull-secondary">
          {item.title}
        </div>
      </div>

      {/* content, scrollable */}
      <div className="flex flex-col gap-y-6 px-4 scrollbar overflow-y-auto">
        {/* <div className="text-md text-dull-secondary/70">{item.slug}</div> */}

        <div className="text-md text-dull-secondary/70 ">
          <SanitizeHTML dirty={item.content} />
        </div>
      </div>
    </div>
  );
};

export default SolutionCard;
