import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VheaderComponent } from './vheader.component';

describe('VheaderComponent', () => {
  let component: VheaderComponent;
  let fixture: ComponentFixture<VheaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VheaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
