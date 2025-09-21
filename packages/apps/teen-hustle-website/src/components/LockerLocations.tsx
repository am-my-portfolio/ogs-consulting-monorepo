import React, { useCallback, useState } from 'react';
import {
  Map,
  InfoWindow,
  APIProvider,
  AdvancedMarker,
  AdvancedMarkerAnchorPoint,
  AdvancedMarkerProps,
  useAdvancedMarkerRef,
  CollisionBehavior,
} from '@vis.gl/react-google-maps';
import { getData } from '@/data/data.ts';
import '@/map-style.css';

export type AnchorPointName = keyof typeof AdvancedMarkerAnchorPoint;

// A common pattern for applying z-indexes is to sort the markers
// by latitude and apply a default z-index according to the index position
// This usually is the most pleasing visually. Markers that are more "south"
// thus appear in front.
const data = getData().map((dataItem, index) => ({
  ...dataItem,
  zIndex: index,
}));

const Z_INDEX_SELECTED = data.length;
const Z_INDEX_HOVER = data.length + 1;
const API_KEY = import.meta.env.VITE_GOOGLE_MAP_API_KEY;

const LockersLocations = () => {
  const [markers] = useState(data);
  const [center] = useState({ lat: 39.7392, lng: -104.9903 });
  const [anchorPoint] = useState('BOTTOM' as AnchorPointName);
  const [hoverId, setHoverId] = useState<string | null>(null);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [selectedMarker, setSelectedMarker] =
    useState<google.maps.marker.AdvancedMarkerElement | null>(null);
  const [infoWindowShown, setInfoWindowShown] = useState(false);

  const onMouseEnter = useCallback((id: string | null) => setHoverId(id), []);
  const onMouseLeave = useCallback(() => setHoverId(null), []);
  const onMarkerClick = useCallback(
    (id: string | null, marker?: google.maps.marker.AdvancedMarkerElement) => {
      setSelectedId(id);
      setSelectedLocation(data[id]);

      if (marker) {
        setSelectedMarker(marker);
      }

      if (id !== selectedId) {
        setInfoWindowShown(true);
      } else {
        setInfoWindowShown((isShown) => !isShown);
      }
    },
    [selectedId],
  );

  const onMapClick = useCallback(() => {
    setSelectedId(null);
    setSelectedLocation(null);
    setSelectedMarker(null);
    setInfoWindowShown(false);
  }, []);

  const handleInfowindowCloseClick = useCallback(
    () => setInfoWindowShown(false),
    [],
  );

  return (
    <APIProvider apiKey={API_KEY} libraries={['marker']}>
      <div className="border-4 border-dull-secondary rounded-md">
        <Map
          mapId="locker-locations"
          defaultZoom={11}
          defaultCenter={center}
          style={{ width: '75vw', height: '85vh' }}
          gestureHandling={'greedy'}
          onClick={onMapClick}
        >
          {markers.map(({ id, zIndex: zIndexDefault, position, is_active }) => {
            let zIndex = zIndexDefault;

            if (hoverId === id) {
              zIndex = Z_INDEX_HOVER;
            }

            if (selectedId === id) {
              zIndex = Z_INDEX_SELECTED;
            }

            return (
              <AdvancedMarkerWithRef
                key={id}
                zIndex={zIndex}
                position={position}
                className="custom-marker"
                onMouseLeave={onMouseLeave}
                onMouseEnter={() => onMouseEnter(id)}
                anchorPoint={AdvancedMarkerAnchorPoint[anchorPoint]}
                onMarkerClick={(
                  marker: google.maps.marker.AdvancedMarkerElement,
                ) => onMarkerClick(id, marker)}
                style={{
                  transform: `scale(${
                    [hoverId, selectedId].includes(id) ? 1.3 : 1
                  })`,
                  transformOrigin:
                    AdvancedMarkerAnchorPoint['BOTTOM'].join(' '),
                }}
                collisionBehavior={
                  CollisionBehavior.OPTIONAL_AND_HIDES_LOWER_PRIORITY
                }
              >
                {is_active ? (
                  <img
                    src="/logo-circle-colored-sm.png"
                    className="w-8 object-cover"
                  />
                ) : (
                  <img
                    src="/logo-circle-grey-sm.png"
                    className="w-8 object-cover"
                  />
                )}
              </AdvancedMarkerWithRef>
            );
          })}

          {infoWindowShown && selectedMarker && (
            <InfoWindow
              anchor={selectedMarker}
              pixelOffset={[0, -2]}
              onCloseClick={() => handleInfowindowCloseClick}
            >
              <div className="space-y-2">
                {selectedLocation.locker_name && (
                  <h2 className="font-bold mb-2">
                    Marker {selectedId}: {selectedLocation.locker_name}
                  </h2>
                )}

                <div>
                  <h2 className="font-bold mb-2">Address:</h2>
                  <div>{selectedLocation.address}</div>
                </div>

                {selectedLocation.services && (
                  <div>
                    <h2 className="font-bold mb-2">Services:</h2>

                    <pre>
                      {JSON.stringify(selectedLocation.services, null, 2)
                        .replace(/"/g, '')
                        .replace('{\n', '')
                        .replace('}', '')}
                    </pre>
                  </div>
                )}
              </div>
            </InfoWindow>
          )}
        </Map>
      </div>
    </APIProvider>
  );
};

export const AdvancedMarkerWithRef = (
  props: AdvancedMarkerProps & {
    onMarkerClick: (marker: google.maps.marker.AdvancedMarkerElement) => void;
  },
) => {
  const { children, onMarkerClick, ...advancedMarkerProps } = props;
  const [markerRef, marker] = useAdvancedMarkerRef();

  return (
    <AdvancedMarker
      onClick={() => {
        if (marker) {
          onMarkerClick(marker);
        }
      }}
      ref={markerRef}
      {...advancedMarkerProps}
    >
      {children}
    </AdvancedMarker>
  );
};

export default LockersLocations;

// https://visgl.github.io/react-google-maps/examples/advanced-marker-interaction
// https://github.com/visgl/react-google-maps/tree/main/examples/advanced-marker-interaction
