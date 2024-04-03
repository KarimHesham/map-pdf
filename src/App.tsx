import React, { useEffect } from "react";
import mapboxgl from "mapbox-gl";
import "./App.css";
import "mapbox-gl/dist/mapbox-gl.css";
import "@watergis/mapbox-gl-export/dist/mapbox-gl-export.css"; // Import the CSS for the plugin
import { MapboxExportControl } from "@watergis/mapbox-gl-export"; // Import the plugin

//
function App() {
  mapboxgl.accessToken = "";

  useEffect(() => {
    // This code runs after the component has been rendered to the DOM
    const map = new mapboxgl.Map({
      container: "map", // Matches the ID of the div below
      style: "mapbox://styles/cooing/clud7kmjy011a01pr9rdy8x9b", // Map style
      center: [28.9472, 30.8466], // Initial coordinates
      zoom: 11, // Initial zoom level
    });

    map.on("load", () => {
      // Add export control to the map once it has loaded
      map.addControl(new MapboxExportControl(), "top-right");
    });

    // Cleanup function to remove the map instance when the component unmounts
    return () => map.remove();
  }, []);
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <div id="map" style={{ width: "80%", height: "100%" }}></div>
    </div>
  );
}

export default App;
