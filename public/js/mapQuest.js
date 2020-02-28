function initMap() {
    L.mapquest.key = "GCCGXG7OvANBHJBkHnVbgScYr0B4AlJO";

    var map = L.mapquest.map('map', {
        center: [32.879047, -117.235944],
        layers: L.mapquest.tileLayer('map'),
        zoom: 12,
        zoomControl: false
    });

    L.marker([32.879047, -117.235944]).addTo(map);
}