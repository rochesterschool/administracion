Main.widgets = {
	personaLiveVariable1: ["wm.LiveVariable", {"liveSource":"app.personaLiveView1","autoUpdate":false,"startUpdate":false,"maxResults":100}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"targetProperty":"filter.grupoFamiliar.idGrupoFamiliar","source":"aux1.dataValue"}, {}],
			wire1: ["wm.Wire", {"targetProperty":"filter.tipoPersona.idTipoPersona","source":"aux2.dataValue"}, {}],
			wire2: ["wm.Wire", {"targetProperty":"filter.nombre1","source":"aux3.dataValue"}, {}],
			wire3: ["wm.Wire", {"targetProperty":"filter.nombre2","source":"aux4.dataValue"}, {}],
			wire4: ["wm.Wire", {"targetProperty":"filter.apellido1","source":"textEditor5.dataValue"}, {}],
			wire5: ["wm.Wire", {"targetProperty":"filter.apellido2","source":"textEditor6.dataValue"}, {}],
			wire6: ["wm.Wire", {"targetProperty":"filter.numeroContratoSalud","source":"textEditor3.dataValue"}, {}],
			wire7: ["wm.Wire", {"targetProperty":"filter.codigo","source":"textEditor4.dataValue"}, {}]
		}]
	}],
	lsGruposfamiliares: ["wm.LiveVariable", {"liveSource":"com.aprendoz_desarrollo.data.GrupoFamiliar","matchMode":"anywhere"}, {}],
	lsTipo: ["wm.LiveVariable", {"liveSource":"com.aprendoz_desarrollo.data.TipoPersona"}, {}],
	tipopersonaLiveVariable1: ["wm.LiveVariable", {"liveSource":"app.tipopersonaLiveView1"}, {}],
	grupofamiliarLiveVariable1: ["wm.LiveVariable", {"liveSource":"app.grupofamiliarLiveView1","autoUpdate":false,"startUpdate":false}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"targetProperty":"filter.grupoFamiliar","source":"textEditor1.dataValue"}, {}]
		}]
	}],
	asignaturaLiveVariable1: ["wm.LiveVariable", {"liveSource":"app.asignaturaLiveView1","autoUpdate":false,"startUpdate":false}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"targetProperty":"filter.idAsignatura","source":"aux51.dataValue"}, {}],
			wire1: ["wm.Wire", {"targetProperty":"filter.asignatura","source":"aux52.dataValue"}, {}]
		}]
	}],
	personaLiveVariable2: ["wm.LiveVariable", {"liveSource":"app.personaLiveView2","autoUpdate":false,"startUpdate":false}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"targetProperty":"filter.codigo","source":"aux53.dataValue"}, {}],
			wire1: ["wm.Wire", {"targetProperty":"filter.noDocumento","source":"aux54.dataValue"}, {}]
		}]
	}],
	inscdocasigLiveVariable1: ["wm.LiveVariable", {"liveSource":"app.inscdocasigLiveView1"}, {}],
	salir: ["wm.ServiceVariable", {"service":"functionService","operation":"componentFunction"}, {}, {
		input: ["wm.ServiceInput", {"type":"componentFunctionInputs"}, {}]
	}],
	Salir2: ["wm.ServiceVariable", {"service":"securityService","operation":"logout"}, {"onResult":"salir_pa_fuera"}, {
		input: ["wm.ServiceInput", {"type":"logoutInputs"}, {}]
	}],
	salir_pa_fuera: ["wm.NavigationCall", {"operation":"gotoPage"}, {}, {
		input: ["wm.ServiceInput", {"type":"gotoPageInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"targetProperty":"pageName","expression":"\"Login\""}, {}]
			}]
		}]
	}],
	loged: ["wm.ServiceVariable", {"service":"securityService","operation":"getUserName","autoUpdate":true,"startUpdate":true}, {}, {
		input: ["wm.ServiceInput", {"type":"getUserNameInputs"}, {}]
	}],
	insccursoasigLiveVariable1: ["wm.LiveVariable", {"liveSource":"app.insccursoasigLiveView1","orderBy":"desc: idInscCursoAsig","maxResults":80}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire1: ["wm.Wire", {"targetProperty":"filter.curso.idCurso","source":"aux101.dataValue"}, {}],
			wire2: ["wm.Wire", {"targetProperty":"filter.persona.idPersona","source":"aux99.dataValue"}, {}],
			wire: ["wm.Wire", {"targetProperty":"filter.periodo.idPeriodo","source":"selectEditor4.dataValue"}, {}]
		}]
	}],
	liveVariable2: ["wm.LiveVariable", {"liveSource":"com.aprendoz_desarrollo.data.InscAlumCurso","autoUpdate":false,"startUpdate":false}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"targetProperty":"filter.curso.idCurso","source":"selectEditor2.dataValue"}, {}]
		}]
	}],
	serviceVariable1: ["wm.ServiceVariable", {}, {}, {
		input: ["wm.ServiceInput", {"type":"Inputs"}, {}]
	}],
	estudiantesPORCurso: ["wm.LiveVariable", {"liveSource":"app.vistaActivaPersonasenCursos","autoUpdate":false,"startUpdate":false,"maxResults":80}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"targetProperty":"filter.curso.idCurso","source":"selectEditor2.dataValue"}, {}]
		}]
	}],
	inscalumcursoLiveVariable1: ["wm.LiveVariable", {"liveSource":"app.inscalumcursoLiveView1","autoUpdate":false,"startUpdate":false,"orderBy":"desc: idInscAlumCurso","maxResults":50}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"targetProperty":"filter.curso.idCurso","source":"selectEditor2.dataValue"}, {}],
			wire1: ["wm.Wire", {"targetProperty":"filter.sy.idSy","source":"selectEditor3.dataValue"}, {}]
		}]
	}],
	liveVariable1: ["wm.LiveVariable", {}, {}],
	listaPersonas: ["wm.LiveVariable", {"liveSource":"app.vistaPersonas","autoUpdate":false,"startUpdate":false,"maxResults":50}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"targetProperty":"filter.apellido1","source":"a1.dataValue"}, {}],
			wire1: ["wm.Wire", {"targetProperty":"filter.apellido2","source":"a2.dataValue"}, {}],
			wire2: ["wm.Wire", {"targetProperty":"filter.nombre1","source":"n1.dataValue"}, {}],
			wire3: ["wm.Wire", {"targetProperty":"filter.nombre2","source":"n2.dataValue"}, {}],
			wire4: ["wm.Wire", {"targetProperty":"filter.codigo","source":"c1.dataValue"}, {}],
			wire5: ["wm.Wire", {"targetProperty":"filter.tipoPersona.idTipoPersona","source":"t1.dataValue"}, {}]
		}]
	}],
	lstipo: ["wm.LiveVariable", {"liveSource":"com.aprendoz_desarrollo.data.TipoPersona","maxResults":50}, {}],
	salirErrorPage: ["wm.ServiceVariable", {"service":"securityService","operation":"logout"}, {"onResult":"salirPageError"}, {
		input: ["wm.ServiceInput", {"type":"logoutInputs"}, {}]
	}],
	salirPageError: ["wm.NavigationCall", {"operation":"gotoPage"}, {}, {
		input: ["wm.ServiceInput", {"type":"gotoPageInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"targetProperty":"pageName","expression":"\"Login\""}, {}]
			}]
		}]
	}],
	layoutBox1: ["wm.Layout", {"height":"1200px","width":"100%","horizontalAlign":"center","verticalAlign":"top"}, {}, {
		TwoColumns: ["wm.Template", {"height":"100%","width":"95%","horizontalAlign":"left","verticalAlign":"top","roles":["5","6","7","10","20","21","22","23","24"]}, {}, {
			panel5: ["wm.Panel", {"height":"73px","width":"100%","lock":true,"layoutKind":"left-to-right","horizontalAlign":"right","verticalAlign":"top","showing":false}, {}, {
				label1: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_20px","wm_TextDecoration_Bold","wm_TextAlign_Right"]},"height":"48px","width":"498px","border":"0","caption":"MODULO ADMINISTRACION"}, {}, {
					format: ["wm.DataFormatter", {}, {}]
				}],
				spacer3: ["wm.Spacer", {"height":"48px","width":"96px"}, {}],
				Bienvenido: ["wm.TextEditor", {"caption":"Bienvenido,","width":"323px","disabled":true}, {}, {
					binding: ["wm.Binding", {}, {}, {
						wire: ["wm.Wire", {"targetProperty":"dataValue","source":"loged.dataValue"}, {}]
					}],
					editor: ["wm._TextEditor", {}, {}]
				}]
			}],
			panel1: ["wm.Panel", {"_classes":{"domNode":["wm_SilverBlueTheme_ToolBar"]},"height":"36px","width":"100%","lock":true,"layoutKind":"left-to-right","horizontalAlign":"right"}, {}, {
				spacer4: ["wm.Spacer", {"height":"48px","width":"20px"}, {}],
				mostrarMenu: ["wm.Button", {"_classes":{"domNode":["wm_FontSizePx_12px"]},"height":"48px","width":"96px","caption":"Mostrar»"}, {"onclick":"mostrarMenuClick"}],
				ocultarMenu: ["wm.Button", {"_classes":{"domNode":["wm_FontSizePx_12px"]},"height":"48px","width":"96px","caption":"«Ocultar"}, {"onclick":"ocultarMenuClick"}],
				spacer1: ["wm.Spacer", {"height":"48px","width":"100%"}, {}],
				button1: ["wm.Button", {"_classes":{"domNode":["wm_FontSizePx_14px"]},"height":"100%","width":"78px","caption":"Salir"}, {"onclick":"Salir2"}]
			}],
			panel2: ["wm.Panel", {"height":"100%","width":"100%","layoutKind":"left-to-right"}, {}, {
				menuPrincipal: ["wm.Panel", {"_classes":{"domNode":["wm_SilverBlueTheme_LightBlueInsetPanel"]},"height":"100%","width":"246px","lock":true,"padding":"10"}, {}, {
					button4: ["wm.Button", {"_classes":{"domNode":["wm_FontSizePx_20px","wm_Border_BottomStyleCurved4px","wm_Border_TopStyleCurved4px","wm_SilverBlueTheme_ToolBar"]},"height":"58px","width":"96px","caption":"Personas","iconUrl":"resources/images/people.png","iconWidth":"50px","iconHeight":"50px"}, {"onclick":"button4Click"}],
					button5: ["wm.Button", {"_classes":{"domNode":["wm_FontSizePx_20px","wm_Border_TopStyleCurved4px","wm_Border_BottomStyleCurved4px","wm_SilverBlueTheme_ToolBar"]},"height":"58px","width":"96px","caption":"Listas / Extras","iconUrl":"resources/images/tools_icon.gif","iconWidth":"50px","iconHeight":"50px"}, {"onclick":"button5Click"}],
					button6: ["wm.Button", {"_classes":{"domNode":["wm_FontSizePx_20px","wm_Border_TopStyleCurved4px","wm_Border_BottomStyleCurved4px","wm_SilverBlueTheme_ToolBar"]},"height":"58px","width":"96px","caption":"Docentes","iconUrl":"resources/images/Book.gif","iconHeight":"50px"}, {"onclick":"button6Click"}],
					button10: ["wm.Button", {"_classes":{"domNode":["wm_FontSizePx_20px","wm_Border_TopStyleCurved4px","wm_Border_BottomStyleCurved4px","wm_SilverBlueTheme_ToolBar"]},"height":"58px","width":"96px","caption":"Alumnos","iconUrl":"resources/images/icon-student.png","iconHeight":"50px"}, {"onclick":"button10Click"}],
					spacer2: ["wm.Spacer", {"height":"100%","width":"96px"}, {}],
					p1: ["wm.Panel", {"_classes":{"domNode":["wm_SilverBlueTheme_ToolBar"]},"height":"38px","width":"100%","lock":true,"layoutKind":"left-to-right","horizontalAlign":"right","verticalAlign":"top","showing":false}, {}, {
						label3: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_14px"]},"height":"44px","width":"115px","border":"0","caption":"Ocultar Filtros"}, {}, {
							format: ["wm.DataFormatter", {}, {}]
						}],
						picture2: ["wm.Picture", {"height":"34px","width":"50px","border":"0","source":"resources/images/download.png","aspect":"h"}, {"onclick":"picture2Click"}]
					}],
					panel12: ["wm.Panel", {"_classes":{"domNode":["wm_Border_TopStyleCurved4px","wm_Border_BottomStyleCurved4px"]},"height":"100%","width":"100%","layoutKind":"left-to-right","horizontalAlign":"left","verticalAlign":"top","showing":false,"border":"1","borderColor":"#000000"}, {}, {
						layers7: ["wm.Layers", {}, {}, {
							layer7: ["wm.Layer", {"caption":"layer7","horizontalAlign":"right","verticalAlign":"top"}, {}, {
								aux98: ["wm.TextEditor", {"caption":"Id Asignatura","width":"150%"}, {}, {
									editor: ["wm._TextEditor", {"changeOnKey":true,"changeOnEnter":true}, {}]
								}],
								aux99: ["wm.TextEditor", {"caption":"Id Persona","width":"150%"}, {}, {
									editor: ["wm._TextEditor", {"changeOnKey":true,"changeOnEnter":true}, {}]
								}],
								selectEditor4: ["wm.SelectEditor", {"width":"150%","caption":"Año escolar"}, {"onchange":"insccursoasigLiveVariable1"}, {
									editor: ["wm._SelectEditor", {"displayField":"periodo","dataField":"idPeriodo","startUpdate":true}, {}, {
										binding: ["wm.Binding", {}, {}, {
											wire: ["wm.Wire", {"targetProperty":"dataSet","source":"app.lsPeriodos10","expression":undefined}, {}]
										}]
									}]
								}],
								aux100: ["wm.SelectEditor", {"width":"150%","caption":"Grados"}, {"onchange":"alumnos"}, {
									binding: ["wm.Binding", {}, {}, {
										wire: ["wm.Wire", {"targetProperty":"filter.grado.idGrado","source":"aux100.dataValue","targetId":"app.lsCurso"}, {}]
									}],
									editor: ["wm._SelectEditor", {"displayField":"grado","dataField":"idGrado"}, {}, {
										binding: ["wm.Binding", {}, {}, {
											wire: ["wm.Wire", {"targetProperty":"dataSet","source":"app.lsGrados","expression":undefined}, {}]
										}]
									}]
								}],
								aux101: ["wm.TextEditor", {"caption":"Cursos","width":"150%","display":"Select"}, {}, {
									editor: ["wm._SelectEditor", {"displayField":"curso","dataField":"idCurso"}, {}, {
										binding: ["wm.Binding", {}, {}, {
											wire: ["wm.Wire", {"targetProperty":"dataSet","source":"app.lsCurso","expression":undefined}, {}]
										}]
									}]
								}]
							}]
						}]
					}],
					p2: ["wm.Panel", {"_classes":{"domNode":["wm_SilverBlueTheme_ToolBar"]},"height":"38px","width":"100%","layoutKind":"left-to-right","horizontalAlign":"right","verticalAlign":"top"}, {}, {
						label2: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_14px"]},"height":"44px","width":"79px","border":"0","caption":"Ver Filtros"}, {}, {
							format: ["wm.DataFormatter", {}, {}]
						}],
						picture1: ["wm.Picture", {"height":"34px","width":"50px","border":"0","source":"resources/images/up.png","aspect":"h"}, {"onclick":"picture1Click"}]
					}]
				}],
				splitter1: ["wm.Splitter", {"height":"100%","width":"4px","border":"0"}, {}],
				main_conteiner: ["wm.Panel", {"_classes":{"domNode":["wm_SilverBlueTheme_MainInsetPanel"]},"height":"100%","width":"100%","lock":true}, {}, {
					panel7: ["wm.Panel", {"height":"134px","width":"100%","layoutKind":"left-to-right","horizontalAlign":"left","verticalAlign":"top"}, {}, {
						layers1: ["wm.Layers", {"width":"350px"}, {}, {
							layer1: ["wm.Layer", {"caption":"layer1","horizontalAlign":"left","verticalAlign":"top"}, {}, {
								aux1: ["wm.SelectEditor", {"_classes":{"domNode":["wm_FontSizePx_12px"]},"width":"150%","caption":"Grupo Familiar"}, {}, {
									editor: ["wm._SelectEditor", {"displayField":"grupoFamiliar","dataField":"idGrupoFamiliar","startUpdate":true}, {}, {
										binding: ["wm.Binding", {}, {}, {
											wire: ["wm.Wire", {"targetProperty":"dataSet","source":"lsGruposfamiliares","expression":undefined}, {}]
										}]
									}]
								}],
								aux2: ["wm.SelectEditor", {"_classes":{"domNode":["wm_FontSizePx_12px"]},"width":"150%","caption":"Tipo persona"}, {}, {
									editor: ["wm._SelectEditor", {"displayField":"tipoPersona","dataField":"idTipoPersona","startUpdate":true}, {}, {
										binding: ["wm.Binding", {}, {}, {
											wire: ["wm.Wire", {"targetProperty":"dataSet","source":"lsTipo","expression":undefined}, {}]
										}]
									}]
								}],
								aux3: ["wm.TextEditor", {"_classes":{"domNode":["wm_FontSizePx_12px"]},"caption":"1er Nombre","width":"150%"}, {}, {
									editor: ["wm._TextEditor", {}, {}]
								}],
								aux4: ["wm.TextEditor", {"_classes":{"domNode":["wm_FontSizePx_12px"]},"caption":"2do Nombre","width":"150%"}, {}, {
									editor: ["wm._TextEditor", {}, {}]
								}]
							}]
						}],
						layers2: ["wm.Layers", {"width":"350px"}, {}, {
							layer2: ["wm.Layer", {"caption":"layer2","horizontalAlign":"left","verticalAlign":"top"}, {}, {
								textEditor3: ["wm.TextEditor", {"_classes":{"domNode":["wm_FontSizePx_12px"]},"caption":"No. Documento","width":"150%"}, {}, {
									editor: ["wm._TextEditor", {}, {}]
								}],
								textEditor4: ["wm.TextEditor", {"_classes":{"domNode":["wm_FontSizePx_12px"]},"caption":"Codigo","width":"150%"}, {}, {
									editor: ["wm._TextEditor", {}, {}]
								}],
								textEditor5: ["wm.TextEditor", {"_classes":{"domNode":["wm_FontSizePx_12px"]},"caption":"1er Apellido","width":"150%"}, {}, {
									editor: ["wm._TextEditor", {}, {}]
								}],
								textEditor6: ["wm.TextEditor", {"_classes":{"domNode":["wm_FontSizePx_12px"]},"caption":"2do Apellido","width":"150%"}, {}, {
									editor: ["wm._TextEditor", {}, {}]
								}],
								panel8: ["wm.Panel", {"height":"34px","width":"100%","layoutKind":"left-to-right","horizontalAlign":"right","verticalAlign":"top"}, {}, {
									button7: ["wm.Button", {"_classes":{"domNode":["wm_FontSizePx_14px"]},"height":"34px","width":"96px","caption":"Buscar"}, {"onclick":"personaLiveVariable1"}],
									button8: ["wm.Button", {"_classes":{"domNode":["wm_FontSizePx_14px"]},"height":"34px","width":"96px","caption":"Limpiar"}, {"onclick":"button8Click"}]
								}]
							}]
						}]
					}],
					dataNavigator1: ["wm.DataNavigator", {"_classes":{"domNode":["wm_Border_TopStyleCurved4px","wm_Border_BottomStyleCurved4px"]},"width":"100%","border":"2","byPage":true,"borderColor":"#000000"}, {}, {
						binding: ["wm.Binding", {}, {}, {
							wire: ["wm.Wire", {"targetProperty":"liveSource","source":"personaLiveVariable1","expression":undefined}, {}]
						}]
					}],
					panel4: ["wm.Panel", {"height":"100%","width":"100%","layoutKind":"left-to-right","horizontalAlign":"left","verticalAlign":"top"}, {}, {
						personaGridPanel: ["wm.FancyPanel", {"_classes":{"domNode":["wm_BackgroundGradient_Blue","wm_Border_BottomStyleCurved4px","wm_Border_TopStyleCurved4px"]},"horizontalAlign":"left","verticalAlign":"top","title":"","captionClasses":"wm_BackgroundGradient_Blue wm_Border_BottomStyleCurved4px wm_Border_TopStyleCurved4px wm_FontColor_White wm_TextDecoration_Bold wm_FontSizePx_14px","margin":"1"}, {}, {
							personaDataGrid1: ["wm.DataGrid", {"_classes":{"domNode":["omgDataGrid","wm_FontSizePx_12px"]},"border":"0"}, {}, {
								binding: ["wm.Binding", {}, {}, {
									wire: ["wm.Wire", {"targetProperty":"dataSet","source":"personaLiveVariable1","expression":undefined}, {}]
								}],
								idPersona1: ["wm.DataGridColumn", {"field":"idPersona","caption":"•","autoSize":undefined,"columnWidth":"60px"}, {}, {
									format: ["wm.DataFormatter", {}, {}]
								}],
								codigo1: ["wm.DataGridColumn", {"field":"codigo","caption":"Codigo","autoSize":undefined,"columnWidth":"77px","index":1}, {}, {
									format: ["wm.DataFormatter", {}, {}]
								}],
								apellido1: ["wm.DataGridColumn", {"field":"apellido1","caption":"Apellidos","autoSize":undefined,"columnWidth":"163px","dataExpression":"${apellido1}+ \" \"+${apellido2}","index":2}, {}, {
									format: ["wm.DataFormatter", {}, {}]
								}],
								nombre1: ["wm.DataGridColumn", {"field":"nombre1","caption":"Nombres","autoSize":undefined,"dataExpression":"${nombre1}+ \" \"+${nombre2}","index":3}, {}, {
									format: ["wm.DataFormatter", {}, {}]
								}],
								column1: ["wm.DataGridColumn", {"field":"tipoPersona.tipoPersona","caption":"✍ ","index":4}, {}, {
									format: ["wm.DataFormatter", {}, {}]
								}]
							}]
						}],
						personaDetailsPanel: ["wm.FancyPanel", {"_classes":{"domNode":["wm_BackgroundGradient_Blue","wm_Border_BottomStyleCurved4px","wm_Border_TopStyleCurved4px"]},"horizontalAlign":"left","verticalAlign":"top","title":"","captionClasses":"wm_BackgroundGradient_Blue wm_Border_BottomStyleCurved4px wm_Border_TopStyleCurved4px wm_FontSizePx_16px wm_FontColor_White wm_TextDecoration_Bold","margin":"1"}, {}, {
							personaLiveForm1: ["wm.LiveForm", {"_classes":{"domNode":["wm_FontSizePx_12px","wm_SilverBlueTheme_LightBlueInsetPanel"]},"height":"1602px","verticalAlign":"top","horizontalAlign":"left","readonly":true,"fitToContentHeight":true}, {"onSuccess":"personaLiveVariable1"}, {
								binding: ["wm.Binding", {}, {}, {
									wire: ["wm.Wire", {"targetProperty":"dataSet","source":"personaDataGrid1.selectedItem","expression":undefined}, {}],
									wire1: ["wm.Wire", {"targetProperty":"dataOutput.grupoFamiliar","source":"grupoFamiliarRelatedEditor1.dataOutput","expression":undefined}, {}],
									wire2: ["wm.Wire", {"targetProperty":"dataOutput.pais","source":"paisRelatedEditor1.dataOutput","expression":undefined}, {}],
									wire3: ["wm.Wire", {"targetProperty":"dataOutput.tipoPersona","source":"tipoPersonaRelatedEditor1.dataOutput","expression":undefined}, {}]
								}],
								idPersonaEditor1: ["wm.Editor", {"caption":"ID Persona","readonly":true,"formField":"idPersona","width":"100%","height":"26px","display":"Number"}, {}, {
									editor: ["wm._NumberEditor", {"required":true}, {}]
								}],
								nombreLdapEditor1: ["wm.Editor", {"caption":"Usuario de acceso","readonly":true,"formField":"nombreLdap","width":"100%","height":"26px"}, {}, {
									editor: ["wm._TextEditor", {}, {}]
								}],
								claveEditor1: ["wm.Editor", {"caption":"Clave de acceso","readonly":true,"formField":"clave","width":"100%","height":"26px"}, {}, {
									editor: ["wm._TextEditor", {"password":true}, {}]
								}],
								codigoEditor1: ["wm.Editor", {"caption":"Codigo Estudiante","readonly":true,"formField":"codigo","width":"100%","height":"26px"}, {}, {
									editor: ["wm._TextEditor", {}, {}]
								}],
								activoRetiradoEditor1: ["wm.Editor", {"caption":"Activo / Retirado","readonly":true,"formField":"activoRetirado","width":"100%","height":"26px","displayValue":true,"emptyValue":"false","display":"CheckBox"}, {}, {
									editor: ["wm._CheckBoxEditor", {"dataType":"boolean"}, {}]
								}],
								tipoDocumentoEditor1: ["wm.Editor", {"_classes":{"domNode":["wm_BackgroundColor_VeryLightGray"]},"caption":"Tipo documento","readonly":true,"formField":"tipoDocumento","width":"100%","height":"26px"}, {}, {
									editor: ["wm._TextEditor", {}, {}]
								}],
								noDocumentoEditor1: ["wm.Editor", {"caption":"No. Documento","readonly":true,"formField":"noDocumento","width":"100%","height":"26px"}, {}, {
									editor: ["wm._TextEditor", {}, {}]
								}],
								nombre1Editor1: ["wm.Editor", {"caption":"1er Nombre","readonly":true,"formField":"nombre1","width":"100%","height":"26px"}, {}, {
									editor: ["wm._TextEditor", {}, {}]
								}],
								nombre2Editor1: ["wm.Editor", {"caption":"2do Nombre","readonly":true,"formField":"nombre2","width":"100%","height":"26px"}, {}, {
									editor: ["wm._TextEditor", {}, {}]
								}],
								apellido1Editor1: ["wm.Editor", {"caption":"1er Apellido","readonly":true,"formField":"apellido1","width":"100%","height":"26px"}, {}, {
									editor: ["wm._TextEditor", {}, {}]
								}],
								apellido2Editor1: ["wm.Editor", {"caption":"2do Apellido","readonly":true,"formField":"apellido2","width":"100%","height":"26px"}, {}, {
									editor: ["wm._TextEditor", {}, {}]
								}],
								nivelAcademicoEditor1: ["wm.Editor", {"caption":"Nivel academico","readonly":true,"formField":"nivelAcademico","width":"100%","height":"26px"}, {}, {
									editor: ["wm._TextEditor", {}, {}]
								}],
								fechaNacimientoEditor1: ["wm.Editor", {"caption":"Fecha nacimiento","readonly":true,"formField":"fechaNacimiento","width":"100%","height":"26px","display":"Date"}, {}, {
									editor: ["wm._DateEditor", {}, {}]
								}],
								nacionalidadEditor1: ["wm.Editor", {"_classes":{"domNode":["wm_BackgroundColor_VeryLightGray"]},"caption":"Nacionalidad","readonly":true,"formField":"nacionalidad","width":"100%","height":"26px"}, {}, {
									editor: ["wm._TextEditor", {}, {}]
								}],
								paisRelatedEditor1: ["wm.RelatedEditor", {"formField":"pais"}, {}, {
									binding: ["wm.Binding", {}, {}, {
										wire1: ["wm.Wire", {"targetProperty":"dataSet","source":"personaDataGrid1.selectedItem.pais","expression":undefined}, {}],
										wire: ["wm.Wire", {"targetProperty":"dataOutput","source":"paisLookup1.selectedItem","expression":undefined}, {}]
									}],
									paisLookup1: ["wm.Editor", {"_classes":{"domNode":["wm_BackgroundColor_VeryLightGray"]},"caption":"Nac. Pais","readonly":true,"formField":"","width":"100%","height":"26px","displayValue":"Colombia","display":"Lookup"}, {}, {
										editor: ["wm._LookupEditor", {"required":true,"displayField":"pais"}, {}]
									}]
								}],
								lugarNacimientoDepartamentoEditor1: ["wm.Editor", {"_classes":{"domNode":["wm_BackgroundColor_VeryLightGray"]},"caption":"Nac. Departamento","readonly":true,"formField":"lugarNacimientoDepartamento","width":"100%","height":"26px"}, {}, {
									editor: ["wm._TextEditor", {}, {}]
								}],
								lugarNacimientoMunicipioEditor1: ["wm.Editor", {"_classes":{"domNode":["wm_BackgroundColor_VeryLightGray"]},"caption":"Nac. Municipio","readonly":true,"formField":"lugarNacimientoMunicipio","width":"100%","height":"26px"}, {}, {
									editor: ["wm._TextEditor", {}, {}]
								}],
								emailEditor1: ["wm.Editor", {"caption":"E-mail","readonly":true,"formField":"email","width":"100%","height":"26px"}, {}, {
									editor: ["wm._TextEditor", {}, {}]
								}],
								matriculadoEditor1: ["wm.Editor", {"caption":"Matriculado","readonly":true,"formField":"matriculado","width":"100%","height":"26px","displayValue":true,"emptyValue":"false","display":"CheckBox"}, {}, {
									editor: ["wm._CheckBoxEditor", {"dataType":"boolean"}, {}]
								}],
								telefonoEditor1: ["wm.Editor", {"_classes":{"domNode":["wm_BackgroundColor_VeryLightGray"]},"caption":"Telefono","readonly":true,"formField":"telefono","width":"100%","height":"26px"}, {}, {
									editor: ["wm._TextEditor", {}, {}]
								}],
								telefono2Editor1: ["wm.Editor", {"_classes":{"domNode":["wm_BackgroundColor_VeryLightGray"]},"caption":"Telefono (opcional)","readonly":true,"formField":"telefono2","width":"100%","height":"26px"}, {}, {
									editor: ["wm._TextEditor", {}, {}]
								}],
								direccionResidenciaEditor1: ["wm.Editor", {"_classes":{"domNode":["wm_BackgroundColor_VeryLightGray"]},"caption":"Direccion domicilio","readonly":true,"formField":"direccionResidencia","width":"100%","height":"26px"}, {}, {
									editor: ["wm._TextEditor", {}, {}]
								}],
								religionEditor1: ["wm.Editor", {"_classes":{"domNode":["wm_BackgroundColor_VeryLightGray"]},"caption":"Religión","readonly":true,"formField":"religion","width":"100%","height":"26px"}, {}, {
									editor: ["wm._TextEditor", {}, {}]
								}],
								lugarExpedicionDepartamentoEditor1: ["wm.Editor", {"_classes":{"domNode":["wm_BackgroundColor_LightBlue"]},"caption":"Exped. Departamento","readonly":true,"formField":"lugarExpedicionDepartamento","width":"100%","height":"26px"}, {}, {
									editor: ["wm._TextEditor", {}, {}]
								}],
								lugarExpedicionMunicipioEditor1: ["wm.Editor", {"_classes":{"domNode":["wm_BackgroundColor_LightBlue"]},"caption":"Exped. Municipio","readonly":true,"formField":"lugarExpedicionMunicipio","width":"100%","height":"26px"}, {}, {
									editor: ["wm._TextEditor", {}, {}]
								}],
								paisDomicilioEditor1: ["wm.Editor", {"caption":"Pais domicilio","readonly":true,"formField":"paisDomicilio","width":"100%","height":"26px"}, {}, {
									editor: ["wm._TextEditor", {}, {}]
								}],
								departamentoEditor1: ["wm.Editor", {"caption":"Departamento","readonly":true,"formField":"departamento","width":"100%","height":"26px"}, {}, {
									editor: ["wm._TextEditor", {}, {}]
								}],
								municipioEditor1: ["wm.Editor", {"caption":"Municipio","readonly":true,"formField":"municipio","width":"100%","height":"26px"}, {}, {
									editor: ["wm._TextEditor", {}, {}]
								}],
								barrioEditor1: ["wm.Editor", {"caption":"Barrio","readonly":true,"formField":"barrio","width":"100%","height":"26px"}, {}, {
									editor: ["wm._TextEditor", {}, {}]
								}],
								saludPrepagadaEditor1: ["wm.Editor", {"caption":"Salud prepagada","readonly":true,"formField":"saludPrepagada","width":"100%","height":"26px"}, {}, {
									editor: ["wm._TextEditor", {}, {}]
								}],
								epsEditor1: ["wm.Editor", {"caption":"E.P.S","readonly":true,"formField":"eps","width":"100%","height":"26px"}, {}, {
									editor: ["wm._TextEditor", {}, {}]
								}],
								numeroContratoSaludEditor1: ["wm.Editor", {"caption":"No. Contrato salud","readonly":true,"formField":"numeroContratoSalud","width":"100%","height":"26px"}, {}, {
									editor: ["wm._TextEditor", {}, {}]
								}],
								clinicaEmergenciaEditor1: ["wm.Editor", {"caption":"Clinica emergencia","readonly":true,"formField":"clinicaEmergencia","width":"100%","height":"26px"}, {}, {
									editor: ["wm._TextEditor", {}, {}]
								}],
								viveConEditor1: ["wm.Editor", {"caption":"¿Vive con?","readonly":true,"formField":"viveCon","width":"100%","height":"26px","display":"Select"}, {}, {
									editor: ["wm._SelectEditor", {"displayField":"name","dataField":"dataValue","options":"Ambos,Madre, Padre"}, {}, {
										optionsVar: ["wm.Variable", {"type":"EntryData"}, {}]
									}]
								}],
								tipoSangreEditor1: ["wm.Editor", {"caption":"Tipo sangre","readonly":true,"formField":"tipoSangre","width":"100%","height":"26px","display":"Select"}, {}, {
									editor: ["wm._SelectEditor", {"displayField":"name","dataField":"dataValue","options":"A+, A-, B+, B- ,O+,O-, AB+, AB-"}, {}, {
										optionsVar: ["wm.Variable", {"type":"EntryData"}, {}]
									}]
								}],
								sexoEditor1: ["wm.Editor", {"caption":"Sexo","readonly":true,"formField":"sexo","width":"100%","height":"26px","display":"Select"}, {}, {
									editor: ["wm._SelectEditor", {"displayField":"name","dataField":"dataValue","options":"Masculino, Femenino"}, {}, {
										optionsVar: ["wm.Variable", {"type":"EntryData"}, {}]
									}]
								}],
								codigoFamiliaEditor1: ["wm.Editor", {"caption":"CodigoFamilia","readonly":true,"formField":"codigoFamilia","width":"100%","height":"26px","showing":false}, {}, {
									editor: ["wm._TextEditor", {}, {}]
								}],
								fechaIngresoEditor1: ["wm.Editor", {"caption":"Fecha ingreso","readonly":true,"formField":"fechaIngreso","width":"100%","height":"26px","display":"Date"}, {}, {
									editor: ["wm._DateEditor", {}, {}]
								}],
								gradoIngresoEditor1: ["wm.Editor", {"caption":"Grado ingreso","readonly":true,"formField":"gradoIngreso","width":"100%","height":"26px"}, {}, {
									editor: ["wm._TextEditor", {}, {}]
								}],
								cursoIngresoEditor1: ["wm.Editor", {"caption":"Curso ingreso","readonly":true,"formField":"cursoIngreso","width":"100%","height":"26px"}, {}, {
									editor: ["wm._TextEditor", {}, {}]
								}],
								fechaRetiroEditor1: ["wm.Editor", {"caption":"Fecha retiro","readonly":true,"formField":"fechaRetiro","width":"100%","height":"26px","display":"Date"}, {}, {
									editor: ["wm._DateEditor", {}, {}]
								}],
								colegioAnteriorEditor1: ["wm.Editor", {"caption":"Colegio anterior","readonly":true,"formField":"colegioAnterior","width":"100%","height":"26px"}, {}, {
									editor: ["wm._TextEditor", {}, {}]
								}],
								hijoDeExalumnoEditor1: ["wm.Editor", {"caption":"¿Hijo exalumno?","readonly":true,"formField":"hijoDeExalumno","width":"100%","height":"26px","displayValue":true,"emptyValue":"false","display":"CheckBox"}, {}, {
									editor: ["wm._CheckBoxEditor", {"dataType":"boolean"}, {}]
								}],
								nombrePadreExalumnoEditor1: ["wm.Editor", {"caption":"Nombre padre","readonly":true,"formField":"nombrePadreExalumno","width":"100%","height":"26px"}, {}, {
									editor: ["wm._TextEditor", {}, {}]
								}],
								promocionEditor1: ["wm.Editor", {"caption":"Promoción","readonly":true,"formField":"promocion","width":"100%","height":"26px"}, {}, {
									editor: ["wm._TextEditor", {}, {}]
								}],
								profesionEditor1: ["wm.Editor", {"caption":"Profesión","readonly":true,"formField":"profesion","width":"100%","height":"26px"}, {}, {
									editor: ["wm._TextEditor", {}, {}]
								}],
								empresaEditor1: ["wm.Editor", {"caption":"Empresa","readonly":true,"formField":"empresa","width":"100%","height":"26px"}, {}, {
									editor: ["wm._TextEditor", {}, {}]
								}],
								cargoEditor1: ["wm.Editor", {"caption":"Cargo","readonly":true,"formField":"cargo","width":"100%","height":"26px"}, {}, {
									editor: ["wm._TextEditor", {}, {}]
								}],
								celularEditor1: ["wm.Editor", {"caption":"Celular","readonly":true,"formField":"celular","width":"100%","height":"26px"}, {}, {
									editor: ["wm._TextEditor", {}, {}]
								}],
								direccionOficinaEditor1: ["wm.Editor", {"caption":"Dirección oficina","readonly":true,"formField":"direccionOficina","width":"100%","height":"26px"}, {}, {
									editor: ["wm._TextEditor", {}, {}]
								}],
								telefonoOficinaEditor1: ["wm.Editor", {"caption":"Telefono oficina","readonly":true,"formField":"telefonoOficina","width":"100%","height":"26px"}, {}, {
									editor: ["wm._TextEditor", {}, {}]
								}],
								parentescoEditor1: ["wm.Editor", {"caption":"Parentesco","readonly":true,"formField":"parentesco","width":"100%","height":"26px"}, {}, {
									editor: ["wm._TextEditor", {}, {}]
								}],
								rutaMEditor1: ["wm.Editor", {"caption":"¿Ruta mañana?","readonly":true,"formField":"rutaM","width":"100%","height":"26px"}, {}, {
									editor: ["wm._TextEditor", {}, {}]
								}],
								rutaTEditor1: ["wm.Editor", {"caption":"¿Ruta tarde?","readonly":true,"formField":"rutaT","width":"100%","height":"26px"}, {}, {
									editor: ["wm._TextEditor", {}, {}]
								}],
								tomaAlmuerzoEditor1: ["wm.Editor", {"caption":"¿Toma almuerzo?","readonly":true,"formField":"tomaAlmuerzo","width":"100%","height":"26px","displayValue":true,"emptyValue":"false","display":"CheckBox"}, {}, {
									editor: ["wm._CheckBoxEditor", {"dataType":"boolean"}, {}]
								}],
								tomaMediasNuevesEditor1: ["wm.Editor", {"caption":"¿Toma medias nueves?","readonly":true,"formField":"tomaMediasNueves","width":"100%","height":"26px","displayValue":true,"emptyValue":"false","display":"CheckBox"}, {}, {
									editor: ["wm._CheckBoxEditor", {"dataType":"boolean"}, {}]
								}],
								tomaSeguroAccidentesEditor1: ["wm.Editor", {"caption":"¿Toma seguro accidentes?","readonly":true,"formField":"tomaSeguroAccidentes","width":"100%","height":"26px","displayValue":true,"emptyValue":"false","display":"CheckBox"}, {}, {
									editor: ["wm._CheckBoxEditor", {"dataType":"boolean"}, {}]
								}],
								noPlaquetaEditor1: ["wm.Editor", {"caption":"No Plaqueta bus","readonly":true,"formField":"noPlaqueta","width":"100%","height":"26px"}, {}, {
									editor: ["wm._TextEditor", {}, {}]
								}],
								inscAlumCursoIdInscAlumCursoEditor1: ["wm.Editor", {"caption":"InscAlumCursoIdInscAlumCurso","readonly":true,"formField":"inscAlumCursoIdInscAlumCurso","width":"100%","height":"26px","display":"Number"}, {}, {
									editor: ["wm._NumberEditor", {}, {}]
								}],
								grupoFamiliarRelatedEditor1: ["wm.RelatedEditor", {"formField":"grupoFamiliar","lock":true}, {}, {
									binding: ["wm.Binding", {}, {}, {
										wire1: ["wm.Wire", {"targetProperty":"dataSet","source":"personaDataGrid1.selectedItem.grupoFamiliar","expression":undefined}, {}],
										wire: ["wm.Wire", {"targetProperty":"dataOutput","source":"grupoFamiliarLookup1.selectedItem","expression":undefined}, {}]
									}],
									grupoFamiliarLookup1: ["wm.Editor", {"caption":"Grupo Familiar ","readonly":true,"formField":"","width":"100%","height":"26px","display":"Lookup"}, {}, {
										editor: ["wm._LookupEditor", {"required":true,"displayField":"grupoFamiliar"}, {}]
									}]
								}],
								tipoPersonaRelatedEditor1: ["wm.RelatedEditor", {"formField":"tipoPersona","lock":true}, {}, {
									binding: ["wm.Binding", {}, {}, {
										wire1: ["wm.Wire", {"targetProperty":"dataSet","source":"personaDataGrid1.selectedItem.tipoPersona","expression":undefined}, {}],
										wire: ["wm.Wire", {"targetProperty":"dataOutput","source":"tipoPersonaLookup1.selectedItem","expression":undefined}, {}]
									}],
									tipoPersonaLookup1: ["wm.Editor", {"caption":"Tipo Persona","readonly":true,"formField":"","width":"100%","height":"26px","displayValue":"Administrativo","display":"Lookup"}, {}, {
										editor: ["wm._LookupEditor", {"required":true,"displayField":"tipoPersona"}, {}]
									}]
								}],
								editPanel1: ["wm.EditPanel", {"liveForm":"personaLiveForm1","savePanel":"savePanel1","operationPanel":"operationPanel1"}, {}, {
									savePanel1: ["wm.Panel", {"height":"100%","width":"100%","layoutKind":"left-to-right","horizontalAlign":"right","verticalAlign":"top","showing":false}, {}, {
										saveButton1: ["wm.RoundedButton", {"caption":"Save","width":"100px","height":"100%"}, {"onclick":"editPanel1.saveData"}, {
											binding: ["wm.Binding", {}, {}, {
												wire: ["wm.Wire", {"targetProperty":"disabled","source":"editPanel1.formInvalid","expression":undefined}, {}]
											}]
										}],
										cancelButton1: ["wm.RoundedButton", {"caption":"Cancel","width":"100px","height":"100%"}, {"onclick":"editPanel1.cancelEdit"}]
									}],
									operationPanel1: ["wm.Panel", {"height":"100%","width":"100%","layoutKind":"left-to-right","horizontalAlign":"right","verticalAlign":"top"}, {}, {
										newButton1: ["wm.RoundedButton", {"caption":"New","width":"100px","height":"100%"}, {"onclick":"editPanel1.beginDataInsert"}],
										updateButton1: ["wm.RoundedButton", {"caption":"Update","width":"100px","height":"100%","disabled":true}, {"onclick":"editPanel1.beginDataUpdate"}, {
											binding: ["wm.Binding", {}, {}, {
												wire: ["wm.Wire", {"targetProperty":"disabled","source":"editPanel1.formUneditable","expression":undefined}, {}]
											}]
										}],
										deleteButton1: ["wm.RoundedButton", {"caption":"Delete","width":"100px","height":"100%","disabled":true}, {"onclick":"editPanel1.deleteData"}, {
											binding: ["wm.Binding", {}, {}, {
												wire: ["wm.Wire", {"targetProperty":"disabled","source":"editPanel1.formUneditable","expression":undefined}, {}]
											}]
										}]
									}]
								}]
							}]
						}]
					}]
				}],
				pextras: ["wm.Panel", {"height":"100%","width":"100%","lock":true,"horizontalAlign":"left","verticalAlign":"top","showing":false}, {}, {
					panel9: ["wm.Panel", {"height":"100%","width":"100%","layoutKind":"left-to-right","horizontalAlign":"left","verticalAlign":"top"}, {}, {
						layers4: ["wm.Layers", {}, {}, {
							layer4: ["wm.Layer", {"caption":"layer4","horizontalAlign":"left","verticalAlign":"top"}, {}, {
								grupofamiliarLivePanel1: ["wm.LivePanel", {"verticalAlign":"top","horizontalAlign":"left"}, {}, {
									grupofamiliarGridPanel: ["wm.FancyPanel", {"_classes":{"domNode":["wm_BackgroundGradient_Blue","wm_Border_BottomStyleCurved4px","wm_Border_TopStyleCurved4px"]},"horizontalAlign":"left","verticalAlign":"top","title":"Grupo Familiar","captionClasses":"wm_BackgroundGradient_Blue wm_Border_BottomStyleCurved4px wm_Border_TopStyleCurved4px wm_FontSizePx_16px wm_FontColor_White wm_TextDecoration_Bold","margin":"1","height":"500px"}, {}, {
										panel10: ["wm.Panel", {"_classes":{"domNode":["wm_FontSizePx_14px"]},"height":"48px","width":"100%","layoutKind":"left-to-right","horizontalAlign":"left","verticalAlign":"middle"}, {}, {
											textEditor1: ["wm.TextEditor", {"_classes":{"domNode":["wm_FontSizePx_14px"]},"caption":"Grupo Familiar","width":"100%"}, {}, {
												editor: ["wm._TextEditor", {}, {}]
											}],
											button9: ["wm.Button", {"_classes":{"domNode":["wm_FontSizePx_14px"]},"height":"40px","width":"96px","caption":"Buscar"}, {"onclick":"grupofamiliarLiveVariable1"}]
										}],
										grupofamiliarDataGrid1: ["wm.DataGrid", {"_classes":{"domNode":["omgDataGrid","wm_FontSizePx_12px"]},"border":"0"}, {}, {
											binding: ["wm.Binding", {}, {}, {
												wire: ["wm.Wire", {"targetProperty":"dataSet","source":"grupofamiliarLiveVariable1","expression":undefined}, {}]
											}],
											idGrupoFamiliar1: ["wm.DataGridColumn", {"field":"idGrupoFamiliar","caption":"●","autoSize":undefined,"columnWidth":"79px","display":"Number"}, {}, {
												format: ["wm.NumberFormatter", {}, {}]
											}],
											grupoFamiliar1: ["wm.DataGridColumn", {"field":"grupoFamiliar","caption":"GrupoFamiliar","autoSize":undefined,"columnWidth":"149px","index":1}, {}, {
												format: ["wm.DataFormatter", {}, {}]
											}],
											grupoLdap1: ["wm.DataGridColumn", {"field":"grupoLdap","caption":"GrupoLdap","autoSize":undefined,"index":2}, {}, {
												format: ["wm.DataFormatter", {}, {}]
											}]
										}]
									}],
									grupofamiliarDetailsPanel: ["wm.FancyPanel", {"_classes":{"domNode":["wm_BackgroundGradient_Blue","wm_Border_BottomStyleCurved4px","wm_Border_DropShadow","wm_Border_TopStyleCurved4px"]},"horizontalAlign":"left","verticalAlign":"top","title":"Formulario Grupos Familiares","captionClasses":"wm_BackgroundGradient_Blue wm_Border_BottomStyleCurved4px wm_Border_DropShadow wm_Border_TopStyleCurved4px wm_FontSizePx_16px wm_FontColor_White wm_TextDecoration_Bold"}, {}, {
										grupofamiliarLiveForm1: ["wm.LiveForm", {"_classes":{"domNode":["wm_FontSizePx_14px","wm_SilverBlueTheme_LightBlueInsetPanel"]},"height":"120%","verticalAlign":"top","horizontalAlign":"left","readonly":true}, {"onSuccess":"grupofamiliarLiveVariable1"}, {
											binding: ["wm.Binding", {}, {}, {
												wire: ["wm.Wire", {"targetProperty":"dataSet","source":"grupofamiliarDataGrid1.selectedItem","expression":undefined}, {}]
											}],
											idGrupoFamiliarEditor1: ["wm.Editor", {"caption":"IdGrupoFamiliar","readonly":true,"formField":"idGrupoFamiliar","width":"100%","height":"26px","display":"Number"}, {}, {
												editor: ["wm._NumberEditor", {"required":true}, {}]
											}],
											grupoFamiliarEditor1: ["wm.Editor", {"caption":"GrupoFamiliar","readonly":true,"formField":"grupoFamiliar","width":"100%","height":"26px"}, {}, {
												editor: ["wm._TextEditor", {}, {}]
											}],
											grupoLdapEditor1: ["wm.Editor", {"caption":"GrupoLdap","readonly":true,"formField":"grupoLdap","width":"100%","height":"26px"}, {}, {
												editor: ["wm._TextEditor", {}, {}]
											}],
											editPanel3: ["wm.EditPanel", {"liveForm":"grupofamiliarLiveForm1","savePanel":"savePanel3","operationPanel":"operationPanel3","lock":false}, {}, {
												savePanel3: ["wm.Panel", {"height":"100%","width":"100%","layoutKind":"left-to-right","horizontalAlign":"right","verticalAlign":"top","showing":false}, {}, {
													saveButton3: ["wm.RoundedButton", {"caption":"Save","width":"100px","height":"100%"}, {"onclick":"editPanel3.saveData"}, {
														binding: ["wm.Binding", {}, {}, {
															wire: ["wm.Wire", {"targetProperty":"disabled","source":"editPanel3.formInvalid","expression":undefined}, {}]
														}]
													}],
													cancelButton3: ["wm.RoundedButton", {"caption":"Cancel","width":"100px","height":"100%"}, {"onclick":"editPanel3.cancelEdit"}]
												}],
												operationPanel3: ["wm.Panel", {"height":"100%","width":"100%","layoutKind":"left-to-right","horizontalAlign":"right","verticalAlign":"top"}, {}, {
													newButton3: ["wm.RoundedButton", {"caption":"Nuevo","width":"100px","height":"100%"}, {"onclick":"editPanel3.beginDataInsert"}],
													updateButton3: ["wm.RoundedButton", {"caption":"Actualizar","width":"100px","height":"100%","disabled":true}, {"onclick":"editPanel3.beginDataUpdate"}, {
														binding: ["wm.Binding", {}, {}, {
															wire: ["wm.Wire", {"targetProperty":"disabled","source":"editPanel3.formUneditable","expression":undefined}, {}]
														}]
													}],
													deleteButton3: ["wm.RoundedButton", {"caption":"Borrar","width":"100px","height":"100%","disabled":true}, {"onclick":"editPanel3.deleteData"}, {
														binding: ["wm.Binding", {}, {}, {
															wire: ["wm.Wire", {"targetProperty":"disabled","source":"editPanel3.formUneditable","expression":undefined}, {}]
														}]
													}]
												}]
											}]
										}]
									}]
								}]
							}]
						}],
						layers3: ["wm.Layers", {}, {}, {
							layer3: ["wm.Layer", {"caption":"layer3","horizontalAlign":"left","verticalAlign":"top"}, {}, {
								tipopersonaLivePanel1: ["wm.LivePanel", {"verticalAlign":"top","horizontalAlign":"left"}, {}, {
									tipopersonaGridPanel: ["wm.FancyPanel", {"_classes":{"domNode":["wm_BackgroundGradient_Blue","wm_Border_BottomStyleCurved4px","wm_Border_TopStyleCurved4px"]},"horizontalAlign":"left","verticalAlign":"top","title":"Tipo Persona","captionClasses":"wm_BackgroundGradient_Blue wm_Border_BottomStyleCurved4px wm_Border_TopStyleCurved4px wm_FontSizePx_16px wm_FontColor_White wm_TextDecoration_Bold","margin":"1","height":"500px"}, {}, {
										spacer5: ["wm.Spacer", {"height":"48px","width":"96px"}, {}],
										tipopersonaDataGrid1: ["wm.DataGrid", {"_classes":{"domNode":["omgDataGrid","wm_FontSizePx_14px"]},"border":"0"}, {}, {
											binding: ["wm.Binding", {}, {}, {
												wire: ["wm.Wire", {"targetProperty":"dataSet","source":"tipopersonaLiveVariable1","expression":undefined}, {}]
											}],
											idTipoPersona1: ["wm.DataGridColumn", {"field":"idTipoPersona","caption":"●","autoSize":undefined,"columnWidth":"70px","display":"Number"}, {}, {
												format: ["wm.NumberFormatter", {}, {}]
											}],
											tipoPersona1: ["wm.DataGridColumn", {"field":"tipoPersona","caption":"Tipo Persona","autoSize":undefined,"columnWidth":"286px","index":1}, {}, {
												format: ["wm.DataFormatter", {}, {}]
											}]
										}]
									}],
									tipopersonaDetailsPanel: ["wm.FancyPanel", {"_classes":{"domNode":["wm_BackgroundGradient_Blue","wm_Border_BottomStyleCurved4px","wm_Border_DropShadow","wm_Border_TopStyleCurved4px"]},"horizontalAlign":"left","verticalAlign":"top","title":"Formulario Tipo Personas","captionClasses":"wm_BackgroundGradient_Blue wm_Border_BottomStyleCurved4px wm_Border_DropShadow wm_Border_TopStyleCurved4px wm_FontSizePx_16px wm_FontColor_White wm_TextDecoration_Bold"}, {}, {
										tipopersonaLiveForm1: ["wm.LiveForm", {"_classes":{"domNode":["wm_FontSizePx_14px","wm_SilverBlueTheme_LightBlueInsetPanel"]},"height":"100%","verticalAlign":"top","horizontalAlign":"left","readonly":true}, {"onSuccess":"tipopersonaLiveVariable1"}, {
											binding: ["wm.Binding", {}, {}, {
												wire: ["wm.Wire", {"targetProperty":"dataSet","source":"tipopersonaDataGrid1.selectedItem","expression":undefined}, {}]
											}],
											idTipoPersonaEditor1: ["wm.Editor", {"caption":"IdTipoPersona","readonly":true,"formField":"idTipoPersona","width":"100%","height":"26px","display":"Number"}, {}, {
												editor: ["wm._NumberEditor", {"required":true}, {}]
											}],
											tipoPersonaEditor1: ["wm.Editor", {"caption":"TipoPersona","readonly":true,"formField":"tipoPersona","width":"100%","height":"26px"}, {}, {
												editor: ["wm._TextEditor", {}, {}]
											}],
											editPanel2: ["wm.EditPanel", {"liveForm":"tipopersonaLiveForm1","savePanel":"savePanel2","operationPanel":"operationPanel2","lock":false}, {}, {
												savePanel2: ["wm.Panel", {"height":"100%","width":"100%","layoutKind":"left-to-right","horizontalAlign":"right","verticalAlign":"top","showing":false}, {}, {
													saveButton2: ["wm.RoundedButton", {"caption":"Save","width":"100px","height":"100%"}, {"onclick":"editPanel2.saveData"}, {
														binding: ["wm.Binding", {}, {}, {
															wire: ["wm.Wire", {"targetProperty":"disabled","source":"editPanel2.formInvalid","expression":undefined}, {}]
														}]
													}],
													cancelButton2: ["wm.RoundedButton", {"caption":"Cancel","width":"100px","height":"100%"}, {"onclick":"editPanel2.cancelEdit"}]
												}],
												operationPanel2: ["wm.Panel", {"height":"100%","width":"100%","layoutKind":"left-to-right","horizontalAlign":"right","verticalAlign":"top"}, {}, {
													newButton2: ["wm.RoundedButton", {"caption":"Nuevo","width":"100px","height":"100%"}, {"onclick":"editPanel2.beginDataInsert"}],
													updateButton2: ["wm.RoundedButton", {"caption":"Actualizar","width":"100px","height":"100%","disabled":true}, {"onclick":"editPanel2.beginDataUpdate"}, {
														binding: ["wm.Binding", {}, {}, {
															wire: ["wm.Wire", {"targetProperty":"disabled","source":"editPanel2.formUneditable","expression":undefined}, {}]
														}]
													}],
													deleteButton2: ["wm.RoundedButton", {"caption":"Borrar","width":"100px","height":"100%","disabled":true}, {"onclick":"editPanel2.deleteData"}, {
														binding: ["wm.Binding", {}, {}, {
															wire: ["wm.Wire", {"targetProperty":"disabled","source":"editPanel2.formUneditable","expression":undefined}, {}]
														}]
													}]
												}]
											}]
										}]
									}]
								}]
							}]
						}]
					}]
				}],
				pdocentes: ["wm.Panel", {"height":"100%","width":"100%","lock":true,"horizontalAlign":"left","verticalAlign":"top","showing":false,"border":"1","borderColor":"#000000"}, {}, {
					panel17: ["wm.Panel", {"height":"255%","width":"100%","layoutKind":"left-to-right","horizontalAlign":"left","verticalAlign":"top"}, {}, {
						layers5: ["wm.Layers", {"width":"210%"}, {}, {
							layer5: ["wm.Layer", {"caption":"layer5","horizontalAlign":"left","verticalAlign":"top"}, {}, {
								panel18: ["wm.Panel", {"_classes":{"domNode":["wm_SilverBlueTheme_ToolBar"]},"height":"33px","width":"100%","layoutKind":"left-to-right","horizontalAlign":"left","verticalAlign":"middle"}, {}, {
									sySelect: ["wm.SelectEditor", {"width":"150%","caption":"Año escolar","captionSize":"60%"}, {}, {
										binding: ["wm.Binding", {}, {}, {
											wire: ["wm.Wire", {"targetProperty":"filter.sy.idSy","source":"sySelect.dataValue","targetId":"app.asignaturaLV"}, {}]
										}],
										editor: ["wm._SelectEditor", {"displayField":"schoolYear","dataField":"idSy"}, {}, {
											binding: ["wm.Binding", {}, {}, {
												wire: ["wm.Wire", {"targetProperty":"dataSet","source":"app.lsanio_escolarLV","expression":undefined}, {}]
											}]
										}]
									}],
									gradoSelect: ["wm.SelectEditor", {"width":"150%","caption":"Grado"}, {}, {
										binding: ["wm.Binding", {}, {}, {
											wire: ["wm.Wire", {"targetProperty":"filter.grado.idGrado","source":"gradoSelect.dataValue","targetId":"app.asignaturaLV"}, {}],
											wire1: ["wm.Wire", {"targetProperty":"filter.grado.idGrado","source":"gradoSelect.dataValue","targetId":"app.cursosLV"}, {}]
										}],
										editor: ["wm._SelectEditor", {"displayField":"grado","dataField":"idGrado"}, {}, {
											binding: ["wm.Binding", {}, {}, {
												wire: ["wm.Wire", {"targetProperty":"dataSet","source":"app.lsgradoLV","expression":undefined}, {}]
											}]
										}]
									}],
									button3: ["wm.Button", {"_classes":{"domNode":["wm_FontSizePx_12px"]},"height":"100%","width":"96px","caption":"Buscar"}, {"onclick":"button3Click"}]
								}],
								asignaturaPanel: ["wm.Panel", {"height":"100%","width":"100%","layoutKind":"left-to-right","horizontalAlign":"left","verticalAlign":"top","border":"2","borderColor":"#000000"}, {}, {
									panel15: ["wm.Panel", {"height":"100%","width":"50%","horizontalAlign":"right","verticalAlign":"top"}, {}, {
										aux51: ["wm.TextEditor", {"caption":"ID Asignatura","width":"150%"}, {}, {
											binding: ["wm.Binding", {}, {}, {
												wire: ["wm.Wire", {"targetProperty":"filter.idAsignatura","source":"aux51.dataValue","targetId":"app.asignaturaLV"}, {}]
											}],
											editor: ["wm._TextEditor", {}, {}]
										}],
										aux52: ["wm.TextEditor", {"caption":"Asignatura","width":"150%"}, {}, {
											binding: ["wm.Binding", {}, {}, {
												wire: ["wm.Wire", {"targetProperty":"filter.asignatura","source":"aux52.dataValue","targetId":"app.asignaturaLV"}, {}]
											}],
											editor: ["wm._TextEditor", {}, {}]
										}],
										Buscar: ["wm.Button", {"_classes":{"domNode":["wm_FontSizePx_12px"]},"height":"34px","width":"96px","caption":"Buscar"}, {"onclick":"app.asignaturaLV"}]
									}],
									panel11: ["wm.Panel", {"height":"100%","width":"100%","horizontalAlign":"left","verticalAlign":"top"}, {}, {
										asignaturaDG: ["wm.DataGrid", {"_classes":{"domNode":["wm_FontSizePx_12px"]},"border":"0"}, {}, {
											binding: ["wm.Binding", {}, {}, {
												wire: ["wm.Wire", {"targetProperty":"dataSet","source":"app.asignaturaLV","expression":undefined}, {}]
											}],
											subject1: ["wm.DataGridColumn", {"field":"subject","caption":"Subject","columnWidth":"100%","index":2}, {}, {
												format: ["wm.DataFormatter", {}, {}]
											}],
											idAsignatura1: ["wm.DataGridColumn", {"field":"idAsignatura","caption":"●","columnWidth":"54px"}, {}, {
												format: ["wm.DataFormatter", {}, {}]
											}],
											asignatura1: ["wm.DataGridColumn", {"field":"asignatura","caption":"Asignatura","columnWidth":"100%","index":1}, {}, {
												format: ["wm.DataFormatter", {}, {}]
											}]
										}]
									}]
								}],
								cursoPanel: ["wm.Panel", {"height":"140px","width":"100%","layoutKind":"left-to-right","horizontalAlign":"left","verticalAlign":"top","border":"2","borderColor":"#000000"}, {}, {
									panel3: ["wm.Panel", {"height":"100%","width":"50%","horizontalAlign":"left","verticalAlign":"top"}, {}],
									panel6: ["wm.Panel", {"height":"134px","width":"100%","horizontalAlign":"left","verticalAlign":"top"}, {}, {
										cursoDG: ["wm.DataGrid", {"_classes":{"domNode":["wm_FontSizePx_12px"]},"border":"0","height":"128px"}, {}, {
											binding: ["wm.Binding", {}, {}, {
												wire: ["wm.Wire", {"targetProperty":"dataSet","source":"app.cursosLV","expression":undefined}, {}]
											}],
											curso1: ["wm.DataGridColumn", {"field":"curso","caption":"Curso","columnWidth":"100%","index":1}, {}, {
												format: ["wm.DataFormatter", {}, {}]
											}],
											idCurso1: ["wm.DataGridColumn", {"field":"idCurso","caption":"●","columnWidth":"57px"}, {}, {
												format: ["wm.DataFormatter", {}, {}]
											}]
										}]
									}]
								}],
								asignarPanel: ["wm.Panel", {"height":"100%","width":"100%","layoutKind":"left-to-right","horizontalAlign":"left","verticalAlign":"top","border":"2","borderColor":"#000000"}, {}, {
									insccursoasigGridPanel: ["wm.FancyPanel", {"_classes":{"domNode":["wm_BackgroundGradient_Blue","wm_Border_BottomStyleCurved4px","wm_Border_TopStyleCurved4px"]},"horizontalAlign":"left","verticalAlign":"top","title":"Tabla","captionClasses":"wm_BackgroundGradient_Blue wm_Border_BottomStyleCurved4px wm_Border_TopStyleCurved4px wm_FontSizePx_16px wm_FontColor_White wm_TextDecoration_Bold","margin":"0","border":"3,3,3,3"}, {}, {
										insccursoasigDataGrid1: ["wm.DataGrid", {"_classes":{"domNode":["omgDataGrid"]},"border":"0"}, {}, {
											binding: ["wm.Binding", {}, {}, {
												wire: ["wm.Wire", {"targetProperty":"dataSet","source":"insccursoasigLiveVariable1","expression":undefined}, {}]
											}],
											column1: ["wm.DataGridColumn", {"field":"curso.curso","caption":"Curso","columnWidth":"84px"}, {}, {
												format: ["wm.DataFormatter", {}, {}]
											}],
											column2: ["wm.DataGridColumn", {"field":"asignatura.idAsignatura","caption":"●","columnWidth":"62px","index":1}, {}, {
												format: ["wm.DataFormatter", {}, {}]
											}],
											column3: ["wm.DataGridColumn", {"field":"persona.nombre1","caption":"1er Nombre","columnWidth":"80px","index":3}, {}, {
												format: ["wm.DataFormatter", {}, {}]
											}],
											column4: ["wm.DataGridColumn", {"field":"persona.apellido1","caption":"1er Apellido","index":4}, {}, {
												format: ["wm.DataFormatter", {}, {}]
											}],
											column5: ["wm.DataGridColumn", {"field":"persona.idPersona","caption":"●","columnWidth":"56px","index":2}, {}, {
												format: ["wm.DataFormatter", {}, {}]
											}]
										}]
									}],
									insccursoasigLivePanel1: ["wm.LivePanel", {"verticalAlign":"top","horizontalAlign":"left"}, {}, {
										insccursoasigDetailsPanel: ["wm.FancyPanel", {"_classes":{"domNode":["wm_BackgroundGradient_Blue","wm_Border_BottomStyleCurved4px","wm_Border_TopStyleCurved4px"]},"horizontalAlign":"left","verticalAlign":"top","title":"Formulario ","captionClasses":"wm_BackgroundGradient_Blue wm_Border_BottomStyleCurved4px wm_Border_TopStyleCurved4px wm_FontSizePx_16px wm_FontColor_White wm_TextDecoration_Bold","margin":"0"}, {}, {
											insccursoasigLiveForm1: ["wm.LiveForm", {"_classes":{"domNode":["wm_SilverBlueTheme_LightBlueInsetPanel","wm_FontSizePx_14px"]},"height":"172px","verticalAlign":"top","horizontalAlign":"left","readonly":true,"fitToContentHeight":true}, {"onSuccess":"insccursoasigLiveVariable1","onBeginInsert":"insccursoasigLiveForm1BeginInsert"}, {
												binding: ["wm.Binding", {}, {}, {
													wire: ["wm.Wire", {"targetProperty":"dataSet","source":"insccursoasigDataGrid1.selectedItem","expression":undefined}, {}],
													wire1: ["wm.Wire", {"targetProperty":"dataOutput.curso","source":"cursoRelatedEditor1.dataOutput","expression":undefined}, {}],
													wire2: ["wm.Wire", {"targetProperty":"dataOutput.asignatura","source":"asignaturaRelatedEditor1.dataOutput","expression":undefined}, {}],
													wire3: ["wm.Wire", {"targetProperty":"dataOutput.periodo","source":"periodoRelatedEditor1.dataOutput","expression":undefined}, {}],
													wire4: ["wm.Wire", {"targetProperty":"dataOutput.persona","source":"personaRelatedEditor1.dataOutput","expression":undefined}, {}]
												}],
												idInscCursoAsigEditor1: ["wm.Editor", {"caption":"ID","readonly":true,"formField":"idInscCursoAsig","width":"100%","height":"26px","display":"Number"}, {}, {
													editor: ["wm._NumberEditor", {"required":true}, {}]
												}],
												periodoRelatedEditor1: ["wm.RelatedEditor", {"formField":"periodo","width":"249%"}, {}, {
													binding: ["wm.Binding", {}, {}, {
														wire1: ["wm.Wire", {"targetProperty":"dataSet","source":"insccursoasigDataGrid1.selectedItem.periodo","expression":undefined}, {}],
														wire: ["wm.Wire", {"targetProperty":"dataOutput","source":"periodoLookup1.selectedItem","expression":undefined}, {}]
													}],
													periodoLookup1: ["wm.Editor", {"caption":"Año escolar","readonly":true,"formField":"","width":"100%","height":"26px","displayValue":"2010-2011","display":"Lookup"}, {}, {
														editor: ["wm._LookupEditor", {"required":true,"displayField":"periodo"}, {}]
													}]
												}],
												asignaturaRelatedEditor1: ["wm.RelatedEditor", {"_classes":{"domNode":["wm_SilverBlueTheme_MainInsetPanel"]},"formField":"asignatura"}, {}, {
													binding: ["wm.Binding", {}, {}, {
														wire1: ["wm.Wire", {"targetProperty":"dataSet","source":"insccursoasigDataGrid1.selectedItem.asignatura","expression":undefined}, {}],
														wire: ["wm.Wire", {"targetProperty":"dataOutput","source":"asignaturaLookup2.selectedItem","expression":undefined}, {}]
													}],
													asignaturaLookup1: ["wm.Editor", {"caption":"ID Asignatura","readonly":true,"formField":"idAsignatura","width":"100%","height":"26px","display":"Number"}, {}, {
														editor: ["wm._NumberEditor", {"required":true}, {}]
													}]
												}],
												cursoRelatedEditor1: ["wm.RelatedEditor", {"_classes":{"domNode":["wm_SilverBlueTheme_MainInsetPanel"]},"formField":"curso"}, {}, {
													binding: ["wm.Binding", {}, {}, {
														wire1: ["wm.Wire", {"targetProperty":"dataSet","source":"insccursoasigDataGrid1.selectedItem.curso","expression":undefined}, {}],
														wire: ["wm.Wire", {"targetProperty":"dataOutput","source":"cursoLookup2.selectedItem","expression":undefined}, {}]
													}],
													cursoLookup1: ["wm.Editor", {"caption":"ID Curso","readonly":true,"formField":"idCurso","width":"100%","height":"26px","display":"Number"}, {}, {
														editor: ["wm._NumberEditor", {"required":true}, {}]
													}]
												}],
												personaRelatedEditor1: ["wm.RelatedEditor", {"_classes":{"domNode":["wm_SilverBlueTheme_MainInsetPanel"]},"formField":"persona"}, {}, {
													binding: ["wm.Binding", {}, {}, {
														wire1: ["wm.Wire", {"targetProperty":"dataSet","source":"insccursoasigDataGrid1.selectedItem.persona","expression":undefined}, {}],
														wire: ["wm.Wire", {"targetProperty":"dataOutput","source":"personaLookup2.selectedItem","expression":undefined}, {}]
													}],
													personaLookup1: ["wm.Editor", {"caption":"ID Persona","readonly":true,"formField":"idPersona","width":"100%","height":"26px","display":"Number"}, {}, {
														editor: ["wm._NumberEditor", {"required":true}, {}]
													}]
												}],
												editPanel4: ["wm.EditPanel", {"liveForm":"insccursoasigLiveForm1","savePanel":"savePanel4","operationPanel":"operationPanel4"}, {}, {
													savePanel4: ["wm.Panel", {"height":"100%","width":"100%","layoutKind":"left-to-right","horizontalAlign":"right","verticalAlign":"top","showing":false}, {}, {
														saveButton4: ["wm.RoundedButton", {"caption":"Guardar","width":"100px","height":"100%"}, {"onclick":"editPanel4.saveData"}, {
															binding: ["wm.Binding", {}, {}, {
																wire: ["wm.Wire", {"targetProperty":"disabled","source":"editPanel4.formInvalid","expression":undefined}, {}]
															}]
														}],
														cancelButton4: ["wm.RoundedButton", {"caption":"Cancelar","width":"100px","height":"100%"}, {"onclick":"editPanel4.cancelEdit"}]
													}],
													operationPanel4: ["wm.Panel", {"height":"100%","width":"100%","layoutKind":"left-to-right","horizontalAlign":"right","verticalAlign":"top"}, {}, {
														newButton4: ["wm.RoundedButton", {"caption":"Nuevo","width":"100px","height":"100%"}, {"onclick":"editPanel4.beginDataInsert"}],
														updateButton4: ["wm.RoundedButton", {"caption":"Actualizar","width":"100px","height":"100%","disabled":true}, {"onclick":"editPanel4.beginDataUpdate"}, {
															binding: ["wm.Binding", {}, {}, {
																wire: ["wm.Wire", {"targetProperty":"disabled","source":"editPanel4.formUneditable","expression":undefined}, {}]
															}]
														}],
														deleteButton4: ["wm.RoundedButton", {"caption":"Borrar","width":"100px","height":"100%","disabled":true}, {"onclick":"editPanel4.deleteData"}, {
															binding: ["wm.Binding", {}, {}, {
																wire: ["wm.Wire", {"targetProperty":"disabled","source":"editPanel4.formUneditable","expression":undefined}, {}]
															}]
														}]
													}]
												}]
											}]
										}]
									}]
								}]
							}]
						}],
						layers6: ["wm.Layers", {}, {}, {
							layer6: ["wm.Layer", {"caption":"layer6","horizontalAlign":"left","verticalAlign":"top"}, {}, {
								panel16: ["wm.Panel", {"height":"210px","width":"100%","layoutKind":"left-to-right","horizontalAlign":"left","verticalAlign":"top"}, {}, {
									layers8: ["wm.Layers", {}, {}, {
										layer8: ["wm.Layer", {"_classes":{"domNode":["wm_FontSizePx_12px"]},"caption":"layer8","horizontalAlign":"right","verticalAlign":"top"}, {}, {
											aux53: ["wm.TextEditor", {"caption":"Codigo","width":"100%"}, {}, {
												binding: ["wm.Binding", {}, {}, {
													wire: ["wm.Wire", {"targetProperty":"filter.codigo","source":"aux53.dataValue","targetId":"app.profesores"}, {}]
												}],
												editor: ["wm._TextEditor", {}, {}]
											}],
											aux54: ["wm.TextEditor", {"caption":"No. Identidad","width":"100%"}, {}, {
												binding: ["wm.Binding", {}, {}, {
													wire: ["wm.Wire", {"targetProperty":"filter.noDocumento","source":"aux54.dataValue","targetId":"app.profesores"}, {}]
												}],
												editor: ["wm._TextEditor", {}, {}]
											}],
											nombre1: ["wm.TextEditor", {"caption":"1er Nombre","width":"150%"}, {}, {
												binding: ["wm.Binding", {}, {}, {
													wire: ["wm.Wire", {"targetProperty":"filter.nombre1","source":"nombre1.dataValue","targetId":"app.profesores"}, {}]
												}],
												editor: ["wm._TextEditor", {}, {}]
											}],
											nombre2: ["wm.TextEditor", {"caption":"2do Nombre","width":"150%"}, {}, {
												binding: ["wm.Binding", {}, {}, {
													wire: ["wm.Wire", {"targetProperty":"filter.nombre2","source":"nombre2.dataValue","targetId":"app.profesores"}, {}]
												}],
												editor: ["wm._TextEditor", {}, {}]
											}],
											apellido1: ["wm.TextEditor", {"caption":"1er Apellido","width":"150%"}, {}, {
												binding: ["wm.Binding", {}, {}, {
													wire: ["wm.Wire", {"targetProperty":"filter.apellido1","source":"apellido1.dataValue","targetId":"app.profesores"}, {}]
												}],
												editor: ["wm._TextEditor", {}, {}]
											}],
											apellido2: ["wm.TextEditor", {"caption":"2do Apellido","width":"150%"}, {}, {
												binding: ["wm.Binding", {}, {}, {
													wire: ["wm.Wire", {"targetProperty":"filter.apellido2","source":"apellido2.dataValue","targetId":"app.profesores"}, {}]
												}],
												editor: ["wm._TextEditor", {}, {}]
											}],
											tipoPersonaSelect: ["wm.SelectEditor", {"width":"150%","caption":"Tipo Persona"}, {}, {
												binding: ["wm.Binding", {}, {}, {
													wire: ["wm.Wire", {"targetProperty":"filter.tipoPersona.idTipoPersona","source":"tipoPersonaSelect.dataValue","targetId":"app.profesores"}, {}]
												}],
												editor: ["wm._SelectEditor", {"displayField":"tipoPersona","dataField":"idTipoPersona"}, {}, {
													binding: ["wm.Binding", {}, {}, {
														wire: ["wm.Wire", {"targetProperty":"dataSet","source":"app.lsTipoPersona","expression":undefined}, {}]
													}]
												}]
											}],
											button2: ["wm.Button", {"_classes":{"domNode":["wm_FontSizePx_12px"]},"height":"35px","width":"96px","caption":"Buscar"}, {"onclick":"app.profesores"}]
										}]
									}]
								}],
								docentesDG: ["wm.DataGrid", {"_classes":{"domNode":["wm_FontSizePx_12px"]},"border":"2","borderColor":"#000000"}, {}, {
									binding: ["wm.Binding", {}, {}, {
										wire: ["wm.Wire", {"targetProperty":"dataSet","source":"app.profesores","expression":undefined}, {}]
									}],
									noDocumento1: ["wm.DataGridColumn", {"field":"idPersona","caption":"●","columnWidth":"83px"}, {}, {
										format: ["wm.DataFormatter", {}, {}]
									}],
									nombre3: ["wm.DataGridColumn", {"field":"nombre1","caption":"1er Nombre","columnWidth":"96px","index":1}, {}, {
										format: ["wm.DataFormatter", {}, {}]
									}],
									apellido3: ["wm.DataGridColumn", {"field":"apellido1","caption":"1er Apellido","index":3}, {}, {
										format: ["wm.DataFormatter", {}, {}]
									}],
									column1: ["wm.DataGridColumn", {"field":"apellido2","caption":"2do Apellido","index":4}, {}, {
										format: ["wm.DataFormatter", {}, {}]
									}],
									column2: ["wm.DataGridColumn", {"field":"tipoPersona.tipoPersona","caption":"┐","index":5}, {}, {
										format: ["wm.DataFormatter", {}, {}]
									}],
									column3: ["wm.DataGridColumn", {"field":"nombre2","caption":"2do Nombre","index":2}, {}, {
										format: ["wm.DataFormatter", {}, {}]
									}]
								}]
							}]
						}]
					}]
				}],
				alumnos: ["wm.Panel", {"_classes":{"domNode":["wm_SilverBlueTheme_LightBlueInsetPanel"]},"height":"100%","width":"100%","lock":true,"horizontalAlign":"left","verticalAlign":"top","showing":false,"padding":"2"}, {}, {
					panel13: ["wm.Panel", {"_classes":{"domNode":["wm_FontSizePx_14px","wm_SilverBlueTheme_ToolBar"]},"height":"48px","width":"100%","layoutKind":"left-to-right","horizontalAlign":"left","verticalAlign":"middle"}, {}, {
						selectEditor3: ["wm.SelectEditor", {"width":"200px","caption":"Periodo Escolar"}, {}, {
							binding: ["wm.Binding", {}, {}, {
								wire: ["wm.Wire", {"targetProperty":"filter.sy.idSy","source":"selectEditor3.dataValue","targetId":"app.estudiantesLV"}, {}]
							}],
							editor: ["wm._SelectEditor", {"displayField":"schoolYear","dataField":"idSy"}, {}, {
								binding: ["wm.Binding", {}, {}, {
									wire: ["wm.Wire", {"targetProperty":"dataSet","source":"app.lsanio_escolarLV","expression":undefined}, {}]
								}]
							}]
						}],
						selectEditor1: ["wm.SelectEditor", {"_classes":{"captionNode":["wm_FontSizePx_14px"]},"width":"173px","caption":"Grado"}, {"onchange":"app.ls2Cursos"}, {
							binding: ["wm.Binding", {}, {}, {
								wire: ["wm.Wire", {"targetProperty":"filter.grado.idGrado","source":"selectEditor1.dataValue","targetId":"app.ls2Cursos"}, {}]
							}],
							editor: ["wm._SelectEditor", {"displayField":"grado","dataField":"idGrado"}, {}, {
								binding: ["wm.Binding", {}, {}, {
									wire: ["wm.Wire", {"targetProperty":"dataSet","source":"app.ls2Grados","expression":undefined}, {}]
								}]
							}]
						}],
						selectEditor2: ["wm.SelectEditor", {"_classes":{"domNode":["wm_FontSizePx_14px"]},"width":"152px","caption":"Curso","borderColor":"#000000"}, {}, {
							binding: ["wm.Binding", {}, {}, {
								wire: ["wm.Wire", {"targetProperty":"filter.curso.idCurso","source":"selectEditor2.dataValue","targetId":"app.estudiantesLV"}, {}]
							}],
							editor: ["wm._SelectEditor", {"displayField":"curso","dataField":"idCurso"}, {}, {
								binding: ["wm.Binding", {}, {}, {
									wire: ["wm.Wire", {"targetProperty":"dataSet","source":"app.ls2Cursos","expression":undefined}, {}]
								}]
							}]
						}],
						buscar: ["wm.Button", {"_classes":{"domNode":["wm_FontSizePx_14px","wm_TextDecoration_Bold"]},"height":"34px","width":"80px","caption":"Buscar"}, {"onclick":"buscarClick"}],
						button11: ["wm.Button", {"_classes":{"domNode":["wm_FontSizePx_14px","wm_TextDecoration_Bold"]},"height":"34px","width":"96px","caption":"Limpiar"}, {}]
					}],
					panel14: ["wm.Panel", {"height":"100%","width":"100%","layoutKind":"left-to-right","horizontalAlign":"left","verticalAlign":"top"}, {}, {
						layers10: ["wm.Layers", {}, {}, {
							layer10: ["wm.Layer", {"caption":"layer10","horizontalAlign":"left","verticalAlign":"top"}, {}, {
								panel21: ["wm.Panel", {"height":"30%","width":"100%","layoutKind":"left-to-right","horizontalAlign":"left","verticalAlign":"top"}, {}, {
									layers12: ["wm.Layers", {}, {}, {
										layer12: ["wm.Layer", {"caption":"layer12","horizontalAlign":"left","verticalAlign":"top"}, {}, {
											n1: ["wm.TextEditor", {"caption":"Nombre 1","width":"150%"}, {}, {
												editor: ["wm._TextEditor", {}, {}]
											}],
											n2: ["wm.TextEditor", {"caption":"Nombre 2","width":"150%"}, {}, {
												editor: ["wm._TextEditor", {}, {}]
											}],
											a1: ["wm.TextEditor", {"caption":"Apellido 1","width":"150%"}, {}, {
												editor: ["wm._TextEditor", {}, {}]
											}],
											a2: ["wm.TextEditor", {"caption":"Apellido 2","width":"150%"}, {}, {
												editor: ["wm._TextEditor", {}, {}]
											}]
										}]
									}],
									layers11: ["wm.Layers", {}, {}, {
										layer11: ["wm.Layer", {"caption":"layer11","horizontalAlign":"left","verticalAlign":"top"}, {}, {
											c1: ["wm.TextEditor", {"caption":"Codigo","width":"150%"}, {}, {
												editor: ["wm._TextEditor", {}, {}]
											}],
											t1: ["wm.SelectEditor", {"width":"150%","caption":"Tipo"}, {}, {
												editor: ["wm._SelectEditor", {"displayField":"tipoPersona","dataField":"idTipoPersona","startUpdate":true}, {}, {
													binding: ["wm.Binding", {}, {}, {
														wire: ["wm.Wire", {"targetProperty":"dataSet","source":"lstipo","expression":undefined}, {}]
													}]
												}]
											}],
											panel19: ["wm.Panel", {"height":"48px","width":"100%","layoutKind":"left-to-right","horizontalAlign":"right","verticalAlign":"top"}, {}, {
												button12: ["wm.Button", {"_classes":{"domNode":["wm_FontSizePx_12px"]},"height":"38px","width":"96px","caption":"Buscar"}, {"onclick":"listaPersonas"}],
												button13: ["wm.Button", {"_classes":{"domNode":["wm_FontSizePx_12px"]},"height":"38px","width":"75px","caption":"Clear"}, {"onclick":"button13Click"}]
											}]
										}]
									}]
								}],
								dataGrid1: ["wm.DataGrid", {"_classes":{"domNode":["wm_FontSizePx_12px"]},"border":"1","borderColor":"#000000"}, {}, {
									binding: ["wm.Binding", {}, {}, {
										wire: ["wm.Wire", {"targetProperty":"dataSet","source":"listaPersonas","expression":undefined}, {}]
									}],
									idPersona1: ["wm.DataGridColumn", {"field":"idPersona","caption":"∟","autoSize":undefined,"columnWidth":"39px"}, {}, {
										format: ["wm.DataFormatter", {}, {}]
									}],
									tipoPersonaTipoPersona1: ["wm.DataGridColumn", {"field":"tipoPersona.tipoPersona","caption":"Tipo","autoSize":undefined,"columnWidth":"80px","index":6}, {}, {
										format: ["wm.DataFormatter", {}, {}]
									}],
									codigo1: ["wm.DataGridColumn", {"field":"codigo","caption":"Codigo","autoSize":undefined,"columnWidth":"69px","index":1}, {}, {
										format: ["wm.DataFormatter", {}, {}]
									}],
									apellido3: ["wm.DataGridColumn", {"field":"apellido2","caption":"Apellido 2","columnWidth":"100%","index":3}, {}, {
										format: ["wm.DataFormatter", {}, {}]
									}],
									nombre3: ["wm.DataGridColumn", {"field":"nombre2","caption":"Nombre 2","columnWidth":"100%","index":5}, {}, {
										format: ["wm.DataFormatter", {}, {}]
									}],
									column1: ["wm.DataGridColumn", {"field":"apellido1","caption":"Apellido 1","columnWidth":"100%","index":2}, {}, {
										format: ["wm.DataFormatter", {}, {}]
									}],
									column2: ["wm.DataGridColumn", {"field":"nombre1","caption":"Nombre 1","columnWidth":"100%","index":4}, {}, {
										format: ["wm.DataFormatter", {}, {}]
									}]
								}]
							}]
						}],
						layers9: ["wm.Layers", {}, {}, {
							layer9: ["wm.Layer", {"caption":"layer9","horizontalAlign":"left","verticalAlign":"top"}, {}, {
								inscalumcursoDetailsPanel: ["wm.FancyPanel", {"_classes":{"domNode":["wm_Border_BottomStyleCurved4px","wm_Border_TopStyleCurved4px","wm_BackgroundGradient_Blue"]},"horizontalAlign":"left","verticalAlign":"top","title":"","captionClasses":"wm_Border_BottomStyleCurved4px wm_Border_TopStyleCurved4px wm_BackgroundGradient_Blue wm_FontSizePx_16px wm_FontColor_White wm_TextDecoration_Bold wm_SilverBlueTheme_LightBlueInsetPanel","margin":"0","border":"3,3,3,3","height":"232px"}, {}, {
									inscalumcursoLiveForm1: ["wm.LiveForm", {"_classes":{"domNode":["wm_FontSizePx_12px"]},"height":"100%","verticalAlign":"top","horizontalAlign":"left","readonly":true}, {"onSuccess":"inscalumcursoLiveVariable1","onBeginInsert":"inscalumcursoLiveForm1BeginInsert"}, {
										binding: ["wm.Binding", {}, {}, {
											wire: ["wm.Wire", {"targetProperty":"dataSet","source":"inscalumcursoDataGrid1.selectedItem","expression":undefined}, {}],
											wire1: ["wm.Wire", {"targetProperty":"dataOutput.curso","source":"cursoRelatedEditor2.dataOutput","expression":undefined}, {}],
											wire2: ["wm.Wire", {"targetProperty":"dataOutput.sy","source":"syRelatedEditor1.dataOutput","expression":undefined}, {}],
											wire3: ["wm.Wire", {"targetProperty":"dataOutput.persona","source":"personaRelatedEditor2.dataOutput","expression":undefined}, {}]
										}],
										idInscAlumCursoEditor1: ["wm.Editor", {"caption":"ID","readonly":true,"formField":"idInscAlumCurso","width":"100%","height":"26px","display":"Number"}, {}, {
											editor: ["wm._NumberEditor", {"required":true}, {}]
										}],
										panel20: ["wm.Panel", {"height":"26px","width":"100%","layoutKind":"left-to-right","horizontalAlign":"left","verticalAlign":"top"}, {}, {
											calificacionEditor1: ["wm.Editor", {"caption":"Calif.num","readonly":true,"formField":"calificacion","width":"60%","height":"26px","display":"Number"}, {}, {
												editor: ["wm._NumberEditor", {}, {}]
											}],
											califCharEditor1: ["wm.Editor", {"caption":"Calificacion","readonly":true,"formField":"califChar","width":"80%","height":"26px"}, {}, {
												editor: ["wm._TextEditor", {}, {}]
											}]
										}],
										syRelatedEditor1: ["wm.RelatedEditor", {"formField":"sy"}, {}, {
											binding: ["wm.Binding", {}, {}, {
												wire1: ["wm.Wire", {"targetProperty":"dataSet","source":"inscalumcursoDataGrid1.selectedItem.sy","expression":undefined}, {}]
											}],
											syLookup1: ["wm.Editor", {"caption":"Año escolar","readonly":true,"formField":"idSy","width":"100%","height":"26px","display":"Number"}, {}, {
												editor: ["wm._NumberEditor", {"required":true}, {}]
											}]
										}],
										fechaMatriculaEditor1: ["wm.Editor", {"caption":"Fecha Matricula","readonly":true,"formField":"fechaMatricula","width":"100%","height":"26px","display":"Date","disabled":true}, {}, {
											editor: ["wm._DateEditor", {"required":true}, {}]
										}],
										cursoRelatedEditor2: ["wm.RelatedEditor", {"formField":"curso"}, {}, {
											binding: ["wm.Binding", {}, {}, {
												wire1: ["wm.Wire", {"targetProperty":"dataSet","source":"inscalumcursoDataGrid1.selectedItem.curso","expression":undefined}, {}]
											}],
											cursoLookup3: ["wm.Editor", {"caption":"ID Curso","readonly":true,"formField":"idCurso","width":"100%","height":"26px","display":"Number"}, {}, {
												editor: ["wm._NumberEditor", {"required":true}, {}]
											}]
										}],
										personaRelatedEditor2: ["wm.RelatedEditor", {"formField":"persona"}, {}, {
											binding: ["wm.Binding", {}, {}, {
												wire1: ["wm.Wire", {"targetProperty":"dataSet","source":"inscalumcursoDataGrid1.selectedItem.persona","expression":undefined}, {}]
											}],
											personaLookup3: ["wm.Editor", {"caption":"ID Persona","readonly":true,"formField":"idPersona","width":"100%","height":"26px","display":"Number"}, {}, {
												editor: ["wm._NumberEditor", {"required":true}, {}]
											}]
										}],
										editPanel5: ["wm.EditPanel", {"liveForm":"inscalumcursoLiveForm1","savePanel":"savePanel5","operationPanel":"operationPanel5","lock":false}, {}, {
											savePanel5: ["wm.Panel", {"height":"100%","width":"100%","layoutKind":"left-to-right","horizontalAlign":"right","verticalAlign":"top","showing":false}, {}, {
												saveButton5: ["wm.RoundedButton", {"caption":"Guardar","width":"100px","height":"100%"}, {"onclick":"editPanel5.saveData"}, {
													binding: ["wm.Binding", {}, {}, {
														wire: ["wm.Wire", {"targetProperty":"disabled","source":"editPanel5.formInvalid","expression":undefined}, {}]
													}]
												}],
												cancelButton5: ["wm.RoundedButton", {"caption":"Cancelar","width":"100px","height":"100%"}, {"onclick":"editPanel5.cancelEdit"}]
											}],
											operationPanel5: ["wm.Panel", {"height":"100%","width":"100%","layoutKind":"left-to-right","horizontalAlign":"right","verticalAlign":"top"}, {}, {
												newButton5: ["wm.RoundedButton", {"caption":"Nuevo","width":"100px","height":"100%"}, {"onclick":"editPanel5.beginDataInsert"}],
												updateButton5: ["wm.RoundedButton", {"caption":"Actualizar","width":"100px","height":"100%","disabled":true}, {"onclick":"editPanel5.beginDataUpdate"}, {
													binding: ["wm.Binding", {}, {}, {
														wire: ["wm.Wire", {"targetProperty":"disabled","source":"editPanel5.formUneditable","expression":undefined}, {}]
													}]
												}],
												deleteButton5: ["wm.RoundedButton", {"caption":"Borrar","width":"100px","height":"100%","disabled":true}, {"onclick":"editPanel5.deleteData"}, {
													binding: ["wm.Binding", {}, {}, {
														wire: ["wm.Wire", {"targetProperty":"disabled","source":"editPanel5.formUneditable","expression":undefined}, {}]
													}]
												}]
											}]
										}]
									}]
								}],
								inscalumcursoLivePanel1: ["wm.LivePanel", {"verticalAlign":"top","horizontalAlign":"left"}, {}, {
									inscalumcursoGridPanel: ["wm.FancyPanel", {"_classes":{"domNode":["wm_BackgroundGradient_Blue","wm_Border_BottomStyleCurved4px","wm_Border_TopStyleCurved4px"]},"horizontalAlign":"left","verticalAlign":"top","title":"","captionClasses":"wm_BackgroundGradient_Blue wm_Border_BottomStyleCurved4px wm_Border_TopStyleCurved4px wm_FontSizePx_16px wm_FontColor_White wm_TextDecoration_Bold","margin":"0"}, {}, {
										spacer6: ["wm.Spacer", {"height":"13px","width":"103px"}, {}],
										inscalumcursoDataGrid1: ["wm.DataGrid", {"_classes":{"domNode":["omgDataGrid"]},"border":"0"}, {}, {
											binding: ["wm.Binding", {}, {}, {
												wire: ["wm.Wire", {"targetProperty":"dataSet","source":"inscalumcursoLiveVariable1","expression":undefined}, {}]
											}],
											idInscAlumCurso1: ["wm.DataGridColumn", {"field":"idInscAlumCurso","caption":"•","autoSize":undefined,"columnWidth":"46px"}, {}, {
												format: ["wm.DataFormatter", {}, {}]
											}],
											fechaMatricula1: ["wm.DataGridColumn", {"field":"fechaMatricula","caption":"Fecha Matricula","autoSize":undefined,"columnWidth":"80px","display":"Date","index":8}, {}, {
												format: ["wm.DateFormatter", {}, {}]
											}],
											column1: ["wm.DataGridColumn", {"field":"curso.curso","caption":"Curso","columnWidth":"75px","index":2}, {}, {
												format: ["wm.DataFormatter", {}, {}]
											}],
											column2: ["wm.DataGridColumn", {"field":"persona.codigo","caption":"Codigo","columnWidth":"65px","index":3}, {}, {
												format: ["wm.DataFormatter", {}, {}]
											}],
											column3: ["wm.DataGridColumn", {"field":"persona.apellido1","caption":"Apellido1","index":4}, {}, {
												format: ["wm.DataFormatter", {}, {}]
											}],
											column4: ["wm.DataGridColumn", {"field":"persona.nombre1","caption":"Nombre1","index":6}, {}, {
												format: ["wm.DataFormatter", {}, {}]
											}],
											column5: ["wm.DataGridColumn", {"field":"sy.schoolYear","caption":"↓","columnWidth":"68px","index":1}, {}, {
												format: ["wm.DataFormatter", {}, {}]
											}],
											column6: ["wm.DataGridColumn", {"field":"persona.nombre2","caption":"Nombre 2","index":7}, {}, {
												format: ["wm.DataFormatter", {}, {}]
											}],
											column7: ["wm.DataGridColumn", {"field":"persona.apellido2","caption":"Apellido 2","index":5}, {}, {
												format: ["wm.DataFormatter", {}, {}]
											}]
										}]
									}]
								}]
							}]
						}]
					}]
				}]
			}]
		}],
		picture3: ["wm.Picture", {"height":"426px","width":"60%","border":"0","source":"resources/acceso_denegado.jpg","showing":false,"roles":["1","2","3","4","8","11","12","13","15","14","16","17","18","19","25"]}, {}],
		panel22: ["wm.Panel", {"_classes":{"domNode":["wm_Border_TopStyleCurved4px","wm_Border_DropShadow","wm_BackgroundColor_LightBlue"]},"height":"50px","width":"60%","lock":true,"layoutKind":"left-to-right","horizontalAlign":"left","verticalAlign":"top","showing":false,"roles":["1","2","3","4","8","11","12","13","14","15","16","17","18","19","25"]}, {}, {
			label4: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_16px"]},"height":"48px","width":"100%","border":"0","caption":"<b>LO SENTIMOS, USTED NO ESTA AUTORIZADO PARA INGRESAR  A ESTA ZONA </b></br> Sin embargo usted puede enviar un mensaje a: <u>sistemas@rochester.edu.co","singleLine":false,"align":"center"}, {}, {
				format: ["wm.DataFormatter", {}, {}]
			}]
		}],
		panel23: ["wm.Panel", {"_classes":{"domNode":["wm_SilverBlueTheme_LightBlueInsetPanel"]},"height":"36px","width":"60%","lock":true,"layoutKind":"left-to-right","horizontalAlign":"center","verticalAlign":"top","showing":false,"roles":["1","2","3","4","8","11","12","13","14","15","16","17","18","19","25"]}, {}, {
			label9: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_14px","wm_TextDecoration_Bold"]},"height":"25px","width":"230px","border":"0","caption":"Aprendoz © • Colegio Rochester"}, {}, {
				format: ["wm.DataFormatter", {}, {}]
			}],
			label10: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_14px","wm_TextDecoration_Bold"]},"height":"25px","width":"15px","border":"0","caption":"|","align":"center"}, {}, {
				format: ["wm.DataFormatter", {}, {}]
			}],
			label11: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_14px","wm_TextDecoration_Bold"]},"height":"25px","width":"74px","border":"0","caption":"Visitanos","link":"http://www.rochester.edu.co","align":"center"}, {}, {
				format: ["wm.DataFormatter", {}, {}]
			}],
			label8: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_14px","wm_TextDecoration_Bold"]},"height":"25px","width":"15px","border":"0","caption":"|","align":"center"}, {}, {
				format: ["wm.DataFormatter", {}, {}]
			}],
			label7: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_14px","wm_TextDecoration_Bold"]},"height":"25px","width":"103px","border":"0","caption":"Enviar correo","link":"mailto: sistemas@rochester.edu.co","align":"center"}, {}, {
				format: ["wm.DataFormatter", {}, {}]
			}],
			label6: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_14px","wm_TextDecoration_Bold"]},"height":"25px","width":"15px","border":"0","caption":"|","align":"center"}, {}, {
				format: ["wm.DataFormatter", {}, {}]
			}],
			label5: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_14px","wm_TextDecoration_Bold"]},"height":"25px","width":"51px","border":"0","caption":"<font color=blue><u>Salir</u></font>"}, {"onclick":"salirErrorPage"}, {
				format: ["wm.DataFormatter", {}, {}]
			}]
		}]
	}]
}