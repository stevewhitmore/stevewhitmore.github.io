import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlatheringsPostComponent } from './blatherings-post.component';

describe('BlatheringsPostComponent', () => {
  let component: BlatheringsPostComponent;
  let fixture: ComponentFixture<BlatheringsPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlatheringsPostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlatheringsPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
