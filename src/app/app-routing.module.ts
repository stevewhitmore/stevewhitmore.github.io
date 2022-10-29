import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BlatheringsComponent } from './blatherings/blatherings.component';

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
