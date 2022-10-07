// Define Data
var Data = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/detail/nc73789116.geojson";

// Create Data layer
var Data = L.layer();

// Create grey map to represent the earthquakes
var myMap = L.map("mapid", {
  center: [
    29.34, -97.62
  ],
  zoom: 3,
  layers: [grayscaleMap, earthquakes]
});
  
  // Choosing the Color
  function chooseColor(depth) {
    switch(true) {
      case depth > 100:
        return "yellow";
      case depth > 90:
        return "green";
      case depth > 70:
        return "red";
      case depth > 50:
        return "orange";
      case depth > 30:
        return "bleu";







        
    }
  };
