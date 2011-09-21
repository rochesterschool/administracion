
package com.aprendoz_desarrollo.data;



/**
 *  aprendoz_desarrollo.EstadoDepartamento
 *  08/23/2011 14:29:37
 * 
 */
public class EstadoDepartamento {

    private Integer idEstados;
    private Pais pais;
    private String estado;

    public EstadoDepartamento() {
    }

    public EstadoDepartamento(Integer idEstados, String estado) {
        this.idEstados = idEstados;
        this.estado = estado;
    }

    public EstadoDepartamento(Integer idEstados, Pais pais, String estado) {
        this.idEstados = idEstados;
        this.pais = pais;
        this.estado = estado;
    }

    public Integer getIdEstados() {
        return idEstados;
    }

    public void setIdEstados(Integer idEstados) {
        this.idEstados = idEstados;
    }

    public Pais getPais() {
        return pais;
    }

    public void setPais(Pais pais) {
        this.pais = pais;
    }

    public String getEstado() {
        return estado;
    }

    public void setEstado(String estado) {
        this.estado = estado;
    }

}
