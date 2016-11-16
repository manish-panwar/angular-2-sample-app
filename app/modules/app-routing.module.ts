import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {HeroesComponent} from "../components/heroes.component";
import {DashboardComponent} from "../components/dashboard.component";
import {HeroDetailsComponent} from "../components/hero-details.component";
import {SearchHeroesComponent} from "../components/search-heroes.component";

@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path : '',
                redirectTo : '/dashboard',
                pathMatch: 'full'
            },
            {
                path : 'heroes',
                component : HeroesComponent
            },
            {
                path : 'search',
                component : SearchHeroesComponent
            },
            {
                path : 'dashboard',
                component : DashboardComponent
            },
            {
                path : 'detail/:id',
                component : HeroDetailsComponent
            }
        ])
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
