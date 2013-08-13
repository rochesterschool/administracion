
package com.aprendoz_desarrollo.data.output;



/**
 * Generated for query "subjectsByGrade" on 08/13/2013 10:40:42
 * 
 */
public class SubjectsByGradeRtnType {

    private Integer id;
    private String asignatura;
    private Integer idgrado;
    private Integer c3;

    public SubjectsByGradeRtnType() {
    }

    public SubjectsByGradeRtnType(Integer id, String asignatura, Integer idgrado, Integer c3) {
        this.id = id;
        this.asignatura = asignatura;
        this.idgrado = idgrado;
        this.c3 = c3;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getAsignatura() {
        return asignatura;
    }

    public void setAsignatura(String asignatura) {
        this.asignatura = asignatura;
    }

    public Integer getIdgrado() {
        return idgrado;
    }

    public void setIdgrado(Integer idgrado) {
        this.idgrado = idgrado;
    }

    public Integer getC3() {
        return c3;
    }

    public void setC3(Integer c3) {
        this.c3 = c3;
    }

}
