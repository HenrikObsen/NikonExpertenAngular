import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'kat-box',
  templateUrl: './kat-box.component.html'
})
export class KatBoxComponent implements OnInit {
  @Input() katData: any;
  constructor() { }

  ngOnInit() {
  }

}
