import { Component, OnInit } from '@angular/core';
import { DataService } from '../_services/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-omos',
  templateUrl: './omos.component.html',
  styleUrls: ['./omos.component.scss']
})
export class OmosComponent implements OnInit {

 
  public data;

  constructor(private _dataService: DataService) { 
   
  }

  ngOnInit() {

    this._dataService.getAll("omos")
    .subscribe(data => {
      this.data = data;
      console.log(data);
    })

  }

}
