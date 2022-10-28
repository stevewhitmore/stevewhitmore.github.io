import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlatheringsPostComponent } from './blatherings/blatherings-post/blatherings-post.component';
import { BlatheringsComponent } from './blatherings/blatherings.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'blatherings', component: BlatheringsComponent },
  { path: 'blatherings/:post-name', component: BlatheringsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
