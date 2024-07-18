// declare variables
let mapOptions = {'centerLngLat': [-118.444,34.0709],'startingZoomLevel':5}

const map = new maplibregl.Map({
    container: 'map', // container ID
    style: 'https://api.maptiler.com/maps/streets-v2-light/style.json?key=wsyYBQjqRwKnNsZrtci1', // Your style URL
    center: mapOptions.centerLngLat, // Starting position [lng, lat]
    zoom: mapOptions.startingZoomLevel // Starting zoom level
});

function addMarker(feature){
    let longitude = feature.lng;
    let latitude = feature.lat;
    let title = feature['Have you been vaccinated and are you below the age of 21?'];
    title = "Yes" ? "Vaccinated" : "Not Vaccinated";
    let message = feature['What is your home zip code?'];

    let popup_message = `<h2>${title}</h2> <h3>${message}</h3>`
    new maplibregl.Marker()
        .setLngLat([longitude, latitude])
        .setPopup(new maplibregl.Popup()
            .setHTML(popup_message))
        .addTo(map)
    createButtons(latitude,longitude,title);
    return message
}

function createButtons(lat,lng,title){
    const newButton = document.createElement("button");
    newButton.id = "button"+title;
    newButton.innerHTML = title;
    newButton.setAttribute("lat",lat);
    newButton.setAttribute("lng",lng);
    newButton.addEventListener('click', function(){
        map.flyTo({
            center: [lng,lat],
        })
    })
    document.getElementById("contents").appendChild(newButton);
}

const dataUrl = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSVtqxGcjG5IwtTCppJyF3ZvHocqESHTP_u9Yw34PAXa4ECUxcY4yYQGBQJyLgCDPfx41A1ayFQj873/pub?output=csv";

map.on('load', function() {
    Papa.parse(dataUrl, {
        download: true,
        header: true,
        complete: results =>{
            processData(results.data);
        }
    });
});

function processData(results){
    console.log(results) //for debugging: this can help us see if the results are what we want
    results.forEach(feature => {
        console.log(feature);
        // assumes your geojson has a "title" and "message" attribute
        // let coordinates = feature.geometry.coordinates;
        let longitude = feature.lng;
        let latitude = feature.lat;
        let title = feature['Have you been vaccinated and are you below the age of 21?'];
        let message = feature['What is your home zip code?'];
        addMarker(feature);
    });
};