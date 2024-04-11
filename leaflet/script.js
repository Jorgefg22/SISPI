let map = L.map('map').setView([-17.403868804926827, -66.03924367573562], 13)

//Agregar tilelAyer mapa base desde openstreetmap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">Jorge Fernandez Gonzales</a> contributors'
}).addTo(map);


fetch('./file.geojson')
  .then(response => response.json())
  .then(data => {
    L.geoJSON(data, {

      onEachFeature: function (feature, layer) {
        if (feature.properties && feature.properties.id && feature.properties.distrito) {

       

          layer.bindPopup('<div> <img src="adt.png"  width="300px" alt=""></div><div> <h6>Gobierno Autonomo Municipal de Sacaba</h6><p >Distrito: ' + feature.properties.distrito + '</p><p>Grilla numero: ' + feature.properties.numero + '</p></div><div style="text-align: center;"><a href="./ORTOMOSAICO2023/ECW_D' + feature.properties.distrito + '/' + feature.properties.numero + '.ecw" download="' + feature.properties.numero + '.ecw" class="btn btn-primary text-white btn-sm" role="button">Ortomosaico 2D</a> <a href="../' + feature.properties.numero + '.html" class="btn btn-warning btn-sm" role="button">Nube de Puntos 3D</a> </div>');


        }
      }
    }).addTo(map);

  });
