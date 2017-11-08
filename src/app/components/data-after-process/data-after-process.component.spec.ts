import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataAfterProcessComponent } from './data-after-process.component';

describe('DataAfterProcessComponent', () => {
  let component: DataAfterProcessComponent;
  let fixture: ComponentFixture<DataAfterProcessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataAfterProcessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataAfterProcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
