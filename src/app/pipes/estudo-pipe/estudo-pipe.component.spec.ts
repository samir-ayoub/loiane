import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstudoPipeComponent } from './estudo-pipe.component';

describe('EstudoPipeComponent', () => {
  let component: EstudoPipeComponent;
  let fixture: ComponentFixture<EstudoPipeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstudoPipeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstudoPipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
