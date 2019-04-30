import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );
  
  // list of options on menu
  options: any[] = [
    {
      icon: 'stars',
      text: 'Startups',
      route: '/'
    },
    {
      icon: 'timeline',
      text: 'Resultados',
      route: '/results'
    },
    // {
    //   icon: 'location_on',
    //   text: 'Localização',
    //   route: '/map'
    // },
   ]

  constructor(private breakpointObserver: BreakpointObserver) {}
}
