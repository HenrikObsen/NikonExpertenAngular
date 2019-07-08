import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'kat-box',
  templateUrl: './kat-box.component.html',
  styleUrls: ['./kat-box.component.scss']
})
export class KatBoxComponent implements OnInit {
  @Input() katData: any;
  constructor() { }

  ngOnInit() {
  }

}
