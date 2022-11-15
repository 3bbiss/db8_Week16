import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Department } from '../department';

@Component({
  selector: 'app-department-detail',
  templateUrl: './department-detail.component.html',
  styleUrls: ['./department-detail.component.css']
})
export class DepartmentDetailComponent implements OnInit {

  @Input() department: Department = {
    id: "", name: "", location: ""
  } 

  @Output() delete: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  doDelete(){
    this.delete.emit(this.department.id);
  }

}
