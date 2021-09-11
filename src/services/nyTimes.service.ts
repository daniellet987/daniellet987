import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NyTimesService {
	constructor(private http: HttpClient){}

	getTopStories(){
		this.http.get("https://api.nytimes.com/svc/topstories/v2/home.json?api-key=39ulD3n7oSLjEASzrVbgihXOXVj3ScvO").subscribe(resp => {
			console.log(resp);
		});
	}
}