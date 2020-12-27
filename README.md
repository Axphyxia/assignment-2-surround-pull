# Surrounding Checker
A webpage to check the user's surroundings like temperature, latitude etc including their current location based on their ip adress location.

## Design process

This website is specifically targetted for people that want to know their surrounding information, like their ipv4 address, temperature, latitude, longitude without having to scour the web for different websites each targetted for a certain purpose. This website will help make it more convenient and more straightforward.

## Features

- A google maps api so that the user can tell their current location with the map and a button to make it so that they can see the exact location, more zoomed in and have a marker indicate their exact area.

- A scroll to top button so the user do not need to scroll up everytime. It is also not visible until a certain distance has been scrolled down and when hovered upon, it will turn a lighter shade of green to indicate that it is indeed clickable.

- Uses the ipify api to track the user's current ipv4 address

- Uses the data pulled from ipify to use the ipapi api to get more relavant information such as latitude and lonitude of the user's location which will then be inputted into the google maps api so that it can center on the user's location.

## Features left to implement

- More data about the user's location such as temperature

- Colours of the background will change from green to red if the user's location is hotter than a certain temperature and blue if it's cooler than a certain predetermined temperature.

- General final design

- [JQuery] (https://jquery.com)
    - The project uses JQuery
   
- [ipapi] (https://ipapi.co/)
    - The project uses ipapi api

- [ipify] (https://www.ipify.org/)
    - The project uses ipify
    
- [Maps Javascript Api] (https://developers.google.com/maps/documentation/javascript/overview)
    - The project uses Maps Javascript Api
 
- [Javascript] (https://www.javascript.com/)
    - The project uses Javascript
    
## Credits
- To the people who made the relavant tools above

- The part to find the user's current location and mark it was based of the free access code given by Maps Javascript API by Google.
