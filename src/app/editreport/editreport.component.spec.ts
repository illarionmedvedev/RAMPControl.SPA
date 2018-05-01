/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EditreportComponent } from './editreport.component';

describe('EditreportComponent', () => {
  let component: EditreportComponent;
  let fixture: ComponentFixture<EditreportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditreportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
