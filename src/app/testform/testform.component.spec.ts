/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TestformComponent } from './testform.component';

describe('TestformComponent', () => {
  let component: TestformComponent;
  let fixture: ComponentFixture<TestformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
