import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/_services/data.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'soge-box',
  templateUrl: './soge-box.component.html',
  styleUrls: ['./soge-box.component.scss']
})
export class SogeBoxComponent implements OnInit {
  @ViewChild("f") sForm: NgForm;
  @Output() exOutput = new EventEmitter<any>();
  //https://medium.com/mr-frontend-community/angular-7-share-component-data-with-other-components-1b91d6f0b93f

  public listKats;
  public notFound;
  constructor(private _dataService: DataService) {
  }

  ngOnInit() {
    this._dataService.getAll("Kategorier")
      .subscribe(data => this.listKats = data)
  }


  onSubmit() {
    
    var kat = this.sForm.value.kat;
    var maxpris = this.sForm.value.maxpris;
    var sogeord = this.sForm.value.sogeord;

    this._dataService.search("produkt/" + kat + "/" + maxpris + "/" + sogeord).subscribe((res: any[]) => {
      //console.log(res);
      //this.SogeList = res;
      this.exOutput.emit(res);     
    });

    
}
}