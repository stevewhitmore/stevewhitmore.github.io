import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BlatheringsComponent } from './blatherings/blatherings.component';
import { PostComponent } from './blatherings/post/post.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: { animation: 'HomePage' }
  },
  {
    path: 'blatherings',
    component: BlatheringsComponent,
    data: { animation: 'Blatherings' }
  },
  {
    path: 'blatherings/:post_name',
    component: PostComponent,
    data: { animation: 'Post' }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
