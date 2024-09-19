import {Component, OnInit} from '@angular/core';
import {EmployeeModel} from "../model/employee.model";
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow, MatHeaderRowDef, MatRow, MatRowDef,
  MatTable
} from "@angular/material/table";
import {EmployeeService} from "../service/employee/employee.service";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [
    MatTable,
    MatColumnDef,
    MatHeaderCell,
    MatCell,
    MatCellDef,
    MatHeaderCellDef,
    MatHeaderRow,
    MatHeaderRowDef,
    MatRowDef,
    MatRow
  ],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent implements OnInit{



  ngOnInit(): void {}


  constructor(private employeeService:EmployeeService) {
    this.getEmployeeList();
  }

  dataSource:EmployeeModel[]=[];

  displayedColumns:string[]=[
    'employeeId',
    'employeeName',
    'employeeContactNUmber',
    'employeeAddress',
    'employeeGender',
    'employeeDepartment',
    'employeeSkills'
  ];

  getEmployeeList():void {
    this.employeeService.getEmployees().subscribe({
      next:(res:EmployeeModel[])=>{
        console.log(res)
        this.dataSource=res;
      },
      error:(err:HttpErrorResponse)=>{
        console.log(err);
      }
    })
  }



}
