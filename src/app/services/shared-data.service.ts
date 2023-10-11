import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {
  originalselectedfields1!: any[]
  originalselectedfields2!: any[]

  setoriginalSelectedFields1(fields: any[]) {
    this.originalselectedfields1 = fields.slice();
  }

  getoriginalSelectedFields1(): any[] {
    return this.originalselectedfields1.slice();
  }

  setoriginalSelectedFields2(fields: any[]) {
    this.originalselectedfields2 = fields.slice();
  }

  getoriginalSelectedFields2(): any[] {
    return this.originalselectedfields2.slice();
  }
}
