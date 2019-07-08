import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HtmlTagDefinition } from '@angular/compiler';
import { DataService } from '../_services/data.service';
import { ActivatedRoute } from '@angular/router';
//import './slider.js'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {

  public slides;
  public Kategorier;

  constructor(private _dataService: DataService, private route: ActivatedRoute) { 
   
  }

  ngOnInit() {

    this._dataService.getAll("Kategorier/hent/4")
    .subscribe(data => this.Kategorier = data)

    this._dataService.getAll("slider/getslites")
    .subscribe(data => this.slides = data)
  }

}
