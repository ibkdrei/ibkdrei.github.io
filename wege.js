let overlay = {
    etappen: L.featureGroup()
};

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
    });
    
    gpx.on("loaded", function(evt) {
        map.fitBounds(evt.target.getBounds());
    }).addTo(overlay.etappen);
    overlay.etappen.addTo(map);

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

let pulldown = document.querySelector("#pulldown");
//console.log(pulldown);

for (let i = 1; i < ETAPPEN.length; i++) {
    const etappe = ETAPPEN[i];
    //console.log(etappe);
    pulldown.innerHTML += `<option value="${i}">${etappe.titel}</option>`;
}
pulldown.onchange = function(evt) {
    let nr = evt.target.options[evt.target.options.selectedIndex].value;
    //console.log(nr);
    drawEtappe(Nummer);
};