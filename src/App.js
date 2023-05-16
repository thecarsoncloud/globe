import React from 'react';
import { Viewer, Camera, RectangleGraphics, SkyBox, createCesiumComponent, Sun } from 'resium';
import { Cartesian3, Rectangle, SkyBox as CesiumSkyBox } from 'cesium';
import './components/cesium/custom-cesium-styles.css';

const ResiumSkyBox = createCesiumComponent(CesiumSkyBox);

function App() {
  const viewerOptions = {
    homeButton: false,
    geocoder: false,
    sceneModePicker: false,
    baseLayerPicker: false,
    timeline: false,
    animation: false,
    fullscreenButton: false,
    vrButton: false,
    navigationHelpButton: false,
    selectionIndicator: false,
  };

  const containerStyle = {
    position: 'relative',
    width: '100%',
    height: '100vh',
  };

  const overlayStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: 1,
  };

  // Define the camera angle
  const cameraPosition = Cartesian3.fromDegrees(-98.5833333, 39.8333333, 5000000.0); // Adjust the zoom level by changing the last parameter
  const cameraOrientation = {
    pitch: -Math.PI / 4, // Adjust the pitch value to your desired angle
    heading: 0, // Adjust the heading value to your desired angle
    roll: 0,
  };

  return (
    <div style={containerStyle}>
      <Viewer full options={viewerOptions}>
        <Sun />
        <Camera
          defaultDestination={cameraPosition}
          defaultOrientation={cameraOrientation}
        />
        <ResiumSkyBox show={true} sources={{ positiveX: 'path/to/posx.png', negativeX: 'path/to/negx.png', positiveY: 'path/to/posy.png', negativeY: 'path/to/negy.png', positiveZ: 'path/to/posz.png', negativeZ: 'path/to/negz.png' }} />
        <RectangleGraphics rectangle={Rectangle.fromDegrees(-180, -90, 180, 90)} fill={false} outline={false} />
        {/* Add other components as needed */}
      </Viewer>
    </div>
  );
}

export default App;
