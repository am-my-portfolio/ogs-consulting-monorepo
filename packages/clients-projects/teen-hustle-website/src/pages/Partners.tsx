import AtHome from '@/components/AtHome';
import LockersLocations from '@/components/LockerLocations';

const Partners = () => {
  return (
    <div>
      <AtHome />
      <div className="flex flex-col w-full mt-12 items-center space-y-4">
        <h1 className='text-5xl font-bold'>Harbor Locker Locations</h1>
        <LockersLocations />
      </div>
    </div>
  );
};

export default Partners;
