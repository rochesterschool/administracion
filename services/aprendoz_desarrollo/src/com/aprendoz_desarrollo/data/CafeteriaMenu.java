
package com.aprendoz_desarrollo.data;

import java.util.Date;


/**
 *  aprendoz_desarrollo.CafeteriaMenu
 *  08/16/2013 09:24:25
 * 
 */
public class CafeteriaMenu {

    private Integer idMenu;
    private Date fecha;
    private String diaSemana;
    private Integer sopaIdSopa;
    private Integer garniturasIdGarnituras;
    private Integer postresIdPostres;

    public CafeteriaMenu() {
    }

    public CafeteriaMenu(Integer idMenu, Date fecha, String diaSemana, Integer sopaIdSopa, Integer garniturasIdGarnituras, Integer postresIdPostres) {
        this.idMenu = idMenu;
        this.fecha = fecha;
        this.diaSemana = diaSemana;
        this.sopaIdSopa = sopaIdSopa;
        this.garniturasIdGarnituras = garniturasIdGarnituras;
        this.postresIdPostres = postresIdPostres;
    }

    public Integer getIdMenu() {
        return idMenu;
    }

    public void setIdMenu(Integer idMenu) {
        this.idMenu = idMenu;
    }

    public Date getFecha() {
        return fecha;
    }

    public void setFecha(Date fecha) {
        this.fecha = fecha;
    }

    public String getDiaSemana() {
        return diaSemana;
    }

    public void setDiaSemana(String diaSemana) {
        this.diaSemana = diaSemana;
    }

    public Integer getSopaIdSopa() {
        return sopaIdSopa;
    }

    public void setSopaIdSopa(Integer sopaIdSopa) {
        this.sopaIdSopa = sopaIdSopa;
    }

    public Integer getGarniturasIdGarnituras() {
        return garniturasIdGarnituras;
    }

    public void setGarniturasIdGarnituras(Integer garniturasIdGarnituras) {
        this.garniturasIdGarnituras = garniturasIdGarnituras;
    }

    public Integer getPostresIdPostres() {
        return postresIdPostres;
    }

    public void setPostresIdPostres(Integer postresIdPostres) {
        this.postresIdPostres = postresIdPostres;
    }

}
