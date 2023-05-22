import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditStaduimComponent } from './edit-staduim.component';

describe('EditStaduimComponent', () => {
  let component: EditStaduimComponent;
  let fixture: ComponentFixture<EditStaduimComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditStaduimComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditStaduimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
