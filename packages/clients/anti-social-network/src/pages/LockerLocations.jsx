import { useState, useEffect } from 'react';
import {
  APIProvider,
  AdvancedMarker,
  InfoWindow,
  Map,
} from '@vis.gl/react-google-maps';
import { active_locker_locations } from '@/data/locker_locations.ts';

const LockerLocations = () => {
  const center = { lat: 39.7392, lng: -104.9903 };
  const [active_marker_index, setActiveMarker] = useState(null);

  const handleActiveMarker = (curr_index) => {
    console.log({ curr_index });
    if (curr_index === active_marker_index) {
      return;
    }

    setActiveMarker(curr_index);
    console.log({ active_marker_index });
  };

  useEffect(() => {
    if (active_marker_index) {
      console.log({ active_marker_index });
    }
  }, [active_marker_index]);

  return (
    <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAP_API_KEY}>
      <div className="flex border-4 border-dull-secondary rounded-md">
        <Map
          style={{ width: '100vw', height: '80vh' }}
          defaultCenter={center}
          defaultZoom={8}
          gestureHandling={'greedy'}
          enableEventPropagation={true}
          // disableDefaultUI={true}
          mapId="locker-locations"
        >
          {active_locker_locations.map((element, index) => {
            return (
              <AdvancedMarker
                key={index}
                position={element.position}
                onClick={() => handleActiveMarker(index)}
                // onClick={handleMarkerClick(index)}
              >
                <img
                  src="/logo-circle-locker.png"
                  className="w-10 object-cover"
                />
                {active_marker_index === index && (
                  <>
                    <div
                      className="flex flex-col bg-white h-24 w-48 rounded-md p-2"
                      onClick={() => handleActiveMarker(null)}
                    >
                      <div className="flex gap-x-1">
                        <h2 className="font-bold mb-2">Locker Address:</h2>
                        {active_locker_locations[active_marker_index].address}
                      </div>

                      <div className="flex gap-x-1">
                        <h2 className="font-bold mb-2">Services:</h2>


                        <pre>
                          {JSON.stringify(
                            active_locker_locations[active_marker_index]
                              .services,
                            null,
                            2,
                          )
                            .replace(/"/g, '')
                            .replace('{\n', '')
                            .replace('}', '')}
                        </pre>
                      </div>
                    </div>
                  </>
                )}
              </AdvancedMarker>
            );
          })}

          {/* {active_marker_index && (
            <InfoWindow
              anchor={active_locker_locations[active_marker_index]}
              onCloseClick={() => setActiveMarker(null)}
              // onClose={handleClose}
            >
              <h2 className="w-36 font-bold mb-2">Locker Address:</h2>
              <p>{active_locker_locations[active_marker_index].address}</p>
            </InfoWindow>
          )} */}
        </Map>
      </div>
    </APIProvider>
  );
};

export default LockerLocations;

// https://stackoverflow.com/questions/66387750/how-to-add-an-infowindow-to-my-markers-in-google-maps-react
// https://codesandbox.io/p/sandbox/react-google-mapsapi-multiple-markers-infowindow-h6vlq?file=%2Fsrc%2FMap.js
