var weather;
let weatherArray = [];

//Code to display google map
function initMap(){
  //find the user's ipaddress and other relavant information based on api.ipify.org and ipapi.co
  //Can't use on internet explorer since IE doesn't support fetch
    fetch('https://api.ipify.org/?format=json')
	.then(results => results.json())
	.then(data => {
        let yo = data.ip;
        $("#puserIp").append("Ipv4 Address: " + yo);
        $(document).ready(function yyyy() {
        $.getJSON('https://ipapi.co/' + yo + '/json/', function(data){
        console.log(data);
        let userCity = data.city;
        $("#puserCity").append("City: " + userCity);
        let userCountry = data.country_name;
        $("#puserCountry").append("Country: " + userCountry);
        let userPostalSector = data.postal;
        $("#puserPostalSector").append("Postal sector: " + userPostalSector);
        let userInEu = data.in_eu;
        $("#puserInEu").append("In European Union: " + userInEu);
        let uulat = data.latitude;
        let uulng = data.longitude;
        $("#puserLatLng").append("Latitude | Longitude: " + uulat + " | " + uulng);
        let userTimeZone = data.timezone;
        let userUtc = data.utc_offset
        $("#puserTimeZone").append("Time Zone: " + userTimeZone + " (" + userUtc + ")");
        let userCallCode = data.country_calling_code;
        $("#puserCallCode").append("Call Code: " + userCallCode);
        let userCurrency = data.currency;
        let userCurrencyName = data.currency_name;
        $("#puserCurrency").append("Currency: " + userCurrency + " " + userCurrencyName);
        let userAsn = data.asn;
        $("#puserAsn").append("ASN: " + userAsn);
        let userOrg = data.org;
        $("#puserOrg").append("Org: " + userOrg);
        //find the user's longitude and latitude based on ipapi.co's results
        let ulat = data.latitude;
        let ulng = data.longitude;
        let ucity = data.city;
    var location = {lat: ulat, lng: ulng};
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 11,
        center: location
    });
    $.getJSON('http://api.openweathermap.org/data/2.5/weather?q=' + ucity + '&appid=79677ee76990c3958964c9f0f54a6040&units=metric', openWeatherdata)
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
//Changes the background color depending if the current temperature is under 25 degrees or over 32 degrees celcius
function openWeatherdata(data){
  weather = data;
  console.log(weather);
  if (weather.main.temp < 25){
      document.body.style.backgroundColor = '#36e2f5';
      document.getElementById("scroll_to_top").style.backgroundColor = '#007c92';
  }
  else if (weather.main.temp > 32){
      document.body.style.backgroundColor = '#f53636';
      document.getElementById("scroll_to_top").style.backgroundColor = '#920000';
  }
}