import React from 'react';
import './components/cesium/custom-cesium-styles.css';
import { Viewer } from 'resium';
import { Sun } from 'resium';
import SearchBar from './components/SearchBar';

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

  return (
    <div style={containerStyle}>
      <Viewer full options={viewerOptions}>
        <Sun />
      </Viewer>
      <div style={overlayStyle}>
        <SearchBar />
      </div>
    </div>
  );
}

export default App;
