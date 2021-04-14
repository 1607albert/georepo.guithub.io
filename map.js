require(["esri/Map", "esri/layers/GeoJSONLayer", "esri/views/MapView"], function (
    Map,
    GeoJSONLayer,
    MapView
  ) {
    // If GeoJSON files are not on the same domain as your website, a CORS enabled server
    // or a proxy is required.
    const url = "https://github.com/1607albert/georepo/blob/4cbba6f11ba5737300703e77554ee5b29f5c9ef9/Export_geometry.geojson";

  
     
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
        center: [16, 46],
        zoom: 3,
        map: map
      });
  });
