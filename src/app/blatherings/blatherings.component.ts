import { Component, ElementRef, HostListener, OnDestroy, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Observable, of, Subscription } from 'rxjs';
import 'prismjs/components/prism-markup-templating';
import { BlatheringsDataService } from './blatherings-data.service';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'sw-blatherings',
  templateUrl: './blatherings.component.html',
  styleUrls: ['./blatherings.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class BlatheringsComponent implements OnInit, OnDestroy {
  menuItems$: Observable<any> = this.blatheringsDataService.getPageTitles();
  postContent$: Observable<any> = of();
  routerSub: Subscription = new Subscription();
  postName = '';
  // @ViewChild('h1') h1: ElementRef | undefined;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private blatheringsDataService: BlatheringsDataService,
    private viewportScroller: ViewportScroller
  ) {}

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(): void {
    const pageDownPosition = this.viewportScroller.getScrollPosition()[1];
    const scrollToTopBtnEl = document.querySelector('.back-to-top');
    
    if (pageDownPosition > 1500) {

      if (!scrollToTopBtnEl?.classList.contains('show')) {
        scrollToTopBtnEl?.classList.add('show');
      }
    } else {
      scrollToTopBtnEl?.classList.remove('show');
    }
  }

  ngOnInit(): void {
    this.getPostContent();
    this.listenForRouteChange();
  }

  getPostContent() {
    this.postName = this.activatedRoute.snapshot.params['post_name'];
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

  scrollToTop() {
    // this.viewportScroller.scrollToPosition([0, 0]);
    const h1El = document.querySelector('h1');
      if (h1El) {
        h1El.scrollIntoView({behavior: 'smooth'}); 
      }
  }


  ngOnDestroy(): void {
    this.routerSub.unsubscribe;
  }
}
