import { ViewportScroller } from '@angular/common';
import { Component, HostListener, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { Observable, of, Subscription } from 'rxjs';
import { BlatheringsDataService } from '../blatherings-data.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class PostComponent implements OnChanges, OnInit, OnDestroy {
  @Input() postContent: any;
  postContent$: Observable<any> = of();
  routerSub: Subscription = new Subscription();
  postName = '';

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
      console.log('foo')
      if (!scrollToTopBtnEl?.classList.contains('show')) {
        scrollToTopBtnEl?.classList.add('show');
      }
    } else {
      scrollToTopBtnEl?.classList.remove('show');
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
      const postChanges = changes['postContent'];

      if (postChanges && postChanges.currentValue) {
        this.postContent = postChanges.currentValue;
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
