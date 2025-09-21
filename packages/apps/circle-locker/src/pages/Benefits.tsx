import BaseButton from "@/components/BaseButton";
import ColumnLayout from "@/components/layout/ColumnLayout";

const Benefits = () => {
  const getStarted = () => {
    console.log('Get Started');
    window.open('https://www.circlelocker.com/login', '_blank');
  };

  return (
    <ColumnLayout
      // title="Self-serve solutions for eCommerce returns, at-home pickup services for returns"
      title="At-home pickup of eCommerce returns, and items sold on Facebook Marketplace, and Nextdoor"
      description={
        <div className="mt-4">
          We solve the challenges of neighborhood logistics while bringing back
          opportunities that our nation’s youth had decades ago through
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
      rightContent={<img src="/teen-hustl.png" alt="logo" className="w-full" />}
    />
  );
};

export default Benefits;
