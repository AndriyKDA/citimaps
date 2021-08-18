function createMap(bikeStations) {

  // Create the tile layer that will be the background of our map.
  var streetmap = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  });


  // Create a baseMaps object to hold the streetmap layer.
  var baseMaps = {
    "Street Map": streetmap
  };

  // Create an overlayMaps object to hold the bikeStations layer.
  var overlayMaps = {
    "Bike Stations": bikeStations
  };

  // Create the map object with options.
  var map = L.map("map-id", {
    center: [40.73, -74.0059],
    zoom: 12,
    layers: [streetmap, bikeStations]
  });

  // Create a layer control, and pass it baseMaps and overlayMaps. Add the layer control to the map.
  L.control.layers(baseMaps, overlayMaps, {
    collapsed: false
  }).addTo(map);
}

function createMarkers(response) {

  // Pull the "stations" property from response.data.
  var stations = response.data.stations;

  // Initialize an array to hold bike markers.
  var bikeMarkers = [];

  // Loop through the stations array.
  for (var index = 0; index < stations.length; index++) {
    var station = stations[index];

    // For each station, create a marker, and bind a popup with the station's name.
    var bikeMarker = L.marker([station.lat, station.lon])
      .bindPopup("<h3>" + station.name + "<h3><h3>Capacity: " + station.capacity + "</h3>");

    // Add the marker to the bikeMarkers array.
    bikeMarkers.push(bikeMarker);
  }

  // Create a layer group that's made from the bike markers array, and pass it to the createMap function.
  createMap(L.layerGroup(bikeMarkers));
}


// Perform an API call to the Citi Bike API to get the station information. Call createMarkers when it completes.
d3.json("https://gbfs.citibikenyc.com/gbfs/en/station_information.json").then(createMarkers);




// // var newYorkCoords = [40.73, -74.0059];
// // var mapZoomLevel = 12;

// var myMap = L.map("map-id", {
//   center: [40.73, -74.0059],
//   zoom: 12
// });

// // Create the createMap function.


//   // Create the tile layer that will be the background of our map.
//   var street = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//     attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
// }).addTo(myMap);

//   // Create a baseMaps object to hold the lightmap layer.
//   var baseMaps = {
//     "Street Map": street,
//   };


//   // Create an overlayMaps object to hold the bikeStations layer.
//   const url = "https://gbfs.citibikenyc.com/gbfs/en/station_information.json"
//   const dataread = d3.json(url);
//   console.log(dataread);


//   d3.json(url).then(function(data){
//     let dset = data.data.stations;
//     console.log(dset)
 

//     // var marker =  L.marker(dset[i].lat) //.bindPopup("<h1>" + dset[i].name + "</h1>")
//   var latdata = []
//   var lngdata = []
//   // var name =[]

//   for (var i = 0; i < dset.length; i++) {
//      latdata.push(dset[i].lat)
//      lngdata.push(dset[i].lon)
  
//   }
//   console.log(latdata)
//   console.log(lngdata)

//   // for (var i = 0; i < dset.length; i++) {
//   //    var lonmarker =  dset[i].lon; //.bindPopup("<h1>" + dset[i].name + "</h1>");
//   //    lngdata.push(lonmarker)

//   //   // lng.push(
//   //   //   L.marker(dset[i].lon))//.bindPopup("<h1>" + dset[i].name + "</h1>")
  
//   // }


//   // for (var i = 0; i < dset.length; i++) {
//   //   // loop through the cities array, create a new marker, and push it to the cityMarkers array
//   //   lng.push(
//   //     L.marker(dset[i].lon)//.bindPopup("<h1>" + dset[i].name + "</h1>")
//   //   );
//   // }
//   //console.log(lon)
// });
//   //Create the map object with options.


//   // Create a layer control, and pass it baseMaps and overlayMaps. Add the layer control to the map.

// // Create the createMarkers function.

//   // Pull the "stations" property from response.data.

//   // Initialize an array to hold the bike markers.

//   // Loop through the stations array.
//     // For each station, create a marker, and bind a popup with the station's name.

//     // Add the marker to the bikeMarkers array.

//   // Create a layer group that's made from the bike markers array, and pass it to the createMap function.


// // Perform an API call to the Citi Bike API to get the station information. Call createMarkers when it completes.
