import { Component, OnInit } from '@angular/core';
import { NyTimesService } from '../../services/nyTimes.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-bookmark-page',
  templateUrl: './bookmark-page.component.html',
  styleUrls: ['./bookmark-page.component.scss']
})
export class BookmarkPageComponent implements OnInit {

  constructor(private NyTimesService:NyTimesService, private router: Router) { }
  bookmarkedArticles:any =[];

  // code description:
  // as bookmarked articles are being store in bookmarks observable, I'm subscribing to get and display them.
  // plus for each article I'm getting the needed image for it in getimageSource and getimageCopyRight functions
  // and re-saving them when the page is destroyed to fill the bookmark icon in home page

  ngOnInit(): void {
    this.NyTimesService.bookmarks.subscribe(data => {
      this.bookmarkedArticles = (data)? data : undefined;
    });
  }

  getimageSource(article:any):any{
    let image = article.multimedia.find((elt:any) => elt.format == 'Normal');
    return image.url;

  }

  getimageCopyRight(article:any):any{
    let image = article.multimedia.find((elt:any) => elt.format == 'Normal');
    return image.copyright;
  }

  goBackToArticles(){
    this.router.navigate(['/homePage/articles']);
  }

  ngOnDestroy(){
    if(this.bookmarkedArticles){
      this.NyTimesService.bookmarks.next(this.bookmarkedArticles);
    }
  }

}
