dojo.declare("Main", wm.Page, {
  start: function() {
    
  },
  button4Click: function(inSender, inEvent) {
    try {
      this.alumnos.hide();
      this.pextras.hide();
      this.pdocentes.hide();
        this.main_conteiner.show();
      
    } catch(e) {
      console.error('ERROR IN button4Click: ' + e); 
    } 
  },
  button6Click: function(inSender, inEvent) {
    try {
 //   this.tipoPersonaSelect.setValue("displayValue", "Docente");
      this.main_conteiner.hide();
      this.alumnos.hide();
      this.pextras.hide();
          this.pdocentes.show();
           
                   app.lsanio_escolarLV.update();
                   app.lsgradoLV.update();
                   app.lsTipoPersona.update();       
                          
    } catch(e) {
      console.error('ERROR IN button6Click: ' + e); 
    } 
  },
  button5Click: function(inSender, inEvent) {
    try {
      this.alumnos.hide();
      this.main_conteiner.hide();
      this.pdocentes.hide();
      this.pextras.show();
      
    } catch(e) {
      console.error('ERROR IN button5Click: ' + e); 
    } 
  },
  inscdocasigLiveForm1BeginInsert: function(inSender) {
    try {
    this.fechaCreacionEditor1.setDataValue(new Date());
      this.asignaturaLookup1.setValue("dataValue", this.asignaturaDataGrid1.selectedItem.getData().idAsignatura);
      this.personaLookup1.setValue("dataValue", this.personaDataGrid2.selectedItem.getData().idPersona);
      
      
    } catch(e) {
      console.error('ERROR IN inscdocasigLiveForm1BeginInsert: ' + e); 
    } 
  },
  mostrarMenuClick: function(inSender, inEvent) {
    try {
         this.menuPrincipal.show();   
      
    } catch(e) {
      console.error('ERROR IN button10Click: ' + e); 
    } 
  },
  ocultarMenuClick: function(inSender, inEvent) {
    try {
            this.menuPrincipal.hide();      
      
    } catch(e) {
      console.error('ERROR IN button3Click: ' + e); 
    } 
  },
  
  button3Click: function(inSender, inEvent) {
    try {
      app.asignaturaLV.update();
      app.cursosLV.update();
    
    } catch(e) {
      console.error('ERROR IN button3Click: ' + e); 
    } 
  },
  insccursoasigLiveForm1BeginInsert: function(inSender) {
    try {
            //est es el codigo del evento
              this.asignaturaLookup1.setValue("dataValue", this.asignaturaDG.selectedItem.getData().idAsignatura);
              this.cursoLookup1.setValue("dataValue", this.cursoDG.selectedItem.getData().idCurso);
              this.personaLookup1.setValue("dataValue", this.docentesDG.selectedItem.getData().idPersona);
            //this..setValue("dataValue", this..selectedItem.getData().);
            
    } catch(e) {
      console.error('ERROR IN insccursoasigLiveForm1BeginInsert: ' + e); 
    } 
  },
  picture1Click: function(inSender) {
    try {
  
      app.lsGrados.update();
      app.lsCurso.update();
      app.lsPeriodos10.update();
     
          this.p1.show();                
              this.panel12.show();       
              this.p2.hide();
             
      
    } catch(e) {
      console.error('ERROR IN picture1Click: ' + e); 
    } 
  },
  picture2Click: function(inSender) {
    try {
      this.p2.show();   
      this.panel12.hide();              
              this.p1.hide(); 
                 
      
    } catch(e) {
      console.error('ERROR IN picture2Click: ' + e); 
    } 
  },
  button10Click: function(inSender, inEvent) {
    try {
      app.lsanio_escolarLV.update();     
      app.ls2Grados.update();
     
     // app.ls2Cursos.update();

      //app..update();
           this.main_conteiner.hide();
             this.pdocentes.hide();
              this.pextras.hide();
                this.alumnos.show();      
    } catch(e) {
      console.error('ERROR IN button10Click: ' + e); 
    } 
  },
  inscalumcursoLiveForm1BeginInsert: function(inSender) {
    try {
         this.cursoLookup3.setValue("dataValue", this.selectEditor2.getDataValue());
       //  this.syLookup1.setValue("dataValue", this.dataGrid.selectedItem.getData());
         this.personaLookup3.setValue("dataValue", this.dataGrid1.selectedItem.getData().idPersona);
         this.syLookup1.setValue("dataValue", this.selectEditor3.getDataValue());
         this.fechaMatriculaEditor1.setDataValue(new Date());
         
                
      
    } catch(e) {
      console.error('ERROR IN inscalumcursoLiveForm1BeginInsert: ' + e); 
    } 
  },
  buscarClick: function(inSender, inEvent) {
    try {
        this.inscalumcursoLiveVariable1.update();
      
    } catch(e) {
      console.error('ERROR IN buscarClick: ' + e); 
    } 
  },
  button13Click: function(inSender, inEvent) {
    try {
      this.listaPersonas.clearData();    
      this.a1.clear();
      this.a2.clear();
        this.b1.clear();
        this.b2.clear();
          this.c1.clear();
          this.t1.clear();
            // this.dataGrid1.clearData();
    
      
      
    } catch(e) {
      console.error('ERROR IN button13Click: ' + e); 
    } 
  },
  button8Click: function(inSender, inEvent) {
    try {
      this.aux1.clear();
      this.aux2.clear();
      this.aux3.clear();
      this.aux4.clear();
      this.textEditor3.clear();
      this.textEditor4.clear();
      this.textEditor5.clear();
      this.textEditor6.clear();
        this.personaLiveVariable1.clearData();
      
      
    } catch(e) {
      console.error('ERROR IN button8Click: ' + e); 
    } 
  },
  _end: 0
});