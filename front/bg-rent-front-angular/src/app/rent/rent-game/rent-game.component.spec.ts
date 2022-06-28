/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RentGameComponent } from './rent-game.component';

describe('RentGameComponent', () => {
  let component: RentGameComponent;
  let fixture: ComponentFixture<RentGameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RentGameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RentGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
