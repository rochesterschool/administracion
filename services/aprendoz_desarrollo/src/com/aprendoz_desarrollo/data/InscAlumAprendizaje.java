
package com.aprendoz_desarrollo.data;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;


/**
 *  aprendoz_desarrollo.InscAlumAprendizaje
 *  08/23/2011 14:29:37
 * 
 */
public class InscAlumAprendizaje {

    private Integer idInscAlumAprendizaje;
    private Persona persona;
    private InscAlumCurso inscAlumCurso;
    private Aprendizaje aprendizaje;
    private Integer idSy;
    private Date fechaLogro;
    private String calificacion;
    private Float calificacionNum;
    private String comentario;
    private Date fechaIngreso;
    private Integer periodoIdPeriodo;
    private Set<com.aprendoz_desarrollo.data.Calificaciones> calificacioneses = new HashSet<com.aprendoz_desarrollo.data.Calificaciones>();
    private Set<com.aprendoz_desarrollo.data.HistorialCalificaciones> historialCalificacioneses = new HashSet<com.aprendoz_desarrollo.data.HistorialCalificaciones>();

    public InscAlumAprendizaje() {
    }

    public InscAlumAprendizaje(Integer idInscAlumAprendizaje, Integer idSy, Date fechaLogro, String calificacion, Float calificacionNum, String comentario, Date fechaIngreso, Integer periodoIdPeriodo) {
        this.idInscAlumAprendizaje = idInscAlumAprendizaje;
        this.idSy = idSy;
        this.fechaLogro = fechaLogro;
        this.calificacion = calificacion;
        this.calificacionNum = calificacionNum;
        this.comentario = comentario;
        this.fechaIngreso = fechaIngreso;
        this.periodoIdPeriodo = periodoIdPeriodo;
    }

    public InscAlumAprendizaje(Integer idInscAlumAprendizaje, Persona persona, InscAlumCurso inscAlumCurso, Aprendizaje aprendizaje, Integer idSy, Date fechaLogro, String calificacion, Float calificacionNum, String comentario, Date fechaIngreso, Integer periodoIdPeriodo, Set<com.aprendoz_desarrollo.data.Calificaciones> calificacioneses, Set<com.aprendoz_desarrollo.data.HistorialCalificaciones> historialCalificacioneses) {
        this.idInscAlumAprendizaje = idInscAlumAprendizaje;
        this.persona = persona;
        this.inscAlumCurso = inscAlumCurso;
        this.aprendizaje = aprendizaje;
        this.idSy = idSy;
        this.fechaLogro = fechaLogro;
        this.calificacion = calificacion;
        this.calificacionNum = calificacionNum;
        this.comentario = comentario;
        this.fechaIngreso = fechaIngreso;
        this.periodoIdPeriodo = periodoIdPeriodo;
        this.calificacioneses = calificacioneses;
        this.historialCalificacioneses = historialCalificacioneses;
    }

    public Integer getIdInscAlumAprendizaje() {
        return idInscAlumAprendizaje;
    }

    public void setIdInscAlumAprendizaje(Integer idInscAlumAprendizaje) {
        this.idInscAlumAprendizaje = idInscAlumAprendizaje;
    }

    public Persona getPersona() {
        return persona;
    }

    public void setPersona(Persona persona) {
        this.persona = persona;
    }

    public InscAlumCurso getInscAlumCurso() {
        return inscAlumCurso;
    }

    public void setInscAlumCurso(InscAlumCurso inscAlumCurso) {
        this.inscAlumCurso = inscAlumCurso;
    }

    public Aprendizaje getAprendizaje() {
        return aprendizaje;
    }

    public void setAprendizaje(Aprendizaje aprendizaje) {
        this.aprendizaje = aprendizaje;
    }

    public Integer getIdSy() {
        return idSy;
    }

    public void setIdSy(Integer idSy) {
        this.idSy = idSy;
    }

    public Date getFechaLogro() {
        return fechaLogro;
    }

    public void setFechaLogro(Date fechaLogro) {
        this.fechaLogro = fechaLogro;
    }

    public String getCalificacion() {
        return calificacion;
    }

    public void setCalificacion(String calificacion) {
        this.calificacion = calificacion;
    }

    public Float getCalificacionNum() {
        return calificacionNum;
    }

    public void setCalificacionNum(Float calificacionNum) {
        this.calificacionNum = calificacionNum;
    }

    public String getComentario() {
        return comentario;
    }

    public void setComentario(String comentario) {
        this.comentario = comentario;
    }

    public Date getFechaIngreso() {
        return fechaIngreso;
    }

    public void setFechaIngreso(Date fechaIngreso) {
        this.fechaIngreso = fechaIngreso;
    }

    public Integer getPeriodoIdPeriodo() {
        return periodoIdPeriodo;
    }

    public void setPeriodoIdPeriodo(Integer periodoIdPeriodo) {
        this.periodoIdPeriodo = periodoIdPeriodo;
    }

    public Set<com.aprendoz_desarrollo.data.Calificaciones> getCalificacioneses() {
        return calificacioneses;
    }

    public void setCalificacioneses(Set<com.aprendoz_desarrollo.data.Calificaciones> calificacioneses) {
        this.calificacioneses = calificacioneses;
    }

    public Set<com.aprendoz_desarrollo.data.HistorialCalificaciones> getHistorialCalificacioneses() {
        return historialCalificacioneses;
    }

    public void setHistorialCalificacioneses(Set<com.aprendoz_desarrollo.data.HistorialCalificaciones> historialCalificacioneses) {
        this.historialCalificacioneses = historialCalificacioneses;
    }

}
