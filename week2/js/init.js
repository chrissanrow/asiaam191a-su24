// Initialize the map
const map = new maplibregl.Map({
    container: 'map', // container ID
    style: 'https://api.maptiler.com/maps/dataviz/style.json?key=vXeySBzf6ItytqFx2HrJ', // Your style URL
    center: [-118.230391, 34.123918], // Starting position [lng, lat]
    zoom: 11 // Starting zoom level
});

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

function addMarker(latitude, longitude, title, message){
    new maplibregl.Marker()
        .setLngLat([longitude, latitude])
        .setPopup(new maplibregl.Popup()
            .setHTML(`<h2 id="popupTitle">${title}</h2> <h3>${message}</h3>`))
        .addTo(map);
    createButtons(latitude, longitude, title);
};

addMarker(34.168554, -118.345553, "Burbank", "Raised here, Magnolia Boulevard is the go-to shopping spot");
addMarker(34.049477, -118.241172, "Little Tokyo", "Went here almost every week in my senior year of high school.");
addMarker(34.078823, -118.091156, "Alahambra/San Gabriel", "Family always took me to the supermarkets and to get food here.");