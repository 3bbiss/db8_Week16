import { Component, OnInit } from '@angular/core';
import { ApiResponse } from '../api-response';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  TheList: Employee[] = [];

  // Variables for entering a new employee
  newFirstName: string = "";
  newLastName: string = "";
  newPhone: string = "";
  newEmail: string = "";
  newDepartment: string = "";
  newHireDate: Date = new Date();

  constructor(private empSrv: EmployeeService) { }

  ngOnInit(): void {
    this.refresh();
  }

  refresh(){
    this.empSrv.getAll(
      // This function receives the data
      (result: Employee[]) => {
        this.TheList = result;
      }
    );
  }
  
  deleteOne(id: number){
    this.empSrv.delete(
      (result: ApiResponse) => {
        console.log(result);
        this.refresh();
      },
      id
    );

    // this.refresh(); was causing the error
  }


  saveNew(){
    let newPeep: Employee = {
      id: 0,
      firstname: this.newFirstName,
      lastname: this.newLastName,
      phone: this.newPhone,
      email: this.newEmail,
      department: this.newDepartment,
      hiredate: this.newHireDate
    };

    this.empSrv.add(
      (result: Employee) => {
        this.refresh();
      }, 
      newPeep
    );

    this.newFirstName = "";
    this.newLastName = "";
    this.newPhone = "";
    this.newEmail = "";
    this.newDepartment = "";
    this.newHireDate = new Date();
  }

  updateOne(updatedEmp: Employee) {
		this.empSrv.update(
			(result: ApiResponse) => {
				this.refresh();
			},
			updatedEmp
		);
	}


}
