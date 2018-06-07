import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TelefonesUteisComponent } from './telefones-uteis.component';

describe('TelefonesUteisComponent', () => {
  let component: TelefonesUteisComponent;
  let fixture: ComponentFixture<TelefonesUteisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TelefonesUteisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TelefonesUteisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
