import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OblastComponent } from './oblast.component';

describe('OblastComponent', () => {
  let component: OblastComponent;
  let fixture: ComponentFixture<OblastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OblastComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OblastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
