import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'produkt-liste-kort',
  templateUrl: './produkt-liste-kort.component.html',
  styleUrls: ['./produkt-liste-kort.component.scss']
})
export class ProduktListeKortComponent implements OnInit {
  @Input() pData: any;
  @Output() exOutput = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }

  showProduct(id){
    this.exOutput.emit(id); 
  }
}
