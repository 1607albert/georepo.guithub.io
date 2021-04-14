require(["esri/Map", "esri/layers/GeoJSONLayer", "esri/views/MapView"], function (
    Map,
    GeoJSONLayer,
    MapView
  ) {
    // If GeoJSON files are not on the same domain as your website, a CORS enabled server
    // or a proxy is required.
    const url = "Export_geometry.geojson";

    // Paste the url into a browser's address bar to download and view the attributes
    // in the GeoJSON file. These attributes include:
    // * mag - magnitude
    // * type - earthquake or other event such as nuclear test
    // * place - location of the event
    // * time - the time of the event
    // Use the Arcade Date() function to format time field into a human-readable format

       

    // const geojsonLayer = new GeoJSONLayer({
    //   url: url,
    //   copyright: "USGS Earthquakes",
    //   popupTemplate: template,
     
    // });
    const geojsonLayer = new GeoJSONLayer({
        url: url
         
      });

    const map = new Map({
        basemap: "gray-vector",
        layers: [geojsonLayer]
      });

      const view = new MapView({
        container: "viewDiv",
        center: [-168, 46],
        zoom: 2,
        map: map
      });
  });
