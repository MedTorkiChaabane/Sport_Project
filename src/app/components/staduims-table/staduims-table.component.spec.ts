import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaduimsTableComponent } from './staduims-table.component';

describe('StaduimsTableComponent', () => {
  let component: StaduimsTableComponent;
  let fixture: ComponentFixture<StaduimsTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaduimsTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaduimsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
