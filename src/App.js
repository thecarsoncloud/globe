import React from 'react';
import './components/cesium/custom-cesium-styles.css';
import { Viewer } from 'resium';

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

  return (
    <div>
      <Viewer full options={viewerOptions}>
        {/* Your other Resium components here */}
      </Viewer>
    </div>
  );
}

export default App;
