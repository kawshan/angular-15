import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {EmployeeModel} from "../../model/employee.model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }

  api:string="http://localhost:8080"


  saveEmployee(employee:EmployeeModel):Observable<EmployeeModel> {
    return this.http.post<EmployeeModel>(`${this.api}/save/employee`, employee);
  }

  public getEmployees():Observable<EmployeeModel[]> {
    return this.http.get<EmployeeModel[]>(`${this.api}/get/employee`)
  }


}
