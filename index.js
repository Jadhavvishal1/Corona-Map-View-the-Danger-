function updatemap() 
{
    fetch("/data.json")
    .then(Response => Response.json())
    .then(rsp => {
        // console.log(rsp.data);
       rsp.data.forEach(element => {
           latitude = element.latitude;
           longitude = element.longitude;
                     cases = element.infected;
                     if (cases>255) {
                         color = "rgb(255,0,0)"
                     } 
                     else if (cases>255){
                         color = `rgb(0,0,0)`
                     }
                     else{
                         color = "rgb(100,0,0)"
                     }

             new mapboxgl.Marker({
                draggable:false,
                color: color
            }).setLngLat([longitude,latitude ])
             .addTo(map);


        });

    })
}
setInterval(updatemap,1000);
updatemap();