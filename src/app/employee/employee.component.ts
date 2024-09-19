import {Component, OnInit} from '@angular/core';
import {MatFormField, MatHint, MatLabel} from "@angular/material/form-field";
import {MatIcon} from "@angular/material/icon";
import {MatInput} from "@angular/material/input";
import {MatOption, MatSelect} from "@angular/material/select";
import {MatCheckbox} from "@angular/material/checkbox";
import {FormsModule, NgForm, ReactiveFormsModule} from "@angular/forms";
import {EmployeeModel} from "../model/employee.model";
import {EmployeeService} from "../service/employee/employee.service";
import {MatRadioButton, MatRadioGroup} from "@angular/material/radio";
import {MatDivider} from "@angular/material/divider";
import {HttpErrorResponse} from "@angular/common/http";
import {MatFabButton} from "@angular/material/button";

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [
    MatFormField,
    MatIcon,
    MatLabel,
    MatInput,
    MatHint,
    MatSelect,
    MatOption,
    MatCheckbox,
    ReactiveFormsModule,
    FormsModule,
    MatRadioGroup,
    MatRadioButton,
    MatDivider,
    MatFabButton
  ],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent implements OnInit{


  constructor(private employeeService:EmployeeService) {}

  ngOnInit(): void {}

  skills:string[]=[];

  employee:EmployeeModel={
    employeeAddress: "",
    employeeContactNUmber: "",
    employeeDepartment: "",
    employeeGender: "",
    employeeId: 0,
    employeeName: "",
    employeeSkills: ""
  }


  saveEmployee(employeeForm:NgForm){
    this.employeeService.saveEmployee(this.employee).subscribe({
      next:(res:EmployeeModel)=>{
        console.log(res)
        employeeForm.reset();
        this.employee.employeeGender="";
      },
      error:(err:HttpErrorResponse)=>{
        console.log(err);
      }
    })
  }


  selectGender(gender:string){
    this.employee.employeeGender=gender;
  }


  onSkillsChange(event:any){
    if (event.checked){
      this.skills.push(event.source.value);
    }else {
      this.skills.forEach((item,index)=>{
        if (item==event.source.value){
          this.skills.splice(index,1);
        }
      })
    }
    this.employee.employeeSkills=this.skills.toString();
  }




}
