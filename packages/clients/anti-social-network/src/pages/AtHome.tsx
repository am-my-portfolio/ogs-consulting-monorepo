import React from 'react';
import { ColumnLayout, BaseButton } from '@am-ogs/react-ui';

const AtHome = () => {
  const getStarted = () => {
    console.log('Get Started');
    window.open('https://www.circlelocker.com/login', '_blank');
  };

  return (
    <div className="mt-6 scroll-mt-36">
      <ColumnLayout
        // title="Self-serve solutions for eCommerce returns, at-home pickup services for returns"
        title="At-home pickup of eCommerce returns, and items sold on Facebook Marketplace, and Nextdoor"
        description={
          <div className="mt-4">
            We solve the challenges of neighborhood logistics while bringing
            back opportunities that our nation’s youth had decades ago through
            neighborhood delivery (paper routes) but updated for today’s Gig
            Economy!
          </div>
        }
        leftContent={
          <div className="mt-4">
            <BaseButton text="Start Your Return" handler={getStarted} />
            <div className="hidden my-4 text-pop-primary">
              Used by 10+ neighborhoods in Colorado
            </div>
          </div>
        }
        rightContent={
          <img src="/teen-hustl.png" alt="logo" className="w-full" />
        }
      />
    </div>
  );
};

export default AtHome;
