import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { DataGridModule } from '@andrvm/data-grid';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DataGridModule
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
