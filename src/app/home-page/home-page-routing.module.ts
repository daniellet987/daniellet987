import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ArticlesListComponent } from '../articles-list/articles-list.component';
import { HomePageComponent } from './home-page.component';
import { BookmarkPageComponent } from '../bookmark-page/bookmark-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent,  children: 
  [
    {path: '', pathMatch: 'full', redirectTo: 'articles'},
    {path: 'articles',component: ArticlesListComponent},
    {path: 'bookmarked', component: BookmarkPageComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule { }
