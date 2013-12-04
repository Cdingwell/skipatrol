HOW TO BUILD THE TEMPLATES:

first change direcories to this project, mac users:

handlebars templates/*.handlebars -f ./js/templates.js

windows users:

handlebars templates -f js/templates.js

HOW TO BUILD MOBILE VERSION:

(install phonegap binary first)

1. copy contents of master/www into /master/mobile_src/www
2. CD to /master/mobile_src
3. run "phonegap run android"
4. OR "phonegap run ios"
5. ENJOY :D

(for testing it's much easier to just go to the website on your mobile device, it will simulate running the app as an app!)