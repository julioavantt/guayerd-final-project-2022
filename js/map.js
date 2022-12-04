if (!localStorage.getItem("logged")) window.location.href = "index.html";

let center = [25.2841478, 51.4419568];

let map = L.map("map").setView(center, 13);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
}).addTo(map);

let icon = L.icon({
  iconUrl: "img/marker.png",
  iconSize: [32, 32],
  iconAnchor: [9, 44],
  popupAnchor: [8, -41],
});

let marker = L.marker(center, { icon }).addTo(map);

marker.bindPopup("Mundial Qatar 2022").openPopup();

const objetoMapa = [
  {
    jugador: "Qatar 2022",
    coordenada: [25.2841478, 51.4419568],
    ciudad: "World Cup",
  },
  {
    jugador: "Messi",
    coordenada: [-32.9520457, -60.766679],
    ciudad: "Rosario",
  },
  {
    jugador: "Di María",
    coordenada: [-32.9520457, -60.766679],
    ciudad: "Rosario",
  },
  {
    jugador: "Otamendi",
    coordenada: [-34.4718607, -58.6715832],
    ciudad: "El Talar",
  },
  {
    jugador: "Julián Álvarez",
    coordenada: [-31.6679028, -63.2032357],
    ciudad: "Calchín",
  },
  {
    jugador: "Dibu Martínez",
    coordenada: [-38.0174106, -57.6705734],
    ciudad: "Mar del Plata",
  },
];

let select = document.querySelector("select");

let options = objetoMapa.map((objeto) => `<option>${objeto.jugador}</option>`);

select.innerHTML = options.join().replaceAll(",", "");

function changeMap() {
  const objeto = objetoMapa.find((item) => item.jugador === select.value);
  map.setView(new L.LatLng(...objeto.coordenada), 11);
  marker = L.marker(objeto.coordenada, { icon }).addTo(map);
  marker.bindPopup(`<b>${objeto.jugador}</b><br>${objeto.ciudad}`).openPopup();
}

const cerrarSesion = () => {
  localStorage.removeItem("loggedIn");
  window.location.href = "index.html";
};
