import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Observable, of, Subscription } from 'rxjs';
import { BlatheringsDataService } from './blatherings-data.service';

@Component({
  selector: 'sw-blatherings',
  templateUrl: './blatherings.component.html',
  styleUrls: ['./blatherings.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class BlatheringsComponent implements OnInit, OnDestroy {
  menuItems$: Observable<any> = this.blatheringsDataService.getPageTitles();
  postContent$: Observable<any> = of('f');
  routerSub: Subscription = new Subscription();
  opened = false;
  postName = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private blatheringsDataService: BlatheringsDataService,
  ) {}

  ngOnInit(): void {
    this.getPostContent();
    this.listenForRouteChange();
  }

  getPostContent() {
    this.postName = this.activatedRoute.snapshot.params['post-name'];
    this.postContent$ = this.blatheringsDataService.getPageContent(this.postName)
  }

  listenForRouteChange() {
    this.routerSub = this.router.events
      .subscribe({
        next: event => {
          if (event instanceof NavigationEnd) {
            this.getPostContent();
          }
        }
      });
  }

  ngOnDestroy(): void {
      this.routerSub.unsubscribe;
  }
}
