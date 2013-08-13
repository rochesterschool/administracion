
package com.aprendoz_desarrollo.data;



/**
 *  aprendoz_desarrollo.Asistencia
 *  12/07/2011 16:52:37
 * 
 */
public class Asistencia {

    private Integer idAsistencia;
    private String tipoEventualidadIdTipoEventualidad;
    private String tipoEventualidadIdTipoEventualidad1;
    private String tipoEventualidadIdTipoEventualidad2;
    private String comentario;
    private Sesion sesion;
    private TipoAsistencia tipoAsistencia;
    private Persona persona;

    public Asistencia() {
    }

    public Asistencia(Integer idAsistencia, String tipoEventualidadIdTipoEventualidad, String tipoEventualidadIdTipoEventualidad1, String tipoEventualidadIdTipoEventualidad2, String comentario) {
        this.idAsistencia = idAsistencia;
        this.tipoEventualidadIdTipoEventualidad = tipoEventualidadIdTipoEventualidad;
        this.tipoEventualidadIdTipoEventualidad1 = tipoEventualidadIdTipoEventualidad1;
        this.tipoEventualidadIdTipoEventualidad2 = tipoEventualidadIdTipoEventualidad2;
        this.comentario = comentario;
    }

    public Asistencia(Integer idAsistencia, String tipoEventualidadIdTipoEventualidad, String tipoEventualidadIdTipoEventualidad1, String tipoEventualidadIdTipoEventualidad2, String comentario, Sesion sesion, TipoAsistencia tipoAsistencia, Persona persona) {
        this.idAsistencia = idAsistencia;
        this.tipoEventualidadIdTipoEventualidad = tipoEventualidadIdTipoEventualidad;
        this.tipoEventualidadIdTipoEventualidad1 = tipoEventualidadIdTipoEventualidad1;
        this.tipoEventualidadIdTipoEventualidad2 = tipoEventualidadIdTipoEventualidad2;
        this.comentario = comentario;
        this.sesion = sesion;
        this.tipoAsistencia = tipoAsistencia;
        this.persona = persona;
    }

    public Integer getIdAsistencia() {
        return idAsistencia;
    }

    public void setIdAsistencia(Integer idAsistencia) {
        this.idAsistencia = idAsistencia;
    }

    public String getTipoEventualidadIdTipoEventualidad() {
        return tipoEventualidadIdTipoEventualidad;
    }

    public void setTipoEventualidadIdTipoEventualidad(String tipoEventualidadIdTipoEventualidad) {
        this.tipoEventualidadIdTipoEventualidad = tipoEventualidadIdTipoEventualidad;
    }

    public String getTipoEventualidadIdTipoEventualidad1() {
        return tipoEventualidadIdTipoEventualidad1;
    }

    public void setTipoEventualidadIdTipoEventualidad1(String tipoEventualidadIdTipoEventualidad1) {
        this.tipoEventualidadIdTipoEventualidad1 = tipoEventualidadIdTipoEventualidad1;
    }

    public String getTipoEventualidadIdTipoEventualidad2() {
        return tipoEventualidadIdTipoEventualidad2;
    }

    public void setTipoEventualidadIdTipoEventualidad2(String tipoEventualidadIdTipoEventualidad2) {
        this.tipoEventualidadIdTipoEventualidad2 = tipoEventualidadIdTipoEventualidad2;
    }

    public String getComentario() {
        return comentario;
    }

    public void setComentario(String comentario) {
        this.comentario = comentario;
    }

    public Sesion getSesion() {
        return sesion;
    }

    public void setSesion(Sesion sesion) {
        this.sesion = sesion;
    }

    public TipoAsistencia getTipoAsistencia() {
        return tipoAsistencia;
    }

    public void setTipoAsistencia(TipoAsistencia tipoAsistencia) {
        this.tipoAsistencia = tipoAsistencia;
    }

    public Persona getPersona() {
        return persona;
    }

    public void setPersona(Persona persona) {
        this.persona = persona;
    }

}
