//Code to display google map
function initMap(){
  //find the user's ipaddress and other relavant information based on api.ipify.org and ipapi.co
    fetch('https://api.ipify.org/?format=json')
	.then(results => results.json())
	.then(data => {
        let yo = data.ip;
        $(document).ready(function yyyy() {
        $.getJSON('https://ipapi.co/' + yo + '/json/', function(data){
        console.log(data);
        //find the user's longitude and latitude based on ipapi.co's results
        let ulat = data.latitude;
        let ulng = data.longitude;
    var location = {lat: ulat, lng: ulng};
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 11,
        center: location
    });
//Code to show the user's current location referenced from google maps api
    infoWindow = new google.maps.InfoWindow();
  const locationButton = document.createElement("button");
  locationButton.textContent = "Pan to Current Location";
  locationButton.classList.add("custom-map-control-button");
  map.controls[google.maps.ControlPosition.TOP_CENTER].push(locationButton);
  locationButton.addEventListener("click", () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
          infoWindow.setPosition(pos);
          infoWindow.setContent("Current location");
          infoWindow.open(map);
          map.setCenter(pos);
        },
        () => {
          handleLocationError(true, infoWindow, map.getCenter());
        }
      );
    } else {
      // If the browser don't support Geolocation
      handleLocationError(false, infoWindow, map.getCenter());
    }
  });
});
});
    });
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(
    browserHasGeolocation
      ? "Error: The Geolocation service failed."
      : "Error: Your browser doesn't support geolocation."
  );
}
//When user scrolls down, show button
window.onscroll = function() {scrollFunction()};

function scrollFunction(){
if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("scroll_to_top").style.display = "block";
    } else {
        document.getElementById("scroll_to_top").style.display = "none";
    }
}
//When user clicks button scroll to top
function topFunction(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

