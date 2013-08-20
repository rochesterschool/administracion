
package com.aprendoz_desarrollo.data;

import java.util.Date;


/**
 *  aprendoz_desarrollo.Cronograma
 *  08/16/2013 09:24:25
 * 
 */
public class Cronograma {

    private Integer idCronograma;
    private TipoDia tipoDia;
    private Sy sy;
    private Date fecha;
    private String descripcion;

    public Cronograma() {
    }

    public Cronograma(Integer idCronograma, Date fecha, String descripcion) {
        this.idCronograma = idCronograma;
        this.fecha = fecha;
        this.descripcion = descripcion;
    }

    public Cronograma(Integer idCronograma, TipoDia tipoDia, Sy sy, Date fecha, String descripcion) {
        this.idCronograma = idCronograma;
        this.tipoDia = tipoDia;
        this.sy = sy;
        this.fecha = fecha;
        this.descripcion = descripcion;
    }

    public Integer getIdCronograma() {
        return idCronograma;
    }

    public void setIdCronograma(Integer idCronograma) {
        this.idCronograma = idCronograma;
    }

    public TipoDia getTipoDia() {
        return tipoDia;
    }

    public void setTipoDia(TipoDia tipoDia) {
        this.tipoDia = tipoDia;
    }

    public Sy getSy() {
        return sy;
    }

    public void setSy(Sy sy) {
        this.sy = sy;
    }

    public Date getFecha() {
        return fecha;
    }

    public void setFecha(Date fecha) {
        this.fecha = fecha;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

}
