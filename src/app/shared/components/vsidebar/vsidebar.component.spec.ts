import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VsidebarComponent } from './vsidebar.component';

describe('VsidebarComponent', () => {
  let component: VsidebarComponent;
  let fixture: ComponentFixture<VsidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VsidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VsidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
