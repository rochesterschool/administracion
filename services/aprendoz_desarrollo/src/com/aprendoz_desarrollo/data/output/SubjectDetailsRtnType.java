
package com.aprendoz_desarrollo.data.output;



/**
 * Generated for query "subjectDetails" on 08/13/2013 10:40:42
 * 
 */
public class SubjectDetailsRtnType {

    private Integer id;
    private String asignatura;
    private String subject;

    public SubjectDetailsRtnType() {
    }

    public SubjectDetailsRtnType(Integer id, String asignatura, String subject) {
        this.id = id;
        this.asignatura = asignatura;
        this.subject = subject;
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

    public String getSubject() {
        return subject;
    }

    public void setSubject(String subject) {
        this.subject = subject;
    }

}
