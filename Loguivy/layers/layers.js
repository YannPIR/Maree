ol.proj.proj4.register(proj4);
var wms_layers = [];

/* ----------------------------------------------------
   1️⃣ COUCHE RASTER
---------------------------------------------------- */

var lyr_Loguivy_4326_0 = new ol.layer.Image({
    opacity: 1,
    source: new ol.source.ImageStatic({
        url: "./layers/Loguivy_4326_0.png",
        attributions: ' ',
        projection: 'EPSG:4326',
        alwaysInRange: true,
        imageExtent: [-3.092258, 48.801663, -3.046272, 48.832336]
    })
});


/* ----------------------------------------------------
   2️⃣ FONCTION POUR COUCHES VECTORIELLES
---------------------------------------------------- */

function createVectorLayer(jsonData, style, title, popuplayertitle) {
    var format = new ol.format.GeoJSON();
    var features = format.readFeatures(jsonData, {
        dataProjection: 'EPSG:4326',
        featureProjection: 'EPSG:4326'
    });

    var source = new ol.source.Vector();
    source.addFeatures(features);

    return new ol.layer.Vector({
        declutter: false,
        source: source,
        style: style,
        interactive: true,
        title: title,
        popuplayertitle: popuplayertitle
    });
}


/* ----------------------------------------------------
   3️⃣ COUCHES VECTORIELLES NIVEAUX (8 COUCHES)
---------------------------------------------------- */

var lyr_Niveau_4_1 = createVectorLayer(json_Niveau_4_1, style_Niveau_4_1, null, 'Niveau_4');
var lyr_Niveau_3_2 = createVectorLayer(json_Niveau_3_2, style_Niveau_3_2, null, 'Niveau_3');
var lyr_Niveau_2_3 = createVectorLayer(json_Niveau_2_3, style_Niveau_2_3, null, 'Niveau_2');
var lyr_Niveau_1_4 = createVectorLayer(json_Niveau_1_4, style_Niveau_1_4, null, 'Niveau_1');
var lyr_Niveau_0_5 = createVectorLayer(json_Niveau_0_5, style_Niveau_0_5, null, 'Niveau_0');
var lyr_Niveau_1_6 = createVectorLayer(json_Niveau_1_6, style_Niveau_1_6, null, 'Niveau_-1');
var lyr_Niveau_2_7 = createVectorLayer(json_Niveau_2_7, style_Niveau_2_7, null, 'Niveau_-2');
var lyr_Niveau_3_8 = createVectorLayer(json_Niveau_3_8, style_Niveau_3_8, null, 'Niveau_-3');


/* ----------------------------------------------------
   4️⃣ COUCHE VECTORIELLE SPOTS (avec CLUSTER)
---------------------------------------------------- */

var format_spot_log_4326_9 = new ol.format.GeoJSON();
var features_spot_log_4326_9 = format_spot_log_4326_9.readFeatures(json_spot_log_4326_9, {
    dataProjection: 'EPSG:4326',
    featureProjection: 'EPSG:4326'
});

var jsonSource_spot_log_4326_9 = new ol.source.Vector();
jsonSource_spot_log_4326_9.addFeatures(features_spot_log_4326_9);

var cluster_spot_log_4326_9 = new ol.source.Cluster({
    distance: 30,
    source: jsonSource_spot_log_4326_9
});

var lyr_spot_log_4326_9 = new ol.layer.Vector({
    declutter: false,
    source: cluster_spot_log_4326_9,
    style: style_spot_log_4326_9,
    popuplayertitle: 'spot',
    interactive: true,
    title: '<img src="styles/legend/spot_log_4326_9.png" /> Sites'
});


/* ----------------------------------------------------
   5️⃣ VISIBILITÉ INITIALE
---------------------------------------------------- */

lyr_Loguivy_4326_0.setVisible(true);

lyr_Niveau_4_1.setVisible(true);
lyr_Niveau_3_2.setVisible(false);
lyr_Niveau_2_3.setVisible(false);
lyr_Niveau_1_4.setVisible(false);
lyr_Niveau_0_5.setVisible(false);
lyr_Niveau_1_6.setVisible(false);
lyr_Niveau_2_7.setVisible(false);
lyr_Niveau_3_8.setVisible(false);

lyr_spot_log_4326_9.setVisible(false);


/* ----------------------------------------------------
   6️⃣ LISTE DES COUCHES
---------------------------------------------------- */

var layersList = [
    lyr_Loguivy_4326_0,
    lyr_Niveau_4_1,
    lyr_Niveau_3_2,
    lyr_Niveau_2_3,
    lyr_Niveau_1_4,
    lyr_Niveau_0_5,
    lyr_Niveau_1_6,
    lyr_Niveau_2_7,
    lyr_Niveau_3_8,
    lyr_spot_log_4326_9
];
