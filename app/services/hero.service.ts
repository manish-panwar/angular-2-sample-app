import {Injectable} from "@angular/core";
import {Hero} from "../model/hero";
import {Http} from "@angular/http";
import "rxjs/add/operator/toPromise";
import {Observable} from "rxjs/Observable";

@Injectable()
export class HeroService {

    private heroesUrl = '/app/heroes';

    constructor(private http : Http) {}

    // This will return the data synchronously.
    getHeroes() : Promise<Hero[]> {
        return this.http.get(this.heroesUrl)
            .toPromise()
            .then(response => response.json().data as Hero[])
            .catch(this.handleError)
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

    searchHeroes(term : String) : Observable<Hero[]> {
        return null;
    }

    handleError(error : any) : Promise<any> {
        return Promise.reject(error);
    }
}