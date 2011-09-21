
package com.aprendoz_desarrollo.data;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;


/**
 *  aprendoz_desarrollo.Eventualidades
 *  08/23/2011 14:29:37
 * 
 */
public class Eventualidades {

    private Integer idEventualidad;
    private Persona persona;
    private SubtipoEventualidad subtipoEventualidad;
    private Date fecha;
    private String lugar;
    private String estado;
    private String descripcion;
    private Set<com.aprendoz_desarrollo.data.EventualidadPersonas> eventualidadPersonases = new HashSet<com.aprendoz_desarrollo.data.EventualidadPersonas>();

    public Eventualidades() {
    }

    public Eventualidades(Integer idEventualidad, Date fecha, String lugar, String estado, String descripcion) {
        this.idEventualidad = idEventualidad;
        this.fecha = fecha;
        this.lugar = lugar;
        this.estado = estado;
        this.descripcion = descripcion;
    }

    public Eventualidades(Integer idEventualidad, Persona persona, SubtipoEventualidad subtipoEventualidad, Date fecha, String lugar, String estado, String descripcion, Set<com.aprendoz_desarrollo.data.EventualidadPersonas> eventualidadPersonases) {
        this.idEventualidad = idEventualidad;
        this.persona = persona;
        this.subtipoEventualidad = subtipoEventualidad;
        this.fecha = fecha;
        this.lugar = lugar;
        this.estado = estado;
        this.descripcion = descripcion;
        this.eventualidadPersonases = eventualidadPersonases;
    }

    public Integer getIdEventualidad() {
        return idEventualidad;
    }

    public void setIdEventualidad(Integer idEventualidad) {
        this.idEventualidad = idEventualidad;
    }

    public Persona getPersona() {
        return persona;
    }

    public void setPersona(Persona persona) {
        this.persona = persona;
    }

    public SubtipoEventualidad getSubtipoEventualidad() {
        return subtipoEventualidad;
    }

    public void setSubtipoEventualidad(SubtipoEventualidad subtipoEventualidad) {
        this.subtipoEventualidad = subtipoEventualidad;
    }

    public Date getFecha() {
        return fecha;
    }

    public void setFecha(Date fecha) {
        this.fecha = fecha;
    }

    public String getLugar() {
        return lugar;
    }

    public void setLugar(String lugar) {
        this.lugar = lugar;
    }

    public String getEstado() {
        return estado;
    }

    public void setEstado(String estado) {
        this.estado = estado;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public Set<com.aprendoz_desarrollo.data.EventualidadPersonas> getEventualidadPersonases() {
        return eventualidadPersonases;
    }

    public void setEventualidadPersonases(Set<com.aprendoz_desarrollo.data.EventualidadPersonas> eventualidadPersonases) {
        this.eventualidadPersonases = eventualidadPersonases;
    }

}
