import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Observable, of, Subscription } from 'rxjs';
import { BlatheringsDataService } from './blatherings-data.service';

@Component({
  selector: 'app-blatherings',
  templateUrl: './blatherings.component.html',
  styleUrls: ['./blatherings.component.scss']
})
export class BlatheringsComponent implements OnInit, OnDestroy {
  menuItems$: Observable<any> = this.blatheringsDataService.getPageTitles();
  postContent$: Observable<any> = of();
  routerSub: Subscription = new Subscription();

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
    const postName = this.activatedRoute.snapshot.params['post-name'];
    this.postContent$ = this.blatheringsDataService.getPageContent(postName)
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
