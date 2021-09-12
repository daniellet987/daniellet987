import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NyTimesService } from '../../services/nyTimes.service';
import { NavbarModule, WavesModule, ButtonsModule } from 'angular-bootstrap-md';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomePageComponent implements OnInit {
  sectionsList:any = [
    'arts',
    'automobiles', 
    'books', 
    'business', 
    'fashion', 
    'food', 
    'health', 
    'home', 
    'insider', 
    'magazine', 
    'movies', 
    'nyregion', 
    'obituaries', 
    'opinion', 
    'politics', 
    'realestate', 
    'science', 
    'sports', 
    'sundayreview', 
    'technology', 
    'theater', 
    't-magazine', 
    'travel', 
    'upshot', 
    'us', 
    'world'
  ];
  selectedItem:any;
  selectedTitle:any = 'Home';
  route:any;

  constructor(private NyTimesService:NyTimesService, private router: Router, private location: Location) { }
  // code descrition:
  // when initializing the home page all top stories are being fetched and header title is changed according to which route we're in it in headerTitleValue function and I'm using the Router to get the location of the user
  // and everytime the user chooses an item from the right menu all related articles are shown, the api call is executed in selectItem function
  
  ngOnInit(): void {
    this.NyTimesService.getTopStories();
    this.route = this.location.path();
    this.headerTitleValue();

    this.router.events.subscribe((val) => {
      this.route = this.location.path();
      this.headerTitleValue();

    });
  }

  goToArticles(){
    if(this.route != '/homePage/articles'){
      this.router.navigate(['/homePage/articles']);

      this.NyTimesService.getTopStories(this.selectedItem);
    }
  }

  headerTitleValue(){
    if(this.route == "/homePage/bookmarked"){
      this.selectedTitle = 'Bookmarked Articles';
    }else if(this.route == '/homePage/articles'){
      this.selectedTitle = (this.selectedItem)? this.selectedItem : 'Home';
    }
  }

  selectItem(item:any){
    if(this.route != '/homePage/articles'){
      this.router.navigate(['/homePage/articles']);
    }
    
    this.selectedTitle = item[0];
    this.NyTimesService.getTopStories(this.selectedTitle);
  }

}
