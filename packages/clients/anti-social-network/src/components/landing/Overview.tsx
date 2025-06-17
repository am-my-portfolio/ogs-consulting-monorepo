import { ColumnLayout, BaseButton } from '@am-ogs/react-ui';

const Overview = () => {
  const getStarted = () => {
    console.log('Get Started');
    window.open('https://www.circlelocker.com/login', '_blank');
  };

  return (
    <ColumnLayout
      title="Cut Through the Noise. Get What You Actually Care About."
      description={
        <div className="mt-4">
          Challenging the "ad-delivery" monopoly, using AI-native infrastructure
          for real-world event discovery and lead generation
        </div>
      }
      leftContent={
        <div className="mt-4">
          <BaseButton
            text="🔔 Subscribe to early access"
            handler={getStarted}
          />
          <div className="my-4 text-pop-primary">
            An AI-powered notification network for real-world opportunities —
            from real estate deals to last-minute restaurant promos — delivered
            straight to your inbox, phone, or preferred channel. ✅ No apps. ✅
            No algorithms. ✅ Just the good stuff.
          </div>
        </div>
      }
      rightContent={
        <img src="/2.png" alt="logo" className="w-full" />
      }
    />
  );
};

export default Overview;
