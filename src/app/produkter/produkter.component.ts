import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { DataService } from '../_services/data.service';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Soeg } from '../_models/soeg';
import { HttpClient } from '@angular/common/http';
import { Produkt } from '../_models/Produkt';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-produkter',
  templateUrl: './produkter.component.html',
  styleUrls: ['./produkter.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProdukterComponent implements OnInit {

  public Kategorier;
  public ProductList;
  public Product;
  public SogeList;
  public showCategoriList = true;
  public showProductList = false;
  public showProduct = false;

  public notFound = "";
  public katName;

  constructor(private _dataService: DataService, private route: ActivatedRoute, private httpClient: HttpClient) {

  }

  ngOnInit() {

    this._dataService.getAll("Kategorier")
      .subscribe(data => this.Kategorier = data)

  }


  //Modtager id på en kategori hvis der klikkes på den
  public open(event, item) {
    this.Show("productlist");
    this._dataService.getKatPro(item)
      .subscribe(data => {
        this.ProductList = data.produkter;
        this.katName = data.navn;
      })
    //.subscribe(data => console.log(data))
  }

  //Modtager id fra produktet som klikkes på i produkt-liste-kort
  exShowProduct(id) {

    //------------------------- VIS PRODUKT-KORT --------------------------
    this._dataService.getAll("Produkt/" + id)
      .subscribe(data => {
        this.Product = data;
      })
      this.Show("product");
  }

  //Modtager data fra soge-box komponentets event emitter
  exMethodParent(e) {
    this.ProductList = e;

    if (e.length > 0) {
      this.Show("productlist");
    } else {
      this.notFound = "Der blev ikke fundet noget på din søgning!"
    }
  }

  //Bruges til at vise og skjule elementer på produktsiden når der navigeres mellem søgning, kategorier, produktliste og produkter.
  Show(show?: string) {

    this.showCategoriList = false;
    this.showProductList = false;
    this.showProduct = false;

    switch(show.toLowerCase()) { 
      case "categoris": { 
        this.showCategoriList = true;
         break; 
      } 
      case "productlist": { 
        this.showProductList = true; 
         break; 
      } 
      case "product": {
        this.showProduct = true;
         break;    
      }       
      default: { 
        this.showCategoriList = true; 
         break;              
      } 
   }
    
  }
  // this._dataService.getAll("produkt/" + kat + "/" + maxpris + "/" + sogeord)
  // //.subscribe(data => this.ProductList == data)
  // .subscribe(data => console.log(data))

  // this.ProductList = this._dataService.search("produkt/" + kat + "/" + maxpris + "/" + sogeord);

  // console.log(this.ProductList);



  // onSubmit(form: NgForm) {
  //console.log(this.sForm.value);  // { first: '', last: '' }
  //console.log(this.sForm);  // false
  //   console.log(form.value);  // { first: '', last: '' }
  //   console.log(form.valid);  // false
  // }
  // onSubmit() {
  //   let soeg = new Soeg(
  //     this.Kat,
  //     this.Sogeord,
  //     this.Maxpris,      
  //   );
  // console.log(soeg);

  // }


}
