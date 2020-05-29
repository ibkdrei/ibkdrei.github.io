let startLayer = L.tileLayer.provider("Stamen.TerrainBackground");

let map = L.map("map", {
    center: [46.3, 11.504914],
    zoom: 6.5,
    layers: [
        startLayer
    ]
});

let mrk = L.marker([47.26756, 11.39076]
).addTo(map);


// let mrk = L.marker([47.26756, 11.39076] {
//     icon: L.icon({
//         iconSize: [32, 37],
//     }).addTo(map);