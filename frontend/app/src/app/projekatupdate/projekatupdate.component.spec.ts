import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjekatupdateComponent } from './projekatupdate.component';

describe('ProjekatupdateComponent', () => {
  let component: ProjekatupdateComponent;
  let fixture: ComponentFixture<ProjekatupdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjekatupdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjekatupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
