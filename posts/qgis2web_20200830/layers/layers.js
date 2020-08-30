var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}'
            })
        });

    var projection__1 = ol.proj.get('EPSG:3857');
    var projectionExtent__1 = projection__1.getExtent();
    var size__1 = ol.extent.getWidth(projectionExtent__1) / 256;
    var resolutions__1 = new Array(14);
    var matrixIds__1 = new Array(14);
    for (var z = 0; z < 14; ++z) {
        // generate resolutions and matrixIds arrays for this WMTS
        resolutions__1[z] = size__1 / Math.pow(2, z);
        matrixIds__1[z] = z;
    }
    var lyr__1 = new ol.layer.Tile({
                            source: new ol.source.WMTS(({
                              url: "https://wmts.nlsc.gov.tw/wmts",
    attributions: ' ',
                                "layer": "PHOTO2",
                                "TILED": "true",
             matrixSet: 'EPSG:3857',
             format: 'image/jpeg',
              projection: projection__1,
              tileGrid: new ol.tilegrid.WMTS({
                origin: ol.extent.getTopLeft(projectionExtent__1),
                resolutions: resolutions__1,
                matrixIds: matrixIds__1
              }),
              style: 'default',
              wrapX: true,
                                "VERSION": "1.0.0",
                            })),
                            title: "正射影像圖(通用)",
                            opacity: 1.0,
                            
                            
                          });
var format__2 = new ol.format.GeoJSON();
var features__2 = format__2.readFeatures(json__2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__2.addFeatures(features__2);
var lyr__2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__2, 
                style: style__2,
                interactive: true,
                title: '<img src="styles/legend/_2.png" /> 研究用網格'
            });
var format__3 = new ol.format.GeoJSON();
var features__3 = format__3.readFeatures(json__3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__3.addFeatures(features__3);
var lyr__3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__3, 
                style: style__3,
                interactive: true,
    title: '都計區距離<br />\
    <img src="styles/legend/_3_0.png" /> 0 - 0<br />\
    <img src="styles/legend/_3_1.png" /> 0 - 90<br />\
    <img src="styles/legend/_3_2.png" /> 90 - 961<br />\
    <img src="styles/legend/_3_3.png" /> 961 - 1893<br />\
    <img src="styles/legend/_3_4.png" /> 1893 - 3134<br />\
    <img src="styles/legend/_3_5.png" /> 3134 - 5470<br />\
    <img src="styles/legend/_3_6.png" /> 5470 - 15099<br />'
        });
var format__4 = new ol.format.GeoJSON();
var features__4 = format__4.readFeatures(json__4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__4.addFeatures(features__4);
var lyr__4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__4, 
                style: style__4,
                interactive: true,
                title: '<img src="styles/legend/_4.png" /> 都市計畫區'
            });
var format__5 = new ol.format.GeoJSON();
var features__5 = format__5.readFeatures(json__5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__5.addFeatures(features__5);
var lyr__5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__5, 
                style: style__5,
                interactive: true,
    title: '工業區距離<br />\
    <img src="styles/legend/_5_0.png" /> 0 - 1422<br />\
    <img src="styles/legend/_5_1.png" /> 1422 - 2217<br />\
    <img src="styles/legend/_5_2.png" /> 2217 - 3073<br />\
    <img src="styles/legend/_5_3.png" /> 3073 - 4058<br />\
    <img src="styles/legend/_5_4.png" /> 4058 - 5347<br />\
    <img src="styles/legend/_5_5.png" /> 5347 - 6983<br />\
    <img src="styles/legend/_5_6.png" /> 6983 - 9162<br />\
    <img src="styles/legend/_5_7.png" /> 9162 - 12081<br />\
    <img src="styles/legend/_5_8.png" /> 12081 - 17272<br />\
    <img src="styles/legend/_5_9.png" /> 17272 - 66711<br />'
        });
var format__6 = new ol.format.GeoJSON();
var features__6 = format__6.readFeatures(json__6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__6.addFeatures(features__6);
var lyr__6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__6, 
                style: style__6,
                interactive: true,
                title: '<img src="styles/legend/_6.png" /> 台南工業區'
            });
var format__7 = new ol.format.GeoJSON();
var features__7 = format__7.readFeatures(json__7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__7.addFeatures(features__7);
var lyr__7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__7, 
                style: style__7,
                interactive: true,
    title: '人口<br />\
    <img src="styles/legend/_7_0.png" /> 0 - 0<br />\
    <img src="styles/legend/_7_1.png" /> 0 - 2<br />\
    <img src="styles/legend/_7_2.png" /> 2 - 4<br />\
    <img src="styles/legend/_7_3.png" /> 4 - 7<br />\
    <img src="styles/legend/_7_4.png" /> 7 - 12<br />\
    <img src="styles/legend/_7_5.png" /> 12 - 19<br />\
    <img src="styles/legend/_7_6.png" /> 19 - 35<br />\
    <img src="styles/legend/_7_7.png" /> 35 - 81<br />\
    <img src="styles/legend/_7_8.png" /> 81 - 305.7<br />\
    <img src="styles/legend/_7_9.png" /> 305.7 - 8948<br />'
        });
var format__8 = new ol.format.GeoJSON();
var features__8 = format__8.readFeatures(json__8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__8.addFeatures(features__8);
var lyr__8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__8, 
                style: style__8,
                interactive: true,
    title: '交流道距離<br />\
    <img src="styles/legend/_8_0.png" /> 40 - 1422<br />\
    <img src="styles/legend/_8_1.png" /> 1422 - 2217<br />\
    <img src="styles/legend/_8_2.png" /> 2217 - 3073<br />\
    <img src="styles/legend/_8_3.png" /> 3073 - 4058<br />\
    <img src="styles/legend/_8_4.png" /> 4058 - 5347<br />\
    <img src="styles/legend/_8_5.png" /> 5347 - 6983<br />\
    <img src="styles/legend/_8_6.png" /> 6983 - 9162<br />\
    <img src="styles/legend/_8_7.png" /> 9162 - 12081<br />\
    <img src="styles/legend/_8_8.png" /> 12081 - 17272<br />\
    <img src="styles/legend/_8_9.png" /> 17272 - 66711<br />'
        });
var format__9 = new ol.format.GeoJSON();
var features__9 = format__9.readFeatures(json__9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__9.addFeatures(features__9);
var lyr__9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__9, 
                style: style__9,
                interactive: true,
    title: '交流道<br />\
    <img src="styles/legend/_9_0.png" /> 1977 - 1980<br />\
    <img src="styles/legend/_9_1.png" /> 1980 - 1990<br />\
    <img src="styles/legend/_9_2.png" /> 1990 - 2000<br />\
    <img src="styles/legend/_9_3.png" /> 2000 - 2010<br />\
    <img src="styles/legend/_9_4.png" /> 2010 - 2017<br />'
        });
var format__10 = new ol.format.GeoJSON();
var features__10 = format__10.readFeatures(json__10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__10.addFeatures(features__10);
var lyr__10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__10, 
                style: style__10,
                interactive: true,
    title: '塑化產業<br />\
    <img src="styles/legend/_10_0.png" /> 0 - 5<br />\
    <img src="styles/legend/_10_1.png" /> 5 - 10<br />\
    <img src="styles/legend/_10_2.png" /> 10 - 15<br />\
    <img src="styles/legend/_10_3.png" /> 15 - 20<br />\
    <img src="styles/legend/_10_4.png" /> 20 - 25<br />\
    <img src="styles/legend/_10_5.png" /> 25 - 30<br />\
    <img src="styles/legend/_10_6.png" /> 30 - 35<br />\
    <img src="styles/legend/_10_7.png" /> 35 - 40<br />\
    <img src="styles/legend/_10_8.png" /> 40 - 45<br />\
    <img src="styles/legend/_10_9.png" /> 45 - 50<br />\
    <img src="styles/legend/_10_10.png" /> 50 - 55<br />\
    <img src="styles/legend/_10_11.png" /> 55 - 60<br />\
    <img src="styles/legend/_10_12.png" /> 60 - 65<br />\
    <img src="styles/legend/_10_13.png" /> 65 - 70<br />\
    <img src="styles/legend/_10_14.png" /> 70 - 75<br />\
    <img src="styles/legend/_10_15.png" /> 75 - 80<br />\
    <img src="styles/legend/_10_16.png" /> 80 - 85<br />'
        });
var format__11 = new ol.format.GeoJSON();
var features__11 = format__11.readFeatures(json__11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__11.addFeatures(features__11);
var lyr__11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__11, 
                style: style__11,
                interactive: true,
    title: '紡織產業<br />\
    <img src="styles/legend/_11_0.png" /> 0 - 5<br />\
    <img src="styles/legend/_11_1.png" /> 5 - 10<br />\
    <img src="styles/legend/_11_2.png" /> 10 - 15<br />\
    <img src="styles/legend/_11_3.png" /> 15 - 20<br />\
    <img src="styles/legend/_11_4.png" /> 20 - 25<br />\
    <img src="styles/legend/_11_5.png" /> 25 - 30<br />\
    <img src="styles/legend/_11_6.png" /> 30 - 35<br />\
    <img src="styles/legend/_11_7.png" /> 35 - 40<br />\
    <img src="styles/legend/_11_8.png" /> 40 - 45<br />\
    <img src="styles/legend/_11_9.png" /> 45 - 50<br />\
    <img src="styles/legend/_11_10.png" /> 50 - 55<br />\
    <img src="styles/legend/_11_11.png" /> 55 - 60<br />\
    <img src="styles/legend/_11_12.png" /> 60 - 65<br />\
    <img src="styles/legend/_11_13.png" /> 65 - 70<br />\
    <img src="styles/legend/_11_14.png" /> 70 - 75<br />\
    <img src="styles/legend/_11_15.png" /> 75 - 80<br />\
    <img src="styles/legend/_11_16.png" /> 80 - 85<br />'
        });
var format__12 = new ol.format.GeoJSON();
var features__12 = format__12.readFeatures(json__12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__12.addFeatures(features__12);
var lyr__12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__12, 
                style: style__12,
                interactive: true,
    title: '食品產業<br />\
    <img src="styles/legend/_12_0.png" /> 0 - 5<br />\
    <img src="styles/legend/_12_1.png" /> 5 - 10<br />\
    <img src="styles/legend/_12_2.png" /> 10 - 15<br />\
    <img src="styles/legend/_12_3.png" /> 15 - 20<br />\
    <img src="styles/legend/_12_4.png" /> 20 - 25<br />\
    <img src="styles/legend/_12_5.png" /> 25 - 30<br />\
    <img src="styles/legend/_12_6.png" /> 30 - 35<br />\
    <img src="styles/legend/_12_7.png" /> 35 - 40<br />\
    <img src="styles/legend/_12_8.png" /> 40 - 45<br />\
    <img src="styles/legend/_12_9.png" /> 45 - 50<br />\
    <img src="styles/legend/_12_10.png" /> 50 - 55<br />\
    <img src="styles/legend/_12_11.png" /> 55 - 60<br />\
    <img src="styles/legend/_12_12.png" /> 60 - 65<br />\
    <img src="styles/legend/_12_13.png" /> 65 - 70<br />\
    <img src="styles/legend/_12_14.png" /> 70 - 75<br />\
    <img src="styles/legend/_12_15.png" /> 75 - 80<br />\
    <img src="styles/legend/_12_16.png" /> 80 - 85<br />'
        });
var format__13 = new ol.format.GeoJSON();
var features__13 = format__13.readFeatures(json__13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__13.addFeatures(features__13);
var lyr__13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__13, 
                style: style__13,
                interactive: true,
    title: '電子產業<br />\
    <img src="styles/legend/_13_0.png" /> 0 - 5<br />\
    <img src="styles/legend/_13_1.png" /> 5 - 10<br />\
    <img src="styles/legend/_13_2.png" /> 10 - 15<br />\
    <img src="styles/legend/_13_3.png" /> 15 - 20<br />\
    <img src="styles/legend/_13_4.png" /> 20 - 25<br />\
    <img src="styles/legend/_13_5.png" /> 25 - 30<br />\
    <img src="styles/legend/_13_6.png" /> 30 - 35<br />\
    <img src="styles/legend/_13_7.png" /> 35 - 40<br />\
    <img src="styles/legend/_13_8.png" /> 40 - 45<br />\
    <img src="styles/legend/_13_9.png" /> 45 - 50<br />\
    <img src="styles/legend/_13_10.png" /> 50 - 55<br />\
    <img src="styles/legend/_13_11.png" /> 55 - 60<br />\
    <img src="styles/legend/_13_12.png" /> 60 - 65<br />\
    <img src="styles/legend/_13_13.png" /> 65 - 70<br />\
    <img src="styles/legend/_13_14.png" /> 70 - 75<br />\
    <img src="styles/legend/_13_15.png" /> 75 - 80<br />\
    <img src="styles/legend/_13_16.png" /> 80 - 85<br />'
        });
var format__14 = new ol.format.GeoJSON();
var features__14 = format__14.readFeatures(json__14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__14.addFeatures(features__14);
var lyr__14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__14, 
                style: style__14,
                interactive: true,
    title: '金屬產業<br />\
    <img src="styles/legend/_14_0.png" /> 0 - 5<br />\
    <img src="styles/legend/_14_1.png" /> 5 - 10<br />\
    <img src="styles/legend/_14_2.png" /> 10 - 15<br />\
    <img src="styles/legend/_14_3.png" /> 15 - 20<br />\
    <img src="styles/legend/_14_4.png" /> 20 - 25<br />\
    <img src="styles/legend/_14_5.png" /> 25 - 30<br />\
    <img src="styles/legend/_14_6.png" /> 30 - 35<br />\
    <img src="styles/legend/_14_7.png" /> 35 - 40<br />\
    <img src="styles/legend/_14_8.png" /> 40 - 45<br />\
    <img src="styles/legend/_14_9.png" /> 45 - 50<br />\
    <img src="styles/legend/_14_10.png" /> 50 - 55<br />\
    <img src="styles/legend/_14_11.png" /> 55 - 60<br />\
    <img src="styles/legend/_14_12.png" /> 60 - 65<br />\
    <img src="styles/legend/_14_13.png" /> 65 - 70<br />\
    <img src="styles/legend/_14_14.png" /> 70 - 75<br />\
    <img src="styles/legend/_14_15.png" /> 75 - 80<br />\
    <img src="styles/legend/_14_16.png" /> 80 - 85<br />'
        });
var format__15 = new ol.format.GeoJSON();
var features__15 = format__15.readFeatures(json__15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__15.addFeatures(features__15);
var lyr__15 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__15, 
                style: style__15,
                interactive: true,
    title: '其他產業<br />\
    <img src="styles/legend/_15_0.png" /> 0 - 5<br />\
    <img src="styles/legend/_15_1.png" /> 5 - 10<br />\
    <img src="styles/legend/_15_2.png" /> 10 - 15<br />\
    <img src="styles/legend/_15_3.png" /> 15 - 20<br />\
    <img src="styles/legend/_15_4.png" /> 20 - 25<br />\
    <img src="styles/legend/_15_5.png" /> 25 - 30<br />\
    <img src="styles/legend/_15_6.png" /> 30 - 35<br />\
    <img src="styles/legend/_15_7.png" /> 35 - 40<br />\
    <img src="styles/legend/_15_8.png" /> 40 - 45<br />\
    <img src="styles/legend/_15_9.png" /> 45 - 50<br />\
    <img src="styles/legend/_15_10.png" /> 50 - 55<br />\
    <img src="styles/legend/_15_11.png" /> 55 - 60<br />\
    <img src="styles/legend/_15_12.png" /> 60 - 65<br />\
    <img src="styles/legend/_15_13.png" /> 65 - 70<br />\
    <img src="styles/legend/_15_14.png" /> 70 - 75<br />\
    <img src="styles/legend/_15_15.png" /> 75 - 80<br />\
    <img src="styles/legend/_15_16.png" /> 80 - 85<br />'
        });
var format__16 = new ol.format.GeoJSON();
var features__16 = format__16.readFeatures(json__16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__16.addFeatures(features__16);
var lyr__16 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__16, 
                style: style__16,
                interactive: true,
    title: '違章工廠網格<br />\
    <img src="styles/legend/_16_0.png" /> 0 - 825<br />\
    <img src="styles/legend/_16_1.png" /> 825 - 2711<br />\
    <img src="styles/legend/_16_2.png" /> 2711 - 5038<br />\
    <img src="styles/legend/_16_3.png" /> 5038 - 8006<br />\
    <img src="styles/legend/_16_4.png" /> 8006 - 11481<br />\
    <img src="styles/legend/_16_5.png" /> 11481 - 16574<br />\
    <img src="styles/legend/_16_6.png" /> 16574 - 22236<br />\
    <img src="styles/legend/_16_7.png" /> 22236 - 28619<br />\
    <img src="styles/legend/_16_8.png" /> 28619 - 35256<br />\
    <img src="styles/legend/_16_9.png" /> 35256 - 41921<br />\
    <img src="styles/legend/_16_10.png" /> 41921 - 63782<br />\
    <img src="styles/legend/_16_11.png" /> 63782 - 118515<br />\
    <img src="styles/legend/_16_12.png" /> 118515 - 283003<br />'
        });
var format__17 = new ol.format.GeoJSON();
var features__17 = format__17.readFeatures(json__17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__17.addFeatures(features__17);
var lyr__17 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__17, 
                style: style__17,
                interactive: true,
                title: '<img src="styles/legend/_17.png" /> 台南工廠'
            });
var format__18 = new ol.format.GeoJSON();
var features__18 = format__18.readFeatures(json__18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__18.addFeatures(features__18);
var lyr__18 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__18, 
                style: style__18,
                interactive: true,
                title: '<img src="styles/legend/_18.png" /> 違章工廠'
            });

lyr_GoogleMaps_0.setVisible(true);lyr__1.setVisible(true);lyr__2.setVisible(true);lyr__3.setVisible(true);lyr__4.setVisible(true);lyr__5.setVisible(true);lyr__6.setVisible(true);lyr__7.setVisible(true);lyr__8.setVisible(true);lyr__9.setVisible(true);lyr__10.setVisible(true);lyr__11.setVisible(true);lyr__12.setVisible(true);lyr__13.setVisible(true);lyr__14.setVisible(true);lyr__15.setVisible(true);lyr__16.setVisible(true);lyr__17.setVisible(true);lyr__18.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr__1,lyr__2,lyr__3,lyr__4,lyr__5,lyr__6,lyr__7,lyr__8,lyr__9,lyr__10,lyr__11,lyr__12,lyr__13,lyr__14,lyr__15,lyr__16,lyr__17,lyr__18];
lyr__2.set('fieldAliases', {'id': 'id', });
lyr__3.set('fieldAliases', {'distance': 'distance', });
lyr__4.set('fieldAliases', {});
lyr__5.set('fieldAliases', {'distance': 'distance', });
lyr__6.set('fieldAliases', {'工業區': '工業區', });
lyr__7.set('fieldAliases', {'人口': '人口', });
lyr__8.set('fieldAliases', {'交流道D': '交流道D', });
lyr__9.set('fieldAliases', {'ROADNAME': 'ROADNAME', 'year': 'year', });
lyr__10.set('fieldAliases', {'TOWN': 'TOWN', '塑化PER': '塑化PER', });
lyr__11.set('fieldAliases', {'TOWN': 'TOWN', '紡織PER': '紡織PER', });
lyr__12.set('fieldAliases', {'TOWN': 'TOWN', '食品PER': '食品PER', });
lyr__13.set('fieldAliases', {'TOWN': 'TOWN', '電子PER': '電子PER', });
lyr__14.set('fieldAliases', {'TOWN': 'TOWN', '金屬PER': '金屬PER', });
lyr__15.set('fieldAliases', {'TOWN': 'TOWN', '其他PER': '其他PER', });
lyr__16.set('fieldAliases', {'area': 'area', });
lyr__17.set('fieldAliases', {});
lyr__18.set('fieldAliases', {'area': 'area', });
lyr__2.set('fieldImages', {'id': 'TextEdit', });
lyr__3.set('fieldImages', {'distance': 'TextEdit', });
lyr__4.set('fieldImages', {});
lyr__5.set('fieldImages', {'distance': 'TextEdit', });
lyr__6.set('fieldImages', {'工業區': 'TextEdit', });
lyr__7.set('fieldImages', {'人口': 'TextEdit', });
lyr__8.set('fieldImages', {'交流道D': 'TextEdit', });
lyr__9.set('fieldImages', {'ROADNAME': 'TextEdit', 'year': 'Range', });
lyr__10.set('fieldImages', {'TOWN': 'TextEdit', '塑化PER': 'TextEdit', });
lyr__11.set('fieldImages', {'TOWN': 'TextEdit', '紡織PER': '', });
lyr__12.set('fieldImages', {'TOWN': 'TextEdit', '食品PER': '', });
lyr__13.set('fieldImages', {'TOWN': 'TextEdit', '電子PER': '', });
lyr__14.set('fieldImages', {'TOWN': 'TextEdit', '金屬PER': 'TextEdit', });
lyr__15.set('fieldImages', {'TOWN': 'TextEdit', '其他PER': 'TextEdit', });
lyr__16.set('fieldImages', {'area': 'TextEdit', });
lyr__17.set('fieldImages', {});
lyr__18.set('fieldImages', {'area': 'TextEdit', });
lyr__2.set('fieldLabels', {'id': 'header label', });
lyr__3.set('fieldLabels', {'distance': 'inline label', });
lyr__4.set('fieldLabels', {});
lyr__5.set('fieldLabels', {'distance': 'inline label', });
lyr__6.set('fieldLabels', {'工業區': 'header label', });
lyr__7.set('fieldLabels', {'人口': 'inline label', });
lyr__8.set('fieldLabels', {'交流道D': 'inline label', });
lyr__9.set('fieldLabels', {'ROADNAME': 'header label', 'year': 'inline label', });
lyr__10.set('fieldLabels', {'TOWN': 'header label', '塑化PER': 'inline label', });
lyr__11.set('fieldLabels', {'TOWN': 'header label', '紡織PER': 'inline label', });
lyr__12.set('fieldLabels', {'TOWN': 'header label', '食品PER': 'inline label', });
lyr__13.set('fieldLabels', {'TOWN': 'header label', '電子PER': 'inline label', });
lyr__14.set('fieldLabels', {'TOWN': 'header label', '金屬PER': 'inline label', });
lyr__15.set('fieldLabels', {'TOWN': 'header label', '其他PER': 'inline label', });
lyr__16.set('fieldLabels', {'area': 'inline label', });
lyr__17.set('fieldLabels', {});
lyr__18.set('fieldLabels', {'area': 'inline label', });
lyr__18.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});