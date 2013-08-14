dojo.declare("Subjects", wm.Page, {
  start: function() {
    
  },
  asignaturasSelect: function(inSender, inItem) {
    var index = this.asignaturas.getSelectedIndex();
    var data = this.asignaturas.getItemData(index);
    var id= data.id;
    var subject= data.asignatura;
    var _a1= data.a1;
    var _a2= data.a2;
    var _a3= data.a3;
    var _sa1= data.sa1;
    var _sa2= data.sa2;
    var _sa3= data.sa3;
    this.subjectById.input.setValue("idasignatura", id);
   /* this.ls_area.filter.setValue("idArea", _a1);
    this.ls_area2.filter.setValue("idArea", _a2);
    this.ls_area3.filter.setValue("idArea", _a3);*/
    this.subjectById.update();
    /*this.ls_area.update(); 
    this.ls_area2.update(); 
    this.ls_area3.update(); */
  },
 
  subjectByIdSuccess: function(inSender, inDeprecated) {
    try {
     var json= this.subjectById.getItem(0);
     var _id= json.data.id;
     var _asignatura= json.data.asignatura;
     var _descripEspanol= json.data.descripcion_espanol;
     var _subject= json.data.subject;
     var _descripcion_ingles= json.data.descripcion_ingles;
     var _electiva= json.data.electiva;
     var _sy = json.data.sy;
     var _salon= json.data.salon;
     var _tipo= json.data.idTipoInscAsig;
     var _grado= json.data.idgrado;
     
     var _a1= json.data.a1;
     var _a2= json.data.a2;
     var _a3= json.data.a3;
     var _sa1= json.data.sa1;
     var _sa2= json.data.sa2;
     var _sa3= json.data.sa3;
     var _esperadosTotal= json.data.esperadosTotal;
     var _iha1= json.data.iha1;
     var _iha2= json.data.iha2;
     var _iha3= json.data.iha3;
     var _ihtotal= json.data.ihtotal;
     var _meses= json.data.meses;
     var _peso= json.data.peso;

     this.id_subject.setDataValue(_id);
     this.subject_asignatura.setDataValue(_asignatura);
     this.subject_descripcion.setDataValue(_descripEspanol);
     this.subject_subject.setDataValue(_subject);
     this.subject_description.setDataValue(_descripcion_ingles);
     //this.electiva.setCheckedValue(_electiva);
     this.subject_sy.setDataValue(_sy);
     this.subject_salon.setDataValue(_salon);
     this.subject_tipo.setDataValue(_tipo);
     this.subject_grado.setDataValue(_grado);
     
     this.subject_area1.setDataValue(_a1);
     this.subject_area2.setDataValue(_a2);
     this.subject_area3.setDataValue(_a3);
     this.subject_sub1.setDataValue(_sa1);
     this.subject_sub2.setDataValue(_sa2);
     this.subject_sub3.setDataValue(_sa3);
     
     this.subject_esperados.setDataValue(_esperadosTotal);
     this.subject_iha1.setDataValue(_iha1);
     this.subject_iha2.setDataValue(_iha2);
     this.subject_iha3.setDataValue(_iha3);
     this.subject_ihtotal.setDataValue(_ihtotal);
     this.subject_meses.setDataValue(_meses);
     this.subject_peso.setDataValue(_peso);
     
    } catch(e) {
      console.error('ERROR IN subjectByIdSuccess: ' + e); 
    } 
  },
  subject_saveNewRecordClick: function(inSender, inEvent) {
    try {
     this.subjectDataForm.setDataSet(this.updateSubjects);          
     this.subjectDataForm.updateData();         
      
    } catch(e) {
      console.error('ERROR IN subject_saveNewRecordClick: ' + e); 
    } 
  },
  subject_updateRecordClick: function(inSender, inEvent) {
    try {
     this.subject_newRecord.hide();
     this.subject_updateRecord.hide();
     this.subject_deleteRecord.hide();
     this.subject_saveNewRecord.show();
     this.subject_calcelOperation.show();
    
     this.id_subject.setReadonly(false);
     this.subject_asignatura.setReadonly(false);
     this.subject_descripcion.setReadonly(false);
     this.subject_subject.setReadonly(false);
     this.subject_description.setReadonly(false);
     //this.electiva.setCheckedValue(_electiva);
     this.subject_sy.setReadonly(false);
     this.subject_salon.setReadonly(false);
     this.subject_tipo.setReadonly(false);
     this.subject_grado.setReadonly(false);
     
     this.subject_area1.setReadonly(false);
     this.subject_area2.setReadonly(false);
     this.subject_area3.setReadonly(false);
     this.subject_sub1.setReadonly(false);
     this.subject_sub2.setReadonly(false);
     this.subject_sub3.setReadonly(false);
     
     this.subject_esperados.setReadonly(false);
     this.subject_iha1.setReadonly(false);
     this.subject_iha2.setReadonly(false);
     this.subject_iha3.setReadonly(false);
     this.subject_ihtotal.setReadonly(false);
     this.subject_meses.setReadonly(false);
     this.subject_peso.setReadonly(false);
           
    } catch(e) {
      console.error('ERROR IN subject_updateRecordClick: ' + e); 
    } 
  },
  _end: 0
});