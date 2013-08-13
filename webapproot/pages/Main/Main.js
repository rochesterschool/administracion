dojo.declare("Main", wm.Page, {
  start: function() {
   
   dojo.subscribe("session-expiration", this, "mySessionExpiredMethod");
  },
  
  mySessionExpiredMethod: function() {
      alert("Su sesión ha excedido el tiempo de inactividad en la aplicación. Por favor ingrese nuevamente.");
      window.location.reload(); 
  },
  
  nombreUsuario: function() {
      var nombre = this.nombre1Editor1.getDataValue();
      var subStringNombre = nombre.substring(0,1);
      var apellido = this.apellido1Editor1.getDataValue();
      var numero =  this.noDocumentoEditor1.getDataValue();
      var subStringNum = numero.substring(0,2);
      var nombreUsarioCompleto= subStringNombre+apellido+subStringNum;
      var nombreUsuarioCompletoLowerCase = nombreUsarioCompleto.toLowerCase();
      this.nombreLdapEditor1.setDataValue(nombreUsuarioCompletoLowerCase); 
  },

  bPersonasClick: function(inSender, inEvent) {
    try {
      if(this.l_personas_lista_grupos_familiares.dataSetCount == undefined  || this.l_personas_lista_paises.dataSetCount == undefined){
        this.l_personas_lista_grupos_familiares.update();
        this.l_personas_lista_paises.update();
        this.panel_alumnos.hide();
        this.panel_extras.hide();
        this.panel_docentes.hide();
        this.panel_secretaria.hide();
        this.panel_horarios.hide();
        this.panel_bienvenida.hide();
        this.panel_personas.show();

        }else{
        this.panel_alumnos.hide();
        this.panel_extras.hide();
        this.panel_docentes.hide();
        this.panel_secretaria.hide();
        this.panel_horarios.hide();
        this.panel_bienvenida.hide();
        this.panel_personas.show();
       
       }
       
       if(this.a_lista_nacionalidades.dataSetCount == undefined ){
          this.a_lista_nacionalidades.update();
       }else{
          /*nothing happens here!*/
       }
        
    } catch(e) {
      console.error('ERROR IN button4Click: ' + e); 
    } 
  },
  bDocentesClick: function(inSender, inEvent) {
    try {
        this.panel_personas.hide();
        this.panel_alumnos.hide();
        this.panel_extras.hide();
        this.panel_secretaria.hide();
        this.panel_horarios.hide();
        this.panel_bienvenida.hide();
        this.panel_docentes.show();      
                          
    } catch(e) {
      console.error('ERROR IN button6Click: ' + e); 
    } 
  },
  bExtrasClick: function(inSender, inEvent) {
    try {
      if(this.l_extras_tipopersonaLiveVariable1.dataSetCount == undefined ){
        this.l_extras_tipopersonaLiveVariable1.update();
        this.panel_alumnos.hide();
        this.panel_personas.hide();
        this.panel_docentes.hide();
        this.panel_secretaria.hide();
        this.panel_horarios.hide();
        this.panel_bienvenida.hide();
        this.panel_extras.show();

      }
      else{     
        this.panel_alumnos.hide();
        this.panel_personas.hide();
        this.panel_docentes.hide();
        this.panel_secretaria.hide();
        this.panel_horarios.hide();
        this.panel_bienvenida.hide();
        this.panel_extras.show();
      }
   
    } catch(e) {
      console.error('ERROR IN button5Click: ' + e); 
    } 
  },
  bAlumnosClick: function(inSender, inEvent) {
    try {
         this.panel_personas.hide();
         this.panel_docentes.hide();
         this.panel_extras.hide();
         this.panel_horarios.hide();
         this.panel_secretaria.hide();
         this.panel_bienvenida.hide();
         this.panel_alumnos.show();
                                 
    } catch(e) {
      console.error('ERROR IN button10Click: ' + e); 
    } 
  },
  bSecretariaClick: function(inSender, inEvent) {
    try {
        this.panel_alumnos.hide();
        this.panel_personas.hide();
        this.panel_docentes.hide();
        this.panel_extras.hide();
        this.panel_horarios.hide();
        this.panel_bienvenida.hide();
        this.panel_secretaria.show();
      
    } catch(e) {
      console.error('ERROR IN bSecretariaClick: ' + e); 
    } 
  },
  bHorariosClick: function(inSender, inEvent) {
    try {
        this.panel_personas.hide();
        this.panel_alumnos.hide();
        this.panel_extras.hide();
        this.panel_secretaria.hide();
        this.panel_docentes.hide();
        this.panel_bienvenida.hide();
        this.panel_horarios.show();  
      
    } catch(e) {
      console.error('ERROR IN bDocentes1Click: ' + e); 
    } 
  },
   bInicioClick: function(inSender, inEvent) {
    try {
        this.panel_alumnos.hide();
        this.panel_personas.hide();
        this.panel_docentes.hide();
        this.panel_extras.hide();
        this.panel_horarios.hide();  
        this.panel_secretaria.hide();
        this.panel_bienvenida.show();
      
    } catch(e) {
      console.error('ERROR IN bInicioClick: ' + e); 
    } 
  },
   home_imgClick: function(inSender) {
    try {
    alert("works!");
     this.panel_alumnos.hide();
     this.panel_personas.hide();
     this.panel_docentes.hide();
     this.panel_extras.hide();
     this.panel_horarios.hide();  
     this.panel_secretaria.hide();
     this.panel_bienvenida.show(); 
      
    } catch(e) {
      console.error('ERROR IN home_imgClick: ' + e); 
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
         this.panel_menuPrincipal.show();   
      
    } catch(e) {
      console.error('ERROR IN button10Click: ' + e); 
    } 
  },
  ocultarMenuClick: function(inSender, inEvent) {
    try {
        this.panel_menuPrincipal.hide();      
      
    } catch(e) {
      console.error('ERROR IN button3Click: ' + e); 
    } 
  },
  
  button3Click: function(inSender, inEvent) {
    try {
        this.l_docentes_asignaturas.update();
         this.l_docentes_cursos.update();
    
    } catch(e) {
      console.error('ERROR IN button3Click: ' + e); 
    } 
  },
  insccursoasigLiveForm1BeginInsert: function(inSender) {
    try {
        this.asignaturaLookup1.setValue("dataValue", this.asignaturaDG.selectedItem.getData().id.idAsignatura);
        this.cursoLookup1.setValue("dataValue", this.cursoDG.selectedItem.getData().idCurso);
        this.personaLookup1.setValue("dataValue", this.docentesDG.selectedItem.getData().id.idPersona);
        this.periodoLookup1.setDisplayValue("2012-2013");
            
    } catch(e) {
      console.error('ERROR IN insccursoasigLiveForm1BeginInsert: ' + e); 
    } 
  },
  picture1Click: function(inSender) {
    try {
        
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
 
  inscalumcursoLiveForm1BeginInsert: function(inSender) {
     try {
         this.cursoLookup3.setValue("dataValue", this.selectEditor2.getDataValue());
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
        this.l_alumnos_caificaciones_lista_Personas.clearData();    
        this.a1.clear();
        this.a2.clear();
        this.b1.clear();
        this.b2.clear();
        this.c1.clear();
        this.t1.clear();
           
    } catch(e) {
      console.error('ERROR IN button13Click: ' + e); 
    } 
  },
  personas_panel_personas_butt_limpiarClick: function(inSender, inEvent) {
    try {
        this.personas_panel_personas_sel_grupo_familiar.clear();
        this.personas_panel_personas_box_tipo_persona.clear();
        this.personas_panel_personas_box_nombre1.clear();
        this.personas_panel_personas_box_nombre2.clear();
        this.personas_panel_personas_box_documento.clear();
        this.personas_panel_personas_box_codigo.clear();
        this.personas_panel_personas_box_apellido1.clear();
        this.personas_panel_personas_box_apellido2.clear();
        this.l_personas_personaLiveVariable1.clearData();
        this.img_tiny1.setSource("resources/images/No_Image_Available.gif");

    } catch(e) {
      console.error('ERROR IN button8Click: ' + e); 
    } 
  },
  personaDataGrid1Selected: function(inSender, inIndex) {
    try {   
     var idalumno = this.personaDataGrid1.selectedItem.getData().idPersona;
     this.img_tiny1.setSource("http://aprendoz.rochester.edu.co/stds/"+this.personaDataGrid1.selectedItem.getData().codigo+".Jpeg");
     this.textEditor2.setDataValue(this.personaDataGrid1.selectedItem.getData().tipoPersona.tipoPersona);         
     this.a_getCursoProcesoSV.input.setValue("idp", idalumno);
     this.a_getCursoProcesoSV.update();
     
     /*if the curses list is loaded Aprendoz do nothing, but if is the first time it load the curses*/
     if(this.a_curso_actual.dataSetCount == undefined){
        this.a_curso_actual.update();
     }else{
     /*nothing happens here!*/
     }
     
     /*Acciones sobre los paneles*/   
        if(this.tipoPersonaLookup1.displayValue =="Estudiante"){
              this.panel_otros.hide();
              this.panel_estudiantes.show();
              this.panel_salud.show();
              this.panel_servicios.show();                 
        }
           else{
              this.panel_estudiantes.hide();
              this.panel_servicios.hide();
              this.panel_salud.show();
              this.panel_otros.show();
        }
     /*fin acciones sobre paneles*/        
     this.boton_detalles.enable(); 

    } catch(e) {
      console.error('ERROR IN personaDataGrid1Selected: ' + e); 
    } 
  },
  boton_detallesClick: function(inSender, inEvent) {
    try {
         this.panel_personas.hide();
         this.panel_docentes.hide();
         this.panel_extras.hide();
         this.panel_alumnos.hide(); 
         this.panel_horarios.hide();  
         this.panel_secretaria.show();
      
    } catch(e) {
      console.error('ERROR IN button14Click: ' + e); 
    } 
  },
  bMostrarClick: function(inSender, inEvent) {
    try {
        this.bMostrar.hide();
        this.acciones.show();
        this.bOcultar.show();
      
    } catch(e) {
      console.error('ERROR IN bMostrarClick: ' + e); 
    } 
  },
  bOcultarClick: function(inSender, inEvent) {
    try {
        this.bOcultar.hide();
        this.acciones.hide();
        this.bMostrar.show();
 
    } catch(e) {
      console.error('ERROR IN pOcultarClick: ' + e); 
    } 
  },
  b_libroOficialClick: function(inSender, inEvent) {
    
    try {
     //certificado final en español
     if(this.selectorReport.dataValue=="f"){
       main.a_getCompleteName.update();
       var id= main.a_getCompleteName.getData().idp;
       var clave= main.a_getCompleteName.getData().clave;
       var idpersona= this.c_persona.getDataValue();
       var idsy= this.c_year.getDataValue();
       var formatType= "PDF";

       $.fileDownload("http://aprendoz.rochester.edu.co/wsreport/runreport?callback=?", {
        failMessageHtml: "Hubo un problema generando tu reporte, por favor intenta de nuevo.",
        httpMethod: "POST",
        data:{ idp: id, 
               pass: clave,
               uri: "/aprendozreports/SEC003",
               format: formatType,
               params: { idpersona: idpersona,
                         sy: idsy
                       }
         }
       });
       inEvent.preventDefault();

       }
     //certificado final en ingles
     if(this.selectorReport.dataValue=="fe"){
      url= "services/cfinalen.download?method=getReport&idp="+this.c_persona.getDataValue()+"&idy="+this.c_year.getDataValue();
      window.open(url,"_BLANK");     
       }

     if(this.selectorReport.dataValue=="p"){       
           main.a_getCompleteName.update();
           var id= main.a_getCompleteName.getData().idp;
           var clave= main.a_getCompleteName.getData().clave;
           var idpersona= this.c_persona.getDataValue();
           var suscrito=  this.suscritoBox.getDataValue();
           var idsy= this.c_year.getDataValue();
           var pureDate1= this.fecha1Box.getDataValue();
              var fecha1 = new Date(pureDate1);   
              var year1 = fecha1.getFullYear();
              var month1= fecha1.getMonth()+1;
              var day1= fecha1.getDate();
           if(month1 <10  ){ var date1= year1+"-0"+month1+"-"+day1;}
           if(month1 <10 && day1<10 ){ var date1= year1+"-0"+month1+"-0"+day1;}    
           if(day1<10 ){ var date1= year1+"-"+month1+"-0"+day1;}   
           if(day1>10 && month1>10 ){ var date1= year1+"-"+month1+"-"+day1;} 
           
           var pureDate2= this.fecha2Box.getDataValue();
              var fecha2 = new Date(pureDate2);   
              var year2 = fecha2.getFullYear();
              var month2= fecha2.getMonth()+1;
              var day2= fecha2.getDate();
           if(month2 <10  ){ var date2= year2+"-0"+month2+"-"+day2;}
           if(month2 <10 && day2<10 ){ var date2= year2+"-0"+month2+"-0"+day2;}    
           if(day2<10 ){ var date2= year2+"-"+month2+"-0"+day2;}   
           if(day2>10 && month2>10 ){ var date2= year2+"-"+month2+"-"+day2;}        
           var formatType= "PDF";
           
      $.fileDownload("http://aprendoz.rochester.edu.co/wsreport/runreport?callback=?", {
        preparingMessageHtml: "Aprendoz esta preparando tu reporte, por favor espera...",
        failMessageHtml: "Hubo un problema generando tu reporte, por favor intenta de nuevo.",
        httpMethod: "POST",
        data:{ idp: id, 
               pass: clave,
               uri: "/aprendozreports/SEC002",
               format: formatType,
               params: { sy: idsy, 
                         idpersona: idpersona,
                         tipo_persona: suscrito,
                         fechainicial: date1,
                         fechafinal: date2   }
         }
       });
       inEvent.preventDefault();
           
          }
          if(this.selectorReport.dataValue=="b"){
            url= "services/librofinal2.download?method=getReport&idp="+this.c_persona.getDataValue()+"&idy="+this.c_year.getDataValue();
            window.open(url,"_BLANK");      
           }
    
    } catch(e) {
      console.error('ERROR IN b_libroOficialClick: ' + e); 
    } 
  },
 
  a_t_PersonasxCursoSelected: function(inSender, inIndex) {
    try {
         this.c_persona.setValue("dataValue", this.a_t_PersonasxCurso.selectedItem.getData().id.idPersona);
         this.c_year.setDataValue(this.s_Anio_escolar.getDataValue());
         this.l_secretaria_insc_alum_asig.update();
         this.selectorReport.enable();

    } catch(e) {
      console.error('ERROR IN a_t_PersonasxCursoSelected: ' + e); 
    } 
  },
  
  b_retiradosClick: function(inSender, inEvent) {
    try {
     url= "services/s311.download?method=getReport";
            window.open(url,"_BLANK");    
      
    } catch(e) {
      console.error('ERROR IN b_libroOficial1Click: ' + e); 
    } 
  },
  b_matriculadosClick: function(inSender, inEvent) {
    try {
    url= "services/s312.download?method=getReport";
            window.open(url,"_BLANK"); 
      
    } catch(e) {
      console.error('ERROR IN b_retirados1Click: ' + e); 
    } 
  },
  b_lista_grupo_familiarClick: function(inSender, inEvent) {
    try {
      url= "services/s313.download?method=getReport";
            window.open(url,"_BLANK");    
      
      
    } catch(e) {
      console.error('ERROR IN b_matriculados1Click: ' + e); 
    } 
  },
  selectorReportChange: function(inSender, inDisplayValue, inDataValue) {
    try {
       if(this.selectorReport.dataValue=="p"){
           this.panel_certificado_parcial.show();
        }
         if(this.selectorReport.dataValue=="pi"){
            /* this.fecha_reporte.show();
               this.panel_certificado_parcial.hide(); */
        }
         if(this.selectorReport.dataValue=="f"){
            this.fecha_reporte.hide();
            this.panel_certificado_parcial.hide();
        }
         if(this.selectorReport.dataValue=="fe"){
            this.fecha_reporte.hide();
            this.panel_certificado_parcial.hide();
        }
         if(this.selectorReport.dataValue=="b"){
            this.fecha_reporte.hide();
            this.panel_certificado_parcial.hide();
        }
 
    } catch(e) {
      console.error('ERROR IN selectorReportChange: ' + e); 
    } 
  },
  
  horarioLiveForm1BeginInsert: function(inSender) {
    try {
        this.cursoLookup4.setValue("dataValue", this.CursoAsig.selectedItem.getData().id.idCurso);
        this.asignaturaLookup3.setValue("dataValue", this.CursoAsig.selectedItem.getData().id.idAsignatura);
        this.syLookup2.setValue("displayValue", "2012-2013");
      
    } catch(e) {
      console.error('ERROR IN horarioLiveForm1BeginInsert: ' + e); 
    } 
  },
  button4Click: function(inSender, inEvent) {
    try {
        this.insccursoasigLivePanel1.hide();
        this.button4.hide();
        this.button16.show();
      
    } catch(e) {
      console.error('ERROR IN button4Click: ' + e); 
    } 
  },
  button16Click: function(inSender, inEvent) {
    try {
        this.button16.hide();
        this.button4.show();
        this.insccursoasigLivePanel1.show();
      
    } catch(e) {
      console.error('ERROR IN button16Click: ' + e); 
    } 
  },
  button18Click: function(inSender, inEvent) {
    try {
        this.aux98.clear();
        this.aux99.clear();
        this.selectEditor4.clear();
        this.aux100.clear(); 
        this.aux101.clear();
        this.insccursoasigLiveVariable1.clearData();
     
    } catch(e) {
      console.error('ERROR IN button18Click: ' + e); 
    } 
  },
  
  suscritoBoxChange: function(inSender, inDisplayValue, inDataValue) {
    try {
      if(this.suscritoBox.dataValue=="rector"){
         this.headBox.setValue("displayValue", "EL SUSCRITO RECTOR");    
         this.suscrito1Box.setValue("displayValue", "JUAN PABLO ALJURE LEON");    
         this.cargo1Box.setValue("displayValue", "Rector");  
         this.suscrito2Box.setValue("displayValue", " ");    
         this.cargo2Box.setValue("displayValue", " ");      
        }
         if(this.suscritoBox.dataValue=="secretario"){  
          this.suscrito1Box.clear();
           this.cargo1Box.clear();
            this.suscrito2Box.clear();
             this.cargo2Box.clear();
              this.headBox.setValue("displayValue", "EL SUSCRITO SECRETARIO");
               this.suscrito1Box.setValue("displayValue", "ROBERTO HERNANDEZ SILVA");    
                this.cargo1Box.setValue("displayValue", "Secretario Academico");    
                 this.suscrito2Box.setValue("displayValue", " ");    
                  this.cargo2Box.setValue("displayValue", " "); 
        }
         if(this.suscritoBox.dataValue=="ambos"){
          this.suscrito1Box.clear();
           this.cargo1Box.clear();
            this.suscrito2Box.clear();
             this.cargo2Box.clear();
              this.headBox.setValue("displayValue", "LOS SUSCRITOS RECTOR Y SECRETARIO");
               this.suscrito1Box.setValue("displayValue", "JUAN PABLO ALJURE LEON");    
                this.cargo1Box.setValue("displayValue", "Rector"); 
                 this.suscrito2Box.setValue("displayValue", "ROBERTO HERNANDEZ SILVA");    
                  this.cargo2Box.setValue("displayValue", "Secretario Academico");       
            
        }
      
    } catch(e) {
      console.error('ERROR IN headBoxChange: ' + e); 
    } 
  },
  tipoPersonaLookup1Change: function(inSender, inDisplayValue, inDataValue) {
    try {
      if(this.tipoPersonaLookup1.displayValue =="Estudiante"){
         this.panel_otros.hide();
         this.panel_estudiantes.show();
         this.panel_salud.show();
         this.panel_servicios.show();                 
        }
         else{
          this.panel_estudiantes.hide();
          this.panel_servicios.hide();
          this.panel_salud.show();
          this.panel_otros.show();
                
        }
    } catch(e) {
      console.error('ERROR IN tipoPersonaLookup1Change: ' + e); 
    } 
  },
  picture4Click: function(inSender) {
    try {
      alert("Contraseña: "+this.personaDataGrid1.selectedItem.getData().clave);
      
    } catch(e) {
      console.error('ERROR IN picture4Click: ' + e); 
    } 
  },
  califCharEditor2Change: function(inSender, inDisplayValue, inDataValue) {
    try {
       if(this.calificacionEditor2.dataValue=="En Progreso"){
            this.calificacionNumEditor2.setValue("dataValue", "0.3")
           }     
        if(this.calificacionEditor2.dataValue=="Competente"){
             this.calificacionNumEditor2.setValue("dataValue", "1")
            }     
            if(this.calificacionEditor2.dataValue=="Avanzado"){
                this.calificacionNumEditor2.setValue("dataValue", "1.3")
             }     
              if(this.calificacionEditor2.dataValue=="Magistral"){
                   this.calificacionNumEditor2.setValue("dataValue", "1.6")
               }     
      
    } catch(e) {
      console.error('ERROR IN califCharEditor2Change: ' + e); 
    } 
  },
  
  boton_limpiar_1Click: function(inSender, inEvent) {
    try {
      this.box_anio_escolar_1.clear();
       this.box_grado_1.clear();
        this.box_curso_1.clear();
         this.box_apellido_1.clear();
          this.box_apellido_2.clear();
           this.box_nombre_1.clear();
            this.box_nombre_2.clear();
             this.box_codigo.clear();
              this.box_id_persona.clear();
               this.l_secretaria_calificaciones_insc_alumn_curso.clearData();
                this.l_secretaria_calificaciones_inscalumasigLiveVariable1.clearData();
      
    } catch(e) {
      console.error('ERROR IN button17Click: ' + e); 
    } 
  },
  box_grado_1Change: function(inSender, inDisplayValue, inDataValue) {
    try {
      this.l_secretaria_calificaciones_lista_curso.update();
        this.l_secretaria_calificaciones_insc_alumn_curso.clearData();
          this.l_secretaria_calificaciones_inscalumasigLiveVariable1.clearData();
      
    } catch(e) {
      console.error('ERROR IN box_grado_1Change: ' + e); 
    } 
  },
  
  reloadVariableClick: function(inSender, inEvent) {
    try {
      this.l_secretaria_insc_alum_asig.update();
      
    } catch(e) {
      console.error('ERROR IN reloadVariableClick: ' + e); 
    } 
  },
  
  a_getCompleteNameSuccess: function(inSender, inDeprecated) {
    try {
      var nombre1= main.a_getCompleteName.getData().nombre1;
      var nombre2= main.a_getCompleteName.getData().nombre2;
      var apellido1= main.a_getCompleteName.getData().apellido1;
      var apellido2= main.a_getCompleteName.getData().apellido2;
      this.nombreCompleto.setCaption(nombre1+" "+nombre2+" "+apellido1+" "+apellido2);
      
    } catch(e) {
      console.error('ERROR IN a_getCompleteNameSuccess: ' + e); 
    } 
  },
 
  /*
  *Acciones al presionar enter
  *
  *
  **/
  personas_panel_personas_butt_buscarClick: function(inSender, inEvent) {
    try {
      this.l_personas_personaLiveVariable1.update();
      
    } catch(e) {
      console.error('ERROR IN personas_panel_personas_butt_buscarClick ' + e); 
    } 
  },
  
  personas_panel_personas_box_nombre1Change: function(inSender, inDisplayValue, inDataValue) {
    try {
      this.personas_panel_personas_butt_buscar.click();/* this.busyButton1.click();*/
      
    } catch(e) {
      console.error('ERROR IN personas_panel_personas_box_nombre1Change: ' + e); 
    } 
  },
  
  personas_panel_personas_box_nombre2Change: function(inSender, inDisplayValue, inDataValue) {
    try {
      this.personas_panel_personas_butt_buscar.click();
      
    } catch(e) {
      console.error('ERROR IN personas_panel_personas_box_nombre2Change: ' + e); 
    } 
  },
  personas_panel_personas_box_documentoChange: function(inSender, inDisplayValue, inDataValue) {
    try {
      this.personas_panel_personas_butt_buscar.click();
      
    } catch(e) {
      console.error('ERROR IN personas_panel_personas_box_documentoChange: ' + e); 
    } 
  },
  personas_panel_personas_box_codigoChange: function(inSender, inDisplayValue, inDataValue) {
    try {
      this.personas_panel_personas_butt_buscar.click();
      
    } catch(e) {
      console.error('ERROR IN personas_panel_personas_box_codigoChange: ' + e); 
    } 
  },
  personas_panel_personas_box_apellido1Change: function(inSender, inDisplayValue, inDataValue) {
    try {
      this.personas_panel_personas_butt_buscar.click();
      
    } catch(e) {
      console.error('ERROR IN personas_panel_personas_box_apellido1Change: ' + e); 
    } 
  },
  personas_panel_personas_box_apellido2Change: function(inSender, inDisplayValue, inDataValue) {
    try {
      this.personas_panel_personas_butt_buscar.click();
      
    } catch(e) {
      console.error('ERROR IN personas_panel_personas_box_apellido2Change: ' + e); 
    } 
  }, 
  personas_panel_personas_sel_grupo_familiarChange: function(inSender, inDisplayValue, inDataValue) {
    try {
      this.personas_panel_personas_butt_buscar.click();
      
    } catch(e) {
      console.error('ERROR IN personas_panel_personas_sel_grupo_familiarChange: ' + e); 
    } 
  },
  personas_panel_personas_box_tipo_personaChange: function(inSender, inDisplayValue, inDataValue) {
    try {
      this.personas_panel_personas_butt_buscar.click();
      
    } catch(e) {
      console.error('ERROR IN personas_panel_personas_box_tipo_personaChange: ' + e); 
    } 
  },
  /*
  *Fin Acciones al presionar enter
  *
  *
  **/

  box_apellido_1Change: function(inSender, inDisplayValue, inDataValue) {
    try {
      this.boton_buscar_1.click();
      
    } catch(e) {
      console.error('ERROR IN box_apellido_1Change: ' + e); 
    } 
  },
  box_apellido_2Change: function(inSender, inDisplayValue, inDataValue) {
    try {
      this.boton_buscar_1.click();
      
    } catch(e) {
      console.error('ERROR IN box_apellido_2Change: ' + e); 
    } 
  },
  box_nombre_1Change: function(inSender, inDisplayValue, inDataValue) {
    try {
      this.boton_buscar_1.click();
      
    } catch(e) {
      console.error('ERROR IN box_nombre_1Change: ' + e); 
    } 
  },
  box_nombre_2Change: function(inSender, inDisplayValue, inDataValue) {
    try {
      this.boton_buscar_1.click();
      
    } catch(e) {
      console.error('ERROR IN box_nombre_2Change: ' + e); 
    } 
  },
  box_id_personaChange: function(inSender, inDisplayValue, inDataValue) {
    try {
      this.boton_buscar_1.click();
      
    } catch(e) {
      console.error('ERROR IN box_id_personaChange: ' + e); 
    } 
  },
  grupofamiliarLiveForm1Success: function(inSender, inData) {
    try {
      this.grupofamiliarLiveVariable1.update();
      this.l_personas_lista_grupos_familiares.update();
      
    } catch(e) {
      console.error('ERROR IN grupofamiliarLiveForm1Success: ' + e); 
    } 
  },
  personaLiveForm1BeginUpdate: function(inSender) {
    try {
      this.inscAlumCursoIdInscAlumCursoEditor1.setReadonly(true);
      
    } catch(e) {
      console.error('ERROR IN personaLiveForm1BeginUpdate: ' + e); 
    } 
  },
  a_getCursoProcesoSVSuccess: function(inSender, inDeprecated) {
    try {
     var cursoProceso = main.a_getCursoProcesoSV.getItem(0);
     var z = cursoProceso.data.curse;
     if(z == null){
       this.alumno_proceso_matricula.setCaption("EN EL PROCESO DE MATRICULA: ");
     }
     if(z != null){
       this.alumno_proceso_matricula.setCaption("EN EL PROCESO DE MATRICULA: "+z);
     }

    } catch(e) {
      console.error('ERROR IN a_getCursoProcesoSVSuccess: ' + e); 
    } 
  },
  nombre1Editor1Change: function(inSender, inDisplayValue, inDataValue) {
    try {
      this.nombreUsuario();
      
    } catch(e) {
      console.error('ERROR IN nombre1Editor1Change: ' + e); 
    } 
  },
  nombre2Editor1Change: function(inSender, inDisplayValue, inDataValue) {
    try {
      this.nombreUsuario();
      
    } catch(e) {
      console.error('ERROR IN nombre2Editor1Change: ' + e); 
    } 
  },
  apellido1Editor1Change: function(inSender, inDisplayValue, inDataValue) {
    try {
      this.nombreUsuario();
      
    } catch(e) {
      console.error('ERROR IN apellido1Editor1Change: ' + e); 
    } 
  },
  apellido2Editor1Change: function(inSender, inDisplayValue, inDataValue) {
    try {
      this.nombreUsuario();
      
    } catch(e) {
      console.error('ERROR IN apellido2Editor1Change: ' + e); 
    } 
  },
  noDocumentoEditor1Change: function(inSender, inDisplayValue, inDataValue) {
    try {
      this.nombreUsuario();
      
    } catch(e) {
      console.error('ERROR IN noDocumentoEditor1Change: ' + e); 
    } 
  },
  libro_final_generar_libroClick: function(inSender, inEvent) {
    try {
      main.a_getCompleteName.update();
      var idsy=  this.libro_final_sel_sy.getDataValue();
      var idnivel= this.libro_final_nivel.getDataValue();
      var code= main.a_getCompleteName.getData().idp;
      var clave= main.a_getCompleteName.getData().clave;
      var formatType= "PDF";
      $.fileDownload("http://aprendoz.rochester.edu.co/wsreport/runreport?callback=?", {
        failMessageHtml: "Hubo un problema generando tu reporte, por favor intenta de nuevo.",
        httpMethod: "POST",
        data:{ idp: code, 
               pass: clave,
               uri: "/aprendozreports/SEC001",
               format: formatType,
               params: { sy: idsy, nivel: idnivel }
         }
       });
       inEvent.preventDefault();

    } catch(e) {
      console.error('ERROR IN libro_final_generar_libroClick: ' + e); 
    } 
  },
  libro_final_limpiarClick: function(inSender, inEvent) {
    try {
      this.libro_final_sel_sy.clear();
      this.libro_final_nivel.clear();
      
    } catch(e) {
      console.error('ERROR IN libro_final_limpiarClick: ' + e); 
    } 
  },
  explorador_buttonClick: function(inSender, inEvent) {
    try {
     app.pageDialog.showPage("Explorador", false, 890, 600); 
      
    } catch(e) {
      console.error('ERROR IN button8Click: ' + e); 
    } 
  },
 
  picture6Click: function(inSender) {
    try {
     alert("works!"); 
      
    } catch(e) {
      console.error('ERROR IN picture6Click: ' + e); 
    } 
  },
  _end: 0
});