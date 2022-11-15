import { Component, OnInit } from '@angular/core';
import { Department } from '../department';
import { DepartmentService } from '../department.service';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent implements OnInit {

  TheList: Department[] = [
    // This was for testing... you can remove it.
    // {id: 'TEST', name: 'Test Department', location: 'Detroit'}
  ];

  constructor(private DepSrv: DepartmentService) { }

  ngOnInit(): void {
    this.refresh();
  }


  refresh(){
    this.DepSrv.getAll(
      (result: Department[]) => {
        // Here is where we put our code for doing something
        // with the list we got back
        console.log('ALL DEPS');
        console.log(result);
        this.TheList = result;
      }
    );
  }

  doDeleteOne(id: string){

    // After we delete, we have to refresh the list
    this.DepSrv.delete(
      // First parameter for delete: The callback function
      (result: any) => {
        console.log(result);
        this.refresh();
      },
      // Second parameter for delete: The id we want to delete
      id
    )
  }

}
