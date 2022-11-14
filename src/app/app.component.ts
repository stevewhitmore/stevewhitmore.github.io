import { Component } from '@angular/core';
import { ChildrenOutletContexts } from '@angular/router';
import { routeTransitionAnimation } from './route-transition-animation';

@Component({
  selector: 'sw-root',
  templateUrl: './app.component.html',
  animations: [ routeTransitionAnimation ],
})
export class AppComponent {
  
  constructor(private contexts: ChildrenOutletContexts) {}

  getRouteAnimationData() {
    return this.contexts.getContext('primary')?.route?.snapshot?.data?.['animation'];
  }
}
