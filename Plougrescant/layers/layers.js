ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([-3.228461, 48.865756, -3.219120, 48.871545]);
var wms_layers = [];

var lyr_PlougSud_0 = new ol.layer.Image({
        opacity: 1,
        
    title: 'PlougSud<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/PlougSud_0.png",
            attributions: ' ',
            projection: 'EPSG:4326',
            alwaysInRange: true,
            imageExtent: [-3.275737, 48.846469, -3.206733, 48.858984]
        })
    });
var lyr_PlougNord_1 = new ol.layer.Image({
        opacity: 1,
        
    title: 'PlougNord<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/PlougNord_1.png",
            attributions: ' ',
            projection: 'EPSG:4326',
            alwaysInRange: true,
            imageExtent: [-3.277902, 48.855435, -3.207803, 48.876915]
        })
    });
var format_Niveau_4_2 = new ol.format.GeoJSON();
var features_Niveau_4_2 = format_Niveau_4_2.readFeatures(json_Niveau_4_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Niveau_4_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Niveau_4_2.addFeatures(features_Niveau_4_2);
var lyr_Niveau_4_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Niveau_4_2, 
                style: style_Niveau_4_2,
                popuplayertitle: 'Niveau_4',
                interactive: true,
                title: '<img src="styles/legend/Niveau_4_2.png" /> Niveau_4'
            });
var format_Niveau_3_3 = new ol.format.GeoJSON();
var features_Niveau_3_3 = format_Niveau_3_3.readFeatures(json_Niveau_3_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Niveau_3_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Niveau_3_3.addFeatures(features_Niveau_3_3);
var lyr_Niveau_3_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Niveau_3_3, 
                style: style_Niveau_3_3,
                popuplayertitle: 'Niveau_3',
                interactive: true,
                title: '<img src="styles/legend/Niveau_3_3.png" /> Niveau_3'
            });
var format_Niveau_2_4 = new ol.format.GeoJSON();
var features_Niveau_2_4 = format_Niveau_2_4.readFeatures(json_Niveau_2_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Niveau_2_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Niveau_2_4.addFeatures(features_Niveau_2_4);
var lyr_Niveau_2_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Niveau_2_4, 
                style: style_Niveau_2_4,
                popuplayertitle: 'Niveau_2',
                interactive: true,
                title: '<img src="styles/legend/Niveau_2_4.png" /> Niveau_2'
            });
var format_Niveau_1_5 = new ol.format.GeoJSON();
var features_Niveau_1_5 = format_Niveau_1_5.readFeatures(json_Niveau_1_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Niveau_1_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Niveau_1_5.addFeatures(features_Niveau_1_5);
var lyr_Niveau_1_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Niveau_1_5, 
                style: style_Niveau_1_5,
                popuplayertitle: 'Niveau_1',
                interactive: true,
                title: '<img src="styles/legend/Niveau_1_5.png" /> Niveau_1'
            });
var format_Niveau_0_6 = new ol.format.GeoJSON();
var features_Niveau_0_6 = format_Niveau_0_6.readFeatures(json_Niveau_0_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Niveau_0_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Niveau_0_6.addFeatures(features_Niveau_0_6);
var lyr_Niveau_0_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Niveau_0_6, 
                style: style_Niveau_0_6,
                popuplayertitle: 'Niveau_0',
                interactive: true,
                title: '<img src="styles/legend/Niveau_0_6.png" /> Niveau_0'
            });
var format_Niveau_3_7 = new ol.format.GeoJSON();
var features_Niveau_3_7 = format_Niveau_3_7.readFeatures(json_Niveau_3_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Niveau_3_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Niveau_3_7.addFeatures(features_Niveau_3_7);
var lyr_Niveau_3_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Niveau_3_7, 
                style: style_Niveau_3_7,
                popuplayertitle: 'Niveau_-3',
                interactive: true,
                title: '<img src="styles/legend/Niveau_3_7.png" /> Niveau_-3'
            });
var format_Niveau_2_8 = new ol.format.GeoJSON();
var features_Niveau_2_8 = format_Niveau_2_8.readFeatures(json_Niveau_2_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Niveau_2_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Niveau_2_8.addFeatures(features_Niveau_2_8);
var lyr_Niveau_2_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Niveau_2_8, 
                style: style_Niveau_2_8,
                popuplayertitle: 'Niveau_-2',
                interactive: true,
                title: '<img src="styles/legend/Niveau_2_8.png" /> Niveau_-2'
            });
var format_Niveau_1_9 = new ol.format.GeoJSON();
var features_Niveau_1_9 = format_Niveau_1_9.readFeatures(json_Niveau_1_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Niveau_1_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Niveau_1_9.addFeatures(features_Niveau_1_9);
var lyr_Niveau_1_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Niveau_1_9, 
                style: style_Niveau_1_9,
                popuplayertitle: 'Niveau_-1',
                interactive: true,
                title: '<img src="styles/legend/Niveau_1_9.png" /> Niveau_-1'
            });
var format_spot_10 = new ol.format.GeoJSON();
var features_spot_10 = format_spot_10.readFeatures(json_spot_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_spot_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_spot_10.addFeatures(features_spot_10);
cluster_spot_10 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_spot_10
});
var lyr_spot_10 = new ol.layer.Vector({
                declutter: false,
                source:cluster_spot_10, 
                style: style_spot_10,
                popuplayertitle: 'spot',
                interactive: true,
                title: '<img src="styles/legend/spot_10.png" /> spot'
            });
var group_Niveaux = new ol.layer.Group({
                                layers: [lyr_Niveau_4_2,lyr_Niveau_3_3,lyr_Niveau_2_4,lyr_Niveau_1_5,lyr_Niveau_0_6,lyr_Niveau_3_7,lyr_Niveau_2_8,lyr_Niveau_1_9,],
                                fold: 'close',
                                title: 'Niveaux'});

lyr_PlougSud_0.setVisible(true);lyr_PlougNord_1.setVisible(true);lyr_Niveau_4_2.setVisible(true);lyr_Niveau_3_3.setVisible(false);lyr_Niveau_2_4.setVisible(false);lyr_Niveau_1_5.setVisible(false);lyr_Niveau_0_6.setVisible(false);lyr_Niveau_3_7.setVisible(false);lyr_Niveau_2_8.setVisible(false);lyr_Niveau_1_9.setVisible(false);lyr_spot_10.setVisible(false);
var layersList = [lyr_PlougSud_0,lyr_PlougNord_1,group_Niveaux,lyr_spot_10];
lyr_Niveau_4_2.set('fieldAliases', {'fid': 'fid', 'Niveau': 'Niveau', 'time': 'time', 'Hauteur_mer': 'Hauteur_mer', });
lyr_Niveau_3_3.set('fieldAliases', {'fid': 'fid', 'Niveau': 'Niveau', 'time': 'time', 'Hauteur_mer': 'Hauteur_mer', });
lyr_Niveau_2_4.set('fieldAliases', {'fid': 'fid', 'Niveau': 'Niveau', 'time': 'time', 'Hauteur_mer': 'Hauteur_mer', });
lyr_Niveau_1_5.set('fieldAliases', {'fid': 'fid', 'Niveau': 'Niveau', 'time': 'time', 'Hauteur_mer': 'Hauteur_mer', });
lyr_Niveau_0_6.set('fieldAliases', {'fid': 'fid', 'Niveau': 'Niveau', 'time': 'time', 'Hauteur_mer': 'Hauteur_mer', });
lyr_Niveau_3_7.set('fieldAliases', {'fid': 'fid', 'Niveau': 'Niveau', 'time': 'time', 'Hauteur_mer': 'Hauteur_mer', });
lyr_Niveau_2_8.set('fieldAliases', {'fid': 'fid', 'Niveau': 'Niveau', 'time': 'time', 'Hauteur_mer': 'Hauteur_mer', });
lyr_Niveau_1_9.set('fieldAliases', {'fid': 'fid', 'Niveau': 'Niveau', 'time': 'time', 'Hauteur_mer': 'Hauteur_mer', });
lyr_spot_10.set('fieldAliases', {'fid': 'fid', 'Nom': 'Nom', 'Voies': 'Voies', });
lyr_Niveau_4_2.set('fieldImages', {'fid': 'TextEdit', 'Niveau': 'Range', 'time': 'DateTime', 'Hauteur_mer': 'TextEdit', });
lyr_Niveau_3_3.set('fieldImages', {'fid': '', 'Niveau': '', 'time': '', 'Hauteur_mer': '', });
lyr_Niveau_2_4.set('fieldImages', {'fid': '', 'Niveau': '', 'time': '', 'Hauteur_mer': '', });
lyr_Niveau_1_5.set('fieldImages', {'fid': '', 'Niveau': '', 'time': '', 'Hauteur_mer': '', });
lyr_Niveau_0_6.set('fieldImages', {'fid': '', 'Niveau': '', 'time': '', 'Hauteur_mer': '', });
lyr_Niveau_3_7.set('fieldImages', {'fid': '', 'Niveau': '', 'time': '', 'Hauteur_mer': '', });
lyr_Niveau_2_8.set('fieldImages', {'fid': '', 'Niveau': '', 'time': '', 'Hauteur_mer': '', });
lyr_Niveau_1_9.set('fieldImages', {'fid': '', 'Niveau': '', 'time': '', 'Hauteur_mer': '', });
lyr_spot_10.set('fieldImages', {'fid': '', 'Nom': '', 'Voies': '', });
lyr_Niveau_4_2.set('fieldLabels', {'fid': 'header label - always visible', 'Niveau': 'hidden field', 'time': 'hidden field', 'Hauteur_mer': 'inline label - visible with data', });
lyr_Niveau_3_3.set('fieldLabels', {'fid': 'hidden field', 'Niveau': 'hidden field', 'time': 'hidden field', 'Hauteur_mer': 'inline label - visible with data', });
lyr_Niveau_2_4.set('fieldLabels', {'fid': 'hidden field', 'Niveau': 'hidden field', 'time': 'hidden field', 'Hauteur_mer': 'inline label - visible with data', });
lyr_Niveau_1_5.set('fieldLabels', {'fid': 'hidden field', 'Niveau': 'hidden field', 'time': 'hidden field', 'Hauteur_mer': 'inline label - visible with data', });
lyr_Niveau_0_6.set('fieldLabels', {'fid': 'hidden field', 'Niveau': 'hidden field', 'time': 'hidden field', 'Hauteur_mer': 'inline label - visible with data', });
lyr_Niveau_3_7.set('fieldLabels', {'fid': 'hidden field', 'Niveau': 'hidden field', 'time': 'hidden field', 'Hauteur_mer': 'inline label - visible with data', });
lyr_Niveau_2_8.set('fieldLabels', {'fid': 'hidden field', 'Niveau': 'hidden field', 'time': 'hidden field', 'Hauteur_mer': 'header label - visible with data', });
lyr_Niveau_1_9.set('fieldLabels', {'fid': 'hidden field', 'Niveau': 'hidden field', 'time': 'hidden field', 'Hauteur_mer': 'inline label - visible with data', });
lyr_spot_10.set('fieldLabels', {'fid': 'hidden field', 'Nom': 'no label', 'Voies': 'inline label - always visible', });
lyr_spot_10.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});