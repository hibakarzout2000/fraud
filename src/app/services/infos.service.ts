import { Injectable } from '@angular/core';
import { Flows } from 'src/model/Flows';
import { Field_Proc } from 'src/model/field_proc';
import { infos } from 'src/model/infos';
import { proc_flow } from 'src/model/proc_flow';

@Injectable({
  providedIn: 'root'
})
export class InfosService {
  newField! : Field_Proc
  

  public infoData: infos = {
    flow1: {} as Flows,
    flow2: {} as Flows,
    selectedfields1: [],
    selectedfields2: [],
    query_join: '',
    field_procs: [],
    proc_flows: [],
    originalselectedfields1: [],
    originalselectedfields2: [],
    type: ''
  };

  constructor() {}

  setFlow1(flow: Flows) {
    this.infoData.flow1 = flow;
  }

  getFlow1(): Flows {
    return this.infoData.flow1;
  }

  setFlow2(flow: Flows) {
    this.infoData.flow2 = flow;
  }

  getFlow2(): Flows {
    return this.infoData.flow2;
  }

  setSelectedFields1(fields: any[]) {
    this.infoData.selectedfields1 = fields;
  }

  getSelectedFields1(): any[] {
    return this.infoData.selectedfields1;
  }

  setSelectedFields2(fields: any[]) {
    this.infoData.selectedfields2 = fields;
  }

  getSelectedFields2(): any[] {
    return this.infoData.selectedfields2;
  }

  getFieldProcs():any[]{
    return this.infoData.field_procs
  }

  setFieldProcs(field_procs:any[]):any{
    this.infoData.field_procs = field_procs
  }
  setoriginalSelectedFields1(fields: any[]) {
    this.infoData.originalselectedfields1 = fields.slice();
  }

  getoriginalSelectedFields1(): any[] {
    return this.infoData.originalselectedfields1.slice();
  }

  setoriginalSelectedFields2(fields: any[]) {
    this.infoData.originalselectedfields2 = fields.slice();
  }

  getoriginalSelectedFields2(): any[] {
    return this.infoData.originalselectedfields2.slice();
  }


  updateSelectedField(updatedField: any) {
    const index = this.infoData.selectedfields1.findIndex(field => field.name_base === updatedField.name_base);
    if (index !== -1) {
      this.infoData.selectedfields1[index] = updatedField;
    } else {
      const index2 = this.infoData.selectedfields2.findIndex(field => field.name_base === updatedField.name_base);
      if (index2 !== -1) {
        this.infoData.selectedfields2[index2] = updatedField;
      }
    }
  }


  updateFieldProc(updatedField: any) {
    const index = this.infoData.field_procs.findIndex(fieldProc => fieldProc.id_field_origine === updatedField.id_field_origine);
    if (index !== -1) {
      this.infoData.field_procs[index] = updatedField;
    } else {
      this.infoData.field_procs.push(updatedField);
    }
  }
  
  updateProcFlow(updatedProcFlow: proc_flow) {
    const index = this.infoData.proc_flows.findIndex(procFlow => procFlow.id_flow === updatedProcFlow.id_flow);
    if (index !== -1) {
      this.infoData.proc_flows[index].query_filters = updatedProcFlow.query_filters;
    }else{
      this.infoData.proc_flows.push(updatedProcFlow)
    }
  }
  
  


  getProcFlows(): proc_flow[] {
    return this.infoData.proc_flows;
  }

  setProcFlows(proc_flow:any[]):any{
    this.infoData.proc_flows = proc_flow;
  }

  getOriginalSelectedField1ById(id: number): any {
    return this.infoData.originalselectedfields1.find(field => field.id === id);
  }
  getOriginalSelectedField2ById(id: number): any {
    return this.infoData.originalselectedfields2.find(field => field.id === id);
  }

  getType():any{
    return this.infoData.type;
  }
  setType(type:string):any{
    this.infoData.type = type;
  }
  
}
