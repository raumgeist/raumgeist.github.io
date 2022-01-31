
    function getColor(d) {
        return d == 'A1'  ? '#f2f2f2' :
               d == 'A2'  ? '#f2d8ed' :
               d == 'A3'  ? '#f2bce7' :
               d == 'A4'  ? '#f2a0e1' :
               d == 'A5'  ? '#f280db' :
               d == 'B1'  ? '#d8f2f2' :
               d == 'B2'  ? '#d8d8ed' :
               d == 'B3'  ? '#d8bce7' :
               d == 'B4'  ? '#d8a0e1' :
               d == 'B5'  ? '#d880db' :
               d == 'C1'  ? '#bbf1f1' :
               d == 'C2'  ? '#bbd8ed' :
               d == 'C3'  ? '#bbbce7' :
               d == 'C4'  ? '#bba0e1' :
               d == 'C5'  ? '#bb80db' :
               d == 'D1'  ? '#99f1f1' :
               d == 'D2'  ? '#99d8ed' :
               d == 'D3'  ? '#99bce7' :
               d == 'D4'  ? '#99a0e1' :
               d == 'D5'  ? '#9980db' :
               d == 'E1'  ? '#6cf0f0' :
               d == 'E2'  ? '#6cd8ed' :
               d == 'E3'  ? '#6cbce7' :
               d == 'E4'  ? '#6ca0e1' :
               d == 'E5'  ? '#6c80db' :
                          '#f2f2f2';
    }

    function getType(d) {
        return d == 'A1'  ? '很年輕很窮 very young very poor' :
               d == 'A2'  ? '很年輕稍窮 very young slighty poor' :
               d == 'A3'  ? '很年輕普通 very young' :
               d == 'A4'  ? '很年輕稍有錢 very young slighty wealthy' :
               d == 'A5'  ? '很年輕很有錢 very young very wealthy' :
               d == 'B1'  ? '稍年輕很窮 slighty young very poor' :
               d == 'B2'  ? '稍年輕稍窮 slighty young slighty poor' :
               d == 'B3'  ? '稍年輕普通 slighty young' :
               d == 'B4'  ? '稍年輕稍有錢 slighty young slighty wealthy' :
               d == 'B5'  ? '稍年輕很有錢 slighty young very wealthy':
               d == 'C1'  ? '普通很窮 very poor' :
               d == 'C2'  ? '普通稍窮 slighty poor' :
               d == 'C3'  ? '普通普通 pretty normal' :
               d == 'C4'  ? '普通稍有錢 slighty wealthy' :
               d == 'C5'  ? '普通很有錢 very wealthy' :
               d == 'D1'  ? '稍老很窮 slighty old very poor' :
               d == 'D2'  ? '稍老稍窮 slighty old slighty poor' :
               d == 'D3'  ? '稍老普通 slighty old' :
               d == 'D4'  ? '稍老稍有錢 slighty old slighty wealthy' :
               d == 'D5'  ? '稍老很有錢 slighty old very wealthy' :
               d == 'E1'  ? '很老很窮 very old very poor' :
               d == 'E2'  ? '很老稍窮 very old slighty poor' :
               d == 'E3'  ? '很老普通 very old' :
               d == 'E4'  ? '很老稍有錢 very old slighty wealthy' :
               d == 'E5'  ? '很老很有錢 very old very wealthy' :
                          '未知 Unknown';
    }

    function style(feature) {
        return {
            fillColor: getColor(feature.properties.Total_Rank),
            weight: 1,
            opacity: 1,
            width:0.1,
            color: '#f2f2f2',
            fillOpacity: 0.7
        };
    }
    function highlightFeature(e) {
        var layer = e.target;
        layer.setStyle({
            weight: 5,
            color: '#666',
            dashArray: '',
            fillOpacity: 0.7
        });
        if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
            layer.bringToFront();
        }
        info.update(layer.feature.properties);
    }
    function resetHighlight(e) {
        geojson.resetStyle(e.target);
        getColor(feature.properties.Total_Rank),
        info.update();
    }

    function zoomToFeature(e) {
        map.fitBounds(e.target.getBounds());
    }

    function onEachFeature(feature, layer) {
        layer.on({
            mouseover: highlightFeature,
            mouseout: resetHighlight,
            click: zoomToFeature
        });
    }


    