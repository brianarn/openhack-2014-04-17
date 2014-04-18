var map;

require([
  "esri/map",
  "esri/symbols/SimpleFillSymbol",
  "esri/tasks/query",
  "esri/tasks/QueryTask",
  "dojo/domReady!"
], function(Map, SimpleFillSymbol, Query, QueryTask) {
  // Create our base map
  map = new Map("map", {
    basemap: "topo",
    center: [-122.45, 37.75], // longitude, latitude
    zoom: 13
  });
});
