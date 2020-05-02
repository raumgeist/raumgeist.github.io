const stationurl = 'https://ptx.transportdata.tw/MOTC/v2/Bike/Station/Tainan?$format=JSON';
const amounturl = 'https://ptx.transportdata.tw/MOTC/v2/Bike/Availability/Tainan?$format=JSON';
const busurl ='https://ptx.transportdata.tw/MOTC/v2/Bus/RealTimeByFrequency/Streaming/City/Hsinchu?$format=JSON';


const  stationxx=fetch(stationurl,{method:'GET'})
  .then(res => res.json())
  .then(result => {
      let stationid =result[0].StationUID;
      let stationname =result[0].StationName.Zh_tw;
      console.log(`${stationid}的站名為 ${stationname}`); 
  })
  .catch(err =>console.log('有錯誤'));
 
  
const  amountdata=fetch(amounturl)
  .then(res => res.json())
  .catch(err => console.log('error'));
const  stationinfo=fetch(stationurl)
  .then(res => res.json())
  .catch(err =>console.log('error'));
const  text= JSON.stringify(amountdata);

const  bus=fetch(busurl)
  .then(res => res.json())
  .catch(err =>console.log('error'));


  console.log(amountdata);  
  console.log(text);  



  function join(lookupTable,mainTable,lookupKey,mainKey, select){
    var l = lookupTable.length,
        m = mainTable.length,
        lookupIndex = [],
        output = [];
    for (var i=0;i<l;i++){
        var row = lookupTable[i];
        lookupIndex[row[lookupKey]] = row;
    }
    for (var j=0;j<m;j++){
      var y = mainTable[j];
      var x = lookupIndex[y[mainKey]];
      output.push(select(y,x))
    }
    return output;
}

var merge = join(amountdata,stationinfo,"StationUID","StationUID",function(sta,amou){
    return{
      Stationuid:sta.StationUID,
      StationName:sta.StationName.Zh_tw,
      StationPosition:sta.StationPosition,
      Capacity:sta.BikesCapacity,
      AvailableRentBikes:amou.AvailableRentBikes,
      AvailableReturnBikes:amou.AvailableReturnBikes
    };
});

console.log(merge);


new deck.DeckGL({
  container: 'mapz',
  mapboxApiAccessToken:'pk.eyJ1IjoiZ3JhbnRhYmM5OSIsImEiOiJjamhoZ2VrMGcxdDdmM2FwM3U2emkxZDBjIn0.RFRCH0jQOLFTAK7g93VM7Q',
  mapStyle: 'mapbox://styles/mapbox/light-v9',
  initialViewState: {
    longitude:  120.972570,
    latitude: 24.805384,
    zoom: 13
  },
  //controller: true
  layers: [

    new TextLayer({
      id: 'text',
      data: bus,
      getText: d => d.RouteName.En,
      getPosition: d => [d.BusPosition.PositionLon, d.BusPosition.PositionLat],
      getSize: 30,
    }),
    new ScatterplotLayer({
      id: 'scatter',
      data :bus,
      opacity: 0.8,
      filled: true,
      radiusMinPixels: 2,
      radiusMaxPixels: 500,
      getRadius: 10,
      //getRadius: d => d.object.records.location.weatherElement.elementValue,
      getPosition: d => [d.BusPosition.PositionLon, d.BusPosition.PositionLat],
      getFillColor: [200, 0, 40, 150] 
    }),
    
   
]
});