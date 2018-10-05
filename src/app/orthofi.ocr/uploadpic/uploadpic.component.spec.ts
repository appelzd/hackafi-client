import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadPicComponent } from './uploadpic.component';

describe('UploadpicComponent', () => {
  let component: UploadPicComponent;
  let fixture: ComponentFixture<UploadPicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadPicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadPicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
