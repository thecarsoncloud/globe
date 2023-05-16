import React, { useEffect, useRef } from 'react';
import { Viewer, Camera, RectangleGraphics, createCesiumComponent, Sun } from 'resium';
import { Cartesian3, Rectangle, SkyBox as CesiumSkyBox } from 'cesium';
import './components/cesium/custom-cesium-styles.css';

const ResiumSkyBox = createCesiumComponent(CesiumSkyBox);

function App() {
  const viewerRef = useRef(null);

  useEffect(() => {
    if (viewerRef.current) {
      const viewer = viewerRef.current.cesiumElement;

      // Define the camera angle
      const cameraPosition = Cartesian3.fromDegrees(-80.031362, 25.083987, 1300000.0); // Florida coordinates
      const cameraOrientation = {
        pitch: -Math.PI / 6, // Adjust the pitch value to your desired angle
        heading: -Math.PI / 5, // Adjust the heading value to your desired angle
        roll: 0.4,
      };

      // Fly the camera to the desired angle
      viewer.camera.flyTo({
        destination: cameraPosition,
        orientation: cameraOrientation,
        duration: 3, // Animation duration in seconds
      });
    }
  }, []);

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

  // Set the position of the Sun in the top left
  const sunPosition = Cartesian3.fromDegrees(-180, 90); // Adjust the coordinates as needed

  return (
    <div style={containerStyle}>
      <Viewer full options={viewerOptions} ref={viewerRef}>
        <Sun position={sunPosition} />
        <Camera />
        <ResiumSkyBox show={true} sources={{ positiveX: 'path/to/posx.png', negativeX: 'path/to/negx.png', positiveY: 'path/to/posy.png', negativeY: 'path/to/negy.png', positiveZ: 'path/to/posz.png', negativeZ: 'path/to/negz.png' }} />
        <RectangleGraphics rectangle={Rectangle.fromDegrees(-180, -90, 180, 90)} fill={false} outline={false} />
        {/* Add other components as needed */}
      </Viewer>
    </div>
  );
}

export default App;
