import LockersLocations from "@/components/LockerLocations";

const Locations = () => {
  return (
      <div className="flex flex-col w-full mt-4 items-center space-y-4">
        <h1 className='text-5xl font-bold'>Teen Hustl Locker Locations</h1>
        <LockersLocations />
      </div>
  );
};

export default Locations;
