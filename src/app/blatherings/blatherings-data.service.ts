import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable, Subject } from 'rxjs';

interface FileModel {
  name: string;
  title: string;
}

@Injectable({
  providedIn: 'root'
})
export class BlatheringsDataService {
  pageContentSource = new Subject();
  pageContent$ = this.pageContentSource.asObservable();

  constructor(private httpClient: HttpClient) { }

  updatePageContent(pageContent: any) {
    this.pageContentSource.next(pageContent);
  }

  getPageTitles(): Observable<FileModel[]> {
    return this.httpClient.get('assets/blatherings/files.json') as Observable<FileModel[]>;
  }

  getPageContent(pageTitle: string): Observable<string> {
    const path = pageTitle ? `assets/blatherings/${pageTitle}` : 'assets/blatherings/index.md';
    return this.httpClient.get(path, { responseType: 'text'} );
  }
}
