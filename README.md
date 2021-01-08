# SurrPull (Surroundings Puller)
A webpage to check the user's surroundings like temperature, latitude etc including their current location based on their ip adress location.

## Design process

This website is specifically targetted for people that want to know their surrounding information, like their ipv4 address, temperature, latitude, longitude without having to scour the web for different websites each targetted for a certain purpose. This website will help make it more convenient and more straightforward. It even includes a map that shows the user their actual surroundings and a semi-smart background that changes depending on certain conditions.

## Features

- A google maps api so that the user can tell their current location with the map and a button to make it so that they can see the exact location, more zoomed in and have a marker indicate their exact area.

- A scroll to top button so the user do not need to scroll up everytime. It is also not visible until a certain distance has been scrolled down and when hovered upon, it will turn a lighter shade of green to indicate that it is indeed clickable.

- Uses the ipify api to track the user's current ipv4 address

- Uses the data pulled from ipify to use the ipapi api to get more relavant information such as latitude and lonitude of the user's location which will then be inputted into the google maps api so that it can center on the user's location.

- Background will change colour depending on the user's surrounding temperature. If let's say the temperature is below 25 degrees (Celcius) the colour of the background will change from the original green to then light blue. With the opposite changing the colour to a non-blinding red. This also changes the colour of the move to top button in the bottom right corner.

- A flag in the tex-box containing the user's current country. Showing the Singaporean flag if the user currently resides in Singapore while using the device.

- A message box at the top of the webpage, just below the banner that changes depending on the user's surrounding weather conditions.

- A favicon

## Features left to implement

- ~~More data about the user's location such as temperature~~

- ~~Colours of the background will change from green to red if the user's location is hotter than a certain temperature and blue if it's cooler than a certain predetermined temperature.~~

- ~~General final design~~

- ~~Message box~~

- ~~A footer~~

- ~~A favicon~~

## Important notes

- Because the code uses Fetch, it is not possible to use this website on Internet Explorer as they do not support Fetching.

- All temperature units are following Celcius as a standard.

- Metric is the standard used for the calculations of lengths, distance etc.

## Tools used

- [JQuery] (https://jquery.com)
    - The project uses JQuery
   
- [ipapi] (https://ipapi.co/)
    - The project uses ipapi api

- [ipify] (https://www.ipify.org/)
    - The project uses ipify
    
- [Maps-Javascript-Api] (https://developers.google.com/maps/documentation/javascript/overview)
    - The project uses Maps Javascript Api developed by Google
 
- [Javascript] (https://www.javascript.com/)
    - The project uses Javascript

- [Photoshop] (https://www.adobe.com/products/photoshop.html)
    - Photoshop was used for the banner art

- [Countryflags.io] (https://www.countryflags.io/)
    - The project uses Countryflags.io

- [favicon-generator] (https://www.favicon.cc/)
    - The project uses favicon generator to create the favicon used

- [Visual-studio-code] (https://code.visualstudio.com/)
    - The project uses VIsual studio code to write the codes used

## Testing done

- Tested that the different temperatures does indeed change parts of the webpage when it crosses a certain temperature, showing different background colours and texts.

- When using a VPN connecting to Japan and Korea, the information showed is accurate and does not show my actual location but instead, the location of where the VPN is situated.
    
## Credits
- To the people who made the relavant tools above

- The part to find the user's current location and mark it was based on the free access code given by Maps Javascript API by Google.

## Inspired By
- This website was inspired by the ipapi website and their services. I liked their services but I found it to be a little too limiting for the user, so I decided to improve upon their current available services.
