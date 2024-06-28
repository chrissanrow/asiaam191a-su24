// Initialize the map
const map = new maplibregl.Map({
    container: 'map', // container ID
    style: 'https://api.maptiler.com/maps/streets/style.json?key=get_your_own_OpIi9ZULNHzrESv6T2vL', // Your style URL
    center: [-118.166164, 34.06415], // Starting position [lng, lat]
    zoom: 10 // Starting zoom level
});

// Add a marker to the map
new maplibregl.Marker()
    .setLngLat([-118.241172, 34.049477])
    .setPopup(new maplibregl.Popup({ offset: 25 }) // Add popups
        .setHTML('Little Tokyo! Went here almost every week in my senior year of high school.'))
    .addTo(map);

new maplibregl.Marker()
    .setLngLat([-118.091156, 34.078823])
    .setPopup(new maplibregl.Popup({ offset: 25 }) // Add popups
        .setHTML('Alahambra/San Gabriel! Family always took me to the supermarkets and to get food here.'))
    .addTo(map);