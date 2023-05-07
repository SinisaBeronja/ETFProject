import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditinstitutionComponent } from './editinstitution.component';

describe('EditinstitutionComponent', () => {
  let component: EditinstitutionComponent;
  let fixture: ComponentFixture<EditinstitutionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditinstitutionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditinstitutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
