import React from 'react';
import {
  RowLayout,
  ColumnLayout,
  GroupLayout,
  GroupLayoutProps,
} from '@am-ogs/react-ui';

const Partners = () => {
  const reasons: GroupLayoutProps[] = [
    {
      summary:
        '19 million U.S. cancer patients receive $0 for their data, while corporations profit.',
      icon: 'fa-solid fa-bed-pulse',
    },
    {
      summary:
        '42% of cancer patients deplete their life savings within two years of diagnosis.',
      icon: 'fa-solid fa-piggy-bank',
    },
    {
      summary:
        'Life Sciences companies spend billions acquiring patient data – but most of it is obtained without direct patient consent.',
      icon: 'fa-solid fa-handshake-slash',
    },
  ];

  return (
    <div id="partners" className="mt-24 scroll-mt-36">
      <RowLayout
        titleLeft="Partners"
        subTitleLeft="Cancer Patients Are the Backbone of a $50 Billion Data Market - But They Get Nothing."
        content={
          <ColumnLayout
            leftContent={
              <div className="text-dull-secondary text-xl">
                Every cancer patient's journey produces an enormous amount of
                valuable data - scans, lab results, genetic profiles, and
                treatment outcomes. This data fuels a $50+ billion global health
                data market, driving pharmaceutical breakthroughs and clinical
                advancements.
              </div>
            }
            rightContent={<GroupLayout items={reasons} />}
          />
        }
      />
    </div>
  );
};

export default Partners;
