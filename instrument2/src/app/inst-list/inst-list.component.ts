import { Component, OnInit } from '@angular/core';
import { Instrument } from '../instrument';
import { InstrumentService } from '../instrument.service';

@Component({
  selector: 'app-inst-list',
  templateUrl: './inst-list.component.html',
  styleUrls: ['./inst-list.component.css']
})

/* export class InstListComponent implements OnInit {

  constructor(public InstSrv: InstrumentService) { }

  ngOnInit(): void {
  }

} */

export class InstListComponent implements OnInit {

  TheList: Instrument[];

  constructor(InstSrv: InstrumentService) { 
    this.TheList = InstSrv.get();
  }

  ngOnInit(): void {
  }

}
