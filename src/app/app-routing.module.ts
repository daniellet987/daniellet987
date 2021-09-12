import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { HomePageModule } from './home-page/home-page.module';

const routes: Routes = [
  {path: '', redirectTo:"homePage", pathMatch: 'full' },
  {path: 'homePage', loadChildren: () => import('./home-page/home-page.module').then(m => m.HomePageModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
