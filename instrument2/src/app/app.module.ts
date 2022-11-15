import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InstDetailComponent } from './inst-detail/inst-detail.component';
import { InstListComponent } from './inst-list/inst-list.component';

@NgModule({
  declarations: [
    AppComponent,
    InstDetailComponent,
    InstListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
