import {Component, OnInit} from '@angular/core';
import {HeroService} from "../services/hero.service";
import {Hero} from "../model/hero";

@Component({
    selector : 'my-dashboard',
    templateUrl : 'forms/dashboard.component.html',
    styleUrls : ['css/dashboard.component.css']
})

export class DashboardComponent implements OnInit {

    topHeroes : Hero[];
    constructor(private heroService : HeroService) {}

    ngOnInit() : void {
        this.heroService.getDelayedHeroes().then(heroes => {
            this.topHeroes = heroes.slice(1, 5);
        });
    }
}