import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoljaComponent } from './polja.component';

describe('PoljaComponent', () => {
  let component: PoljaComponent;
  let fixture: ComponentFixture<PoljaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PoljaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PoljaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
