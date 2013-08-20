
package com.aprendoz_desarrollo.data;

import java.util.HashSet;
import java.util.Set;


/**
 *  aprendoz_desarrollo.Nivel
 *  08/16/2013 09:24:24
 * 
 */
public class Nivel {

    private Integer idNivel;
    private String nivel;
    private String levelName;
    private Set<com.aprendoz_desarrollo.data.Grado> grados = new HashSet<com.aprendoz_desarrollo.data.Grado>();
    private Set<com.aprendoz_desarrollo.data.SesionNivel> sesionNivels = new HashSet<com.aprendoz_desarrollo.data.SesionNivel>();
    private Set<com.aprendoz_desarrollo.data.InscDirectorNivel> inscDirectorNivels = new HashSet<com.aprendoz_desarrollo.data.InscDirectorNivel>();

    public Nivel() {
    }

    public Nivel(Integer idNivel, String nivel, String levelName) {
        this.idNivel = idNivel;
        this.nivel = nivel;
        this.levelName = levelName;
    }

    public Nivel(Integer idNivel, String nivel, String levelName, Set<com.aprendoz_desarrollo.data.Grado> grados, Set<com.aprendoz_desarrollo.data.SesionNivel> sesionNivels, Set<com.aprendoz_desarrollo.data.InscDirectorNivel> inscDirectorNivels) {
        this.idNivel = idNivel;
        this.nivel = nivel;
        this.levelName = levelName;
        this.grados = grados;
        this.sesionNivels = sesionNivels;
        this.inscDirectorNivels = inscDirectorNivels;
    }

    public Integer getIdNivel() {
        return idNivel;
    }

    public void setIdNivel(Integer idNivel) {
        this.idNivel = idNivel;
    }

    public String getNivel() {
        return nivel;
    }

    public void setNivel(String nivel) {
        this.nivel = nivel;
    }

    public String getLevelName() {
        return levelName;
    }

    public void setLevelName(String levelName) {
        this.levelName = levelName;
    }

    public Set<com.aprendoz_desarrollo.data.Grado> getGrados() {
        return grados;
    }

    public void setGrados(Set<com.aprendoz_desarrollo.data.Grado> grados) {
        this.grados = grados;
    }

    public Set<com.aprendoz_desarrollo.data.SesionNivel> getSesionNivels() {
        return sesionNivels;
    }

    public void setSesionNivels(Set<com.aprendoz_desarrollo.data.SesionNivel> sesionNivels) {
        this.sesionNivels = sesionNivels;
    }

    public Set<com.aprendoz_desarrollo.data.InscDirectorNivel> getInscDirectorNivels() {
        return inscDirectorNivels;
    }

    public void setInscDirectorNivels(Set<com.aprendoz_desarrollo.data.InscDirectorNivel> inscDirectorNivels) {
        this.inscDirectorNivels = inscDirectorNivels;
    }

}
