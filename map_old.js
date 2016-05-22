var map;

require(["esri/map",
	"esri/geometry/Extent",
	"esri/SpatialReference",
	"esri/layers/FeatureLayer",
	"dojo/domReady!"
	],
	
	function(Map, Extent, SpatialReference, FeatureLayer)
	{
		// Load map centered on Friendship Heights - approx. coord 77.09 W, 38.96325 N
		var centerN = 38.96325;
		var centerW = -77.09;
		var minX = centerW - 0.05;
		var maxX = centerW + 0.05;
		var minY = centerN - 0.05;
		var maxY = centerN + 0.05;
		var mapBox = new Extent(minX,minY,maxX,maxY,new SpatialReference({ wkid:4326 }));
		
		map = new Map("mapDiv",
		{
			// Define map viewport			
			extent: mapBox,
			//center: [-82.44109, 35.6122],
			zoom: 15,
			slider: true,
			showLabels : true,
			logo: false,
			
			
			// Map type -- Use streets or hybrid
			basemap: "streets"
		} );

		
		// Feature Layer
		var featureLayer = new FeatureLayer("http://services3.arcgis.com/r73KkuTXcWOwXTCC/arcgis/rest/services/Emergency_Calls/FeatureServer/0");
		
		map.addLayer(featureLayer);
	}
);