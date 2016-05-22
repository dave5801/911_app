require([
	"dojo/parser",
	"dojo/ready",
	"dijit/layout/BorderContainer",
	"dijit/layout/ContentPane",
	"dojo/dom",
	"esri/map",
	"esri/urlUtils",
	"esri/arcgis/utils",
	"dojo/domReady!"
	],
	
	function(parser, ready, BorderContainer, ContentPane, dom, Map, urlUtils, arcgisUtils)
	{
		ready(function()
		{
			parser.parse();
			
			arcgisUtils.createMap("8586e1087a074db598bc0c779aceb2a8","map").then(function(response)
			{
				var map = response.map;
			} );
		} );
	}
) ;