mapboxgl.accessToken = 'pk.eyJ1IjoiY2d1dGgiLCJhIjoiY2syZGVpbzFkMDJpeDNibGtuNnhucDJnMiJ9.YbgYZkJ7Wcb_6wp6GvupHA';
var mapbox = new mapboxgl.Map({
    container: 'mapbox',
    style: 'mapbox://styles/cguth/ck3zypy3p4rqq1ck0xkyfhwt0',
    center: [ 11.5, 47.25],
    zoom: 12
});

let overlay = {
    etappen: L.featureGroup()
};

L.control.layers({
    "Etappen": overlay.etappen
}).addTo(mapbox);


let drawEtappe = function(Nummer) {
    overlay.etappen.clearLayers();
    
    let track = ETAPPEN[Nummer];
    console.log(track)
    
    let gpx = new L.GPX(`gpx/MM/Tour${track}.gpx`, {
        async: true,
        marker_options: {
            startIconUrl: `icons/number_${Nummer}.png`,
            endIconUrl: "icons/finish.png",
            shadowUrl: null,
            iconSize: [32, 37],
            iconAnchor: [16, 37],
            popupAnchor: [0, -37]
        },
        polyline_options: {
            color: "black",
            dashArray: [2, 5]
        }
    }).addTo(mapbox),
    
    gpx.on("loaded", function(evt) {
        mapbox.fitBounds(evt.target.getBounds());
    }).addTo(overlay.etappen);
    overlay.etappen.addTo(mapbox);

    for (const key in ETAPPEN[Nummer]) {
        let val = ETAPPEN[Nummer][key];
        
        let track = document.querySelector(`#et-${key}`)
        if (key === "track") {
            track.href = `gpx/MM/Tour${ETAPPEN[Nummer][key]}.gpx`;
        }
        let elem = document.querySelector(`#et-${key}`);
        if (elem) {
            elem.innerHTML = val;
            console.log(val);
        }
    }
};
drawEtappe(1);