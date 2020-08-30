
const deckgl = new DeckGL({
    mapboxApiAccessToken: 'pk.eyJ1IjoiZ3JhbnRhYmM5OSIsImEiOiJjamhoZ2VrMGcxdDdmM2FwM3U2emkxZDBjIn0.RFRCH0jQOLFTAK7g93VM7Q',
    mapStyle: 'mapbox://styles/mapbox/light-v9',
    initialViewState: {
      longitude: -122.45,
      latitude: 37.8,
      zoom: 15
    },
    controller: true,
    views:[
        new View({
            id: 'map1',
            width: '50%',
            controller: true,
            mapStyle: 'mapbox://styles/mapbox/dark-v10',

        }),
        new View({
            id: 'map2',
            x:'50%',
            width: '50%',
            controller: true,
            mapStyle: 'mapbox://styles/mapbox/light-v10',
        })
    ]
    /*
    views: new MapView(),
    controller: true,
    initialViewState: {
        longitude: 120.211331,
        latitude: 22.996827,
        zoom: 14,
        controller: true
      },
    layers: [
    
]
*/
});

      // Create radio buttons


