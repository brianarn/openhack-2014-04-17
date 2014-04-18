var map;

require([
  "dojo/_base/array",
  "esri/Color",
  "esri/graphicsUtils",
  "esri/map",
  "esri/layers/FeatureLayer",
  "esri/symbols/SimpleLineSymbol",
  "esri/symbols/SimpleFillSymbol",
  "esri/tasks/query",
  "dojo/domReady!"
], function(arrayUtil, Color, graphicsUtils, Map, FeatureLayer, SimpleLineSymbol, SimpleFillSymbol, Query) {
  // Create our base map
  map = new Map("map", {
    basemap: "topo",
    center: [-106.06, 34.26], // longitude, latitude
    zoom: 6
  });

  map.on("load", function () {

    // URL to our feature layer
    var url = "http://gis-web.heritage.unm.edu/arcgis/rest/services/DataMgmt/MinimumConvexPolygon/MapServer/0";

    // Create our SimpleLineSymbol for graphic borders
    var outline = new SimpleLineSymbol(
      SimpleLineSymbol.STYLE_SOLID, // Line style
      new Color("black"), // Line color
      2 // Line width
    );

    // Create our fill symbol
    var fillSymbol = new SimpleFillSymbol(
      SimpleFillSymbol.STYLE_SOLID, // Fill style
      outline, // Outline
      new Color([0, 0, 255, 0.25])// Color
    );

    // Create our Feature Layer
    var featureLayer = window.featureLayer = new FeatureLayer(url, {
      outFields: ["*"]
    });

    // When the Feature Layer loads, issue a query
    featureLayer.on("load", function (e) {

      console.log("feature layer loaded: ", e);
      // Set up a specific query
      var query = new Query();

      // The where clause for the query (required)
      query.where = "ScientificName = 'Sibara grisea'";

      // Set the spatial reference of the query's output to be
      // the spatial reference of the base map
      query.outSpatialReference = map.extent.spatialReference;

      // Execute the query
      featureLayer.queryFeatures(query).then(function (results) {

        console.log("feature layer query results: ", results);
        // Clear all map graphics
        map.graphics.clear();

        // Iterate over features returned from query,
        // drawing them to the map
        arrayUtil.forEach(results.features, function (feature) {
          console.log("feature to draw: ", feature);
          feature.setSymbol(fillSymbol);
          map.graphics.add(feature);
        }); // arrayUtil.forEach

        // Get an extent that represents the results of the query
        var queryExtent = graphicsUtils.graphicsExtent(map.graphics.graphics);

        // Set the map's extent to our query's extent
        var extentSet = map.setExtent(queryExtent);

        // Get the zoom level of the map and zoom out one notch,
        // once the map's extent has been adjusted
        extentSet.then(function () {
          map.setZoom(map.getZoom() - 1);
        });

      }); // featureLayer.queryFeatures

    }); // featureLayer.on("load"...)

  }); // map.on("load"...)

});
