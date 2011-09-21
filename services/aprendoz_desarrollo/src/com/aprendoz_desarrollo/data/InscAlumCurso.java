
package com.aprendoz_desarrollo.data;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;


/**
 *  aprendoz_desarrollo.InscAlumCurso
 *  08/23/2011 14:29:37
 * 
 */
public class InscAlumCurso {

    private Integer idInscAlumCurso;
    private Curso curso;
    private Sy sy;
    private Persona persona;
    private Integer calificacion;
    private String califChar;
    private Date fechaMatricula;
    private Set<com.aprendoz_desarrollo.data.InscAlumAprendizaje> inscAlumAprendizajes = new HashSet<com.aprendoz_desarrollo.data.InscAlumAprendizaje>();

    public InscAlumCurso() {
    }

    public InscAlumCurso(Integer idInscAlumCurso, Integer calificacion, String califChar, Date fechaMatricula) {
        this.idInscAlumCurso = idInscAlumCurso;
        this.calificacion = calificacion;
        this.califChar = califChar;
        this.fechaMatricula = fechaMatricula;
    }

    public InscAlumCurso(Integer idInscAlumCurso, Curso curso, Sy sy, Persona persona, Integer calificacion, String califChar, Date fechaMatricula, Set<com.aprendoz_desarrollo.data.InscAlumAprendizaje> inscAlumAprendizajes) {
        this.idInscAlumCurso = idInscAlumCurso;
        this.curso = curso;
        this.sy = sy;
        this.persona = persona;
        this.calificacion = calificacion;
        this.califChar = califChar;
        this.fechaMatricula = fechaMatricula;
        this.inscAlumAprendizajes = inscAlumAprendizajes;
    }

    public Integer getIdInscAlumCurso() {
        return idInscAlumCurso;
    }

    public void setIdInscAlumCurso(Integer idInscAlumCurso) {
        this.idInscAlumCurso = idInscAlumCurso;
    }

    public Curso getCurso() {
        return curso;
    }

    public void setCurso(Curso curso) {
        this.curso = curso;
    }

    public Sy getSy() {
        return sy;
    }

    public void setSy(Sy sy) {
        this.sy = sy;
    }

    public Persona getPersona() {
        return persona;
    }

    public void setPersona(Persona persona) {
        this.persona = persona;
    }

    public Integer getCalificacion() {
        return calificacion;
    }

    public void setCalificacion(Integer calificacion) {
        this.calificacion = calificacion;
    }

    public String getCalifChar() {
        return califChar;
    }

    public void setCalifChar(String califChar) {
        this.califChar = califChar;
    }

    public Date getFechaMatricula() {
        return fechaMatricula;
    }

    public void setFechaMatricula(Date fechaMatricula) {
        this.fechaMatricula = fechaMatricula;
    }

    public Set<com.aprendoz_desarrollo.data.InscAlumAprendizaje> getInscAlumAprendizajes() {
        return inscAlumAprendizajes;
    }

    public void setInscAlumAprendizajes(Set<com.aprendoz_desarrollo.data.InscAlumAprendizaje> inscAlumAprendizajes) {
        this.inscAlumAprendizajes = inscAlumAprendizajes;
    }

}
