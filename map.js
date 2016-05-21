var map;
		require(["esri/map", "dojo/domReady!", "esri/geometry/Extent", "esri/SpatialReference"],
			function(Map)
			{
				map = new Map("mapDiv",
				{
					center: [-77.09, 38.96325],
					zoom: 15,
					basemap: "streets",
					slider: true,
					logo: false
				} );
			}
		);