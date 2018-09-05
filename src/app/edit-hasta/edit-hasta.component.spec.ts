/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EditHastaComponent } from './edit-hasta.component';

describe('EditHastaComponent', () => {
  let component: EditHastaComponent;
  let fixture: ComponentFixture<EditHastaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditHastaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditHastaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
