import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditfieldNamesComponent } from './editfield-names.component';

describe('EditfieldNamesComponent', () => {
  let component: EditfieldNamesComponent;
  let fixture: ComponentFixture<EditfieldNamesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditfieldNamesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditfieldNamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
