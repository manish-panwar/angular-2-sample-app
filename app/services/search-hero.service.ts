import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs";
import {Hero} from "../model/hero";

@Injectable()
export class SearchHeroService {

    constructor(private http : Http){}

    searchHeroes(term : string) : Observable<Hero[]> {
        return this.http.get('/app/heroes/?name={term}')
            .map((res : Response) => res.json().data as Hero[]);
    }
}