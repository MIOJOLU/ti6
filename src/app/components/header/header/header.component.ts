import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Route, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }

  routes: [{route: string, active: boolean, hideLogo: boolean}] = [
    {route: '/home', active: false, hideLogo: true}
  ]
  hideLogo: boolean = true;

  ngOnInit(): void {
    this.router.events.subscribe(e => {
      if (e instanceof NavigationEnd){
        console.log(this.router.url)
        const actualRoute = this.routes.find(r => r.route === this.router.url);
        console.log(actualRoute?.hideLogo)
        this.hideLogo = actualRoute? actualRoute.hideLogo : false;
      }
    })
  }

}
