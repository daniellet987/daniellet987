import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NyTimesService } from '../../services/nyTimes.service';
import { NavbarModule, WavesModule, ButtonsModule } from 'angular-bootstrap-md';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-articles-list',
  templateUrl: './articles-list.component.html',
  styleUrls: ['./articles-list.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ArticlesListComponent implements OnInit {

  listOfArticles:any = [];
  Articles:any = [];
  bookmarkedList:any = [];
  savedBookmarksArray:any = [];
  savedBookmarksString:any = [];
  constructor(private NyTimesService:NyTimesService) { }

  ngOnInit(): void {
    let self = this;
    this.NyTimesService.bookmarks.subscribe(data => {
      this.bookmarkedList = (data)? data : [];
    });

    this.NyTimesService.articles.subscribe(data => {
      if(data){
        self.Articles = data.results;

        this.bookMarkArticles(self.Articles);
      }
    });
  }

  bookMarkArticles(articles:any){
    if(this.bookmarkedList && this.bookmarkedList.length > 0){
      articles.forEach((art:any) => {
        let found = this.bookmarkedList.find((BA:any) => art.title == BA.title);
        art['bookmarked']=(found)? true : false;
      });
      this.listOfArticles = articles;
    }else{
      this.listOfArticles = articles;
    }
    
    
  }
  bookmarkArticle(event:any){
    let alreadyExist = this.bookmarkedList.find((BA:any) => this.Articles[event].title == BA.title);
    if( alreadyExist){
      let indexOfBA = this.bookmarkedList.findIndex((element:any) => { element.title == this.Articles[event].title} );
      this.bookmarkedList.splice(indexOfBA, 1);
    }else{
      this.bookmarkedList.push(this.Articles[event]);
    }

  }

  ngOnDestroy(){
    this.NyTimesService.bookmarks.next(this.bookmarkedList);
    this.NyTimesService.articles.next(undefined);
  }

}
