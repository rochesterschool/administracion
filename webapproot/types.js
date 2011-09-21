wm.types = {
	"types": {
		"boolean": {
			"internal": true,
			"primitiveType": "Boolean"
		},
		"byte": {
			"internal": true,
			"primitiveType": "Number"
		},
		"char": {
			"internal": true,
			"primitiveType": "String"
		},
		"com.aprendoz_desarrollo.data.Actividad": {
			"fields": {
				"actividad": {
					"exclude": [],
					"fieldOrder": 1,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"fecha": {
					"exclude": [],
					"fieldOrder": 2,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.util.Date"
				},
				"idActividad": {
					"exclude": ["insert"],
					"fieldOrder": 0,
					"include": ["delete", "read", "update"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"idSyIdIdSy": {
					"exclude": [],
					"fieldOrder": 4,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.Integer"
				},
				"inscAlumActividads": {
					"exclude": [],
					"fieldOrder": 9,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.aprendoz_desarrollo.data.InscAlumActividad"
				},
				"requeridoAlternativo": {
					"exclude": [],
					"fieldOrder": 3,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.Boolean"
				},
				"subtopico": {
					"exclude": [],
					"fieldOrder": 5,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "com.aprendoz_desarrollo.data.Subtopico"
				},
				"tipoActividad": {
					"exclude": [],
					"fieldOrder": 8,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "com.aprendoz_desarrollo.data.TipoActividad"
				},
				"tipoDesempeno": {
					"exclude": [],
					"fieldOrder": 7,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "com.aprendoz_desarrollo.data.TipoDesempeno"
				},
				"tipoValoracion": {
					"exclude": [],
					"fieldOrder": 6,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "com.aprendoz_desarrollo.data.TipoValoracion"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "aprendoz_desarrollo"
		},
		"com.aprendoz_desarrollo.data.Anuncio": {
			"fields": {
				"anuncio": {
					"exclude": [],
					"fieldOrder": 0,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "aprendoz_desarrollo"
		},
		"com.aprendoz_desarrollo.data.Aprendizaje": {
			"fields": {
				"aprendizaje": {
					"exclude": [],
					"fieldOrder": 2,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"calificacionFinals": {
					"exclude": [],
					"fieldOrder": 15,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.aprendoz_desarrollo.data.CalificacionFinal"
				},
				"dimensionComprension": {
					"exclude": [],
					"fieldOrder": 10,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "com.aprendoz_desarrollo.data.DimensionComprension"
				},
				"dimensionCurricular": {
					"exclude": [],
					"fieldOrder": 13,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "com.aprendoz_desarrollo.data.DimensionCurricular"
				},
				"eje2IdEje": {
					"exclude": [],
					"fieldOrder": 6,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.Integer"
				},
				"eje3IdEje": {
					"exclude": [],
					"fieldOrder": 7,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.Integer"
				},
				"ejeIdEje": {
					"exclude": [],
					"fieldOrder": 5,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.Integer"
				},
				"fechaEsperada": {
					"exclude": [],
					"fieldOrder": 1,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.util.Date"
				},
				"idAprendizaje": {
					"exclude": ["insert"],
					"fieldOrder": 0,
					"include": ["delete", "read", "update"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"idSyIdIdSy": {
					"exclude": [],
					"fieldOrder": 8,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.Integer"
				},
				"inscAlumAprendizajes": {
					"exclude": [],
					"fieldOrder": 14,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.aprendoz_desarrollo.data.InscAlumAprendizaje"
				},
				"inteligencia": {
					"exclude": [],
					"fieldOrder": 9,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "com.aprendoz_desarrollo.data.Inteligencia"
				},
				"learning": {
					"exclude": [],
					"fieldOrder": 3,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"nivelEsperado": {
					"exclude": [],
					"fieldOrder": 12,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "com.aprendoz_desarrollo.data.NivelEsperado"
				},
				"peso": {
					"exclude": [],
					"fieldOrder": 4,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.Integer"
				},
				"subtopico": {
					"exclude": [],
					"fieldOrder": 11,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "com.aprendoz_desarrollo.data.Subtopico"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "aprendoz_desarrollo"
		},
		"com.aprendoz_desarrollo.data.Area": {
			"fields": {
				"area": {
					"exclude": [],
					"fieldOrder": 1,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"areaName": {
					"exclude": [],
					"fieldOrder": 2,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"idArea": {
					"exclude": ["insert"],
					"fieldOrder": 0,
					"include": ["delete", "read", "update"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"idSyIdIdSy": {
					"exclude": [],
					"fieldOrder": 4,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.Integer"
				},
				"intensidadHoraria": {
					"exclude": [],
					"fieldOrder": 3,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.Integer"
				},
				"subareas": {
					"exclude": [],
					"fieldOrder": 5,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.aprendoz_desarrollo.data.Subarea"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "aprendoz_desarrollo"
		},
		"com.aprendoz_desarrollo.data.Asignatura": {
			"fields": {
				"asignatura": {
					"exclude": [],
					"fieldOrder": 1,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"descripAsigEspaniol": {
					"exclude": [],
					"fieldOrder": 13,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"descripAsigIngles": {
					"exclude": [],
					"fieldOrder": 14,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"electiva": {
					"exclude": [],
					"fieldOrder": 3,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.Boolean"
				},
				"grado": {
					"exclude": [],
					"fieldOrder": 15,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "com.aprendoz_desarrollo.data.Grado"
				},
				"idArea1": {
					"exclude": [],
					"fieldOrder": 4,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.Integer"
				},
				"idArea2": {
					"exclude": [],
					"fieldOrder": 5,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.Integer"
				},
				"idArea3": {
					"exclude": [],
					"fieldOrder": 6,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.Integer"
				},
				"idAsignatura": {
					"exclude": [],
					"fieldOrder": 0,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"idSubarea1": {
					"exclude": [],
					"fieldOrder": 7,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.Integer"
				},
				"idSubarea2": {
					"exclude": [],
					"fieldOrder": 8,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.Integer"
				},
				"idSubarea3": {
					"exclude": [],
					"fieldOrder": 9,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.Integer"
				},
				"inscAlumAsigs": {
					"exclude": [],
					"fieldOrder": 21,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.aprendoz_desarrollo.data.InscAlumAsig"
				},
				"inscCursoAsigs": {
					"exclude": [],
					"fieldOrder": 19,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.aprendoz_desarrollo.data.InscCursoAsig"
				},
				"inscDocAsigs": {
					"exclude": [],
					"fieldOrder": 20,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.aprendoz_desarrollo.data.InscDocAsig"
				},
				"intensidadHoraria": {
					"exclude": [],
					"fieldOrder": 11,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.Float"
				},
				"peso": {
					"exclude": [],
					"fieldOrder": 12,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.Integer"
				},
				"salonIdSalon": {
					"exclude": [],
					"fieldOrder": 10,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.Integer"
				},
				"subject": {
					"exclude": [],
					"fieldOrder": 2,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"sy": {
					"exclude": [],
					"fieldOrder": 17,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "com.aprendoz_desarrollo.data.Sy"
				},
				"tipoInscAsig": {
					"exclude": [],
					"fieldOrder": 16,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "com.aprendoz_desarrollo.data.TipoInscAsig"
				},
				"unidads": {
					"exclude": [],
					"fieldOrder": 18,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.aprendoz_desarrollo.data.Unidad"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "aprendoz_desarrollo"
		},
		"com.aprendoz_desarrollo.data.CalifEst": {
			"fields": {
				"id": {
					"exclude": [],
					"fieldOrder": 0,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "com.aprendoz_desarrollo.data.CalifEstId"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "aprendoz_desarrollo"
		},
		"com.aprendoz_desarrollo.data.CalifEstId": {
			"fields": {
				"apellido1": {
					"exclude": [],
					"fieldOrder": 2,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"apellido2": {
					"exclude": [],
					"fieldOrder": 3,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"aprendizaje": {
					"exclude": [],
					"fieldOrder": 10,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"asignatura": {
					"exclude": [],
					"fieldOrder": 7,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"calificacion": {
					"exclude": [],
					"fieldOrder": 12,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"fechaEsperada": {
					"exclude": [],
					"fieldOrder": 11,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.util.Date"
				},
				"fechaLogro": {
					"exclude": [],
					"fieldOrder": 13,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.util.Date"
				},
				"grupoFamiliar": {
					"exclude": [],
					"fieldOrder": 0,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"idAsignatura": {
					"exclude": [],
					"fieldOrder": 6,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"idPersona": {
					"exclude": [],
					"fieldOrder": 1,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"nombre1": {
					"exclude": [],
					"fieldOrder": 4,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"nombre2": {
					"exclude": [],
					"fieldOrder": 5,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"subtopico": {
					"exclude": [],
					"fieldOrder": 9,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"unidad": {
					"exclude": [],
					"fieldOrder": 8,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				}
			},
			"internal": false,
			"liveService": false,
			"service": "aprendoz_desarrollo"
		},
		"com.aprendoz_desarrollo.data.CalificacionFinal": {
			"fields": {
				"aprendizaje": {
					"exclude": [],
					"fieldOrder": 5,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "com.aprendoz_desarrollo.data.Aprendizaje"
				},
				"calificacion": {
					"exclude": [],
					"fieldOrder": 2,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"calificacionNum": {
					"exclude": [],
					"fieldOrder": 1,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.Float"
				},
				"idCalificacionFinal": {
					"exclude": ["insert"],
					"fieldOrder": 0,
					"include": ["delete", "read", "update"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"idSyIdIdSy": {
					"exclude": [],
					"fieldOrder": 3,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.Integer"
				},
				"persona": {
					"exclude": [],
					"fieldOrder": 4,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "com.aprendoz_desarrollo.data.Persona"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "aprendoz_desarrollo"
		},
		"com.aprendoz_desarrollo.data.Calificaciones": {
			"fields": {
				"calificacion": {
					"exclude": [],
					"fieldOrder": 1,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"calificacionNum": {
					"exclude": [],
					"fieldOrder": 2,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.Integer"
				},
				"comentario": {
					"exclude": [],
					"fieldOrder": 4,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"fechaIngreso": {
					"exclude": [],
					"fieldOrder": 5,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.util.Date"
				},
				"fechaLogro": {
					"exclude": [],
					"fieldOrder": 3,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.util.Date"
				},
				"idCalificaciones": {
					"exclude": ["insert"],
					"fieldOrder": 0,
					"include": ["delete", "read", "update"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"inscAlumAprendizaje": {
					"exclude": [],
					"fieldOrder": 6,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "com.aprendoz_desarrollo.data.InscAlumAprendizaje"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "aprendoz_desarrollo"
		},
		"com.aprendoz_desarrollo.data.Curso": {
			"fields": {
				"curso": {
					"exclude": [],
					"fieldOrder": 1,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"grado": {
					"exclude": [],
					"fieldOrder": 2,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "com.aprendoz_desarrollo.data.Grado"
				},
				"idCurso": {
					"exclude": [],
					"fieldOrder": 0,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"inscAlumCursos": {
					"exclude": [],
					"fieldOrder": 4,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.aprendoz_desarrollo.data.InscAlumCurso"
				},
				"inscCursoAsigs": {
					"exclude": [],
					"fieldOrder": 3,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.aprendoz_desarrollo.data.InscCursoAsig"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "aprendoz_desarrollo"
		},
		"com.aprendoz_desarrollo.data.DimensionComprension": {
			"fields": {
				"aprendizajes": {
					"exclude": [],
					"fieldOrder": 2,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.aprendoz_desarrollo.data.Aprendizaje"
				},
				"dimensionComprension": {
					"exclude": [],
					"fieldOrder": 1,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"idDimension": {
					"exclude": [],
					"fieldOrder": 0,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "aprendoz_desarrollo"
		},
		"com.aprendoz_desarrollo.data.DimensionCurricular": {
			"fields": {
				"aprendizajes": {
					"exclude": [],
					"fieldOrder": 2,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.aprendoz_desarrollo.data.Aprendizaje"
				},
				"dimensionCurricular": {
					"exclude": [],
					"fieldOrder": 1,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"idDimension": {
					"exclude": [],
					"fieldOrder": 0,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "aprendoz_desarrollo"
		},
		"com.aprendoz_desarrollo.data.Eje": {
			"fields": {
				"activo": {
					"exclude": [],
					"fieldOrder": 3,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.Boolean"
				},
				"axis": {
					"exclude": [],
					"fieldOrder": 2,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"ejeTematico": {
					"exclude": [],
					"fieldOrder": 1,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"idEje": {
					"exclude": [],
					"fieldOrder": 0,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"subarea": {
					"exclude": [],
					"fieldOrder": 4,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "com.aprendoz_desarrollo.data.Subarea"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "aprendoz_desarrollo"
		},
		"com.aprendoz_desarrollo.data.EstadoDepartamento": {
			"fields": {
				"estado": {
					"exclude": [],
					"fieldOrder": 1,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"idEstados": {
					"exclude": ["insert"],
					"fieldOrder": 0,
					"include": ["delete", "read", "update"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"pais": {
					"exclude": [],
					"fieldOrder": 2,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "com.aprendoz_desarrollo.data.Pais"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "aprendoz_desarrollo"
		},
		"com.aprendoz_desarrollo.data.EventualidadPersonas": {
			"fields": {
				"eventualidades": {
					"exclude": [],
					"fieldOrder": 1,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "com.aprendoz_desarrollo.data.Eventualidades"
				},
				"idEventualidadPersonas": {
					"exclude": ["insert"],
					"fieldOrder": 0,
					"include": ["delete", "read", "update"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"persona": {
					"exclude": [],
					"fieldOrder": 2,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "com.aprendoz_desarrollo.data.Persona"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "aprendoz_desarrollo"
		},
		"com.aprendoz_desarrollo.data.Eventualidades": {
			"fields": {
				"descripcion": {
					"exclude": [],
					"fieldOrder": 4,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"estado": {
					"exclude": [],
					"fieldOrder": 3,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"eventualidadPersonases": {
					"exclude": [],
					"fieldOrder": 7,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.aprendoz_desarrollo.data.EventualidadPersonas"
				},
				"fecha": {
					"exclude": [],
					"fieldOrder": 1,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.util.Date"
				},
				"idEventualidad": {
					"exclude": ["insert"],
					"fieldOrder": 0,
					"include": ["delete", "read", "update"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"lugar": {
					"exclude": [],
					"fieldOrder": 2,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"persona": {
					"exclude": [],
					"fieldOrder": 5,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "com.aprendoz_desarrollo.data.Persona"
				},
				"subtipoEventualidad": {
					"exclude": [],
					"fieldOrder": 6,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "com.aprendoz_desarrollo.data.SubtipoEventualidad"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "aprendoz_desarrollo"
		},
		"com.aprendoz_desarrollo.data.Foto": {
			"fields": {
				"codigo": {
					"exclude": [],
					"fieldOrder": 0,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"foto": {
					"exclude": [],
					"fieldOrder": 1,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "byte"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "aprendoz_desarrollo"
		},
		"com.aprendoz_desarrollo.data.Grado": {
			"fields": {
				"asignaturas": {
					"exclude": [],
					"fieldOrder": 4,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.aprendoz_desarrollo.data.Asignatura"
				},
				"cursos": {
					"exclude": [],
					"fieldOrder": 5,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.aprendoz_desarrollo.data.Curso"
				},
				"grade": {
					"exclude": [],
					"fieldOrder": 2,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"grado": {
					"exclude": [],
					"fieldOrder": 1,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"idGrado": {
					"exclude": [],
					"fieldOrder": 0,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"nivel": {
					"exclude": [],
					"fieldOrder": 3,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "com.aprendoz_desarrollo.data.Nivel"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "aprendoz_desarrollo"
		},
		"com.aprendoz_desarrollo.data.GrupoFamiliar": {
			"fields": {
				"grupoFamiliar": {
					"exclude": [],
					"fieldOrder": 1,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"grupoLdap": {
					"exclude": [],
					"fieldOrder": 2,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"idGrupoFamiliar": {
					"exclude": ["insert"],
					"fieldOrder": 0,
					"include": ["delete", "read", "update"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"personas": {
					"exclude": [],
					"fieldOrder": 3,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.aprendoz_desarrollo.data.Persona"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "aprendoz_desarrollo"
		},
		"com.aprendoz_desarrollo.data.HistorialCalificaciones": {
			"fields": {
				"calificacion": {
					"exclude": [],
					"fieldOrder": 1,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"calificacionNum": {
					"exclude": [],
					"fieldOrder": 2,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.Integer"
				},
				"comentario": {
					"exclude": [],
					"fieldOrder": 4,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"fechaIngreso": {
					"exclude": [],
					"fieldOrder": 5,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.util.Date"
				},
				"fechaLogro": {
					"exclude": [],
					"fieldOrder": 3,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.util.Date"
				},
				"idHistorialCalificaciones": {
					"exclude": ["insert"],
					"fieldOrder": 0,
					"include": ["delete", "read", "update"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"inscAlumAprendizaje": {
					"exclude": [],
					"fieldOrder": 6,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "com.aprendoz_desarrollo.data.InscAlumAprendizaje"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "aprendoz_desarrollo"
		},
		"com.aprendoz_desarrollo.data.InscAlumActividad": {
			"fields": {
				"actividad": {
					"exclude": [],
					"fieldOrder": 4,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "com.aprendoz_desarrollo.data.Actividad"
				},
				"comentario": {
					"exclude": [],
					"fieldOrder": 3,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"fecha": {
					"exclude": [],
					"fieldOrder": 2,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.util.Date"
				},
				"idInscAlumActividad": {
					"exclude": ["insert"],
					"fieldOrder": 0,
					"include": ["delete", "read", "update"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"logrado": {
					"exclude": [],
					"fieldOrder": 1,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.Boolean"
				},
				"persona": {
					"exclude": [],
					"fieldOrder": 5,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "com.aprendoz_desarrollo.data.Persona"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "aprendoz_desarrollo"
		},
		"com.aprendoz_desarrollo.data.InscAlumAprendizaje": {
			"fields": {
				"aprendizaje": {
					"exclude": [],
					"fieldOrder": 10,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "com.aprendoz_desarrollo.data.Aprendizaje"
				},
				"calificacion": {
					"exclude": [],
					"fieldOrder": 3,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"calificacionNum": {
					"exclude": [],
					"fieldOrder": 4,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.Float"
				},
				"calificacioneses": {
					"exclude": [],
					"fieldOrder": 11,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.aprendoz_desarrollo.data.Calificaciones"
				},
				"comentario": {
					"exclude": [],
					"fieldOrder": 5,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"fechaIngreso": {
					"exclude": [],
					"fieldOrder": 6,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.util.Date"
				},
				"fechaLogro": {
					"exclude": [],
					"fieldOrder": 2,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.util.Date"
				},
				"historialCalificacioneses": {
					"exclude": [],
					"fieldOrder": 12,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.aprendoz_desarrollo.data.HistorialCalificaciones"
				},
				"idInscAlumAprendizaje": {
					"exclude": ["insert"],
					"fieldOrder": 0,
					"include": ["delete", "read", "update"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"idSy": {
					"exclude": [],
					"fieldOrder": 1,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.Integer"
				},
				"inscAlumCurso": {
					"exclude": [],
					"fieldOrder": 9,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "com.aprendoz_desarrollo.data.InscAlumCurso"
				},
				"periodoIdPeriodo": {
					"exclude": [],
					"fieldOrder": 7,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.Integer"
				},
				"persona": {
					"exclude": [],
					"fieldOrder": 8,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "com.aprendoz_desarrollo.data.Persona"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "aprendoz_desarrollo"
		},
		"com.aprendoz_desarrollo.data.InscAlumAsig": {
			"fields": {
				"asignatura": {
					"exclude": [],
					"fieldOrder": 6,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "com.aprendoz_desarrollo.data.Asignatura"
				},
				"califChar": {
					"exclude": [],
					"fieldOrder": 5,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"calificacion": {
					"exclude": [],
					"fieldOrder": 1,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.math.BigDecimal"
				},
				"esperados": {
					"exclude": [],
					"fieldOrder": 3,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.Integer"
				},
				"idInscAlumAsig": {
					"exclude": ["insert"],
					"fieldOrder": 0,
					"include": ["delete", "read", "update"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"logrados": {
					"exclude": [],
					"fieldOrder": 4,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.Integer"
				},
				"periodo": {
					"exclude": [],
					"fieldOrder": 8,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "com.aprendoz_desarrollo.data.Periodo"
				},
				"persona": {
					"exclude": [],
					"fieldOrder": 7,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "com.aprendoz_desarrollo.data.Persona"
				},
				"porcentaje": {
					"exclude": [],
					"fieldOrder": 2,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.math.BigDecimal"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "aprendoz_desarrollo"
		},
		"com.aprendoz_desarrollo.data.InscAlumCurso": {
			"fields": {
				"califChar": {
					"exclude": [],
					"fieldOrder": 2,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"calificacion": {
					"exclude": [],
					"fieldOrder": 1,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.Integer"
				},
				"curso": {
					"exclude": [],
					"fieldOrder": 4,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "com.aprendoz_desarrollo.data.Curso"
				},
				"fechaMatricula": {
					"exclude": [],
					"fieldOrder": 3,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.util.Date"
				},
				"idInscAlumCurso": {
					"exclude": ["insert"],
					"fieldOrder": 0,
					"include": ["delete", "read", "update"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"inscAlumAprendizajes": {
					"exclude": [],
					"fieldOrder": 7,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.aprendoz_desarrollo.data.InscAlumAprendizaje"
				},
				"persona": {
					"exclude": [],
					"fieldOrder": 6,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "com.aprendoz_desarrollo.data.Persona"
				},
				"sy": {
					"exclude": [],
					"fieldOrder": 5,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "com.aprendoz_desarrollo.data.Sy"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "aprendoz_desarrollo"
		},
		"com.aprendoz_desarrollo.data.InscCursoAsig": {
			"fields": {
				"asignatura": {
					"exclude": [],
					"fieldOrder": 2,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "com.aprendoz_desarrollo.data.Asignatura"
				},
				"curso": {
					"exclude": [],
					"fieldOrder": 1,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "com.aprendoz_desarrollo.data.Curso"
				},
				"idInscCursoAsig": {
					"exclude": ["insert"],
					"fieldOrder": 0,
					"include": ["delete", "read", "update"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Long"
				},
				"periodo": {
					"exclude": [],
					"fieldOrder": 4,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "com.aprendoz_desarrollo.data.Periodo"
				},
				"persona": {
					"exclude": [],
					"fieldOrder": 3,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "com.aprendoz_desarrollo.data.Persona"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "aprendoz_desarrollo"
		},
		"com.aprendoz_desarrollo.data.InscDocAsig": {
			"fields": {
				"asignatura": {
					"exclude": [],
					"fieldOrder": 2,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "com.aprendoz_desarrollo.data.Asignatura"
				},
				"fechaCreacion": {
					"exclude": [],
					"fieldOrder": 1,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.util.Date"
				},
				"idInscDocAsig": {
					"exclude": ["insert"],
					"fieldOrder": 0,
					"include": ["delete", "read", "update"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"persona": {
					"exclude": [],
					"fieldOrder": 4,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "com.aprendoz_desarrollo.data.Persona"
				},
				"sy": {
					"exclude": [],
					"fieldOrder": 3,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "com.aprendoz_desarrollo.data.Sy"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "aprendoz_desarrollo"
		},
		"com.aprendoz_desarrollo.data.Inteligencia": {
			"fields": {
				"aprendizajes": {
					"exclude": [],
					"fieldOrder": 2,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.aprendoz_desarrollo.data.Aprendizaje"
				},
				"idInteligencia": {
					"exclude": [],
					"fieldOrder": 0,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"inteligencia": {
					"exclude": [],
					"fieldOrder": 1,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "aprendoz_desarrollo"
		},
		"com.aprendoz_desarrollo.data.LogEventos": {
			"fields": {
				"dato1": {
					"exclude": [],
					"fieldOrder": 3,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"dato10": {
					"exclude": [],
					"fieldOrder": 12,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"dato2": {
					"exclude": [],
					"fieldOrder": 4,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"dato3": {
					"exclude": [],
					"fieldOrder": 5,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"dato4": {
					"exclude": [],
					"fieldOrder": 6,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"dato5": {
					"exclude": [],
					"fieldOrder": 7,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"dato6": {
					"exclude": [],
					"fieldOrder": 8,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"dato7": {
					"exclude": [],
					"fieldOrder": 9,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"dato8": {
					"exclude": [],
					"fieldOrder": 10,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"dato9": {
					"exclude": [],
					"fieldOrder": 11,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"evento": {
					"exclude": [],
					"fieldOrder": 1,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"fechaDelRegistro": {
					"exclude": [],
					"fieldOrder": 13,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.util.Date"
				},
				"fechaEvento": {
					"exclude": [],
					"fieldOrder": 15,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.util.Date"
				},
				"idLog": {
					"exclude": ["insert"],
					"fieldOrder": 0,
					"include": ["delete", "read", "update"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"origenEvento": {
					"exclude": [],
					"fieldOrder": 2,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"tipoPersonaSoloPersona": {
					"exclude": [],
					"fieldOrder": 14,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.Integer"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "aprendoz_desarrollo"
		},
		"com.aprendoz_desarrollo.data.Nivel": {
			"fields": {
				"grados": {
					"exclude": [],
					"fieldOrder": 3,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.aprendoz_desarrollo.data.Grado"
				},
				"idNivel": {
					"exclude": [],
					"fieldOrder": 0,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"levelName": {
					"exclude": [],
					"fieldOrder": 2,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"nivel": {
					"exclude": [],
					"fieldOrder": 1,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "aprendoz_desarrollo"
		},
		"com.aprendoz_desarrollo.data.NivelEsperado": {
			"fields": {
				"aprendizajes": {
					"exclude": [],
					"fieldOrder": 2,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.aprendoz_desarrollo.data.Aprendizaje"
				},
				"idNivelEsperado": {
					"exclude": [],
					"fieldOrder": 0,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"nivelEsperado": {
					"exclude": [],
					"fieldOrder": 1,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "aprendoz_desarrollo"
		},
		"com.aprendoz_desarrollo.data.OtrasMetas": {
			"fields": {
				"fecha": {
					"exclude": [],
					"fieldOrder": 2,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.util.Date"
				},
				"idOtraMeta": {
					"exclude": ["insert"],
					"fieldOrder": 0,
					"include": ["delete", "read", "update"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"idSyIdIdSy": {
					"exclude": [],
					"fieldOrder": 4,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.Integer"
				},
				"logrado": {
					"exclude": [],
					"fieldOrder": 3,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.Boolean"
				},
				"meta": {
					"exclude": [],
					"fieldOrder": 1,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"subtopico": {
					"exclude": [],
					"fieldOrder": 5,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "com.aprendoz_desarrollo.data.Subtopico"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "aprendoz_desarrollo"
		},
		"com.aprendoz_desarrollo.data.Pais": {
			"fields": {
				"estadoDepartamentos": {
					"exclude": [],
					"fieldOrder": 2,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.aprendoz_desarrollo.data.EstadoDepartamento"
				},
				"idPais": {
					"exclude": [],
					"fieldOrder": 0,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"pais": {
					"exclude": [],
					"fieldOrder": 1,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"personas": {
					"exclude": [],
					"fieldOrder": 3,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.aprendoz_desarrollo.data.Persona"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "aprendoz_desarrollo"
		},
		"com.aprendoz_desarrollo.data.Periodo": {
			"fields": {
				"fechaFin": {
					"exclude": [],
					"fieldOrder": 3,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.util.Date"
				},
				"fechaInicio": {
					"exclude": [],
					"fieldOrder": 2,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.util.Date"
				},
				"idPeriodo": {
					"exclude": [],
					"fieldOrder": 0,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"inscAlumAsigs": {
					"exclude": [],
					"fieldOrder": 7,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.aprendoz_desarrollo.data.InscAlumAsig"
				},
				"inscCursoAsigs": {
					"exclude": [],
					"fieldOrder": 6,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.aprendoz_desarrollo.data.InscCursoAsig"
				},
				"periodo": {
					"exclude": [],
					"fieldOrder": 1,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"sy": {
					"exclude": [],
					"fieldOrder": 5,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "com.aprendoz_desarrollo.data.Sy"
				},
				"tipoPeriodo": {
					"exclude": [],
					"fieldOrder": 4,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "com.aprendoz_desarrollo.data.TipoPeriodo"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "aprendoz_desarrollo"
		},
		"com.aprendoz_desarrollo.data.Persona": {
			"fields": {
				"activoRetirado": {
					"exclude": [],
					"fieldOrder": 5,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.Boolean"
				},
				"apellido1": {
					"exclude": [],
					"fieldOrder": 6,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"apellido2": {
					"exclude": [],
					"fieldOrder": 7,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"barrio": {
					"exclude": [],
					"fieldOrder": 23,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"calificacionFinals": {
					"exclude": [],
					"fieldOrder": 69,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.aprendoz_desarrollo.data.CalificacionFinal"
				},
				"cargo": {
					"exclude": [],
					"fieldOrder": 44,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"celular": {
					"exclude": [],
					"fieldOrder": 45,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"clave": {
					"exclude": [],
					"fieldOrder": 2,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"clinicaEmergencia": {
					"exclude": [],
					"fieldOrder": 29,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"codigo": {
					"exclude": [],
					"fieldOrder": 3,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"codigoFamilia": {
					"exclude": [],
					"fieldOrder": 33,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"colegioAnterior": {
					"exclude": [],
					"fieldOrder": 38,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"cursoIngreso": {
					"exclude": [],
					"fieldOrder": 36,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"departamento": {
					"exclude": [],
					"fieldOrder": 25,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"direccionOficina": {
					"exclude": [],
					"fieldOrder": 46,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"direccionResidencia": {
					"exclude": [],
					"fieldOrder": 15,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"email": {
					"exclude": [],
					"fieldOrder": 4,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"empresa": {
					"exclude": [],
					"fieldOrder": 43,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"eps": {
					"exclude": [],
					"fieldOrder": 27,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"eventualidadPersonases": {
					"exclude": [],
					"fieldOrder": 62,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.aprendoz_desarrollo.data.EventualidadPersonas"
				},
				"eventualidadeses": {
					"exclude": [],
					"fieldOrder": 68,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.aprendoz_desarrollo.data.Eventualidades"
				},
				"fechaIngreso": {
					"exclude": [],
					"fieldOrder": 34,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.util.Date"
				},
				"fechaNacimiento": {
					"exclude": [],
					"fieldOrder": 11,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.util.Date"
				},
				"fechaRetiro": {
					"exclude": [],
					"fieldOrder": 37,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.util.Date"
				},
				"gradoIngreso": {
					"exclude": [],
					"fieldOrder": 35,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"grupoFamiliar": {
					"exclude": [],
					"fieldOrder": 60,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "com.aprendoz_desarrollo.data.GrupoFamiliar"
				},
				"hijoDeExalumno": {
					"exclude": [],
					"fieldOrder": 39,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.Boolean"
				},
				"idPersona": {
					"exclude": ["insert"],
					"fieldOrder": 0,
					"include": ["delete", "read", "update"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"inscAlumActividads": {
					"exclude": [],
					"fieldOrder": 66,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.aprendoz_desarrollo.data.InscAlumActividad"
				},
				"inscAlumAprendizajes": {
					"exclude": [],
					"fieldOrder": 61,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.aprendoz_desarrollo.data.InscAlumAprendizaje"
				},
				"inscAlumAsigs": {
					"exclude": [],
					"fieldOrder": 67,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.aprendoz_desarrollo.data.InscAlumAsig"
				},
				"inscAlumCursoIdInscAlumCurso": {
					"exclude": [],
					"fieldOrder": 56,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.Integer"
				},
				"inscAlumCursos": {
					"exclude": [],
					"fieldOrder": 63,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.aprendoz_desarrollo.data.InscAlumCurso"
				},
				"inscCursoAsigs": {
					"exclude": [],
					"fieldOrder": 65,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.aprendoz_desarrollo.data.InscCursoAsig"
				},
				"inscDocAsigs": {
					"exclude": [],
					"fieldOrder": 64,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.aprendoz_desarrollo.data.InscDocAsig"
				},
				"lugarExpedicionDepartamento": {
					"exclude": [],
					"fieldOrder": 22,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"lugarExpedicionMunicipio": {
					"exclude": [],
					"fieldOrder": 21,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"lugarNacimientoDepartamento": {
					"exclude": [],
					"fieldOrder": 13,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"lugarNacimientoMunicipio": {
					"exclude": [],
					"fieldOrder": 12,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"matriculado": {
					"exclude": [],
					"fieldOrder": 55,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.Boolean"
				},
				"municipio": {
					"exclude": [],
					"fieldOrder": 24,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"nacionalidad": {
					"exclude": [],
					"fieldOrder": 14,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"nivelAcademico": {
					"exclude": [],
					"fieldOrder": 10,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"noDocumento": {
					"exclude": [],
					"fieldOrder": 20,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"noPlaqueta": {
					"exclude": [],
					"fieldOrder": 54,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"nombre1": {
					"exclude": [],
					"fieldOrder": 8,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"nombre2": {
					"exclude": [],
					"fieldOrder": 9,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"nombreLdap": {
					"exclude": [],
					"fieldOrder": 1,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"nombrePadreExalumno": {
					"exclude": [],
					"fieldOrder": 40,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"numeroContratoSalud": {
					"exclude": [],
					"fieldOrder": 28,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"pais": {
					"exclude": [],
					"fieldOrder": 58,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "com.aprendoz_desarrollo.data.Pais"
				},
				"paisDomicilio": {
					"exclude": [],
					"fieldOrder": 57,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"parentesco": {
					"exclude": [],
					"fieldOrder": 48,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"profesion": {
					"exclude": [],
					"fieldOrder": 42,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"promocion": {
					"exclude": [],
					"fieldOrder": 41,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"religion": {
					"exclude": [],
					"fieldOrder": 18,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"rutaM": {
					"exclude": [],
					"fieldOrder": 49,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"rutaT": {
					"exclude": [],
					"fieldOrder": 50,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"saludPrepagada": {
					"exclude": [],
					"fieldOrder": 26,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"sexo": {
					"exclude": [],
					"fieldOrder": 32,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"telefono": {
					"exclude": [],
					"fieldOrder": 16,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"telefono2": {
					"exclude": [],
					"fieldOrder": 17,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"telefonoOficina": {
					"exclude": [],
					"fieldOrder": 47,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"tipoDocumento": {
					"exclude": [],
					"fieldOrder": 19,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"tipoPersona": {
					"exclude": [],
					"fieldOrder": 59,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "com.aprendoz_desarrollo.data.TipoPersona"
				},
				"tipoSangre": {
					"exclude": [],
					"fieldOrder": 31,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"tomaAlmuerzo": {
					"exclude": [],
					"fieldOrder": 51,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.Boolean"
				},
				"tomaMediasNueves": {
					"exclude": [],
					"fieldOrder": 52,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.Boolean"
				},
				"tomaSeguroAccidentes": {
					"exclude": [],
					"fieldOrder": 53,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.Boolean"
				},
				"viveCon": {
					"exclude": [],
					"fieldOrder": 30,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "aprendoz_desarrollo"
		},
		"com.aprendoz_desarrollo.data.Promocion": {
			"fields": {
				"calificacion": {
					"exclude": [],
					"fieldOrder": 11,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.Float"
				},
				"calificacionChar": {
					"exclude": [],
					"fieldOrder": 12,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"checkacademico": {
					"exclude": [],
					"fieldOrder": 3,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.Boolean"
				},
				"checkcomite": {
					"exclude": [],
					"fieldOrder": 4,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.Boolean"
				},
				"checkfinanc": {
					"exclude": [],
					"fieldOrder": 6,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.Boolean"
				},
				"commentaprobado": {
					"exclude": [],
					"fieldOrder": 9,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"commentcomite": {
					"exclude": [],
					"fieldOrder": 5,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"commentfinanc": {
					"exclude": [],
					"fieldOrder": 7,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"commentpromovido": {
					"exclude": [],
					"fieldOrder": 10,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"idPromocion": {
					"exclude": ["insert"],
					"fieldOrder": 0,
					"include": ["delete", "read", "update"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"personaIdPersona": {
					"exclude": [],
					"fieldOrder": 1,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.Integer"
				},
				"promovido": {
					"exclude": [],
					"fieldOrder": 8,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.Boolean"
				},
				"syIdSy": {
					"exclude": [],
					"fieldOrder": 2,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.Integer"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "aprendoz_desarrollo"
		},
		"com.aprendoz_desarrollo.data.Recurso": {
			"fields": {
				"documento": {
					"exclude": [],
					"fieldOrder": 2,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "byte"
				},
				"idRecurso": {
					"exclude": ["insert"],
					"fieldOrder": 0,
					"include": ["delete", "read", "update"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"idSyIdIdSy": {
					"exclude": [],
					"fieldOrder": 4,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.Integer"
				},
				"recurso": {
					"exclude": [],
					"fieldOrder": 1,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"subtopico": {
					"exclude": [],
					"fieldOrder": 5,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "com.aprendoz_desarrollo.data.Subtopico"
				},
				"tipoRecurso": {
					"exclude": [],
					"fieldOrder": 6,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "com.aprendoz_desarrollo.data.TipoRecurso"
				},
				"ubicacion": {
					"exclude": [],
					"fieldOrder": 3,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "aprendoz_desarrollo"
		},
		"com.aprendoz_desarrollo.data.Salon": {
			"fields": {
				"idSalon": {
					"exclude": [],
					"fieldOrder": 0,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"numeroSalon": {
					"exclude": [],
					"fieldOrder": 1,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "aprendoz_desarrollo"
		},
		"com.aprendoz_desarrollo.data.Subarea": {
			"fields": {
				"area": {
					"exclude": [],
					"fieldOrder": 3,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "com.aprendoz_desarrollo.data.Area"
				},
				"ejes": {
					"exclude": [],
					"fieldOrder": 4,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.aprendoz_desarrollo.data.Eje"
				},
				"idSubarea": {
					"exclude": ["insert"],
					"fieldOrder": 0,
					"include": ["delete", "read", "update"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"idSyIdIdSy": {
					"exclude": [],
					"fieldOrder": 2,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.Integer"
				},
				"subarea": {
					"exclude": [],
					"fieldOrder": 1,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "aprendoz_desarrollo"
		},
		"com.aprendoz_desarrollo.data.SubtipoEventualidad": {
			"fields": {
				"eventualidadeses": {
					"exclude": [],
					"fieldOrder": 3,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.aprendoz_desarrollo.data.Eventualidades"
				},
				"idSubtipoEventualidad": {
					"exclude": ["insert"],
					"fieldOrder": 0,
					"include": ["delete", "read", "update"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"subtipoEventualidad": {
					"exclude": [],
					"fieldOrder": 1,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"tipoEventualidad": {
					"exclude": [],
					"fieldOrder": 2,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "com.aprendoz_desarrollo.data.TipoEventualidad"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "aprendoz_desarrollo"
		},
		"com.aprendoz_desarrollo.data.Subtopico": {
			"fields": {
				"actividads": {
					"exclude": [],
					"fieldOrder": 11,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.aprendoz_desarrollo.data.Actividad"
				},
				"aprendizajes": {
					"exclude": [],
					"fieldOrder": 9,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.aprendoz_desarrollo.data.Aprendizaje"
				},
				"fechaFin": {
					"exclude": [],
					"fieldOrder": 3,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.util.Date"
				},
				"fechaInicio": {
					"exclude": [],
					"fieldOrder": 2,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.util.Date"
				},
				"idSubtopico": {
					"exclude": ["insert"],
					"fieldOrder": 0,
					"include": ["delete", "read", "update"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"idSyIdIdSy": {
					"exclude": [],
					"fieldOrder": 6,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.Integer"
				},
				"numeroSubtopico": {
					"exclude": [],
					"fieldOrder": 5,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.Integer"
				},
				"otrasMetases": {
					"exclude": [],
					"fieldOrder": 10,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.aprendoz_desarrollo.data.OtrasMetas"
				},
				"recursos": {
					"exclude": [],
					"fieldOrder": 8,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.aprendoz_desarrollo.data.Recurso"
				},
				"subtopic": {
					"exclude": [],
					"fieldOrder": 4,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"subtopico": {
					"exclude": [],
					"fieldOrder": 1,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"unidad": {
					"exclude": [],
					"fieldOrder": 7,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "com.aprendoz_desarrollo.data.Unidad"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "aprendoz_desarrollo"
		},
		"com.aprendoz_desarrollo.data.Sy": {
			"fields": {
				"asignaturas": {
					"exclude": [],
					"fieldOrder": 2,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.aprendoz_desarrollo.data.Asignatura"
				},
				"idSy": {
					"exclude": [],
					"fieldOrder": 0,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"inscAlumCursos": {
					"exclude": [],
					"fieldOrder": 3,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.aprendoz_desarrollo.data.InscAlumCurso"
				},
				"inscDocAsigs": {
					"exclude": [],
					"fieldOrder": 4,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.aprendoz_desarrollo.data.InscDocAsig"
				},
				"periodos": {
					"exclude": [],
					"fieldOrder": 5,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.aprendoz_desarrollo.data.Periodo"
				},
				"schoolYear": {
					"exclude": [],
					"fieldOrder": 1,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "aprendoz_desarrollo"
		},
		"com.aprendoz_desarrollo.data.TipoActividad": {
			"fields": {
				"actividads": {
					"exclude": [],
					"fieldOrder": 2,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.aprendoz_desarrollo.data.Actividad"
				},
				"idTipoActividad": {
					"exclude": [],
					"fieldOrder": 0,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"tipoActividad": {
					"exclude": [],
					"fieldOrder": 1,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "aprendoz_desarrollo"
		},
		"com.aprendoz_desarrollo.data.TipoDesempeno": {
			"fields": {
				"actividads": {
					"exclude": [],
					"fieldOrder": 2,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.aprendoz_desarrollo.data.Actividad"
				},
				"idTipoDesempeno": {
					"exclude": [],
					"fieldOrder": 0,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"tipoDesempeno": {
					"exclude": [],
					"fieldOrder": 1,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "aprendoz_desarrollo"
		},
		"com.aprendoz_desarrollo.data.TipoEventualidad": {
			"fields": {
				"idTipoEventualidad": {
					"exclude": ["insert"],
					"fieldOrder": 0,
					"include": ["delete", "read", "update"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"subtipoEventualidads": {
					"exclude": [],
					"fieldOrder": 2,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.aprendoz_desarrollo.data.SubtipoEventualidad"
				},
				"tipoEventualidad": {
					"exclude": [],
					"fieldOrder": 1,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "aprendoz_desarrollo"
		},
		"com.aprendoz_desarrollo.data.TipoInscAsig": {
			"fields": {
				"asignaturas": {
					"exclude": [],
					"fieldOrder": 2,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.aprendoz_desarrollo.data.Asignatura"
				},
				"idTipoInscAsig": {
					"exclude": [],
					"fieldOrder": 0,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"tipo": {
					"exclude": [],
					"fieldOrder": 1,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "aprendoz_desarrollo"
		},
		"com.aprendoz_desarrollo.data.TipoPeriodo": {
			"fields": {
				"idTipoPeriodo": {
					"exclude": [],
					"fieldOrder": 0,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"periodos": {
					"exclude": [],
					"fieldOrder": 2,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.aprendoz_desarrollo.data.Periodo"
				},
				"tipoPeriodo": {
					"exclude": [],
					"fieldOrder": 1,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "aprendoz_desarrollo"
		},
		"com.aprendoz_desarrollo.data.TipoPersona": {
			"fields": {
				"idTipoPersona": {
					"exclude": [],
					"fieldOrder": 0,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"personas": {
					"exclude": [],
					"fieldOrder": 2,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.aprendoz_desarrollo.data.Persona"
				},
				"tipoPersona": {
					"exclude": [],
					"fieldOrder": 1,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "aprendoz_desarrollo"
		},
		"com.aprendoz_desarrollo.data.TipoRecurso": {
			"fields": {
				"idTipoRecurso": {
					"exclude": [],
					"fieldOrder": 0,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"recursos": {
					"exclude": [],
					"fieldOrder": 2,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.aprendoz_desarrollo.data.Recurso"
				},
				"tipoRecurso": {
					"exclude": [],
					"fieldOrder": 1,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "aprendoz_desarrollo"
		},
		"com.aprendoz_desarrollo.data.TipoValoracion": {
			"fields": {
				"actividads": {
					"exclude": [],
					"fieldOrder": 2,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.aprendoz_desarrollo.data.Actividad"
				},
				"idTipoValoracion": {
					"exclude": [],
					"fieldOrder": 0,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"tipoValoracion": {
					"exclude": [],
					"fieldOrder": 1,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "aprendoz_desarrollo"
		},
		"com.aprendoz_desarrollo.data.Unidad": {
			"fields": {
				"asignatura": {
					"exclude": [],
					"fieldOrder": 7,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "com.aprendoz_desarrollo.data.Asignatura"
				},
				"fechaFin": {
					"exclude": [],
					"fieldOrder": 4,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.util.Date"
				},
				"fechaInicio": {
					"exclude": [],
					"fieldOrder": 3,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.util.Date"
				},
				"idSyIdIdSy": {
					"exclude": [],
					"fieldOrder": 6,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.Integer"
				},
				"idUnidad": {
					"exclude": ["insert"],
					"fieldOrder": 0,
					"include": ["delete", "read", "update"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"numeroUnidad": {
					"exclude": [],
					"fieldOrder": 5,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.Integer"
				},
				"subtopicos": {
					"exclude": [],
					"fieldOrder": 8,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.aprendoz_desarrollo.data.Subtopico"
				},
				"unidad": {
					"exclude": [],
					"fieldOrder": 1,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"unit": {
					"exclude": [],
					"fieldOrder": 2,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "aprendoz_desarrollo"
		},
		"com.wavemaker.runtime.service.PagingOptions": {
			"fields": {
				"firstResult": {
					"exclude": [],
					"fieldOrder": 0,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.Long"
				},
				"maxResults": {
					"exclude": [],
					"fieldOrder": 1,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.Long"
				},
				"orderBy": {
					"exclude": [],
					"fieldOrder": 2,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				}
			},
			"internal": true,
			"liveService": false,
			"service": "runtimeService"
		},
		"com.wavemaker.runtime.service.PropertyOptions": {
			"fields": {
				"filters": {
					"exclude": [],
					"fieldOrder": 1,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": true,
					"type": "com.wavemaker.runtime.service.Filter"
				},
				"properties": {
					"exclude": [],
					"fieldOrder": 0,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				}
			},
			"internal": true,
			"liveService": false,
			"service": "runtimeService"
		},
		"double": {
			"internal": true,
			"primitiveType": "Number"
		},
		"float": {
			"internal": true,
			"primitiveType": "Number"
		},
		"int": {
			"internal": true,
			"primitiveType": "Number"
		},
		"java.lang.Boolean": {
			"internal": false,
			"primitiveType": "Boolean"
		},
		"java.lang.Byte": {
			"internal": false,
			"primitiveType": "Number"
		},
		"java.lang.Character": {
			"internal": false,
			"primitiveType": "String"
		},
		"java.lang.Double": {
			"internal": false,
			"primitiveType": "Number"
		},
		"java.lang.Float": {
			"internal": false,
			"primitiveType": "Number"
		},
		"java.lang.Integer": {
			"internal": false,
			"primitiveType": "Number"
		},
		"java.lang.Long": {
			"internal": false,
			"primitiveType": "Number"
		},
		"java.lang.Short": {
			"internal": false,
			"primitiveType": "Number"
		},
		"java.lang.String": {
			"internal": false,
			"primitiveType": "String"
		},
		"java.lang.StringBuffer": {
			"internal": false,
			"primitiveType": "String"
		},
		"java.math.BigDecimal": {
			"internal": false,
			"primitiveType": "Number"
		},
		"java.math.BigInteger": {
			"internal": false,
			"primitiveType": "Number"
		},
		"java.sql.Date": {
			"internal": false,
			"primitiveType": "Date"
		},
		"java.sql.Time": {
			"internal": false,
			"primitiveType": "Date"
		},
		"java.sql.Timestamp": {
			"internal": false,
			"primitiveType": "Date"
		},
		"java.util.Date": {
			"internal": false,
			"primitiveType": "Date"
		},
		"long": {
			"internal": true,
			"primitiveType": "Number"
		},
		"short": {
			"internal": true,
			"primitiveType": "Number"
		}
	}
};