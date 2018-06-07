import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstudoDiretivaComponent } from './estudo-diretiva.component';

describe('EstudoDiretivaComponent', () => {
  let component: EstudoDiretivaComponent;
  let fixture: ComponentFixture<EstudoDiretivaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstudoDiretivaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstudoDiretivaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
