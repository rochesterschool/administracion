
package com.aprendoz_desarrollo;

import java.util.List;
import com.aprendoz_desarrollo.data.output.GetProcesoMatriculaRtnType;
import com.aprendoz_desarrollo.data.output.HQLlsCursosRtnType;
import com.wavemaker.json.type.TypeDefinition;
import com.wavemaker.runtime.data.DataServiceManager;
import com.wavemaker.runtime.data.DataServiceManagerAccess;
import com.wavemaker.runtime.data.TaskManager;
import com.wavemaker.runtime.service.LiveDataService;
import com.wavemaker.runtime.service.PagingOptions;
import com.wavemaker.runtime.service.PropertyOptions;
import com.wavemaker.runtime.service.TypedServiceReturn;


/**
 *  Operations for service "aprendoz_desarrollo"
 *  08/12/2013 17:02:39
 * 
 */
@SuppressWarnings("unchecked")
public class Aprendoz_desarrollo
    implements DataServiceManagerAccess, LiveDataService
{

    private DataServiceManager dsMgr;
    private TaskManager taskMgr;

    public List<HQLlsCursosRtnType> hQLlsCursos(Integer idg) {
        return ((List<HQLlsCursosRtnType> ) dsMgr.invoke(taskMgr.getQueryTask(), (Aprendoz_desarrolloConstants.HQLlsCursosQueryName), idg));
    }

    public com.aprendoz_desarrollo.data.Formulario5a getFormulario5aById(Integer id) {
        List<com.aprendoz_desarrollo.data.Formulario5a> rtn = ((List<com.aprendoz_desarrollo.data.Formulario5a> ) dsMgr.invoke(taskMgr.getQueryTask(), (Aprendoz_desarrolloConstants.getFormulario5aByIdQueryName), id));
        if (rtn.isEmpty()) {
            return null;
        } else {
            return rtn.get(0);
        }
    }

    public List<GetProcesoMatriculaRtnType> getProcesoMatricula(Integer idp) {
        return ((List<GetProcesoMatriculaRtnType> ) dsMgr.invoke(taskMgr.getQueryTask(), (Aprendoz_desarrolloConstants.getProcesoMatriculaQueryName), idp));
    }

    public com.aprendoz_desarrollo.data.output.GetNombreCompletoRtnType getNombreCompleto(String usuario) {
        List<com.aprendoz_desarrollo.data.output.GetNombreCompletoRtnType> rtn = ((List<com.aprendoz_desarrollo.data.output.GetNombreCompletoRtnType> ) dsMgr.invoke(taskMgr.getQueryTask(), (Aprendoz_desarrolloConstants.getNombreCompletoQueryName), usuario));
        if (rtn.isEmpty()) {
            return null;
        } else {
            return rtn.get(0);
        }
    }

    public Object insert(Object o) {
        return dsMgr.invoke(taskMgr.getInsertTask(), o);
    }

    public TypedServiceReturn read(TypeDefinition rootType, Object o, PropertyOptions propertyOptions, PagingOptions pagingOptions) {
        return ((TypedServiceReturn) dsMgr.invoke(taskMgr.getReadTask(), rootType, o, propertyOptions, pagingOptions));
    }

    public Object update(Object o) {
        return dsMgr.invoke(taskMgr.getUpdateTask(), o);
    }

    public void delete(Object o) {
        dsMgr.invoke(taskMgr.getDeleteTask(), o);
    }

    public void begin() {
        dsMgr.begin();
    }

    public void commit() {
        dsMgr.commit();
    }

    public void rollback() {
        dsMgr.rollback();
    }

    public DataServiceManager getDataServiceManager() {
        return dsMgr;
    }

    public void setDataServiceManager(DataServiceManager dsMgr) {
        this.dsMgr = dsMgr;
    }

    public TaskManager getTaskManager() {
        return taskMgr;
    }

    public void setTaskManager(TaskManager taskMgr) {
        this.taskMgr = taskMgr;
    }

}
