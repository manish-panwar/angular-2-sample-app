import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {Hero} from "../model/hero";
import {HeroService} from "../services/hero.service";

@Component({
    templateUrl : 'forms/heroes.component.html',
    styleUrls: [ 'css/heroes.component.css' ]
})

export class HeroesComponent implements OnInit {

    title = 'Tour of Heroes';
    heroes : Hero[];
    selectedHero : Hero;

    // Constructor to inject HeroService - this defines the private property called "heroService".
    constructor(
        private heroService: HeroService,
        private router: Router
    ){}

    // When user click on a Hero, it will show the details.
    onHeroSelect(hero : Hero) : void {
        this.selectedHero = hero;
    };

    // On class initialization - it's equivalent of "@PostConstruct" in Spring.
    ngOnInit() : void {
        this.getHeroes();
    };

    // Invoke HeroService as-and-when needed.
    getHeroes() : void {
        // HeroService method is invoked asynchronously, on success we will set the values of Heroes.
        this.heroService.getDelayedHeroes().then(heroes => {
            console.log(heroes);
            this.heroes = heroes;
        }).catch(error => {
            console.log(error);
        });
    }

    gotoDetail() : void {
        this.router.navigate(['/detail', this.selectedHero.id])
    }
}