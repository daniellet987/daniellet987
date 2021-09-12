import { Component, OnInit, Input , Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  @Input() image?:any = [];
  @Input() title?:any;
  @Input() publicationDate?:any;
  @Input() index?:any;
  @Input() articleAbstract?:any;
  @Input() articleUrl?:any;
  @Input() bookmarked?:boolean = false;

  @Output() bookmarkClicked:EventEmitter<any> = new EventEmitter();

  showDetailsClicked:boolean = false;
  imageDisplayed:any;
  
  constructor() { }

  // code description: 
  // this is the article component in which I used inputs and outputs to display and interact with it in his parent component (articles list)
  // and added the article details in it in a hidden mode that is shown when the article is clicked

  ngOnInit(): void {
    this.imageDisplayed =(this.image)? this.image.find((elt:any) => elt.format == 'Standard Thumbnail') : null;
  }

  toggleBookmark(){
    this.bookmarked = !this.bookmarked;
    this.bookmarkClicked.emit(this.index);
  }

  showDetails(){
    this.showDetailsClicked = !this.showDetailsClicked;
  }

}
