
package com.aprendoz_desarrollo.data;



/**
 *  aprendoz_desarrollo.CalificacionFinal
 *  08/23/2011 14:29:37
 * 
 */
public class CalificacionFinal {

    private Integer idCalificacionFinal;
    private Persona persona;
    private Aprendizaje aprendizaje;
    private Float calificacionNum;
    private String calificacion;
    private Integer idSyIdIdSy;

    public CalificacionFinal() {
    }

    public CalificacionFinal(Integer idCalificacionFinal, Float calificacionNum, String calificacion, Integer idSyIdIdSy) {
        this.idCalificacionFinal = idCalificacionFinal;
        this.calificacionNum = calificacionNum;
        this.calificacion = calificacion;
        this.idSyIdIdSy = idSyIdIdSy;
    }

    public CalificacionFinal(Integer idCalificacionFinal, Persona persona, Aprendizaje aprendizaje, Float calificacionNum, String calificacion, Integer idSyIdIdSy) {
        this.idCalificacionFinal = idCalificacionFinal;
        this.persona = persona;
        this.aprendizaje = aprendizaje;
        this.calificacionNum = calificacionNum;
        this.calificacion = calificacion;
        this.idSyIdIdSy = idSyIdIdSy;
    }

    public Integer getIdCalificacionFinal() {
        return idCalificacionFinal;
    }

    public void setIdCalificacionFinal(Integer idCalificacionFinal) {
        this.idCalificacionFinal = idCalificacionFinal;
    }

    public Persona getPersona() {
        return persona;
    }

    public void setPersona(Persona persona) {
        this.persona = persona;
    }

    public Aprendizaje getAprendizaje() {
        return aprendizaje;
    }

    public void setAprendizaje(Aprendizaje aprendizaje) {
        this.aprendizaje = aprendizaje;
    }

    public Float getCalificacionNum() {
        return calificacionNum;
    }

    public void setCalificacionNum(Float calificacionNum) {
        this.calificacionNum = calificacionNum;
    }

    public String getCalificacion() {
        return calificacion;
    }

    public void setCalificacion(String calificacion) {
        this.calificacion = calificacion;
    }

    public Integer getIdSyIdIdSy() {
        return idSyIdIdSy;
    }

    public void setIdSyIdIdSy(Integer idSyIdIdSy) {
        this.idSyIdIdSy = idSyIdIdSy;
    }

}
