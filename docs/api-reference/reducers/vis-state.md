<!-- Generated by documentation.js. Update this documentation by updating the source code. -->

### Table of Contents

-   [INITIAL_VIS_STATE][1]
-   [layerConfigChangeUpdater][2]
-   [layerTypeChangeUpdater][3]
-   [layerVisualChannelChangeUpdater][4]
-   [layerVisConfigChangeUpdater][5]
-   [interactionConfigChangeUpdater][6]
-   [setFilterUpdater][7]
-   [setFilterPlotUpdater][8]
-   [addFilterUpdater][9]
-   [toggleFilterAnimationUpdater][10]
-   [updateAnimationSpeedUpdater][11]
-   [enlargeFilterUpdater][12]
-   [removeFilterUpdater][13]
-   [addLayerUpdater][14]
-   [removeLayerUpdater][15]
-   [reorderLayerUpdater][16]
-   [removeDatasetUpdater][17]
-   [updateLayerBlendingUpdater][18]
-   [showDatasetTableUpdater][19]
-   [resetMapConfigVisStateUpdater][20]
-   [receiveMapConfigUpdater][21]
-   [layerHoverUpdater][22]
-   [layerClickUpdater][23]
-   [mapClickUpdater][24]
-   [toggleSplitMapUpdater][25]
-   [setVisibleLayersForMapUpdater][26]
-   [updateVisDataUpdater][27]
-   [loadFilesUpdater][28]

## INITIAL_VIS_STATE

Default initial `visState`

Type: [Object][29]

### Properties

-   `layers` **[Array][30]** 
-   `layerData` **[Array][30]** 
-   `layerToBeMerged` **[Array][30]** 
-   `layerOrder` **[Array][30]** 
-   `filters` **[Array][30]** 
-   `filterToBeMerged` **[Array][30]** 
-   `datasets` **[Array][30]** 
-   `editingDataset` **[string][31]** 
-   `interactionConfig` **[Object][29]** 
-   `interactionToBeMerged` **[Object][29]** 
-   `layerBlending` **[string][31]** 
-   `hoverInfo` **[Object][29]** 
-   `clicked` **[Object][29]** 
-   `fileLoading` **[boolean][32]** 
-   `fileLoadingErr` **any** 
-   `splitMaps` **[Array][30]** a list of objects of layer availabilities and visibilities for each map

## layerConfigChangeUpdater

Called to update layer base config: dataId, label, column, isVisible

### Parameters

-   `state`  
-   `action`  

## layerTypeChangeUpdater

Update layer type

### Parameters

-   `state`  
-   `action`  

## layerVisualChannelChangeUpdater

Update layer visual channel

### Parameters

-   `state`  
-   `action`  

## layerVisConfigChangeUpdater

Update layer vis config

### Parameters

-   `state`  
-   `action`  

## interactionConfigChangeUpdater

Update interactionConfig

### Parameters

-   `state`  
-   `action`  

## setFilterUpdater

Update filter

### Parameters

-   `state`  
-   `action`  

## setFilterPlotUpdater

Update filter plot

### Parameters

-   `state`  
-   `$1` **[Object][29]** 
    -   `$1.idx`  
    -   `$1.newProp`  

## addFilterUpdater

Add filter

### Parameters

-   `state`  
-   `action`  

## toggleFilterAnimationUpdater

toggle filter animation

### Parameters

-   `state`  
-   `action`  

## updateAnimationSpeedUpdater

update filter animation speed

### Parameters

-   `state`  
-   `action`  

## enlargeFilterUpdater

enlarge filter to time playback (apply to time filter only)

### Parameters

-   `state`  
-   `action`  

## removeFilterUpdater

remove filter

### Parameters

-   `state`  
-   `action`  

## addLayerUpdater

add layer

### Parameters

-   `state`  
-   `action`  

## removeLayerUpdater

remove layer

### Parameters

-   `state`  
-   `$1` **[Object][29]** 
    -   `$1.idx`  

## reorderLayerUpdater

reorder layer, update layerOrder

### Parameters

-   `state`  
-   `$1` **[Object][29]** 
    -   `$1.order`  

## removeDatasetUpdater

remove a dataset and all layers, filters, tooltip configs that based on it

### Parameters

-   `state`  
-   `action`  

## updateLayerBlendingUpdater

update layer blending

### Parameters

-   `state`  
-   `action`  

## showDatasetTableUpdater

show dataset table

### Parameters

-   `state`  
-   `action`  

## resetMapConfigVisStateUpdater

reset visState to initial State

### Parameters

-   `state`  
-   `action`  

## receiveMapConfigUpdater

Loads custom configuration into state

### Parameters

-   `state`  
-   `action`  

Returns **any** 

## layerHoverUpdater

update hovered object

### Parameters

-   `state` **any** 
-   `action` **any** 

## layerClickUpdater

update clicked object

### Parameters

-   `state` **any** 
-   `action` **any** 

## mapClickUpdater

action triggered by clicking on map

### Parameters

-   `state` **any** 
-   `action` **any** 

## toggleSplitMapUpdater

toggle split map

### Parameters

-   `state` **any** 
-   `action` **any** 

## setVisibleLayersForMapUpdater

This is triggered when view is split into multiple maps.
It will only update layers that belong to the map layer dropdown
the user is interacting wit

### Parameters

-   `state`  
-   `action`  

## updateVisDataUpdater

Add new datasets

### Parameters

-   `state` **any** 
-   `action` **any** 

## loadFilesUpdater

Trigger file loading dispatch `addDataToMap` if succeed, or `loadFilesErr` if failed

### Parameters

-   `state` **any** 
-   `action` **any** 

[1]: #initial_vis_state

[2]: #layerconfigchangeupdater

[3]: #layertypechangeupdater

[4]: #layervisualchannelchangeupdater

[5]: #layervisconfigchangeupdater

[6]: #interactionconfigchangeupdater

[7]: #setfilterupdater

[8]: #setfilterplotupdater

[9]: #addfilterupdater

[10]: #togglefilteranimationupdater

[11]: #updateanimationspeedupdater

[12]: #enlargefilterupdater

[13]: #removefilterupdater

[14]: #addlayerupdater

[15]: #removelayerupdater

[16]: #reorderlayerupdater

[17]: #removedatasetupdater

[18]: #updatelayerblendingupdater

[19]: #showdatasettableupdater

[20]: #resetmapconfigvisstateupdater

[21]: #receivemapconfigupdater

[22]: #layerhoverupdater

[23]: #layerclickupdater

[24]: #mapclickupdater

[25]: #togglesplitmapupdater

[26]: #setvisiblelayersformapupdater

[27]: #updatevisdataupdater

[28]: #loadfilesupdater

[29]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object

[30]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array

[31]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String

[32]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean