import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, ReplaySubject, Subject, Observable } from 'rxjs';

import {ToastrService} from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class NyTimesService {
	articles: BehaviorSubject<any>;
	bookmarks: BehaviorSubject<any>;
	bookmarkedArticles:any = [];

	constructor(private http: HttpClient, private toastr: ToastrService){
		this.articles = new BehaviorSubject(undefined);
		this.bookmarks = new BehaviorSubject(undefined);
	}

	getTopStories(section?:any){
		if(!section){
			section = 'home'
		}
		this.http.get("https://api.nytimes.com/svc/topstories/v2/" + section + ".json?api-key=39ulD3n7oSLjEASzrVbgihXOXVj3ScvO").subscribe(resp => {
			this.articles.next(resp);
		},
	    error => {
	     this.toastr.error('An error has occured', '', {
	       timeOut: 3000,
	       positionClass: 'toast-bottom-right'
	     });
	    });
	}
}