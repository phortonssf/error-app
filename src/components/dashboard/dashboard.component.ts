import { Component, OnInit } from '@angular/core';

import { Hero } from '../../assets/classes/hero/hero';
import { HeroesComponent } from '../heroes/heroes.component';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';
import { HeroService } from '../../providers/hero.service';

@Component({
    selector: 'my-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: [ './dashboard.component.css']
})
export class DashboardComponent implements OnInit {
    
    heroes: Hero[] = [];
    
    constructor(private heroService: HeroService) {
        
    }
    
    ngOnInit(): void {
        this.heroService.getHeroes()
        .then(heroes => this.heroes = heroes.slice(1, 5));
    }
}