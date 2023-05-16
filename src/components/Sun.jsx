import React, { useEffect } from 'react';
import { useCesium } from 'resium';
import Cesium from 'cesium';

function Sun() {
  const { viewer } = useCesium();

  useEffect(() => {
    const sun = new Cesium.Sun();
    sun.glowFactor = 50.0;
    sun.show = true;
    viewer.scene.sun = sun;

    return () => {
      // Clean up on unmount
      viewer.scene.sun = undefined;
    };
  }, [viewer]);

  return null; // The Sun component doesn't render any visible elements
}

export default Sun;
