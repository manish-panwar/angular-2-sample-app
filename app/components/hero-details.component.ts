import {Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import {Hero} from "../model/hero";
import {HeroService} from "../services/hero.service";

@Component({
    templateUrl : 'forms/hero-details.component.html',
    styleUrls : ['css/hero-details.component.css']
})

export class HeroDetailsComponent implements OnInit {

    hero : Hero;
    constructor(
        private heroService : HeroService,
        private route : ActivatedRoute,
        private location : Location
    ){}

    ngOnInit():void {
        this.route.params.forEach(params => {
            let id = +params['id'];
            this.heroService.getHero(id).then(
                hero => {
                    this.hero = hero;
                }
            );
        });
    }

    goBack() : void {
        this.location.back();
    }
}