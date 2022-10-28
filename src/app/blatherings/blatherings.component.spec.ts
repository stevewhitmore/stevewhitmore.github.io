import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlatheringsComponent } from './blatherings.component';

describe('BlatheringsComponent', () => {
  let component: BlatheringsComponent;
  let fixture: ComponentFixture<BlatheringsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlatheringsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlatheringsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
