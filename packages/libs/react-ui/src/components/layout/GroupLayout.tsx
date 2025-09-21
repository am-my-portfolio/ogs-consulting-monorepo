import React from 'react';

export interface GroupLayoutProps {
  id?: string;
  title?: string;
  icon?: string;
  summary: string;
  image?: string;
  hidden?: boolean;
  featured?: boolean;
}

const GroupLayout = ({ items }: { items: GroupLayoutProps[] }) => {
  return (
    <div>
      {items?.map((item, index) => (
        <div
          key={index}
          hidden={item.hidden}
          className="flex flex-col p-4 divide-y divide-dull-secondary rounded-md shadow"
        >
          <div className="flex flex-row gap-4">
            <div className="text-4xl text-pop-primary hover:text-pop-secondary">
              {item.icon && <div className={item.icon}></div>}
              {item.image && (
                <img
                  src={item.image}
                  className="max-w-20 object-cover rounded-md"
                />
              )}
            </div>

            <div className="mt-3 text-lg text-dull-secondary/70">
              {item.summary}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GroupLayout;
