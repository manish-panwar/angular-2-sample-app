import {Component} from "@angular/core";
import {Hero} from "../model/hero";
import {SearchHeroService} from "../services/search-hero.service";

@Component({
    styleUrls : ['css/search-heroes.component.css'],
    templateUrl : 'forms/search-heroes.component.html'
})

export class SearchHeroesComponent {

    constructor(private searchHeroService : SearchHeroService){}

    heroes : Hero[]

    searchHeroes(term : string) : Hero[] {
        this.searchHeroService.searchHeroes(term);
        return null;
    }
}