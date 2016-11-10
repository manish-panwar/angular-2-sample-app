import {Injectable} from '@angular/core';
import {Hero} from '../model/hero';
import {HEROES} from '../mock/mock-heroes';
import { Http } from '@angular/http';

@Injectable()
export class HeroService {

    private heroesUrl = '/seg/diagnosticinfo';

    constructor(private http : Http) {}

    // This will return the data synchronously.
    getHeroes() : Promise<Hero[]> {


        return Promise.resolve(HEROES);
    };

    // This will return the data asynchronously.
    getDelayedHeroes() : Promise<Hero[]> {
        return new Promise(resolve => {
            setTimeout(resolve, 1000)
        }).then(() => this.getHeroes());
    };

    getHero(heroId : Number) : Promise<Hero> {
        return this.getHeroes().then(
            heroes => heroes.find(
                hero => hero.id === heroId
            )
        );

    }
}