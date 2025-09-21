import ColumnLayout from "./layout/ColumnLayout";
import GroupLayout, { GroupLayoutProps } from "./layout/GroupLayout";
import RowLayout from "./layout/RowLayout";

const Problem = () => {
  const reasons: GroupLayoutProps[] = [
    {
      summary: "Avoid time on road and risks of accidents",
      icon: "fa-solid fa-car-on",
    },
    {
      summary:
        "Families wastes on average 4 hours per month handling online returns",
      icon: "fa-solid fa-clock",
    },
    {
      summary:
        "Goods are thrown away or take valuable storage space and cause clutter, instead of returned",
      icon: "fa fa-trash",
    },
  ];

  return (
    <RowLayout
      titleLeft="Problem"
      subTitleLeft="Hundreds of wasted hours and gallons of fuel driving to and waiting at return centers"
      content={
        <ColumnLayout
          leftContent={<GroupLayout items={reasons} />}
          rightContent={
            <div className="text-dull-secondary text-xl">
              Families spend time and gas on getting to the return locations
              upto 15 Miles away. This effort takes away time which could
              otherwise be spend with family and friends or at work. Specially
              around holidays, the queues at the return centers could take upto
              half hour.
            </div>
          }
        />
      }
    />
  );
};

export default Problem;
