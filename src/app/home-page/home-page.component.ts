import { Component, OnInit } from '@angular/core';
import { NyTimesService } from '../../services/nyTimes.service';
import { NavbarModule, WavesModule, ButtonsModule } from 'angular-bootstrap-md';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor(private NyTimesService:NyTimesService) { }

  ngOnInit(): void {
    this.NyTimesService.getTopStories();
  }

}
