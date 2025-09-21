import ColumnLayout from "./layout/ColumnLayout";
import GroupLayout, { GroupLayoutProps } from "./layout/GroupLayout";
import RowLayout from "./layout/RowLayout";

const HowItWorks = () => {
  const reasons: GroupLayoutProps[] = [
    {
      summary: "No driving miles or waiting in lines",
      icon: "fa fa-check",
    },
    {
      summary: "Drop off anytime",
      icon: "fa fa-check",
    },
    {
      summary: "No more missed refunds",
      icon: "fa fa-check",
    },
  ];

  return (
    <div className="my-12 scroll-mt-36">
      <RowLayout
        titleRight="How It Works"
        subTitleRight="Drop off Returns near you!"
        content={
          <ColumnLayout
            leftContent={
              <img src="/locker2.png" alt="logo" className="w-full mt-6" />
            }
            rightContent={<GroupLayout items={reasons} />}
          />
        }
      />
    </div>
  );
};

export default HowItWorks;
