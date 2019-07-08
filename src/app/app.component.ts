import { Component } from '@angular/core';
import { DataService } from './_services/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'NikonExpertenAngular';
  public menu;
  public footer;

  constructor(private _dataService: DataService, private route: ActivatedRoute){
    document.addEventListener("DOMContentLoaded", function() {
      const mainNav = document.getElementById('js-navbar-menu');
      const toggler = document.getElementById('js-navbar-toggle');
  
      toggler.addEventListener('click', function(){
          mainNav.classList.toggle('navbar__menu--active');
      }) 
   })
  }

  ngOnInit(): void {
    this._dataService.getAll("menu/getmenu")
    .subscribe(data => this.menu = data)

    this._dataService.getAll("indstillinger")
    .subscribe(data => this.footer = data)

  }
}
