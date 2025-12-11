ol.proj.proj4.register(proj4);
var wms_layers = [];

// Couches images
var lyr_PlougSud_0 = new ol.layer.Image({
    opacity: 1,
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
    source: new ol.source.ImageStatic({
        url: "./layers/PlougNord_1.png",
        attributions: ' ',
        projection: 'EPSG:4326',
        alwaysInRange: true,
        imageExtent: [-3.277902, 48.855435, -3.207803, 48.876915]
    })
});

// Fonction pour créer les couches vecteurs de niveaux
function createVectorLayer(jsonData, style, title, popuplayertitle) {
    var format = new ol.format.GeoJSON();
    var features = format.readFeatures(jsonData, {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
    var source = new ol.source.Vector();
    source.addFeatures(features);
    return new ol.layer.Vector({
        declutter: false,
        source: source,
        style: style,
        popuplayertitle: popuplayertitle,
        interactive: true,
        title: title
    });
}

// Couches vecteurs niveaux
var lyr_Niveau_4_2 = createVectorLayer(json_Niveau_4_2, style_Niveau_4_2, null, 'Niveau_4');
var lyr_Niveau_3_3 = createVectorLayer(json_Niveau_3_3, style_Niveau_3_3, null, 'Niveau_3');
var lyr_Niveau_2_4 = createVectorLayer(json_Niveau_2_4, style_Niveau_2_4, null, 'Niveau_2');
var lyr_Niveau_1_5 = createVectorLayer(json_Niveau_1_5, style_Niveau_1_5, null, 'Niveau_1');
var lyr_Niveau_0_6 = createVectorLayer(json_Niveau_0_6, style_Niveau_0_6, null, 'Niveau_0');
var lyr_Niveau_3_7 = createVectorLayer(json_Niveau_3_7, style_Niveau_3_7, null, 'Niveau_-3');
var lyr_Niveau_2_8 = createVectorLayer(json_Niveau_2_8, style_Niveau_2_8, null, 'Niveau_-2');
var lyr_Niveau_1_9 = createVectorLayer(json_Niveau_1_9, style_Niveau_1_9, null, 'Niveau_-1');

// Couche spots
var format_spot_10 = new ol.format.GeoJSON();
var features_spot_10 = format_spot_10.readFeatures(json_spot_10, {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_spot_10 = new ol.source.Vector();
jsonSource_spot_10.addFeatures(features_spot_10);
var cluster_spot_10 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_spot_10
});
var lyr_spot_10 = new ol.layer.Vector({
    declutter: false,
    source: cluster_spot_10,
    style: style_spot_10,
    popuplayertitle: 'spot',
    interactive: true,
    title: '<img src="styles/legend/spot_10.png" /> Sites'
});

// Visibilité initiale
lyr_PlougSud_0.setVisible(true);
lyr_PlougNord_1.setVisible(true);
lyr_spot_10.setVisible(false);
lyr_Niveau_4_2.setVisible(true);lyr_Niveau_3_3.setVisible(false);lyr_Niveau_2_4.setVisible(false);lyr_Niveau_1_5.setVisible(false);lyr_Niveau_0_6.setVisible(false);lyr_Niveau_3_7.setVisible(false);lyr_Niveau_2_8.setVisible(false);lyr_Niveau_1_9.setVisible(false);

// Liste des couches (pour la légende et la carte)
var layersList = [
    lyr_PlougSud_0,
    lyr_PlougNord_1,
    lyr_Niveau_4_2,
    lyr_Niveau_3_3,
    lyr_Niveau_2_4,
    lyr_Niveau_1_5,
    lyr_Niveau_0_6,
    lyr_Niveau_3_7,
    lyr_Niveau_2_8,
    lyr_Niveau_1_9,
    lyr_spot_10
];
