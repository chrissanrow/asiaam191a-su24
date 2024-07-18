// Initialize the map

let initConditions = {"zoomRange" : 11, "mapCenter" : [-118.230391, 34.123918]};

const map = new maplibregl.Map({
    container: 'map', // container ID
    style: 'https://api.maptiler.com/maps/dataviz/style.json?key=vXeySBzf6ItytqFx2HrJ', // Your style URL
    center: initConditions.mapCenter, // Starting position [lng, lat]
    zoom: initConditions.zoomRange // Starting zoom level
});

function addMarker(latitude, longitude, title, message){
    new maplibregl.Marker()
    .setLngLat([longitude, latitude])
    .setPopup(new maplibregl.Popup()
    .setHTML(`<h2 class="popupTitle">${title}</h2> <h3 class="message">${message}</h3>`))
    .addTo(map);
    createButtons(latitude, longitude, title);
};

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
};

function processData(results){
    results.features.forEach(feature => {
        let coordinates = feature.geometry.coordinates;
        let longitude = coordinates[0];
        let latitude = coordinates[1];
        let title = feature.properties.title;
        let description = feature.properties.description;
        addMarker(latitude,longitude,title,description);
    });
};

map.on("load", function(){
    console.log("meow meow");
    fetch("map.geojson") 
    .then(response => {
        return response.json();
    })
    .then(response=>{
        processData(response);
    });
});