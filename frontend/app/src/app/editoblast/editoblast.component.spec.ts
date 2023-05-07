import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditoblastComponent } from './editoblast.component';

describe('EditoblastComponent', () => {
  let component: EditoblastComponent;
  let fixture: ComponentFixture<EditoblastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditoblastComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditoblastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
