import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortraitClassComponent } from './portrait-class.component';

describe('PortraitClassComponent', () => {
  let component: PortraitClassComponent;
  let fixture: ComponentFixture<PortraitClassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortraitClassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortraitClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
