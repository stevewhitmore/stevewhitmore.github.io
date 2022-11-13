import { Component, ElementRef, HostListener, OnDestroy, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { BehaviorSubject, combineLatest, map, merge, Observable, of, startWith, Subscription, switchMap, tap } from 'rxjs';
import 'prismjs/components/prism-markup-templating';
import { BlatheringsDataService } from './blatherings-data.service';
import { ViewportScroller } from '@angular/common';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'sw-blatherings',
  templateUrl: './blatherings.component.html',
  styleUrls: ['./blatherings.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class BlatheringsComponent implements OnInit, OnDestroy {
  displayPosts$: Observable<any> = of();
  postContent$: Observable<any> = of();
  searchFieldSub: Subscription = new Subscription();
  postName = '';
  searchField = new FormControl('');

  constructor(
    private activatedRoute: ActivatedRoute,
    private blatheringsDataService: BlatheringsDataService,
  ) {}


  ngOnInit(): void {
    this.getPostContent();

    const menuItems$ = this.blatheringsDataService.getPageTitles();

    const searchFieldChanges$ = this.searchField.valueChanges
      .pipe(
        startWith(''),
      );

    this.displayPosts$ = combineLatest([menuItems$, searchFieldChanges$])
        .pipe(
          tap(console.log),
          map(([menuItems, searchFieldChanges]) => {
            if (searchFieldChanges) {
              return menuItems.filter((item: any) => {
                return item.title.toLowerCase().includes(searchFieldChanges.toLowerCase())
                  || item.date.includes(searchFieldChanges)
              });
            }
            return menuItems;
          }), 
          tap(console.log)
        )
        
  }

  getPostContent() {
    this.postName = this.activatedRoute.snapshot.params['post_name'];
    this.postContent$ = this.blatheringsDataService.getPageContent(this.postName)
  }

  ngOnDestroy(): void {
      if (this.searchFieldSub) {
        this.searchFieldSub.unsubscribe();
      }
  }
}
