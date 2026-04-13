var wms_layers = [];

var lyr_srtm_bretagne_0 = new ol.layer.Image({
        opacity: 1,
        
    title: 'srtm_bretagne<br />\
    <img src="styles/legend/srtm_bretagne_0_0.png" /> -40<br />\
    <img src="styles/legend/srtm_bretagne_0_1.png" /> -32<br />\
    <img src="styles/legend/srtm_bretagne_0_2.png" /> -24<br />\
    <img src="styles/legend/srtm_bretagne_0_3.png" /> -15<br />\
    <img src="styles/legend/srtm_bretagne_0_4.png" /> -7<br />\
    <img src="styles/legend/srtm_bretagne_0_5.png" /> 1<br />\
    <img src="styles/legend/srtm_bretagne_0_6.png" /> 9<br />\
    <img src="styles/legend/srtm_bretagne_0_7.png" /> 18<br />\
    <img src="styles/legend/srtm_bretagne_0_8.png" /> 26<br />\
    <img src="styles/legend/srtm_bretagne_0_9.png" /> 34<br />\
    <img src="styles/legend/srtm_bretagne_0_10.png" /> 42<br />\
    <img src="styles/legend/srtm_bretagne_0_11.png" /> 50<br />\
    <img src="styles/legend/srtm_bretagne_0_12.png" /> 59<br />\
    <img src="styles/legend/srtm_bretagne_0_13.png" /> 67<br />\
    <img src="styles/legend/srtm_bretagne_0_14.png" /> 75<br />\
    <img src="styles/legend/srtm_bretagne_0_15.png" /> 83<br />\
    <img src="styles/legend/srtm_bretagne_0_16.png" /> 91<br />\
    <img src="styles/legend/srtm_bretagne_0_17.png" /> 100<br />\
    <img src="styles/legend/srtm_bretagne_0_18.png" /> 108<br />\
    <img src="styles/legend/srtm_bretagne_0_19.png" /> 116<br />\
    <img src="styles/legend/srtm_bretagne_0_20.png" /> 124<br />\
    <img src="styles/legend/srtm_bretagne_0_21.png" /> 133<br />\
    <img src="styles/legend/srtm_bretagne_0_22.png" /> 141<br />\
    <img src="styles/legend/srtm_bretagne_0_23.png" /> 149<br />\
    <img src="styles/legend/srtm_bretagne_0_24.png" /> 157<br />\
    <img src="styles/legend/srtm_bretagne_0_25.png" /> 165<br />\
    <img src="styles/legend/srtm_bretagne_0_26.png" /> 174<br />\
    <img src="styles/legend/srtm_bretagne_0_27.png" /> 182<br />\
    <img src="styles/legend/srtm_bretagne_0_28.png" /> 190<br />\
    <img src="styles/legend/srtm_bretagne_0_29.png" /> 198<br />\
    <img src="styles/legend/srtm_bretagne_0_30.png" /> 206<br />\
    <img src="styles/legend/srtm_bretagne_0_31.png" /> 215<br />\
    <img src="styles/legend/srtm_bretagne_0_32.png" /> 223<br />\
    <img src="styles/legend/srtm_bretagne_0_33.png" /> 231<br />\
    <img src="styles/legend/srtm_bretagne_0_34.png" /> 239<br />\
    <img src="styles/legend/srtm_bretagne_0_35.png" /> 248<br />\
    <img src="styles/legend/srtm_bretagne_0_36.png" /> 256<br />\
    <img src="styles/legend/srtm_bretagne_0_37.png" /> 264<br />\
    <img src="styles/legend/srtm_bretagne_0_38.png" /> 272<br />\
    <img src="styles/legend/srtm_bretagne_0_39.png" /> 280<br />\
    <img src="styles/legend/srtm_bretagne_0_40.png" /> 289<br />\
    <img src="styles/legend/srtm_bretagne_0_41.png" /> 297<br />\
    <img src="styles/legend/srtm_bretagne_0_42.png" /> 305<br />\
    <img src="styles/legend/srtm_bretagne_0_43.png" /> 313<br />\
    <img src="styles/legend/srtm_bretagne_0_44.png" /> 321<br />\
    <img src="styles/legend/srtm_bretagne_0_45.png" /> 330<br />\
    <img src="styles/legend/srtm_bretagne_0_46.png" /> 338<br />\
    <img src="styles/legend/srtm_bretagne_0_47.png" /> 346<br />\
    <img src="styles/legend/srtm_bretagne_0_48.png" /> 354<br />\
    <img src="styles/legend/srtm_bretagne_0_49.png" /> 363<br />\
    <img src="styles/legend/srtm_bretagne_0_50.png" /> 371<br />\
    <img src="styles/legend/srtm_bretagne_0_51.png" /> 379<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/srtm_bretagne_0.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-556643.772396, 5621455.944159, 46.447813, 6446348.059364]
        })
    });
var format_DEPARTEMENT_BRETAGNE_1 = new ol.format.GeoJSON();
var features_DEPARTEMENT_BRETAGNE_1 = format_DEPARTEMENT_BRETAGNE_1.readFeatures(json_DEPARTEMENT_BRETAGNE_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DEPARTEMENT_BRETAGNE_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DEPARTEMENT_BRETAGNE_1.addFeatures(features_DEPARTEMENT_BRETAGNE_1);
var lyr_DEPARTEMENT_BRETAGNE_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DEPARTEMENT_BRETAGNE_1, 
                style: style_DEPARTEMENT_BRETAGNE_1,
                popuplayertitle: 'DEPARTEMENT_BRETAGNE',
                interactive: false,
                title: '<img src="styles/legend/DEPARTEMENT_BRETAGNE_1.png" /> DEPARTEMENT_BRETAGNE'
            });
var format_Sitesdescalade_2 = new ol.format.GeoJSON();
var features_Sitesdescalade_2 = format_Sitesdescalade_2.readFeatures(json_Sitesdescalade_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sitesdescalade_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sitesdescalade_2.addFeatures(features_Sitesdescalade_2);
var lyr_Sitesdescalade_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sitesdescalade_2, 
                style: style_Sitesdescalade_2,
                popuplayertitle: 'Sites d\'escalade',
                interactive: true,
    title: 'Sites d\'escalade<br />\
    <img src="styles/legend/Sitesdescalade_2_0.png" /> Bloc<br />\
    <img src="styles/legend/Sitesdescalade_2_1.png" /> Diff<br />\
    <img src="styles/legend/Sitesdescalade_2_2.png" /> Mixte<br />\
    <img src="styles/legend/Sitesdescalade_2_3.png" /> <br />' });

lyr_srtm_bretagne_0.setVisible(true);lyr_DEPARTEMENT_BRETAGNE_1.setVisible(true);lyr_Sitesdescalade_2.setVisible(true);
var layersList = [lyr_srtm_bretagne_0,lyr_DEPARTEMENT_BRETAGNE_1,lyr_Sitesdescalade_2];
lyr_DEPARTEMENT_BRETAGNE_1.set('fieldAliases', {'ID': 'ID', 'NOM_DEP': 'NOM_DEP', 'INSEE_DEP': 'INSEE_DEP', 'INSEE_REG': 'INSEE_REG', });
lyr_Sitesdescalade_2.set('fieldAliases', {'fid': 'fid', 'Type': 'Type', 'Nom': 'Nom', });
lyr_DEPARTEMENT_BRETAGNE_1.set('fieldImages', {'ID': 'TextEdit', 'NOM_DEP': 'TextEdit', 'INSEE_DEP': 'TextEdit', 'INSEE_REG': 'TextEdit', });
lyr_Sitesdescalade_2.set('fieldImages', {'fid': 'TextEdit', 'Type': 'TextEdit', 'Nom': 'TextEdit', });
lyr_DEPARTEMENT_BRETAGNE_1.set('fieldLabels', {'ID': 'no label', 'NOM_DEP': 'no label', 'INSEE_DEP': 'no label', 'INSEE_REG': 'no label', });
lyr_Sitesdescalade_2.set('fieldLabels', {'fid': 'hidden field', 'Type': 'inline label - always visible', 'Nom': 'inline label - always visible', });
lyr_Sitesdescalade_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});