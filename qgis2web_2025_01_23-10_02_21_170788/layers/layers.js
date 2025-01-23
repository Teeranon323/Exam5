ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([11127698.044194, 1400164.511080, 11129062.371914, 1400850.047814]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_Rmutr_1 = new ol.format.GeoJSON();
var features_Rmutr_1 = format_Rmutr_1.readFeatures(json_Rmutr_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rmutr_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rmutr_1.addFeatures(features_Rmutr_1);
var lyr_Rmutr_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Rmutr_1, 
                style: style_Rmutr_1,
                popuplayertitle: 'Rmutr',
                interactive: true,
    title: 'Rmutr<br />\
    <img src="styles/legend/Rmutr_1_0.png" /> 1<br />\
    <img src="styles/legend/Rmutr_1_1.png" /> 2<br />\
    <img src="styles/legend/Rmutr_1_2.png" /> <br />'
        });

lyr_GoogleSatellite_0.setVisible(true);lyr_Rmutr_1.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_Rmutr_1];
lyr_Rmutr_1.set('fieldAliases', {'id': 'id', 'name': 'name', });
lyr_Rmutr_1.set('fieldImages', {'id': 'TextEdit', 'name': 'TextEdit', });
lyr_Rmutr_1.set('fieldLabels', {'id': 'hidden field', 'name': 'header label - always visible', });
lyr_Rmutr_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});