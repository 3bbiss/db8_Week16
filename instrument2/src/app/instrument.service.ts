import { Injectable } from '@angular/core';
import { Instrument } from './instrument';

@Injectable({
  providedIn: 'root'
})
export class InstrumentService {

  TheList: Instrument[] = [
    {type: 'piano', color: 'black', year: 1998},
    {type: 'trumpet', color: 'gold', year: 2000},
  ];

  get(){
    return this.TheList;
  }

  constructor() { }
}
