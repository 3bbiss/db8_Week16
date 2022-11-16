import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiResponse } from './api-response';
import { Department } from './department';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  // Instead of holding an array with our data,
  // this class will call back to the web-server
  // for each type of operation: Create, Read, Update, Delete
  // We'll write a function that does each one:
  //    GetAll()
  //    GetOne()
  //    Add()
  //    Delete()
  //    Update()

/*
	Here's a starter that only needs a URL
	starterLine(cb: any) {
		this.http.get<Department[]>('[URL GOES HERE]').subscribe(cb);
	}

	Here's a starter that takes an additional parameter
	starterLine(cb: any, id: string) {
		this.http.get<Department[]>(`[URL GOES HERE]/${id}`).subscribe(cb);
	}
	*/


  getAll(cb: any) {
		// https://localhost:7147/department
		this.http.get<Department[]>('https://localhost:7265/department').subscribe(cb);
	}

	getOne(cb: any, id: string) {
		// Typo! Take out the [].
		this.http.get<Department>(`https://localhost:7265/department/${id}`).subscribe(cb);
	}

	add(cb: any, dep: Department) {
		this.http.post<Department>('https://localhost:7265/department', dep).subscribe(cb);
	}

	delete(cb: any, id: string) {
		// Typo! Take out the [].
		this.http.delete<ApiResponse>(`https://localhost:7265/department/${id}`).subscribe(cb);
	}

	update(cb: any, dep: Department) {
		this.http.put<ApiResponse>('https://localhost:7265/department', dep).subscribe(cb);
	}



  constructor(private http: HttpClient ) { }
}
