import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjekatzaizmenuComponent } from './projekatzaizmenu.component';

describe('ProjekatzaizmenuComponent', () => {
  let component: ProjekatzaizmenuComponent;
  let fixture: ComponentFixture<ProjekatzaizmenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjekatzaizmenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjekatzaizmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
