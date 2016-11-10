import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {InMemoryWebApiModule} from 'angular-in-memory-web-api';

import {AppComponent} from '../components/app.component';
import {HeroDetailsComponent} from "../components/hero-details.component";
import {HeroesComponent} from "../components/heroes.component";
import {HeroService} from "../services/hero.service";
import {DashboardComponent} from "../components/dashboard.component";
import {AppRoutingModule} from "./app-routing.module";
import {InMemoryDataService} from "../services/in-memory-data.service";

@NgModule({
    imports : [
        BrowserModule,
        FormsModule,
        HttpModule,
        AppRoutingModule,
        InMemoryWebApiModule.forRoot(InMemoryDataService)
    ],
    declarations : [
        AppComponent,
        HeroesComponent,
        HeroDetailsComponent,
        DashboardComponent
    ],
    providers : [HeroService],
    bootstrap : [AppComponent]
})

export class AppModule{}