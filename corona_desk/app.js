console.log("Corona Status is Loded");
function updateMap() {
    fetch("/data.json")
    .then(response => response.json())
    .then(rsp => {
        console.log(rsp);
        rsp.data.forEach(element => {
            latitude = element.latitude;
            longitude = element.longitude;
            cases = element.infected;
            if (cases > 255) {
                color = "rgb(255,0,0)";
            }
            else {
                color = `rgb${cases},0,0`;
            }
            //mark on the map
            new mapboxgl.Marker({
                draggable: false,
                color:color,
                hover:"hello"
            }).setLngLat([longitude, latitude])
                .addTo(map);
        });
    })
}
// let interval=2000;
// setInterval(updateMap,interval);
updateMap();