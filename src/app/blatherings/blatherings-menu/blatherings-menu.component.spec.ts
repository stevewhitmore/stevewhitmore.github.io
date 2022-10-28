import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlatheringsMenuComponent } from './blatherings-menu.component';

describe('BlatheringsMenuComponent', () => {
  let component: BlatheringsMenuComponent;
  let fixture: ComponentFixture<BlatheringsMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlatheringsMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlatheringsMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
