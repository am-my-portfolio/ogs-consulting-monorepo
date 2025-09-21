import ColumnLayout from "./layout/ColumnLayout";
import RowLayout from "./layout/RowLayout";

const Solution = () => {
  return (
    <div className="mt-12 scroll-mt-36">
      <RowLayout
        titleCentered="Solution"
        description="Circle Lockers', for the first time, offers a public locker network for customers to conveniently drop off ecommerce returns and drop off and pick up items sold or donated on Facebook Marketplace, Nextdoor, and Craigslist."
        content={
          <ColumnLayout
            leftContent={
              <div>
                Circle Lockers provides more convenient drop-off locations vs.
                brick-and-mortar drop-off locations such as UPS, Kohl's,
                Staples, Petco, and Whole Foods, saving you time and a much
                lower carbon footprint for our environment. Circle Lockers
                encourages our Circular Economy by making it easier and safer
                for the public to sell or donate gently used and pre-owned
                items.
              </div>
            }
            rightContent={
              <img
                src="/locker.png"
                alt="logo"
                className="w-1/2 float-right mt-4 rounded-md"
              />
            }
          />
        }
      />
    </div>
  );
};

export default Solution;
