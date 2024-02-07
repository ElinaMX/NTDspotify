var map = L.map('mapEU').fitWorld();

// MAP

// Set highlight
function highlightFeature(e) {
    var layer = e.target;
    layer.setStyle({
        weight: 5,
        color: '#e0a6b3',
        dashArray: '',
        fillOpacity: 0.7
    });

    if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
        layer.bringToFront();
    }
}

// Reset Highlight
function resetHighlight(e) {
    layer.resetStyle(e.target);
}

// Zoom on click + popUp
function zoomToFeature(e) {
    map.fitBounds(e.target.getBounds());
}

// OnEach featur
function onEachFeature(feature, layer) {
    layer.bindPopup(function (Layer) {
        return Layer.feature.properties.ID_geom + '<br>' + '"' + Layer.feature.properties.E1903_map_rgname_lab_rec + '"';
    })
    layer.on({
        mouseover: highlightFeature,
        mouseout: resetHighlight,
        click: zoomToFeature
    });
}



// Tile Layer  
L.tileLayer("https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png",
    {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
        subdomains: "abcd",
        maxZoom: 10
    }).addTo(map);

var layer = L.geoJSON(BDG, {
    onEachFeature: onEachFeature,
    style: {
        fillOpacity: 0.3,
        color: '#7db5c6',
        weight: 2
    }
})

layer.addTo(map).fitBounds(BDG);

// fit map to geom bounds  
map.fitBounds(layer.getBounds(), { maxZoom: 9 });