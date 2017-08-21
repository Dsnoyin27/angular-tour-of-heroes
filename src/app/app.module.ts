import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms'; // <-- NgModel lives here
import { AppComponent } from './app.component';
import { HeroDetailComponent } from './hero-detail.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule // <-- import the FormsModule before binding with [(ngModel)] was imported for the ng module used in app.component.ts template
  ],
declarations: [
  AppComponent,
  HeroDetailComponent
],

  providers: [],
  bootstrap: [AppComponent]


})
export class AppModule { }

