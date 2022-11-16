import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Employee } from '../employee';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {

  // Manually add Input, Output, EventEmitter to the import line

  @Input() employee: Employee = {
    id: 0, firstname: "", lastname: "", phone: "",
    email: "", department: "", hiredate: new Date()
  }

  @Output() delete: EventEmitter<number> = new EventEmitter<number>();

  @Output() update: EventEmitter<Employee> = new EventEmitter<Employee>();

  constructor() { }

  ngOnInit(): void {
  }

  deleteMe(){
    this.delete.emit(this.employee.id);
  }

  editMode: boolean = false;
  editFirstName: string = '';
	editLastName: string = '';
	editPhone: string = '';
	editEmail: string = '';
	editDepartment: string = '';
	editHireDate: Date = new Date();

  turnOnEditMode(){
    this.editMode = true;
    this.editFirstName = this.employee.firstname;
    this.editLastName = this.employee.lastname;
    this.editPhone = this.employee.phone;
    this.editEmail = this.employee.email;
    this.editDepartment = this.employee.department;
    this.editHireDate = this.employee.hiredate;
  }

  saveChanges(){
    this.editMode = false;
    let updatedEmp: Employee = {
      id: this.employee.id,
      firstname: this.editFirstName,
      lastname: this.editLastName,
      phone: this.editPhone,
      email: this.editEmail,
      department: this.editDepartment,
      hiredate: this.editHireDate
    };

    this.update.emit(updatedEmp);
  }

  cancel(){
    this.editMode = false;
  }
  



}
