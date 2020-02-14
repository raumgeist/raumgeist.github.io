const station = 'https://ptx.transportdata.tw/MOTC/v2/Rail/TRA/Station?$format=JSON';
//const phry = 'https://raw.githubusercontent.com/kiang/pharmacies/master/json/points.json';

const  stationinfo=fetch(station)
  .then(res => res.json())
  .catch(err => console.log('error'));
  

  


//console.log(bj.StationName.En);

new deck.DeckGL({
  container: 'mapz',
  mapboxApiAccessToken: 'pk.eyJ1IjoiZ3JhbnRhYmM5OSIsImEiOiJjamhoZ2VrMGcxdDdmM2FwM3U2emkxZDBjIn0.RFRCH0jQOLFTAK7g93VM7Q',
  mapStyle: 'mapbox://styles/mapbox/light-v9',
  initialViewState: {
    longitude: 120.258778,
    latitude: 23.036276,
    zoom: 6
  },
  //controller: true
  layers: [

    //new TextLayer({
      //id: 'text',
      //data: stationinfo,
      //getPosition: d => [d.StationPosition.PositionLon, d.StationPosition.PositionLat],
      
    //}),
    new ScatterplotLayer({
      id: 'scatter',
      data :stationinfo,
      opacity: 0.8,
      filled: true,
      radiusMinPixels: 2,
      radiusMaxPixels: 1000,
      getRadius:z => (5-z.StationClass)*500,
      //getRadius: d => d.object.records.location.weatherElement.elementValue,
      getPosition: d => [d.StationPosition.PositionLon, d.StationPosition.PositionLat],
      getFillColor: [200, 0, 40, 150] 
    }),
    
   
]
});