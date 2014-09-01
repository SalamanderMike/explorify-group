var coordinates = [[37.2,-122.2],[37.3,-121.8],[37.5,-122.1]];


function initialize(){
  // var to define boundary of all coordinates
  var mapOptions = { mapTypeId: google.maps.MapTypeId.TERRAIN };
  var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
  var bounds = new google.maps.LatLngBounds();
  addMarkers(bounds, map);
  map.fitBounds(bounds); // set center and zoom level
}

function addMarkers(bounds, map){
  for (var i = 0, travelPoints = []; i < coordinates.length; i++){
    var mapBoundary = new google.maps.LatLng(coordinates[i][0], coordinates[i][1]);
    travelPoints.push(new google.maps.LatLng(coordinates[i][0], coordinates[i][1]));

    var iterate = 0;
    setTimeout(function(){
      new google.maps.Marker({
        position: travelPoints[iterate],
        map: map,
        draggable: false,
        animation: google.maps.Animation.DROP
      });
      iterate++;
    }, i * 800);

    bounds.extend(mapBoundary); // zoom boundary
  }
}


// Creates javascript tags and calls initialize function
function loadScript() {
  var script = document.createElement('script');
  var KEY = 'AIzaSyAxM-N66aK2aCq0yhxQrJJZMh-XYcEauUk&';
  script.src = 'https://maps.googleapis.com/maps/api/js?key=' + KEY + 'callback=initialize';
  document.body.appendChild(script);
}

window.onload = loadScript;


    // var marker = new google.maps.Marker({
    //   position: travelPoint,
    //   map: map,
    //   animation: google.maps.Animation.DROP,
    //   title:"Travel Point Test"
    // });