import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BlatheringsDataService } from './blatherings-data.service';

@Component({
  selector: 'app-blatherings',
  templateUrl: './blatherings.component.html',
  styleUrls: ['./blatherings.component.scss']
})
export class BlatheringsComponent implements OnInit {
  fileNames$: Observable<any> = new Observable();
  pageData$: Observable<any> = new Observable();

  constructor(private blatheringsDataService: BlatheringsDataService) { }

  ngOnInit(): void {
    this.fileNames$ = this.blatheringsDataService.getPageTitles();
  }
}
