import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KatBoxComponent } from './kat-box.component';

describe('KatBoxComponent', () => {
  let component: KatBoxComponent;
  let fixture: ComponentFixture<KatBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KatBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KatBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
