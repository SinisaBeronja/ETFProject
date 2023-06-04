import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditpoljeComponent } from './editpolje.component';

describe('EditpoljeComponent', () => {
  let component: EditpoljeComponent;
  let fixture: ComponentFixture<EditpoljeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditpoljeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditpoljeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
