import { colorado_locker_locations } from './colorado_locker_locations.ts';
import { national_locker_locations } from './national_locker_locations.ts';

const all_locker_locations = [
  ...colorado_locker_locations,
  ...national_locker_locations,
];
type MarkerData = Array<{
  id: string;
  position: google.maps.LatLngLiteral;
  zIndex: number;
  is_active: boolean
}>;

export function getData() {
  const data: MarkerData = [];

  all_locker_locations.forEach((location, index) => {
    data.push({
      id: String(index),
      zIndex: index,
      position: location.position,
      ...location,
    });
  });

  return data;
}
