import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePageRoutingModule } from './home-page-routing.module';
import { HomePageComponent } from './home-page.component';

import { NyTimesService } from '../../services/nyTimes.service';

import { RouterModule } from '@angular/router';
import { MDBBootstrapModule } from 'angular-bootstrap-md'; 
import { NavbarModule, WavesModule, ButtonsModule } from 'angular-bootstrap-md';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { FormsModule } from '@angular/forms';
import { ArticleComponent } from '../article/article.component';
import { BookmarkPageComponent } from '../bookmark-page/bookmark-page.component';
import { ArticlesListComponent } from '../articles-list/articles-list.component';
import { MatCardModule } from '@angular/material/card';
import { ToastrModule, ToastrService } from 'ngx-toastr';

@NgModule({
  declarations: [
    HomePageComponent,
    ArticleComponent,
    BookmarkPageComponent,
    ArticlesListComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    NavbarModule,
    WavesModule,
    ButtonsModule,
    MDBBootstrapModule.forRoot(),
    ToastrModule.forRoot({positionClass: 'toast-bottom-right'}),
    MatSidenavModule,
    MatListModule,
    FormsModule,
    HomePageRoutingModule,
    MatCardModule
  ],
  providers: [
    NyTimesService,
    {provide: ToastrService, useClass: ToastrService}
  ],
  bootstrap: [HomePageComponent]
})
export class HomePageModule { }
