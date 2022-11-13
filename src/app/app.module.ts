import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MarkdownModule } from 'ngx-markdown';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlatheringsComponent } from './blatherings/blatherings.component';
import { BlatheringsDataService } from './blatherings/blatherings-data.service';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { RouteReuseStrategy } from '@angular/router';
import { CustomReuseStrategy } from './custom-route-strategy';
import { PostComponent } from './blatherings/post/post.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    BlatheringsComponent,
    FooterComponent,
    HomeComponent,
    PostComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    MarkdownModule.forRoot(),
    ReactiveFormsModule,
  ],
  providers: [
    BlatheringsDataService,
    { provide: RouteReuseStrategy, useClass: CustomReuseStrategy },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
