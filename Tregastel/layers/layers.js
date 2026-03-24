var wms_layers = [];

var lyr_Vuesatellite_0 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Vue satellite<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Vuesatellite_0.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-393720.252068, 6244759.194919, -385921.253293, 6248620.328082]
        })
    });
var format_Niveau_0_1 = new ol.format.GeoJSON();
var features_Niveau_0_1 = format_Niveau_0_1.readFeatures(json_Niveau_0_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Niveau_0_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Niveau_0_1.addFeatures(features_Niveau_0_1);
var lyr_Niveau_0_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Niveau_0_1, 
                style: style_Niveau_0_1,
                popuplayertitle: 'Niveau_0',
                interactive: false,
                title: '<img src="styles/legend/Niveau_0_1.png" /> Niveau_0'
            });
var format_Niveau_1_2 = new ol.format.GeoJSON();
var features_Niveau_1_2 = format_Niveau_1_2.readFeatures(json_Niveau_1_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Niveau_1_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Niveau_1_2.addFeatures(features_Niveau_1_2);
var lyr_Niveau_1_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Niveau_1_2, 
                style: style_Niveau_1_2,
                popuplayertitle: 'Niveau_1',
                interactive: false,
                title: '<img src="styles/legend/Niveau_1_2.png" /> Niveau_1'
            });
var format_Niveau_2_3 = new ol.format.GeoJSON();
var features_Niveau_2_3 = format_Niveau_2_3.readFeatures(json_Niveau_2_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Niveau_2_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Niveau_2_3.addFeatures(features_Niveau_2_3);
var lyr_Niveau_2_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Niveau_2_3, 
                style: style_Niveau_2_3,
                popuplayertitle: 'Niveau_2',
                interactive: false,
                title: '<img src="styles/legend/Niveau_2_3.png" /> Niveau_2'
            });
var format_Niveau_3_4 = new ol.format.GeoJSON();
var features_Niveau_3_4 = format_Niveau_3_4.readFeatures(json_Niveau_3_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Niveau_3_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Niveau_3_4.addFeatures(features_Niveau_3_4);
var lyr_Niveau_3_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Niveau_3_4, 
                style: style_Niveau_3_4,
                popuplayertitle: 'Niveau_3',
                interactive: false,
                title: '<img src="styles/legend/Niveau_3_4.png" /> Niveau_3'
            });
var format_Niveau_4_5 = new ol.format.GeoJSON();
var features_Niveau_4_5 = format_Niveau_4_5.readFeatures(json_Niveau_4_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Niveau_4_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Niveau_4_5.addFeatures(features_Niveau_4_5);
var lyr_Niveau_4_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Niveau_4_5, 
                style: style_Niveau_4_5,
                popuplayertitle: 'Niveau_4',
                interactive: false,
                title: '<img src="styles/legend/Niveau_4_5.png" /> Niveau_4'
            });
var format_Niveau_5_6 = new ol.format.GeoJSON();
var features_Niveau_5_6 = format_Niveau_5_6.readFeatures(json_Niveau_5_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Niveau_5_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Niveau_5_6.addFeatures(features_Niveau_5_6);
var lyr_Niveau_5_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Niveau_5_6, 
                style: style_Niveau_5_6,
                popuplayertitle: 'Niveau_5',
                interactive: false,
                title: '<img src="styles/legend/Niveau_5_6.png" /> Niveau_5'
            });
var format_Niveau_6_7 = new ol.format.GeoJSON();
var features_Niveau_6_7 = format_Niveau_6_7.readFeatures(json_Niveau_6_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Niveau_6_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Niveau_6_7.addFeatures(features_Niveau_6_7);
var lyr_Niveau_6_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Niveau_6_7, 
                style: style_Niveau_6_7,
                popuplayertitle: 'Niveau_6',
                interactive: false,
                title: '<img src="styles/legend/Niveau_6_7.png" /> Niveau_6'
            });
var format_Niveau_7_8 = new ol.format.GeoJSON();
var features_Niveau_7_8 = format_Niveau_7_8.readFeatures(json_Niveau_7_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Niveau_7_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Niveau_7_8.addFeatures(features_Niveau_7_8);
var lyr_Niveau_7_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Niveau_7_8, 
                style: style_Niveau_7_8,
                popuplayertitle: 'Niveau_7',
                interactive: false,
                title: '<img src="styles/legend/Niveau_7_8.png" /> Niveau_7'
            });
var format_Niveau_8_9 = new ol.format.GeoJSON();
var features_Niveau_8_9 = format_Niveau_8_9.readFeatures(json_Niveau_8_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Niveau_8_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Niveau_8_9.addFeatures(features_Niveau_8_9);
var lyr_Niveau_8_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Niveau_8_9, 
                style: style_Niveau_8_9,
                popuplayertitle: 'Niveau_8',
                interactive: false,
                title: '<img src="styles/legend/Niveau_8_9.png" /> Niveau_8'
            });
var format_Niveau_9_10 = new ol.format.GeoJSON();
var features_Niveau_9_10 = format_Niveau_9_10.readFeatures(json_Niveau_9_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Niveau_9_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Niveau_9_10.addFeatures(features_Niveau_9_10);
var lyr_Niveau_9_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Niveau_9_10, 
                style: style_Niveau_9_10,
                popuplayertitle: 'Niveau_9',
                interactive: false,
                title: '<img src="styles/legend/Niveau_9_10.png" /> Niveau_9'
            });
var format_Niveau_10_11 = new ol.format.GeoJSON();
var features_Niveau_10_11 = format_Niveau_10_11.readFeatures(json_Niveau_10_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Niveau_10_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Niveau_10_11.addFeatures(features_Niveau_10_11);
var lyr_Niveau_10_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Niveau_10_11, 
                style: style_Niveau_10_11,
                popuplayertitle: 'Niveau_10',
                interactive: false,
                title: '<img src="styles/legend/Niveau_10_11.png" /> Niveau_10'
            });
var format_Niveau_11_12 = new ol.format.GeoJSON();
var features_Niveau_11_12 = format_Niveau_11_12.readFeatures(json_Niveau_11_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Niveau_11_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Niveau_11_12.addFeatures(features_Niveau_11_12);
var lyr_Niveau_11_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Niveau_11_12, 
                style: style_Niveau_11_12,
                popuplayertitle: 'Niveau_11',
                interactive: false,
                title: '<img src="styles/legend/Niveau_11_12.png" /> Niveau_11'
            });
var format_Niveau_12_13 = new ol.format.GeoJSON();
var features_Niveau_12_13 = format_Niveau_12_13.readFeatures(json_Niveau_12_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Niveau_12_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Niveau_12_13.addFeatures(features_Niveau_12_13);
var lyr_Niveau_12_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Niveau_12_13, 
                style: style_Niveau_12_13,
                popuplayertitle: 'Niveau_12',
                interactive: false,
                title: '<img src="styles/legend/Niveau_12_13.png" /> Niveau_12'
            });
var format_Niveau_13_14 = new ol.format.GeoJSON();
var features_Niveau_13_14 = format_Niveau_13_14.readFeatures(json_Niveau_13_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Niveau_13_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Niveau_13_14.addFeatures(features_Niveau_13_14);
var lyr_Niveau_13_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Niveau_13_14, 
                style: style_Niveau_13_14,
                popuplayertitle: 'Niveau_13',
                interactive: false,
                title: '<img src="styles/legend/Niveau_13_14.png" /> Niveau_13'
            });
var format_Niveau_14_15 = new ol.format.GeoJSON();
var features_Niveau_14_15 = format_Niveau_14_15.readFeatures(json_Niveau_14_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Niveau_14_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Niveau_14_15.addFeatures(features_Niveau_14_15);
var lyr_Niveau_14_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Niveau_14_15, 
                style: style_Niveau_14_15,
                popuplayertitle: 'Niveau_14',
                interactive: false,
                title: '<img src="styles/legend/Niveau_14_15.png" /> Niveau_14'
            });
var format_Niveau_15_16 = new ol.format.GeoJSON();
var features_Niveau_15_16 = format_Niveau_15_16.readFeatures(json_Niveau_15_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Niveau_15_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Niveau_15_16.addFeatures(features_Niveau_15_16);
var lyr_Niveau_15_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Niveau_15_16, 
                style: style_Niveau_15_16,
                popuplayertitle: 'Niveau_15',
                interactive: false,
                title: '<img src="styles/legend/Niveau_15_16.png" /> Niveau_15'
            });
var format_Niveau_16_17 = new ol.format.GeoJSON();
var features_Niveau_16_17 = format_Niveau_16_17.readFeatures(json_Niveau_16_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Niveau_16_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Niveau_16_17.addFeatures(features_Niveau_16_17);
var lyr_Niveau_16_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Niveau_16_17, 
                style: style_Niveau_16_17,
                popuplayertitle: 'Niveau_16',
                interactive: false,
                title: '<img src="styles/legend/Niveau_16_17.png" /> Niveau_16'
            });
var format_Niveau_17_18 = new ol.format.GeoJSON();
var features_Niveau_17_18 = format_Niveau_17_18.readFeatures(json_Niveau_17_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Niveau_17_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Niveau_17_18.addFeatures(features_Niveau_17_18);
var lyr_Niveau_17_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Niveau_17_18, 
                style: style_Niveau_17_18,
                popuplayertitle: 'Niveau_17',
                interactive: false,
                title: '<img src="styles/legend/Niveau_17_18.png" /> Niveau_17'
            });
var format_Niveau_18_19 = new ol.format.GeoJSON();
var features_Niveau_18_19 = format_Niveau_18_19.readFeatures(json_Niveau_18_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Niveau_18_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Niveau_18_19.addFeatures(features_Niveau_18_19);
var lyr_Niveau_18_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Niveau_18_19, 
                style: style_Niveau_18_19,
                popuplayertitle: 'Niveau_18',
                interactive: false,
                title: '<img src="styles/legend/Niveau_18_19.png" /> Niveau_18'
            });
var format_Niveau_19_20 = new ol.format.GeoJSON();
var features_Niveau_19_20 = format_Niveau_19_20.readFeatures(json_Niveau_19_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Niveau_19_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Niveau_19_20.addFeatures(features_Niveau_19_20);
var lyr_Niveau_19_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Niveau_19_20, 
                style: style_Niveau_19_20,
                popuplayertitle: 'Niveau_19',
                interactive: false,
                title: '<img src="styles/legend/Niveau_19_20.png" /> Niveau_19'
            });
var format_Niveau_20_21 = new ol.format.GeoJSON();
var features_Niveau_20_21 = format_Niveau_20_21.readFeatures(json_Niveau_20_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Niveau_20_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Niveau_20_21.addFeatures(features_Niveau_20_21);
var lyr_Niveau_20_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Niveau_20_21, 
                style: style_Niveau_20_21,
                popuplayertitle: 'Niveau_20',
                interactive: false,
                title: '<img src="styles/legend/Niveau_20_21.png" /> Niveau_20'
            });
var format_Niveau_21_22 = new ol.format.GeoJSON();
var features_Niveau_21_22 = format_Niveau_21_22.readFeatures(json_Niveau_21_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Niveau_21_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Niveau_21_22.addFeatures(features_Niveau_21_22);
var lyr_Niveau_21_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Niveau_21_22, 
                style: style_Niveau_21_22,
                popuplayertitle: 'Niveau_21',
                interactive: false,
                title: '<img src="styles/legend/Niveau_21_22.png" /> Niveau_21'
            });
var format_Niveau_22_23 = new ol.format.GeoJSON();
var features_Niveau_22_23 = format_Niveau_22_23.readFeatures(json_Niveau_22_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Niveau_22_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Niveau_22_23.addFeatures(features_Niveau_22_23);
var lyr_Niveau_22_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Niveau_22_23, 
                style: style_Niveau_22_23,
                popuplayertitle: 'Niveau_22',
                interactive: false,
                title: '<img src="styles/legend/Niveau_22_23.png" /> Niveau_22'
            });
var format_Niveau_23_24 = new ol.format.GeoJSON();
var features_Niveau_23_24 = format_Niveau_23_24.readFeatures(json_Niveau_23_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Niveau_23_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Niveau_23_24.addFeatures(features_Niveau_23_24);
var lyr_Niveau_23_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Niveau_23_24, 
                style: style_Niveau_23_24,
                popuplayertitle: 'Niveau_23',
                interactive: false,
                title: '<img src="styles/legend/Niveau_23_24.png" /> Niveau_23'
            });
var format_Niveau_24_25 = new ol.format.GeoJSON();
var features_Niveau_24_25 = format_Niveau_24_25.readFeatures(json_Niveau_24_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Niveau_24_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Niveau_24_25.addFeatures(features_Niveau_24_25);
var lyr_Niveau_24_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Niveau_24_25, 
                style: style_Niveau_24_25,
                popuplayertitle: 'Niveau_24',
                interactive: false,
                title: '<img src="styles/legend/Niveau_24_25.png" /> Niveau_24'
            });
var format_Niveau_25_26 = new ol.format.GeoJSON();
var features_Niveau_25_26 = format_Niveau_25_26.readFeatures(json_Niveau_25_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Niveau_25_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Niveau_25_26.addFeatures(features_Niveau_25_26);
var lyr_Niveau_25_26 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Niveau_25_26, 
                style: style_Niveau_25_26,
                popuplayertitle: 'Niveau_25',
                interactive: false,
                title: '<img src="styles/legend/Niveau_25_26.png" /> Niveau_25'
            });
var format_Niveau_26_27 = new ol.format.GeoJSON();
var features_Niveau_26_27 = format_Niveau_26_27.readFeatures(json_Niveau_26_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Niveau_26_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Niveau_26_27.addFeatures(features_Niveau_26_27);
var lyr_Niveau_26_27 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Niveau_26_27, 
                style: style_Niveau_26_27,
                popuplayertitle: 'Niveau_26',
                interactive: false,
                title: '<img src="styles/legend/Niveau_26_27.png" /> Niveau_26'
            });
var format_Niveau_27_28 = new ol.format.GeoJSON();
var features_Niveau_27_28 = format_Niveau_27_28.readFeatures(json_Niveau_27_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Niveau_27_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Niveau_27_28.addFeatures(features_Niveau_27_28);
var lyr_Niveau_27_28 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Niveau_27_28, 
                style: style_Niveau_27_28,
                popuplayertitle: 'Niveau_27',
                interactive: false,
                title: '<img src="styles/legend/Niveau_27_28.png" /> Niveau_27'
            });
var format_Niveau_28_29 = new ol.format.GeoJSON();
var features_Niveau_28_29 = format_Niveau_28_29.readFeatures(json_Niveau_28_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Niveau_28_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Niveau_28_29.addFeatures(features_Niveau_28_29);
var lyr_Niveau_28_29 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Niveau_28_29, 
                style: style_Niveau_28_29,
                popuplayertitle: 'Niveau_28',
                interactive: false,
                title: '<img src="styles/legend/Niveau_28_29.png" /> Niveau_28'
            });
var format_Niveau_29_30 = new ol.format.GeoJSON();
var features_Niveau_29_30 = format_Niveau_29_30.readFeatures(json_Niveau_29_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Niveau_29_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Niveau_29_30.addFeatures(features_Niveau_29_30);
var lyr_Niveau_29_30 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Niveau_29_30, 
                style: style_Niveau_29_30,
                popuplayertitle: 'Niveau_29',
                interactive: false,
                title: '<img src="styles/legend/Niveau_29_30.png" /> Niveau_29'
            });
var format_Niveau_30_31 = new ol.format.GeoJSON();
var features_Niveau_30_31 = format_Niveau_30_31.readFeatures(json_Niveau_30_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Niveau_30_31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Niveau_30_31.addFeatures(features_Niveau_30_31);
var lyr_Niveau_30_31 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Niveau_30_31, 
                style: style_Niveau_30_31,
                popuplayertitle: 'Niveau_30',
                interactive: false,
                title: '<img src="styles/legend/Niveau_30_31.png" /> Niveau_30'
            });
var format_Niveau_31_32 = new ol.format.GeoJSON();
var features_Niveau_31_32 = format_Niveau_31_32.readFeatures(json_Niveau_31_32, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Niveau_31_32 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Niveau_31_32.addFeatures(features_Niveau_31_32);
var lyr_Niveau_31_32 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Niveau_31_32, 
                style: style_Niveau_31_32,
                popuplayertitle: 'Niveau_31',
                interactive: false,
                title: '<img src="styles/legend/Niveau_31_32.png" /> Niveau_31'
            });
var format_Niveau_32_33 = new ol.format.GeoJSON();
var features_Niveau_32_33 = format_Niveau_32_33.readFeatures(json_Niveau_32_33, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Niveau_32_33 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Niveau_32_33.addFeatures(features_Niveau_32_33);
var lyr_Niveau_32_33 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Niveau_32_33, 
                style: style_Niveau_32_33,
                popuplayertitle: 'Niveau_32',
                interactive: false,
                title: '<img src="styles/legend/Niveau_32_33.png" /> Niveau_32'
            });
var format_Niveau_33_34 = new ol.format.GeoJSON();
var features_Niveau_33_34 = format_Niveau_33_34.readFeatures(json_Niveau_33_34, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Niveau_33_34 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Niveau_33_34.addFeatures(features_Niveau_33_34);
var lyr_Niveau_33_34 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Niveau_33_34, 
                style: style_Niveau_33_34,
                popuplayertitle: 'Niveau_33',
                interactive: false,
                title: '<img src="styles/legend/Niveau_33_34.png" /> Niveau_33'
            });
var format_Niveau_34_35 = new ol.format.GeoJSON();
var features_Niveau_34_35 = format_Niveau_34_35.readFeatures(json_Niveau_34_35, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Niveau_34_35 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Niveau_34_35.addFeatures(features_Niveau_34_35);
var lyr_Niveau_34_35 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Niveau_34_35, 
                style: style_Niveau_34_35,
                popuplayertitle: 'Niveau_34',
                interactive: false,
                title: '<img src="styles/legend/Niveau_34_35.png" /> Niveau_34'
            });
var format_Niveau_35_36 = new ol.format.GeoJSON();
var features_Niveau_35_36 = format_Niveau_35_36.readFeatures(json_Niveau_35_36, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Niveau_35_36 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Niveau_35_36.addFeatures(features_Niveau_35_36);
var lyr_Niveau_35_36 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Niveau_35_36, 
                style: style_Niveau_35_36,
                popuplayertitle: 'Niveau_35',
                interactive: false,
                title: '<img src="styles/legend/Niveau_35_36.png" /> Niveau_35'
            });
var format_Niveau_36_37 = new ol.format.GeoJSON();
var features_Niveau_36_37 = format_Niveau_36_37.readFeatures(json_Niveau_36_37, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Niveau_36_37 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Niveau_36_37.addFeatures(features_Niveau_36_37);
var lyr_Niveau_36_37 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Niveau_36_37, 
                style: style_Niveau_36_37,
                popuplayertitle: 'Niveau_36',
                interactive: false,
                title: '<img src="styles/legend/Niveau_36_37.png" /> Niveau_36'
            });
var format_Niveau_37_38 = new ol.format.GeoJSON();
var features_Niveau_37_38 = format_Niveau_37_38.readFeatures(json_Niveau_37_38, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Niveau_37_38 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Niveau_37_38.addFeatures(features_Niveau_37_38);
var lyr_Niveau_37_38 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Niveau_37_38, 
                style: style_Niveau_37_38,
                popuplayertitle: 'Niveau_37',
                interactive: false,
                title: '<img src="styles/legend/Niveau_37_38.png" /> Niveau_37'
            });
var format_Niveau_38_39 = new ol.format.GeoJSON();
var features_Niveau_38_39 = format_Niveau_38_39.readFeatures(json_Niveau_38_39, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Niveau_38_39 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Niveau_38_39.addFeatures(features_Niveau_38_39);
var lyr_Niveau_38_39 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Niveau_38_39, 
                style: style_Niveau_38_39,
                popuplayertitle: 'Niveau_38',
                interactive: false,
                title: '<img src="styles/legend/Niveau_38_39.png" /> Niveau_38'
            });
var format_Niveau_39_40 = new ol.format.GeoJSON();
var features_Niveau_39_40 = format_Niveau_39_40.readFeatures(json_Niveau_39_40, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Niveau_39_40 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Niveau_39_40.addFeatures(features_Niveau_39_40);
var lyr_Niveau_39_40 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Niveau_39_40, 
                style: style_Niveau_39_40,
                popuplayertitle: 'Niveau_39',
                interactive: false,
                title: '<img src="styles/legend/Niveau_39_40.png" /> Niveau_39'
            });
var format_Niveau_40_41 = new ol.format.GeoJSON();
var features_Niveau_40_41 = format_Niveau_40_41.readFeatures(json_Niveau_40_41, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Niveau_40_41 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Niveau_40_41.addFeatures(features_Niveau_40_41);
var lyr_Niveau_40_41 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Niveau_40_41, 
                style: style_Niveau_40_41,
                popuplayertitle: 'Niveau_40',
                interactive: false,
                title: '<img src="styles/legend/Niveau_40_41.png" /> Niveau_40'
            });
var format_Niveau_41_42 = new ol.format.GeoJSON();
var features_Niveau_41_42 = format_Niveau_41_42.readFeatures(json_Niveau_41_42, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Niveau_41_42 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Niveau_41_42.addFeatures(features_Niveau_41_42);
var lyr_Niveau_41_42 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Niveau_41_42, 
                style: style_Niveau_41_42,
                popuplayertitle: 'Niveau_41',
                interactive: false,
                title: '<img src="styles/legend/Niveau_41_42.png" /> Niveau_41'
            });
var format_Niveau_42_43 = new ol.format.GeoJSON();
var features_Niveau_42_43 = format_Niveau_42_43.readFeatures(json_Niveau_42_43, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Niveau_42_43 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Niveau_42_43.addFeatures(features_Niveau_42_43);
var lyr_Niveau_42_43 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Niveau_42_43, 
                style: style_Niveau_42_43,
                popuplayertitle: 'Niveau_42',
                interactive: false,
                title: '<img src="styles/legend/Niveau_42_43.png" /> Niveau_42'
            });
var format_Niveau_43_44 = new ol.format.GeoJSON();
var features_Niveau_43_44 = format_Niveau_43_44.readFeatures(json_Niveau_43_44, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Niveau_43_44 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Niveau_43_44.addFeatures(features_Niveau_43_44);
var lyr_Niveau_43_44 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Niveau_43_44, 
                style: style_Niveau_43_44,
                popuplayertitle: 'Niveau_43',
                interactive: false,
                title: '<img src="styles/legend/Niveau_43_44.png" /> Niveau_43'
            });
var format_Niveau_44_45 = new ol.format.GeoJSON();
var features_Niveau_44_45 = format_Niveau_44_45.readFeatures(json_Niveau_44_45, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Niveau_44_45 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Niveau_44_45.addFeatures(features_Niveau_44_45);
var lyr_Niveau_44_45 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Niveau_44_45, 
                style: style_Niveau_44_45,
                popuplayertitle: 'Niveau_44',
                interactive: false,
                title: '<img src="styles/legend/Niveau_44_45.png" /> Niveau_44'
            });
var format_Niveau_45_46 = new ol.format.GeoJSON();
var features_Niveau_45_46 = format_Niveau_45_46.readFeatures(json_Niveau_45_46, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Niveau_45_46 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Niveau_45_46.addFeatures(features_Niveau_45_46);
var lyr_Niveau_45_46 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Niveau_45_46, 
                style: style_Niveau_45_46,
                popuplayertitle: 'Niveau_45',
                interactive: false,
                title: '<img src="styles/legend/Niveau_45_46.png" /> Niveau_45'
            });
var format_Niveau_46_47 = new ol.format.GeoJSON();
var features_Niveau_46_47 = format_Niveau_46_47.readFeatures(json_Niveau_46_47, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Niveau_46_47 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Niveau_46_47.addFeatures(features_Niveau_46_47);
var lyr_Niveau_46_47 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Niveau_46_47, 
                style: style_Niveau_46_47,
                popuplayertitle: 'Niveau_46',
                interactive: false,
                title: '<img src="styles/legend/Niveau_46_47.png" /> Niveau_46'
            });
var format_Niveau_47_48 = new ol.format.GeoJSON();
var features_Niveau_47_48 = format_Niveau_47_48.readFeatures(json_Niveau_47_48, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Niveau_47_48 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Niveau_47_48.addFeatures(features_Niveau_47_48);
var lyr_Niveau_47_48 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Niveau_47_48, 
                style: style_Niveau_47_48,
                popuplayertitle: 'Niveau_47',
                interactive: false,
                title: '<img src="styles/legend/Niveau_47_48.png" /> Niveau_47'
            });
var format_Niveau_48_49 = new ol.format.GeoJSON();
var features_Niveau_48_49 = format_Niveau_48_49.readFeatures(json_Niveau_48_49, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Niveau_48_49 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Niveau_48_49.addFeatures(features_Niveau_48_49);
var lyr_Niveau_48_49 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Niveau_48_49, 
                style: style_Niveau_48_49,
                popuplayertitle: 'Niveau_48',
                interactive: false,
                title: '<img src="styles/legend/Niveau_48_49.png" /> Niveau_48'
            });
var format_Niveau_49_50 = new ol.format.GeoJSON();
var features_Niveau_49_50 = format_Niveau_49_50.readFeatures(json_Niveau_49_50, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Niveau_49_50 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Niveau_49_50.addFeatures(features_Niveau_49_50);
var lyr_Niveau_49_50 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Niveau_49_50, 
                style: style_Niveau_49_50,
                popuplayertitle: 'Niveau_49',
                interactive: false,
                title: '<img src="styles/legend/Niveau_49_50.png" /> Niveau_49'
            });
var format_Niveau_50_51 = new ol.format.GeoJSON();
var features_Niveau_50_51 = format_Niveau_50_51.readFeatures(json_Niveau_50_51, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Niveau_50_51 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Niveau_50_51.addFeatures(features_Niveau_50_51);
var lyr_Niveau_50_51 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Niveau_50_51, 
                style: style_Niveau_50_51,
                popuplayertitle: 'Niveau_50',
                interactive: false,
                title: '<img src="styles/legend/Niveau_50_51.png" /> Niveau_50'
            });
var format_Niveau_51_52 = new ol.format.GeoJSON();
var features_Niveau_51_52 = format_Niveau_51_52.readFeatures(json_Niveau_51_52, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Niveau_51_52 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Niveau_51_52.addFeatures(features_Niveau_51_52);
var lyr_Niveau_51_52 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Niveau_51_52, 
                style: style_Niveau_51_52,
                popuplayertitle: 'Niveau_51',
                interactive: false,
                title: '<img src="styles/legend/Niveau_51_52.png" /> Niveau_51'
            });
var format_Niveau_52_53 = new ol.format.GeoJSON();
var features_Niveau_52_53 = format_Niveau_52_53.readFeatures(json_Niveau_52_53, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Niveau_52_53 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Niveau_52_53.addFeatures(features_Niveau_52_53);
var lyr_Niveau_52_53 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Niveau_52_53, 
                style: style_Niveau_52_53,
                popuplayertitle: 'Niveau_52',
                interactive: false,
                title: '<img src="styles/legend/Niveau_52_53.png" /> Niveau_52'
            });
var format_Niveau_53_54 = new ol.format.GeoJSON();
var features_Niveau_53_54 = format_Niveau_53_54.readFeatures(json_Niveau_53_54, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Niveau_53_54 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Niveau_53_54.addFeatures(features_Niveau_53_54);
var lyr_Niveau_53_54 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Niveau_53_54, 
                style: style_Niveau_53_54,
                popuplayertitle: 'Niveau_53',
                interactive: false,
                title: '<img src="styles/legend/Niveau_53_54.png" /> Niveau_53'
            });
var format_Niveau_54_55 = new ol.format.GeoJSON();
var features_Niveau_54_55 = format_Niveau_54_55.readFeatures(json_Niveau_54_55, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Niveau_54_55 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Niveau_54_55.addFeatures(features_Niveau_54_55);
var lyr_Niveau_54_55 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Niveau_54_55, 
                style: style_Niveau_54_55,
                popuplayertitle: 'Niveau_54',
                interactive: false,
                title: '<img src="styles/legend/Niveau_54_55.png" /> Niveau_54'
            });
var format_Niveau_55_56 = new ol.format.GeoJSON();
var features_Niveau_55_56 = format_Niveau_55_56.readFeatures(json_Niveau_55_56, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Niveau_55_56 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Niveau_55_56.addFeatures(features_Niveau_55_56);
var lyr_Niveau_55_56 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Niveau_55_56, 
                style: style_Niveau_55_56,
                popuplayertitle: 'Niveau_55',
                interactive: false,
                title: '<img src="styles/legend/Niveau_55_56.png" /> Niveau_55'
            });
var format_Niveau_56_57 = new ol.format.GeoJSON();
var features_Niveau_56_57 = format_Niveau_56_57.readFeatures(json_Niveau_56_57, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Niveau_56_57 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Niveau_56_57.addFeatures(features_Niveau_56_57);
var lyr_Niveau_56_57 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Niveau_56_57, 
                style: style_Niveau_56_57,
                popuplayertitle: 'Niveau_56',
                interactive: false,
                title: '<img src="styles/legend/Niveau_56_57.png" /> Niveau_56'
            });
var format_Niveau_57_58 = new ol.format.GeoJSON();
var features_Niveau_57_58 = format_Niveau_57_58.readFeatures(json_Niveau_57_58, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Niveau_57_58 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Niveau_57_58.addFeatures(features_Niveau_57_58);
var lyr_Niveau_57_58 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Niveau_57_58, 
                style: style_Niveau_57_58,
                popuplayertitle: 'Niveau_57',
                interactive: false,
                title: '<img src="styles/legend/Niveau_57_58.png" /> Niveau_57'
            });
var format_Niveau_58_59 = new ol.format.GeoJSON();
var features_Niveau_58_59 = format_Niveau_58_59.readFeatures(json_Niveau_58_59, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Niveau_58_59 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Niveau_58_59.addFeatures(features_Niveau_58_59);
var lyr_Niveau_58_59 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Niveau_58_59, 
                style: style_Niveau_58_59,
                popuplayertitle: 'Niveau_58',
                interactive: false,
                title: '<img src="styles/legend/Niveau_58_59.png" /> Niveau_58'
            });
var format_Niveau_59_60 = new ol.format.GeoJSON();
var features_Niveau_59_60 = format_Niveau_59_60.readFeatures(json_Niveau_59_60, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Niveau_59_60 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Niveau_59_60.addFeatures(features_Niveau_59_60);
var lyr_Niveau_59_60 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Niveau_59_60, 
                style: style_Niveau_59_60,
                popuplayertitle: 'Niveau_59',
                interactive: false,
                title: '<img src="styles/legend/Niveau_59_60.png" /> Niveau_59'
            });
var format_Niveau_60_61 = new ol.format.GeoJSON();
var features_Niveau_60_61 = format_Niveau_60_61.readFeatures(json_Niveau_60_61, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Niveau_60_61 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Niveau_60_61.addFeatures(features_Niveau_60_61);
var lyr_Niveau_60_61 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Niveau_60_61, 
                style: style_Niveau_60_61,
                popuplayertitle: 'Niveau_60',
                interactive: false,
                title: '<img src="styles/legend/Niveau_60_61.png" /> Niveau_60'
            });
var format_spots_62 = new ol.format.GeoJSON();
var features_spots_62 = format_spots_62.readFeatures(json_spots_62, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_spots_62 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_spots_62.addFeatures(features_spots_62);
var lyr_spots_62 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_spots_62, 
                style: style_spots_62,
                popuplayertitle: 'spots',
                interactive: true,
    title: 'spots<br />\
    <img src="styles/legend/spots_62_0.png" /> Ploumanac\'h<br />\
    <img src="styles/legend/spots_62_1.png" /> Trégastel<br />\
    <img src="styles/legend/spots_62_2.png" /> <br />' });

lyr_Vuesatellite_0.setVisible(true);lyr_Niveau_0_1.setVisible(false);lyr_Niveau_1_2.setVisible(false);lyr_Niveau_2_3.setVisible(false);lyr_Niveau_3_4.setVisible(false);lyr_Niveau_4_5.setVisible(false);lyr_Niveau_5_6.setVisible(false);lyr_Niveau_6_7.setVisible(false);lyr_Niveau_7_8.setVisible(false);lyr_Niveau_8_9.setVisible(false);lyr_Niveau_9_10.setVisible(false);lyr_Niveau_10_11.setVisible(false);lyr_Niveau_11_12.setVisible(false);lyr_Niveau_12_13.setVisible(false);lyr_Niveau_13_14.setVisible(false);lyr_Niveau_14_15.setVisible(false);lyr_Niveau_15_16.setVisible(false);lyr_Niveau_16_17.setVisible(false);lyr_Niveau_17_18.setVisible(false);lyr_Niveau_18_19.setVisible(false);lyr_Niveau_19_20.setVisible(false);lyr_Niveau_20_21.setVisible(false);lyr_Niveau_21_22.setVisible(false);lyr_Niveau_22_23.setVisible(false);lyr_Niveau_23_24.setVisible(false);lyr_Niveau_24_25.setVisible(false);lyr_Niveau_25_26.setVisible(false);lyr_Niveau_26_27.setVisible(false);lyr_Niveau_27_28.setVisible(false);lyr_Niveau_28_29.setVisible(false);lyr_Niveau_29_30.setVisible(false);lyr_Niveau_30_31.setVisible(false);lyr_Niveau_31_32.setVisible(false);lyr_Niveau_32_33.setVisible(false);lyr_Niveau_33_34.setVisible(false);lyr_Niveau_34_35.setVisible(false);lyr_Niveau_35_36.setVisible(false);lyr_Niveau_36_37.setVisible(false);lyr_Niveau_37_38.setVisible(false);lyr_Niveau_38_39.setVisible(false);lyr_Niveau_39_40.setVisible(false);lyr_Niveau_40_41.setVisible(false);lyr_Niveau_41_42.setVisible(false);lyr_Niveau_42_43.setVisible(false);lyr_Niveau_43_44.setVisible(false);lyr_Niveau_44_45.setVisible(false);lyr_Niveau_45_46.setVisible(false);lyr_Niveau_46_47.setVisible(false);lyr_Niveau_47_48.setVisible(false);lyr_Niveau_48_49.setVisible(false);lyr_Niveau_49_50.setVisible(false);lyr_Niveau_50_51.setVisible(false);lyr_Niveau_51_52.setVisible(false);lyr_Niveau_52_53.setVisible(false);lyr_Niveau_53_54.setVisible(true);lyr_Niveau_54_55.setVisible(false);lyr_Niveau_55_56.setVisible(false);lyr_Niveau_56_57.setVisible(false);lyr_Niveau_57_58.setVisible(false);lyr_Niveau_58_59.setVisible(false);lyr_Niveau_59_60.setVisible(false);lyr_Niveau_60_61.setVisible(false);lyr_spots_62.setVisible(true);
var layersList = [lyr_Vuesatellite_0,lyr_Niveau_0_1,lyr_Niveau_1_2,lyr_Niveau_2_3,lyr_Niveau_3_4,lyr_Niveau_4_5,lyr_Niveau_5_6,lyr_Niveau_6_7,lyr_Niveau_7_8,lyr_Niveau_8_9,lyr_Niveau_9_10,lyr_Niveau_10_11,lyr_Niveau_11_12,lyr_Niveau_12_13,lyr_Niveau_13_14,lyr_Niveau_14_15,lyr_Niveau_15_16,lyr_Niveau_16_17,lyr_Niveau_17_18,lyr_Niveau_18_19,lyr_Niveau_19_20,lyr_Niveau_20_21,lyr_Niveau_21_22,lyr_Niveau_22_23,lyr_Niveau_23_24,lyr_Niveau_24_25,lyr_Niveau_25_26,lyr_Niveau_26_27,lyr_Niveau_27_28,lyr_Niveau_28_29,lyr_Niveau_29_30,lyr_Niveau_30_31,lyr_Niveau_31_32,lyr_Niveau_32_33,lyr_Niveau_33_34,lyr_Niveau_34_35,lyr_Niveau_35_36,lyr_Niveau_36_37,lyr_Niveau_37_38,lyr_Niveau_38_39,lyr_Niveau_39_40,lyr_Niveau_40_41,lyr_Niveau_41_42,lyr_Niveau_42_43,lyr_Niveau_43_44,lyr_Niveau_44_45,lyr_Niveau_45_46,lyr_Niveau_46_47,lyr_Niveau_47_48,lyr_Niveau_48_49,lyr_Niveau_49_50,lyr_Niveau_50_51,lyr_Niveau_51_52,lyr_Niveau_52_53,lyr_Niveau_53_54,lyr_Niveau_54_55,lyr_Niveau_55_56,lyr_Niveau_56_57,lyr_Niveau_57_58,lyr_Niveau_58_59,lyr_Niveau_59_60,lyr_Niveau_60_61,lyr_spots_62];
lyr_Niveau_0_1.set('fieldAliases', {'fid': 'fid', 'hauteur': 'hauteur', });
lyr_Niveau_1_2.set('fieldAliases', {'fid': 'fid', 'hauteur': 'hauteur', });
lyr_Niveau_2_3.set('fieldAliases', {'fid': 'fid', 'hauteur': 'hauteur', });
lyr_Niveau_3_4.set('fieldAliases', {'fid': 'fid', 'hauteur': 'hauteur', });
lyr_Niveau_4_5.set('fieldAliases', {'fid': 'fid', 'hauteur': 'hauteur', });
lyr_Niveau_5_6.set('fieldAliases', {'fid': 'fid', 'hauteur': 'hauteur', });
lyr_Niveau_6_7.set('fieldAliases', {'fid': 'fid', 'hauteur': 'hauteur', });
lyr_Niveau_7_8.set('fieldAliases', {'fid': 'fid', 'hauteur': 'hauteur', });
lyr_Niveau_8_9.set('fieldAliases', {'fid': 'fid', 'hauteur': 'hauteur', });
lyr_Niveau_9_10.set('fieldAliases', {'fid': 'fid', 'hauteur': 'hauteur', });
lyr_Niveau_10_11.set('fieldAliases', {'fid': 'fid', 'hauteur': 'hauteur', });
lyr_Niveau_11_12.set('fieldAliases', {'fid': 'fid', 'hauteur': 'hauteur', });
lyr_Niveau_12_13.set('fieldAliases', {'fid': 'fid', 'hauteur': 'hauteur', });
lyr_Niveau_13_14.set('fieldAliases', {'fid': 'fid', 'hauteur': 'hauteur', });
lyr_Niveau_14_15.set('fieldAliases', {'fid': 'fid', 'hauteur': 'hauteur', });
lyr_Niveau_15_16.set('fieldAliases', {'fid': 'fid', 'hauteur': 'hauteur', });
lyr_Niveau_16_17.set('fieldAliases', {'fid': 'fid', 'hauteur': 'hauteur', });
lyr_Niveau_17_18.set('fieldAliases', {'fid': 'fid', 'hauteur': 'hauteur', });
lyr_Niveau_18_19.set('fieldAliases', {'fid': 'fid', 'hauteur': 'hauteur', });
lyr_Niveau_19_20.set('fieldAliases', {'fid': 'fid', 'hauteur': 'hauteur', });
lyr_Niveau_20_21.set('fieldAliases', {'fid': 'fid', 'hauteur': 'hauteur', });
lyr_Niveau_21_22.set('fieldAliases', {'fid': 'fid', 'hauteur': 'hauteur', });
lyr_Niveau_22_23.set('fieldAliases', {'fid': 'fid', 'hauteur': 'hauteur', });
lyr_Niveau_23_24.set('fieldAliases', {'fid': 'fid', 'hauteur': 'hauteur', });
lyr_Niveau_24_25.set('fieldAliases', {'fid': 'fid', 'hauteur': 'hauteur', });
lyr_Niveau_25_26.set('fieldAliases', {'fid': 'fid', 'hauteur': 'hauteur', });
lyr_Niveau_26_27.set('fieldAliases', {'fid': 'fid', 'hauteur': 'hauteur', });
lyr_Niveau_27_28.set('fieldAliases', {'fid': 'fid', 'hauteur': 'hauteur', });
lyr_Niveau_28_29.set('fieldAliases', {'fid': 'fid', 'hauteur': 'hauteur', });
lyr_Niveau_29_30.set('fieldAliases', {'fid': 'fid', 'hauteur': 'hauteur', });
lyr_Niveau_30_31.set('fieldAliases', {'fid': 'fid', 'hauteur': 'hauteur', });
lyr_Niveau_31_32.set('fieldAliases', {'fid': 'fid', 'hauteur': 'hauteur', });
lyr_Niveau_32_33.set('fieldAliases', {'fid': 'fid', 'hauteur': 'hauteur', });
lyr_Niveau_33_34.set('fieldAliases', {'fid': 'fid', 'hauteur': 'hauteur', });
lyr_Niveau_34_35.set('fieldAliases', {'fid': 'fid', 'hauteur': 'hauteur', });
lyr_Niveau_35_36.set('fieldAliases', {'fid': 'fid', 'hauteur': 'hauteur', });
lyr_Niveau_36_37.set('fieldAliases', {'fid': 'fid', 'hauteur': 'hauteur', });
lyr_Niveau_37_38.set('fieldAliases', {'fid': 'fid', 'hauteur': 'hauteur', });
lyr_Niveau_38_39.set('fieldAliases', {'fid': 'fid', 'hauteur': 'hauteur', });
lyr_Niveau_39_40.set('fieldAliases', {'fid': 'fid', 'hauteur': 'hauteur', });
lyr_Niveau_40_41.set('fieldAliases', {'fid': 'fid', 'hauteur': 'hauteur', });
lyr_Niveau_41_42.set('fieldAliases', {'fid': 'fid', 'hauteur': 'hauteur', });
lyr_Niveau_42_43.set('fieldAliases', {'fid': 'fid', 'hauteur': 'hauteur', });
lyr_Niveau_43_44.set('fieldAliases', {'fid': 'fid', 'hauteur': 'hauteur', });
lyr_Niveau_44_45.set('fieldAliases', {'fid': 'fid', 'hauteur': 'hauteur', });
lyr_Niveau_45_46.set('fieldAliases', {'fid': 'fid', 'hauteur': 'hauteur', });
lyr_Niveau_46_47.set('fieldAliases', {'fid': 'fid', 'hauteur': 'hauteur', });
lyr_Niveau_47_48.set('fieldAliases', {'fid': 'fid', 'hauteur': 'hauteur', });
lyr_Niveau_48_49.set('fieldAliases', {'fid': 'fid', 'hauteur': 'hauteur', });
lyr_Niveau_49_50.set('fieldAliases', {'fid': 'fid', 'hauteur': 'hauteur', });
lyr_Niveau_50_51.set('fieldAliases', {'fid': 'fid', 'hauteur': 'hauteur', });
lyr_Niveau_51_52.set('fieldAliases', {'fid': 'fid', 'hauteur': 'hauteur', });
lyr_Niveau_52_53.set('fieldAliases', {'fid': 'fid', 'hauteur': 'hauteur', });
lyr_Niveau_53_54.set('fieldAliases', {'fid': 'fid', 'hauteur': 'hauteur', });
lyr_Niveau_54_55.set('fieldAliases', {'fid': 'fid', 'hauteur': 'hauteur', });
lyr_Niveau_55_56.set('fieldAliases', {'fid': 'fid', 'hauteur': 'hauteur', });
lyr_Niveau_56_57.set('fieldAliases', {'fid': 'fid', 'hauteur': 'hauteur', });
lyr_Niveau_57_58.set('fieldAliases', {'fid': 'fid', 'hauteur': 'hauteur', });
lyr_Niveau_58_59.set('fieldAliases', {'fid': 'fid', 'hauteur': 'hauteur', });
lyr_Niveau_59_60.set('fieldAliases', {'fid': 'fid', 'hauteur': 'hauteur', });
lyr_Niveau_60_61.set('fieldAliases', {'fid': 'fid', 'hauteur': 'hauteur', });
lyr_spots_62.set('fieldAliases', {'fid': 'fid', 'Ville': 'Ville', 'Spot': 'Spot', });
lyr_Niveau_0_1.set('fieldImages', {'fid': '', 'hauteur': '', });
lyr_Niveau_1_2.set('fieldImages', {'fid': '', 'hauteur': '', });
lyr_Niveau_2_3.set('fieldImages', {'fid': '', 'hauteur': '', });
lyr_Niveau_3_4.set('fieldImages', {'fid': '', 'hauteur': '', });
lyr_Niveau_4_5.set('fieldImages', {'fid': '', 'hauteur': '', });
lyr_Niveau_5_6.set('fieldImages', {'fid': '', 'hauteur': '', });
lyr_Niveau_6_7.set('fieldImages', {'fid': '', 'hauteur': '', });
lyr_Niveau_7_8.set('fieldImages', {'fid': '', 'hauteur': '', });
lyr_Niveau_8_9.set('fieldImages', {'fid': '', 'hauteur': '', });
lyr_Niveau_9_10.set('fieldImages', {'fid': '', 'hauteur': '', });
lyr_Niveau_10_11.set('fieldImages', {'fid': '', 'hauteur': '', });
lyr_Niveau_11_12.set('fieldImages', {'fid': '', 'hauteur': '', });
lyr_Niveau_12_13.set('fieldImages', {'fid': '', 'hauteur': '', });
lyr_Niveau_13_14.set('fieldImages', {'fid': '', 'hauteur': '', });
lyr_Niveau_14_15.set('fieldImages', {'fid': '', 'hauteur': '', });
lyr_Niveau_15_16.set('fieldImages', {'fid': '', 'hauteur': '', });
lyr_Niveau_16_17.set('fieldImages', {'fid': '', 'hauteur': '', });
lyr_Niveau_17_18.set('fieldImages', {'fid': '', 'hauteur': '', });
lyr_Niveau_18_19.set('fieldImages', {'fid': '', 'hauteur': '', });
lyr_Niveau_19_20.set('fieldImages', {'fid': '', 'hauteur': '', });
lyr_Niveau_20_21.set('fieldImages', {'fid': '', 'hauteur': '', });
lyr_Niveau_21_22.set('fieldImages', {'fid': '', 'hauteur': '', });
lyr_Niveau_22_23.set('fieldImages', {'fid': '', 'hauteur': '', });
lyr_Niveau_23_24.set('fieldImages', {'fid': '', 'hauteur': '', });
lyr_Niveau_24_25.set('fieldImages', {'fid': '', 'hauteur': '', });
lyr_Niveau_25_26.set('fieldImages', {'fid': '', 'hauteur': '', });
lyr_Niveau_26_27.set('fieldImages', {'fid': '', 'hauteur': '', });
lyr_Niveau_27_28.set('fieldImages', {'fid': '', 'hauteur': '', });
lyr_Niveau_28_29.set('fieldImages', {'fid': '', 'hauteur': '', });
lyr_Niveau_29_30.set('fieldImages', {'fid': '', 'hauteur': '', });
lyr_Niveau_30_31.set('fieldImages', {'fid': '', 'hauteur': '', });
lyr_Niveau_31_32.set('fieldImages', {'fid': '', 'hauteur': '', });
lyr_Niveau_32_33.set('fieldImages', {'fid': '', 'hauteur': '', });
lyr_Niveau_33_34.set('fieldImages', {'fid': '', 'hauteur': '', });
lyr_Niveau_34_35.set('fieldImages', {'fid': '', 'hauteur': '', });
lyr_Niveau_35_36.set('fieldImages', {'fid': '', 'hauteur': '', });
lyr_Niveau_36_37.set('fieldImages', {'fid': '', 'hauteur': '', });
lyr_Niveau_37_38.set('fieldImages', {'fid': '', 'hauteur': '', });
lyr_Niveau_38_39.set('fieldImages', {'fid': '', 'hauteur': '', });
lyr_Niveau_39_40.set('fieldImages', {'fid': '', 'hauteur': '', });
lyr_Niveau_40_41.set('fieldImages', {'fid': '', 'hauteur': '', });
lyr_Niveau_41_42.set('fieldImages', {'fid': '', 'hauteur': '', });
lyr_Niveau_42_43.set('fieldImages', {'fid': '', 'hauteur': '', });
lyr_Niveau_43_44.set('fieldImages', {'fid': '', 'hauteur': '', });
lyr_Niveau_44_45.set('fieldImages', {'fid': '', 'hauteur': '', });
lyr_Niveau_45_46.set('fieldImages', {'fid': '', 'hauteur': '', });
lyr_Niveau_46_47.set('fieldImages', {'fid': '', 'hauteur': '', });
lyr_Niveau_47_48.set('fieldImages', {'fid': '', 'hauteur': '', });
lyr_Niveau_48_49.set('fieldImages', {'fid': '', 'hauteur': '', });
lyr_Niveau_49_50.set('fieldImages', {'fid': '', 'hauteur': '', });
lyr_Niveau_50_51.set('fieldImages', {'fid': '', 'hauteur': '', });
lyr_Niveau_51_52.set('fieldImages', {'fid': '', 'hauteur': '', });
lyr_Niveau_52_53.set('fieldImages', {'fid': '', 'hauteur': '', });
lyr_Niveau_53_54.set('fieldImages', {'fid': '', 'hauteur': '', });
lyr_Niveau_54_55.set('fieldImages', {'fid': '', 'hauteur': '', });
lyr_Niveau_55_56.set('fieldImages', {'fid': '', 'hauteur': '', });
lyr_Niveau_56_57.set('fieldImages', {'fid': '', 'hauteur': '', });
lyr_Niveau_57_58.set('fieldImages', {'fid': '', 'hauteur': '', });
lyr_Niveau_58_59.set('fieldImages', {'fid': '', 'hauteur': '', });
lyr_Niveau_59_60.set('fieldImages', {'fid': '', 'hauteur': '', });
lyr_Niveau_60_61.set('fieldImages', {'fid': '', 'hauteur': '', });
lyr_spots_62.set('fieldImages', {'fid': 'TextEdit', 'Ville': 'TextEdit', 'Spot': 'TextEdit', });
lyr_Niveau_0_1.set('fieldLabels', {'fid': 'no label', 'hauteur': 'no label', });
lyr_Niveau_1_2.set('fieldLabels', {'fid': 'no label', 'hauteur': 'no label', });
lyr_Niveau_2_3.set('fieldLabels', {'fid': 'no label', 'hauteur': 'no label', });
lyr_Niveau_3_4.set('fieldLabels', {'fid': 'no label', 'hauteur': 'no label', });
lyr_Niveau_4_5.set('fieldLabels', {'fid': 'no label', 'hauteur': 'no label', });
lyr_Niveau_5_6.set('fieldLabels', {'fid': 'no label', 'hauteur': 'no label', });
lyr_Niveau_6_7.set('fieldLabels', {'fid': 'no label', 'hauteur': 'no label', });
lyr_Niveau_7_8.set('fieldLabels', {'fid': 'no label', 'hauteur': 'no label', });
lyr_Niveau_8_9.set('fieldLabels', {'fid': 'no label', 'hauteur': 'no label', });
lyr_Niveau_9_10.set('fieldLabels', {'fid': 'no label', 'hauteur': 'no label', });
lyr_Niveau_10_11.set('fieldLabels', {'fid': 'no label', 'hauteur': 'no label', });
lyr_Niveau_11_12.set('fieldLabels', {'fid': 'no label', 'hauteur': 'no label', });
lyr_Niveau_12_13.set('fieldLabels', {'fid': 'no label', 'hauteur': 'no label', });
lyr_Niveau_13_14.set('fieldLabels', {'fid': 'no label', 'hauteur': 'no label', });
lyr_Niveau_14_15.set('fieldLabels', {'fid': 'no label', 'hauteur': 'no label', });
lyr_Niveau_15_16.set('fieldLabels', {'fid': 'no label', 'hauteur': 'no label', });
lyr_Niveau_16_17.set('fieldLabels', {'fid': 'no label', 'hauteur': 'no label', });
lyr_Niveau_17_18.set('fieldLabels', {'fid': 'no label', 'hauteur': 'no label', });
lyr_Niveau_18_19.set('fieldLabels', {'fid': 'no label', 'hauteur': 'no label', });
lyr_Niveau_19_20.set('fieldLabels', {'fid': 'no label', 'hauteur': 'no label', });
lyr_Niveau_20_21.set('fieldLabels', {'fid': 'no label', 'hauteur': 'no label', });
lyr_Niveau_21_22.set('fieldLabels', {'fid': 'no label', 'hauteur': 'no label', });
lyr_Niveau_22_23.set('fieldLabels', {'fid': 'no label', 'hauteur': 'no label', });
lyr_Niveau_23_24.set('fieldLabels', {'fid': 'no label', 'hauteur': 'no label', });
lyr_Niveau_24_25.set('fieldLabels', {'fid': 'no label', 'hauteur': 'no label', });
lyr_Niveau_25_26.set('fieldLabels', {'fid': 'no label', 'hauteur': 'no label', });
lyr_Niveau_26_27.set('fieldLabels', {'fid': 'no label', 'hauteur': 'no label', });
lyr_Niveau_27_28.set('fieldLabels', {'fid': 'no label', 'hauteur': 'no label', });
lyr_Niveau_28_29.set('fieldLabels', {'fid': 'no label', 'hauteur': 'no label', });
lyr_Niveau_29_30.set('fieldLabels', {'fid': 'no label', 'hauteur': 'no label', });
lyr_Niveau_30_31.set('fieldLabels', {'fid': 'no label', 'hauteur': 'no label', });
lyr_Niveau_31_32.set('fieldLabels', {'fid': 'no label', 'hauteur': 'no label', });
lyr_Niveau_32_33.set('fieldLabels', {'fid': 'no label', 'hauteur': 'no label', });
lyr_Niveau_33_34.set('fieldLabels', {'fid': 'no label', 'hauteur': 'no label', });
lyr_Niveau_34_35.set('fieldLabels', {'fid': 'no label', 'hauteur': 'no label', });
lyr_Niveau_35_36.set('fieldLabels', {'fid': 'no label', 'hauteur': 'no label', });
lyr_Niveau_36_37.set('fieldLabels', {'fid': 'no label', 'hauteur': 'no label', });
lyr_Niveau_37_38.set('fieldLabels', {'fid': 'no label', 'hauteur': 'no label', });
lyr_Niveau_38_39.set('fieldLabels', {'fid': 'no label', 'hauteur': 'no label', });
lyr_Niveau_39_40.set('fieldLabels', {'fid': 'no label', 'hauteur': 'no label', });
lyr_Niveau_40_41.set('fieldLabels', {'fid': 'no label', 'hauteur': 'no label', });
lyr_Niveau_41_42.set('fieldLabels', {'fid': 'no label', 'hauteur': 'no label', });
lyr_Niveau_42_43.set('fieldLabels', {'fid': 'no label', 'hauteur': 'no label', });
lyr_Niveau_43_44.set('fieldLabels', {'fid': 'no label', 'hauteur': 'no label', });
lyr_Niveau_44_45.set('fieldLabels', {'fid': 'no label', 'hauteur': 'no label', });
lyr_Niveau_45_46.set('fieldLabels', {'fid': 'no label', 'hauteur': 'no label', });
lyr_Niveau_46_47.set('fieldLabels', {'fid': 'no label', 'hauteur': 'no label', });
lyr_Niveau_47_48.set('fieldLabels', {'fid': 'no label', 'hauteur': 'no label', });
lyr_Niveau_48_49.set('fieldLabels', {'fid': 'no label', 'hauteur': 'no label', });
lyr_Niveau_49_50.set('fieldLabels', {'fid': 'no label', 'hauteur': 'no label', });
lyr_Niveau_50_51.set('fieldLabels', {'fid': 'no label', 'hauteur': 'no label', });
lyr_Niveau_51_52.set('fieldLabels', {'fid': 'no label', 'hauteur': 'no label', });
lyr_Niveau_52_53.set('fieldLabels', {'fid': 'no label', 'hauteur': 'no label', });
lyr_Niveau_53_54.set('fieldLabels', {'fid': 'no label', 'hauteur': 'no label', });
lyr_Niveau_54_55.set('fieldLabels', {'fid': 'no label', 'hauteur': 'no label', });
lyr_Niveau_55_56.set('fieldLabels', {'fid': 'no label', 'hauteur': 'no label', });
lyr_Niveau_56_57.set('fieldLabels', {'fid': 'no label', 'hauteur': 'no label', });
lyr_Niveau_57_58.set('fieldLabels', {'fid': 'no label', 'hauteur': 'no label', });
lyr_Niveau_58_59.set('fieldLabels', {'fid': 'no label', 'hauteur': 'no label', });
lyr_Niveau_59_60.set('fieldLabels', {'fid': 'no label', 'hauteur': 'no label', });
lyr_Niveau_60_61.set('fieldLabels', {'fid': 'no label', 'hauteur': 'no label', });
lyr_spots_62.set('fieldLabels', {'fid': 'hidden field', 'Ville': 'no label', 'Spot': 'header label - visible with data', });
lyr_spots_62.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});