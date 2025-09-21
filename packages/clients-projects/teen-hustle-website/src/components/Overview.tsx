import BaseButton from "./BaseButton";
import ColumnLayout from "./layout/ColumnLayout";


const Overview = () => {
  const getStarted = () => {
    console.log('Get Started');
    window.open('https://www.circlelocker.com/login', '_blank');
  };

  return (
    <ColumnLayout
      title="National network of smart lockers for eCommerce returns & safe neigbhor exchanges"
      description={
        <div className="mt-4">
          Circle Lockers is the first national public smart locker dedicated to
          powering the Circular Economy through convenient neighborhood
          ecommerce returns, neighbor-to-neighbor deliveries, and forthcoming
          services that support the Circular Economy
        </div>
      }
      leftContent={
        <div className="mt-4">
          <BaseButton text="Start Your Return" handler={getStarted} />
          <div className="my-4 text-pop-primary">
            Powering the Circular Economy
          </div>
        </div>
      }
      rightContent={
        <div className="flex flex-col items-center justify-center">
          <img
            src="/logo-circle-colored-lg.png"
            alt="logo"
            className="w-3/5 md:w-full md:-mt-12 xl:-mt-1"
          />
          <img
            src="/circle-lockers.png"
            alt="logo"
            className="p-12 md:p-2 w-full"
          />
        </div>
      }
    />
  );
};

export default Overview;
