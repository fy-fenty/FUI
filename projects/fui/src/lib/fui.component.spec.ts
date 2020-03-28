import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FUIComponent } from './fui.component';

describe('FUIComponent', () => {
  let component: FUIComponent;
  let fixture: ComponentFixture<FUIComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FUIComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FUIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
