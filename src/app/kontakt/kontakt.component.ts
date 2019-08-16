import { Component, OnInit, ViewChild } from '@angular/core';
import { Besked } from '../_models/Besked';
import { DataService } from '../_services/data.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-kontakt',
  templateUrl: './kontakt.component.html',
  styleUrls: ['./kontakt.component.scss']
})
export class KontaktComponent implements OnInit {
  @ViewChild("f") sForm: NgForm;
  constructor(private _dataService: DataService) { }
  d: any;
  navn:string;
  public kontaktInfo;

  ngOnInit() {
    this._dataService.getAll("kontakt/get")
    .subscribe(data => this.kontaktInfo = data)
  }

  onSubmit(){
    let navn = this.sForm.value.navn;
    let emne = this.sForm.value.emne;
    let email = this.sForm.value.email;
    let tekst = this.sForm.value.tekst;
    
    //let besked = new Besked(navn,emne,email,tekst); 
    let besked = {navn:navn,emne:emne,email:email,tekst:tekst};        
  
    this._dataService.postMail(besked).subscribe((res: any[]) => {
       //console.log(res);      
     });

  }

}
