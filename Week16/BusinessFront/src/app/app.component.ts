import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DepartmentService } from './department.service';
import { Department } from './department';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BusinessFront';

  constructor(public http: HttpClient, public depSrv: DepartmentService) {}

  finishedWithCall(obj: any){
    console.log(obj);
  }
  
  callApi(){
    this.http.get<any>('https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1').subscribe(this.finishedWithCall);
  }

  getDepartments(){
    this.depSrv.getAll(
      (result: Department[]) => {
        // Here is where we receive the Department data.
        console.log(result);
      }
    )
  }

}
