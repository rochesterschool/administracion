Subjects.widgets = {
	ls_sy: ["wm.LiveVariable", {"liveSource":"com.aprendoz_desarrollo.data.Sy","orderBy":"desc: idSy"}, {}],
	ls_grades: ["wm.LiveVariable", {"liveSource":"com.aprendoz_desarrollo.data.Grado"}, {}],
	ls_subjects: ["wm.ServiceVariable", {"service":"aprendoz_desarrollo","operation":"subjectsByGrade"}, {}, {
		input: ["wm.ServiceInput", {"type":"subjectsByGradeInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"targetProperty":"_grado","source":"grades.dataValue"}, {}],
				wire1: ["wm.Wire", {"targetProperty":"_sy","source":"sy.dataValue"}, {}]
			}]
		}]
	}],
	layoutBox1: ["wm.Layout", {"height":"100%","width":"100%","horizontalAlign":"left","verticalAlign":"top"}, {}, {
		panel1: ["wm.Panel", {"height":"100%","horizontalAlign":"left","width":"100%","layoutKind":"left-to-right","verticalAlign":"top"}, {}, {
			left_menu: ["wm.Panel", {"height":"100%","horizontalAlign":"left","width":"35%","padding":"10","verticalAlign":"top"}, {}, {
				sy: ["wm.SelectEditor", {"width":"100%","caption":"Año escolar"}, {}, {
					editor: ["wm._SelectEditor", {"displayField":"schoolYear","dataField":"idSy"}, {}, {
						binding: ["wm.Binding", {}, {}, {
							wire: ["wm.Wire", {"targetProperty":"dataSet","source":"ls_sy","expression":undefined}, {}]
						}]
					}]
				}],
				grades: ["wm.SelectEditor", {"width":"100%","caption":"Grados"}, {"onchange":"ls_subjects"}, {
					editor: ["wm._SelectEditor", {"displayField":"grado","dataField":"idGrado"}, {}, {
						binding: ["wm.Binding", {}, {}, {
							wire: ["wm.Wire", {"targetProperty":"dataSet","source":"ls_grades","expression":undefined}, {}]
						}]
					}]
				}],
				asignaturas: ["wm.List", {"height":"100%","width":"100%","border":"0","dataFields":"id, asignatura","columnWidths":"20%,80%"}, {"onselect":"asignaturasSelect"}, {
					binding: ["wm.Binding", {}, {}, {
						wire: ["wm.Wire", {"targetProperty":"dataSet","source":"ls_subjects","expression":undefined}, {}]
					}]
				}]
			}],
			main_form: ["wm.Panel", {"height":"100%","horizontalAlign":"left","width":"75%","padding":"10","verticalAlign":"top"}, {}, {
				id_subject: ["wm.NumberEditor", {"width":"400px","caption":"ID","readonly":true}, {}, {
					editor: ["wm._NumberEditor", {}, {}]
				}],
				subject_asignatura: ["wm.TextEditor", {"width":"400px","caption":"Asignatura"}, {}, {
					editor: ["wm._TextEditor", {}, {}]
				}],
				subject_descripcion: ["wm.TextAreaEditor", {"height":"79px","width":"400px","caption":"Descripción"}, {}, {
					editor: ["wm._TextAreaEditor", {}, {}]
				}],
				subject_subject: ["wm.TextEditor", {"width":"400px","caption":"Subject"}, {}, {
					editor: ["wm._TextEditor", {}, {}]
				}],
				subject_description: ["wm.TextEditor", {"width":"400px","caption":"Description","height":"79px"}, {}, {
					editor: ["wm._TextEditor", {}, {}]
				}]
			}]
		}]
	}]
}