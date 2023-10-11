import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FlowsService {

 
  
  api = environment.apiUrl;
  
  constructor(private http: HttpClient) { }

  allFlows(): Observable<any> { 
    return this.http.get(this.api + '/flows');
  }
  allFlowsForStat(): Observable<any> { 
    return this.http.get(this.api + '/statflows');
  }

  getFieldsByIdFlow(idFlow: number): Observable<any> {
    return this.http.get<any>(`${this.api}/fields/${idFlow}`); // Adjust the API endpoint as needed
  }

  addInfos(infos: any): Observable<any> {
    return this.http.post<any>(`${this.api}/addRec`, infos);
  }

  addInfoStat(infos: any): Observable<any> {
    return this.http.post<any>(`${this.api}/addStat`, infos);
  }

  addRecExec(infos: any): Observable<any> {
    return this.http.post<any>(`${this.api}/addRecExec`, infos);
  }

  addStatExec(infos: any): Observable<any> {
    return this.http.post<any>(`${this.api}/addStatExec`, infos);
  }
  
}
  

