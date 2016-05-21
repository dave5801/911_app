var map;

require(["esri/map",
	"esri/geometry/Extent",
	"esri/SpatialReference",
	"esri/layers/FeatureLayer",
	"dojo/domReady!"
	],
	
	function(Map, Extent, FeatureLayer)
	{
		// Load map centered on Friendship Heights - approx. coord 77.09 W, 38.96325 N
		var mapBox = new Extent({"xmin":-77.14,"ymin":38.91325,"xmax":-77.04,"ymax":39.01325,"spatialReference":{"wkid":4326} });
		
		map = new Map("mapDiv",
		{
			// Define map viewport			
			extent: mapBox,
			zoom: 15,
			slider: true,
			showLabels : true,
			logo: false,
			
			// Map type -- Use streets or hybrid
			basemap: "streets"
		} );
		
		// Feature Layer
		var featureLayer = new FeatureLayer("https://services.arcgis.com/V6ZHFr6zdgNZuVG0/arcgis/rest/services/Landscape_Trees/FeatureServer/0");

    map.addLayer(featureLayer);
	}
);