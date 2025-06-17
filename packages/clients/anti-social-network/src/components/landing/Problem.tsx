import {
  RowLayout,
  ColumnLayout,
  GroupLayout,
  GroupLayoutProps,
} from '@am-ogs/react-ui';

const Partners = () => {
  const reasons: GroupLayoutProps[] = [
    {
      summary: 'Local real estate opportunities',
      icon: 'fa-solid fa-sign-hanging',
    },
    {
      summary: 'Volunteer events',
      icon: 'fa-solid fa-handshake-angle',
    },
    {
      summary: 'Restaurant openings or deals',
      icon: 'fa fa-utensils',
    },
    {
      summary: 'Small business promos',
      icon: 'fa fa-building',
    },
    {
      summary: 'Private events / niche interest groups',
      icon: 'fa fa-champagne-glasses',
    },
  ];

  return (
    <div className="mt-24 scroll-mt-36">
      <RowLayout
        titleLeft="🔥 Problem"
        subTitleLeft="Social media platforms are bloated, noisy, and centralized. Most users only engage with them passively and spend time sifting through irrelevant content just to find:"
        content={
          <ColumnLayout
            leftContent={<GroupLayout items={reasons} />}
            rightContent={
              <div className="space-y-4  text-3xl">
                <div className="text-pop-secondary tracking-wide font-bold">
                  As AI eats interfaces, the question becomes:{' '}
                </div>
                <p className="text-pop-primary tracking-wide font-bold">
                  - Why scroll through 4 different apps to see what’s happening
                  around you?
                </p>
                <p className="text-pop-primary tracking-wide font-bold">
                  - Why go to a screen or an app at all to find what you care
                  about?
                </p>
              </div>
            }
          />
        }
      />
    </div>
  );
};

export default Partners;
