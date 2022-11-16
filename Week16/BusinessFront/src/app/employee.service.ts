import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from './employee';
import { ApiResponse } from './api-response';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  
  // Copy pasting from the Employee version
  //  The five CRUD functions, and the constructor
  // so deleted original constructor

  getAll(cb: any) {
		// https://localhost:7147/Employee
		this.http.get<Employee[]>('https://localhost:7265/Employee').subscribe(cb);
	}

	getOne(cb: any, id: number) {
		// Typo! Take out the [].
		this.http.get<Employee>(`https://localhost:7265/Employee/${id}`).subscribe(cb);
	}

	add(cb: any, emp: Employee) {
		this.http.post<Employee>('https://localhost:7265/Employee', emp).subscribe(cb);
	}

	delete(cb: any, id: number) {
		// Typo! Take out the [].
		this.http.delete<ApiResponse>(`https://localhost:7265/Employee/${id}`).subscribe(cb);
	}

	update(cb: any, emp: Employee) {
		this.http.put<ApiResponse>('https://localhost:7265/Employee', emp).subscribe(cb);
	}



  constructor(private http: HttpClient ) { }


}
