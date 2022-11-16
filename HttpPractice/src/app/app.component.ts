import { HttpClient, HttpXhrBackend } from '@angular/common/http';
import { Component } from '@angular/core';
import { DeckOfCardsService } from './deck-of-cards.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HttpPractice';

  // Here's the "correct" way to get an HttpClient
  // Let's ask Angular to supply the HttpClient instance
  constructor(private http: HttpClient, private docSrv: DeckOfCardsService){}

  httpDemo(){
    let url = 'https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1';
    this.http.get(url).subscribe(
      (result: any) => {
        console.log(result);
      }
    )
  }


  test2(){
    this.docSrv.getDeck(
      (result: any) => {
        console.log("Back in App Component");
        console.log(result);
      }
    );
  }

  /* httpDemo(){
    // alert("hoao"); test to make sure button works
    let url = 'https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1';
    let http = new HttpClient(new HttpXhrBackend({build: () => new XMLHttpRequest()}));

    http.get(url).subscribe(
      (result: any) => {
        console.log(result);
      }
    );
  } */



}
