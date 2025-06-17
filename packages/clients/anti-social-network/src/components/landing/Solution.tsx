import { RowLayout, ColumnLayout } from '@am-ogs/react-ui';

const Solution = () => {
  return (
    <div className="mt-24 scroll-mt-36">
      <RowLayout
        titleCentered="Solution"
        description="Today’s social media is bloated. Small businesses and individuals have to fight the algorithm just to reach their own neighbors.                 The UI of social media is disappearing. We're building what
                comes next."
        content={
          <ColumnLayout
            leftContent={
              <div className="text-xl">
                We’re building a platform where:
                <ul className="list-decimal list-inside space-y-4">
                  <li>
                    You subscribe to what matters to you (real estate, free
                    events, flash sales, new openings)
                  </li>
                  <li>
                    Anyone can push an “ad” or event directly to an audience who
                    wants it
                  </li>
                  <li>
                    Everything is routed to you via SMS, email, Telegram - no
                    feed required{' '}
                  </li>
                </ul>
              </div>
            }
            rightContent={
              <img
                src="/12.png"
                alt="logo"
                className="float-right"
              />
            }
          />
        }
      />
    </div>
  );
};

export default Solution;
