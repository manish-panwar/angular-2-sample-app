import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HeroesComponent} from "../components/heroes.component";
import {DashboardComponent} from "../components/dashboard.component";
import {HeroDetailsComponent} from "../components/hero-details.component";

@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path : 'heroes',
                component : HeroesComponent
            },
            {
                path : 'dashboard',
                component : DashboardComponent
            },
            {
                path : '',
                redirectTo : '/dashboard',
                pathMatch: 'full'
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
