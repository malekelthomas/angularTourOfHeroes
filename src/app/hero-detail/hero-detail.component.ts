import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  constructor(
    private route: ActivatedRoute, //hold info about the route to this instance
    private heroService: HeroService,
    private location: Location //service for interacting w/ browser
    ) { }

  ngOnInit(): void {
    this.getHero();
  }

  @Input() hero: Hero;

  getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id'); //+ operator converts string to num
    this.heroService.getHero(id)
        .subscribe(hero => this.hero = hero);

  }

}
