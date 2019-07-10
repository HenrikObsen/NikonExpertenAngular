import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'kat-img-box',
  templateUrl: './kat-img-box.component.html'
})
export class KatImgBoxComponent implements OnInit {
  @Input() katData: any;
  constructor() { }

  ngOnInit() {
  }

}
