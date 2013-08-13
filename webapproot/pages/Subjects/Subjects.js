dojo.declare("Subjects", wm.Page, {
  start: function() {
    
  },
  asignaturasSelect: function(inSender, inItem) {
    var index = this.asignaturas.getSelectedIndex();
    var data = this.asignaturas.getItemData(index);
    var id= data.id;
    var subject= data.asignatura;
    
  },
  _end: 0
});