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
