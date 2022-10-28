import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

interface FileModel {
  name: string;
  title: string;
}

@Injectable({
  providedIn: 'root'
})
export class BlatheringsDataService {

  constructor(private httpClient: HttpClient) { }

  getPageTitles(): Observable<FileModel[]> {
    return this.httpClient.get('assets/blatherings/files.json') as Observable<FileModel[]>;
  }

  getPageContent(pageTitle: string): Observable<string> {
    console.log('pageTitle:', pageTitle)
    return this.httpClient.get(`assets/blatherings/${pageTitle}`, { responseType: 'text'} );
  }
}
