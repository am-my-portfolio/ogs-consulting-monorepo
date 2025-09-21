import React from 'react';
import {
  RowLayout,
  ColumnLayout,
  GroupLayout,
  GroupLayoutProps,
} from '@am-ogs/react-ui';

const Problem = () => {
  const reasons: GroupLayoutProps[] = [
    {
      summary: 'No driving miles or waiting in lines',
      icon: 'fa fa-check',
    },
    {
      summary: 'Drop off anytime',
      icon: 'fa fa-check',
    },
    {
      summary: 'No more missed refunds',
      icon: 'fa fa-check',
    },
  ];

  return (
    <div className="my-24 scroll-mt-36">
      <RowLayout
        titleRight="How It Works"
        subTitleRight="Drop off Returns near you!"
        content={
          <ColumnLayout
            leftContent={
              <img src="/1.png" alt="logo" className="float-left" />
            }
            rightContent={<GroupLayout items={reasons} />}
          />
        }
      />
    </div>
  );
};

export default Problem;
