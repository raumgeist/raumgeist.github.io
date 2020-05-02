

const bustnnurl ='https://ptx.transportdata.tw/MOTC/v2/Bus/RealTimeByFrequency/City/Tainan?$format=JSON';
const stationurl= 'https://ptx.transportdata.tw/MOTC/v2/Bus/Station/City/Tainan?$format=JSON';


var  bustnn=fetch(bustnnurl)
.then(res => res.json())
.catch(err =>console.log('error'));
var  stationtnn=fetch(stationurl)
.then(res => res.json())
.catch(err =>console.log('error'));

var myVar;

function myFunction() {
  myVar = setTimeout(alertFunc, 30);
}

function alertFunc() {
  alert("Hello!");
}




const deckgl = new DeckGL({
  container: 'mapz',
  mapboxApiAccessToken:'pk.eyJ1IjoiZ3JhbnRhYmM5OSIsImEiOiJjamhoZ2VrMGcxdDdmM2FwM3U2emkxZDBjIn0.RFRCH0jQOLFTAK7g93VM7Q',
  mapStyle: 'mapbox://styles/mapbox/dark-v10',
  initialViewState: {
    longitude: 120.211331,
    latitude: 22.996827,
    zoom: 14,
    controller: true
  },
  
  layers: [

    new ScatterplotLayer({
      id: 'scattertnn',
      pickable:true,
      onHover: ({object, x, y}) => {
        const el = document.getElementById('tooltip');
        if (object) {
          let businfo=object.SubRouteName.Zh_tw;
          el.innerHTML = `<h1>線路：${businfo}</h1>`
          el.style.display = 'block';
          el.style.opacity = 0.9;
          el.style.size = 10;
          el.style.left = x + 'px';
          el.style.top = y + 'px';
        } else {
          el.style.opacity = 0.0;
        }
    },
      data :bustnn,
      opacity: 0.8,
      filled: true,
      radiusMinPixels: 2,
      radiusMaxPixels: 500,
      getRadius: 10,
      //getRadius: d => d.object.records.location.weatherElement.elementValue,
      getPosition: d => [d.BusPosition.PositionLon, d.BusPosition.PositionLat],
      getFillColor: [82, 204, 155, 150] 
    }),
    new ScatterplotLayer({
      id: 'stationtnn',
      pickable:true,
      onHover: ({object, x, y}) => {
        const el = document.getElementById('tooltip');
        if (object) {
          const k=object.Stops.length
          let stopinfo=object.StationName.Zh_tw;
          let routeinfo= object.Stops[0].RouteName.Zh_tw;
       
          el.innerHTML = `<h1>站名：${stopinfo} 行經路線數目：${k}</h1>`
          el.style.display = 'block';
          el.style.opacity = 0.9;
          el.style.size = 10;
          el.style.left = x + 'px';
          el.style.top = y + 'px';
        } else {
          el.style.opacity = 0.0;
        }
    },
      data :stationtnn,
      opacity: 0.8,
      filled: true,
      radiusMinPixels: 2,
      radiusMaxPixels: 500,
      getRadius: 10,
      //getRadius: d => d.object.records.location.weatherElement.elementValue,
      getPosition: d => [d.StationPosition.PositionLon, d.StationPosition.PositionLat],
      getFillColor: [0, 0, 0, 150] 
    }),
]
});

      // Create radio buttons



