// Initialize the map
// const map = L.map('map',{zoom: 4.8}).setView([23.2599, 77.4126]);
// map.setMinZoom(4.9);
// map.setMaxZoom(4.9);

// const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
// const attribution = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>';
// const tileLayer = L.tileLayer(tileUrl, { attribution });
// tileLayer.addTo(map);

// L.geoJSON(india_geo, {style: {fillColor: '#000080', fillOpacity: 1, opacity: 1}}).addTo(map);

// var values = city_data;
// var random_city = values[parseInt(Math.random() * values.length)]
// var random_city_lat = random_city.lat;
// var random_city_lng = random_city.lng;
// var random_city_name = random_city.city;
// var random_city_state = random_city.admin_name;
// console.log(random_city_name, random_city_state);

// document.getElementById("city_state").innerHTML = String(random_city_name + ',  ' + random_city_state);

// var correct_marker, guessed_marker;
// var history_data = [];
// var points = 0;
// var click_count=0;

// function addMarker(e){
//          click_count += 1;
//          console.log(click_count);

//         if (click_count<6){
               
//                  guessed_marker = L.marker(e.latlng);
//                  guessed_marker.addTo(map);
//                  guessed_marker_lat = e.latlng.lat;
//                  guessed_marker_lng = e.latlng.lng;
                
                
//                  var custom_marker = L.icon({
//                          iconUrl: 'Marker-2.webp',
//                          iconSize : [36,40],
//                          iconAnchor: [19,38]
        
//                  })
        
//                 correct_marker = L.marker([random_city_lat, random_city_lng],{icon: custom_marker});
//                 correct_marker.addTo(map);
//                 correct_marker_lat = random_city_lat;
//                 correct_marker_lng = random_city_lng;
                                
//                 var distance = Math.round(getDistance([guessed_marker_lat, guessed_marker_lng],[correct_marker_lat, correct_marker_lng])/1000); //converting to kilometers
//                 console.log(distance);

//                 points = total_points (distance, points);
//                 console.log(points);

//                 history_data.push(
//                         {
//                         'city': random_city_name,
//                         'state':random_city_state,
//                         'distance':distance
//                         }
//                 )
//                 console.log(history_data.length, history_data);

//                 if (click_count<5){
//                random_city = values[parseInt(Math.random() * values.length)]
//                random_city_lat = random_city.lat;
//                random_city_lng = random_city.lng;
//                random_city_name = random_city.city;
//                random_city_state = random_city.admin_name;
//                console.log(random_city.city, random_city.admin_name);
//                 document.getElementById("city_state").innerHTML = String(random_city_name + ',  ' + random_city_state);
//                 document.getElementById("city_state").style.display = 'block';

//                 }

//                 else {
//                         document.getElementById("text").style.display = 'none';
//                         document.getElementById("info").style.display = 'none';
//                         document.getElementById("view_score").style.display = 'block';
                        
//                 }
              
                
//         } 
        

//         if (click_count>5 && click_count<7) {

//                 var distances = []
//                 for (var i=0; i<5; i++){
//                         distances.push(history_data[i].distance);
//                 }
//                 min_distance = Math.min.apply(Math,distances);
//                 index = distances.indexOf(min_distance);

//                 console.log(history_data[index].city, history_data[index].state, history_data[index].distance);
//                 document.getElementById("view_score").style.display = 'none';
//                 document.getElementById("point_system").style.display = 'block';
//                 document.getElementById("total_points").innerHTML = String('Total Points: '+points);
//                 document.getElementById("guess").innerHTML = String('Closest Guess: ' + history_data[index].city + ', ' + history_data[index].state + ' ('+history_data[index].distance+'km)');
//                 document.getElementById("restart").style.display = 'block';
                
//         }

//         if (click_count>6){
//             document.getElementById("restart").onclick = location.reload();
//         }
        
        
//        }


// map.on('click', addMarker);


// function getDistance(origin, destination) {
//         // return distance in meters
//         var lon1 = toRadian(origin[1]),
//             lat1 = toRadian(origin[0]),
//             lon2 = toRadian(destination[1]),
//             lat2 = toRadian(destination[0]);
    
//         var deltaLat = lat2 - lat1;
//         var deltaLon = lon2 - lon1;
    
//         var a = Math.pow(Math.sin(deltaLat/2), 2) + Math.cos(lat1) * Math.cos(lat2) * Math.pow(Math.sin(deltaLon/2), 2);
//         var c = 2 * Math.asin(Math.sqrt(a));
//         var EARTH_RADIUS = 6371;
//         return c * EARTH_RADIUS * 1000;
//     }

// function toRadian(degree) {
//         return degree*Math.PI/180;
//     }


// function total_points(distance, points){
//     console.log('I worked');
//     console.log(distance, points);
//     if (0< distance && distance < 20){
//         points += 200;
//     }
//     else if (21< distance && distance< 50){
//         points += 150;
//     }
//     else if (51< distance && distance<200){
//         points += 100;
//     }
//     else if (201 < distance && distance< 400){
//         points += 50;
//     } else {
//         points += 0;
//     }
//     return points;
// }
