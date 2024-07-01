// Initialize the map
const map = new maplibregl.Map({
    container: 'map', // container ID
    style: 'https://api.maptiler.com/maps/dataviz/style.json?key=vXeySBzf6ItytqFx2HrJ', // Your style URL
    center: [-118.166164, 34.06415], // Starting position [lng, lat]
    zoom: 10 // Starting zoom level
});

// Add a marker to the map
const LTmarker = new maplibregl.Marker()
    .setLngLat([-118.241172, 34.049477])
    .setPopup(new maplibregl.Popup({ offset: 25 }) // Add popups
        .setHTML('<div class="popup-wrapper">Little Tokyo! Went here almost every week in my senior year of high school.</div>'))
    .addTo(map);

const SGmarker = new maplibregl.Marker()
    .setLngLat([-118.091156, 34.078823])
    .setPopup(new maplibregl.Popup({ offset: 25 }) // Add popups
        .setHTML('<div class="popup-wrapper">Alahambra/San Gabriel! Family always took me to the supermarkets and to get food here.</div>'))
    .addTo(map);