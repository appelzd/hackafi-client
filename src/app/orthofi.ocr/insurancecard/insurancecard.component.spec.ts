import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsurancecardComponent } from './insurancecard.component';

describe('InsurancecardComponent', () => {
  let component: InsurancecardComponent;
  let fixture: ComponentFixture<InsurancecardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsurancecardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsurancecardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
