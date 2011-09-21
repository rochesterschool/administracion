
package com.aprendoz_desarrollo.data;

import java.util.HashSet;
import java.util.Set;


/**
 *  aprendoz_desarrollo.Asignatura
 *  08/23/2011 14:29:37
 * 
 */
public class Asignatura {

    private Integer idAsignatura;
    private Grado grado;
    private TipoInscAsig tipoInscAsig;
    private Sy sy;
    private String asignatura;
    private String subject;
    private Boolean electiva;
    private Integer idArea1;
    private Integer idArea2;
    private Integer idArea3;
    private Integer idSubarea1;
    private Integer idSubarea2;
    private Integer idSubarea3;
    private Integer salonIdSalon;
    private Float intensidadHoraria;
    private Integer peso;
    private String descripAsigEspaniol;
    private String descripAsigIngles;
    private Set<com.aprendoz_desarrollo.data.Unidad> unidads = new HashSet<com.aprendoz_desarrollo.data.Unidad>();
    private Set<com.aprendoz_desarrollo.data.InscCursoAsig> inscCursoAsigs = new HashSet<com.aprendoz_desarrollo.data.InscCursoAsig>();
    private Set<com.aprendoz_desarrollo.data.InscDocAsig> inscDocAsigs = new HashSet<com.aprendoz_desarrollo.data.InscDocAsig>();
    private Set<com.aprendoz_desarrollo.data.InscAlumAsig> inscAlumAsigs = new HashSet<com.aprendoz_desarrollo.data.InscAlumAsig>();

    public Asignatura() {
    }

    public Asignatura(Integer idAsignatura, String asignatura, String subject, Boolean electiva, Integer idArea1, Integer idArea2, Integer idArea3, Integer idSubarea1, Integer idSubarea2, Integer idSubarea3, Integer salonIdSalon, Float intensidadHoraria, Integer peso, String descripAsigEspaniol, String descripAsigIngles) {
        this.idAsignatura = idAsignatura;
        this.asignatura = asignatura;
        this.subject = subject;
        this.electiva = electiva;
        this.idArea1 = idArea1;
        this.idArea2 = idArea2;
        this.idArea3 = idArea3;
        this.idSubarea1 = idSubarea1;
        this.idSubarea2 = idSubarea2;
        this.idSubarea3 = idSubarea3;
        this.salonIdSalon = salonIdSalon;
        this.intensidadHoraria = intensidadHoraria;
        this.peso = peso;
        this.descripAsigEspaniol = descripAsigEspaniol;
        this.descripAsigIngles = descripAsigIngles;
    }

    public Asignatura(Integer idAsignatura, Grado grado, TipoInscAsig tipoInscAsig, Sy sy, String asignatura, String subject, Boolean electiva, Integer idArea1, Integer idArea2, Integer idArea3, Integer idSubarea1, Integer idSubarea2, Integer idSubarea3, Integer salonIdSalon, Float intensidadHoraria, Integer peso, String descripAsigEspaniol, String descripAsigIngles, Set<com.aprendoz_desarrollo.data.Unidad> unidads, Set<com.aprendoz_desarrollo.data.InscCursoAsig> inscCursoAsigs, Set<com.aprendoz_desarrollo.data.InscDocAsig> inscDocAsigs, Set<com.aprendoz_desarrollo.data.InscAlumAsig> inscAlumAsigs) {
        this.idAsignatura = idAsignatura;
        this.grado = grado;
        this.tipoInscAsig = tipoInscAsig;
        this.sy = sy;
        this.asignatura = asignatura;
        this.subject = subject;
        this.electiva = electiva;
        this.idArea1 = idArea1;
        this.idArea2 = idArea2;
        this.idArea3 = idArea3;
        this.idSubarea1 = idSubarea1;
        this.idSubarea2 = idSubarea2;
        this.idSubarea3 = idSubarea3;
        this.salonIdSalon = salonIdSalon;
        this.intensidadHoraria = intensidadHoraria;
        this.peso = peso;
        this.descripAsigEspaniol = descripAsigEspaniol;
        this.descripAsigIngles = descripAsigIngles;
        this.unidads = unidads;
        this.inscCursoAsigs = inscCursoAsigs;
        this.inscDocAsigs = inscDocAsigs;
        this.inscAlumAsigs = inscAlumAsigs;
    }

    public Integer getIdAsignatura() {
        return idAsignatura;
    }

    public void setIdAsignatura(Integer idAsignatura) {
        this.idAsignatura = idAsignatura;
    }

    public Grado getGrado() {
        return grado;
    }

    public void setGrado(Grado grado) {
        this.grado = grado;
    }

    public TipoInscAsig getTipoInscAsig() {
        return tipoInscAsig;
    }

    public void setTipoInscAsig(TipoInscAsig tipoInscAsig) {
        this.tipoInscAsig = tipoInscAsig;
    }

    public Sy getSy() {
        return sy;
    }

    public void setSy(Sy sy) {
        this.sy = sy;
    }

    public String getAsignatura() {
        return asignatura;
    }

    public void setAsignatura(String asignatura) {
        this.asignatura = asignatura;
    }

    public String getSubject() {
        return subject;
    }

    public void setSubject(String subject) {
        this.subject = subject;
    }

    public Boolean getElectiva() {
        return electiva;
    }

    public void setElectiva(Boolean electiva) {
        this.electiva = electiva;
    }

    public Integer getIdArea1() {
        return idArea1;
    }

    public void setIdArea1(Integer idArea1) {
        this.idArea1 = idArea1;
    }

    public Integer getIdArea2() {
        return idArea2;
    }

    public void setIdArea2(Integer idArea2) {
        this.idArea2 = idArea2;
    }

    public Integer getIdArea3() {
        return idArea3;
    }

    public void setIdArea3(Integer idArea3) {
        this.idArea3 = idArea3;
    }

    public Integer getIdSubarea1() {
        return idSubarea1;
    }

    public void setIdSubarea1(Integer idSubarea1) {
        this.idSubarea1 = idSubarea1;
    }

    public Integer getIdSubarea2() {
        return idSubarea2;
    }

    public void setIdSubarea2(Integer idSubarea2) {
        this.idSubarea2 = idSubarea2;
    }

    public Integer getIdSubarea3() {
        return idSubarea3;
    }

    public void setIdSubarea3(Integer idSubarea3) {
        this.idSubarea3 = idSubarea3;
    }

    public Integer getSalonIdSalon() {
        return salonIdSalon;
    }

    public void setSalonIdSalon(Integer salonIdSalon) {
        this.salonIdSalon = salonIdSalon;
    }

    public Float getIntensidadHoraria() {
        return intensidadHoraria;
    }

    public void setIntensidadHoraria(Float intensidadHoraria) {
        this.intensidadHoraria = intensidadHoraria;
    }

    public Integer getPeso() {
        return peso;
    }

    public void setPeso(Integer peso) {
        this.peso = peso;
    }

    public String getDescripAsigEspaniol() {
        return descripAsigEspaniol;
    }

    public void setDescripAsigEspaniol(String descripAsigEspaniol) {
        this.descripAsigEspaniol = descripAsigEspaniol;
    }

    public String getDescripAsigIngles() {
        return descripAsigIngles;
    }

    public void setDescripAsigIngles(String descripAsigIngles) {
        this.descripAsigIngles = descripAsigIngles;
    }

    public Set<com.aprendoz_desarrollo.data.Unidad> getUnidads() {
        return unidads;
    }

    public void setUnidads(Set<com.aprendoz_desarrollo.data.Unidad> unidads) {
        this.unidads = unidads;
    }

    public Set<com.aprendoz_desarrollo.data.InscCursoAsig> getInscCursoAsigs() {
        return inscCursoAsigs;
    }

    public void setInscCursoAsigs(Set<com.aprendoz_desarrollo.data.InscCursoAsig> inscCursoAsigs) {
        this.inscCursoAsigs = inscCursoAsigs;
    }

    public Set<com.aprendoz_desarrollo.data.InscDocAsig> getInscDocAsigs() {
        return inscDocAsigs;
    }

    public void setInscDocAsigs(Set<com.aprendoz_desarrollo.data.InscDocAsig> inscDocAsigs) {
        this.inscDocAsigs = inscDocAsigs;
    }

    public Set<com.aprendoz_desarrollo.data.InscAlumAsig> getInscAlumAsigs() {
        return inscAlumAsigs;
    }

    public void setInscAlumAsigs(Set<com.aprendoz_desarrollo.data.InscAlumAsig> inscAlumAsigs) {
        this.inscAlumAsigs = inscAlumAsigs;
    }

}
