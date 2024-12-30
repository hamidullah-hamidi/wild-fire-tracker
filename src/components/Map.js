import GoogleMapReact from 'google-map-react';

function Map({
  center = {
    lat: 34.34798451432996,
    lng: 62.21844974605675,
  },
  zoom = 11,
}) {
  return (
    <div className='map' style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{
          key: 'AIzaSyBlHOt1JOJod_cDy6pb3lslFEMAt-_HHiA',
        }}
        defaultCenter={center}
        defaultZoom={zoom}
      ></GoogleMapReact>
    </div>
  );
}

export default Map;
