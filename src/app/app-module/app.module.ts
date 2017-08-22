import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';


import { AppRoutingModule } from './app-routing.module';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular2-in-memory-web-api';
import { InMemoryDataService }  from './../in-memory-data.service';

import { AppComponent }         from './../app-component/app.component';
import { DashboardComponent }   from './../dashboard-component/dashboard.component';
import { HeroesComponent }      from './../heroes-component/heroes.component';
import { HeroDetailComponent }  from './../hero-details/hero-detail.component';
import { HeroService }          from './../hero.service';
import { HeroSearchComponent }  from './../hero-search/hero-search.component';
import { HeroFormComponent } from './../hero-form/hero-form.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroDetailComponent,
    HeroesComponent,
    HeroSearchComponent,
    HeroFormComponent
  ],
  providers: [ HeroService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
