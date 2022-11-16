import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DeckOfCardsService {

  constructor(private http: HttpClient) { }

  // Function that gets a deck of cards

  

  getDeck(callback: any){
    /* let callback = (result: any) => {
      console.log(result);
    } */

    let url = 'https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1';
    this.http.get(url).subscribe(callback);
  }
}
