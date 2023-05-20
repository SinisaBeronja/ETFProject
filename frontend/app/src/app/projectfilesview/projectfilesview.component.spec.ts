import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectfilesviewComponent } from './projectfilesview.component';

describe('ProjectfilesviewComponent', () => {
  let component: ProjectfilesviewComponent;
  let fixture: ComponentFixture<ProjectfilesviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectfilesviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectfilesviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
