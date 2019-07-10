import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'produkt-kort',
  templateUrl: './produkt-kort.component.html',
  styleUrls: ['./produkt-kort.component.scss']
})
export class ProduktKortComponent implements OnInit {
  @Input() pData: any;
  @Output() exOutput = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  showKatList(show){
    this.exOutput.emit(show);
  }

}
