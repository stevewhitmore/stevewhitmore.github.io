import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { MarkdownModule } from 'ngx-markdown';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlatheringsComponent } from './blatherings/blatherings.component';
import { HomeComponent } from './home/home.component';
import { BlatheringsDataService } from './blatherings/blatherings-data.service';

@NgModule({
  declarations: [
    AppComponent,
    BlatheringsComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MarkdownModule.forRoot(),
  ],
  providers: [
    BlatheringsDataService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
