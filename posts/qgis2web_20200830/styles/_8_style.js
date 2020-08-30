var size = 0;
var placement = 'point';

var style__8 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("交流道D");
    var labelText = "";
    size = 0;
    var labelFont = "10px, sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if ("" !== null) {
        labelText = String("");
    }
    if (value >= 40.000000 && value <= 1422.000000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(196,0,0,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 1422.000000 && value <= 2217.000000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(202,22,13,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 2217.000000 && value <= 3073.000000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(208,45,27,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 3073.000000 && value <= 4058.000000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(214,68,41,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 4058.000000 && value <= 5346.500000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(220,91,55,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 5346.500000 && value <= 6983.000000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(227,124,95,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 6983.000000 && value <= 9162.100000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(234,157,135,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 9162.100000 && value <= 12080.800000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(241,190,175,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 12080.800000 && value <= 17271.700000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(248,223,215,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 17271.700000 && value <= 66711.000000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(255,255,255,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    };

    return style;
};
