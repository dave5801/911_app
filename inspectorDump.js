{
	"objectIdFieldName":"OBJECTID",
	"globalIdFieldName":"GlobalID",
	"geometryType":"esriGeometryPoint",
	"spatialReference":{"wkid":102100,"latestWkid":3857},
	"fields":
	[
		{
			"name":"OBJECTID",
			"type":"esriFieldTypeOID",
			"alias":"OBJECTID",
			"sqlType":"sqlTypeOther",
			"domain":null,
			"defaultValue":null
		},
		{
			"name":"HealthProfile",
			"type":"esriFieldTypeString",
			"alias":"HealthProfile",
			"sqlType":"sqlTypeNVarchar",
			"length":256,
			"domain":null,
			"defaultValue":null
		},
		{
			"name":"EmergencyType",
			"type":"esriFieldTypeString",
			"alias":"EmergencyType",
			"sqlType":"sqlTypeNVarchar",
			"length":256,
			"domain":null,
			"defaultValue":null
		},
		{
			"name":"OtherInfo",
			"type":"esriFieldTypeString",
			"alias":"OtherInfo",
			"sqlType":"sqlTypeNVarchar",
			"length":256,
			"domain":null,
			"defaultValue":null
		},
		{
			"name":"CallSent",
			"type":"esriFieldTypeString",
			"alias":"CallSent",
			"sqlType":"sqlTypeNVarchar",
			"length":256,
			"domain":null,
			"defaultValue":null
		},
		{
			"name":"GlobalID",
			"type":"esriFieldTypeGlobalID",
			"alias":"GlobalID",
			"sqlType":"sqlTypeOther",
			"length":38,
			"domain":null,
			"defaultValue":null
		}
	],
	"features":
	[
		{
			"attributes":
			{
				"OBJECTID":1,
				"HealthProfile":"Diabetes",
				"EmergencyType":"Medical",
				"OtherInfo":"N/A",
				"CallSent":"N/A",
				"GlobalID":"cd709343-367b-4ee2-a799-b71eb32c11a0"
			},
			"geometry":
			{
				"x":-8581155.0442832969,
				"y":4716057.0481398925
			}
		},
		{
			"attributes":
			{
				"OBJECTID":2,
				"HealthProfile":"N/A",
				"EmergencyType":"Police",
				"OtherInfo":"Assault",
				"CallSent":"Yes",
				"GlobalID":"ae7be146-486d-48e3-b72b-ec7c893d8685"
			},
			"geometry":
			{
				"x":-8581503.78822482,"y":4716227.8371249521
			}
		}
	]
}