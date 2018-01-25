import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownMenuComponent } from './dropdown-menu.component';
import {Component, NO_ERRORS_SCHEMA, ViewChild} from '@angular/core';

const dropdownList = ['1', '2', '3'];
const name = 'dropdown name';
const defaultOpt = 'default selection';

@Component({
  template: `<app-dropdown-menu
              [dropdownList]="dropdownList"
              [name]="name"
              [defaultOpt]="defaultOpt">
            </app-dropdown-menu>`
})

class DropDownHostComponent {
  @ViewChild (DropdownMenuComponent) dropdownMenuComponent: DropdownMenuComponent;
}

describe('DropdownMenuComponent', () => {
  let component: DropDownHostComponent;
  let fixture: ComponentFixture<DropDownHostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DropdownMenuComponent, DropDownHostComponent ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DropDownHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set current selection', () => {
    const selection = 'item';
    component.dropdownMenuComponent.setCurrentSelection(selection);
    expect(component.dropdownMenuComponent.currentSelection).toBe(selection);
    expect(component.dropdownMenuComponent.hasSelection).toBeTruthy();
  });

  it('should display clear button', () => {
    let clearButton = fixture.nativeElement.querySelector('#clear-button');
    expect(clearButton).toBeDefined();
    // clear button
    component.dropdownMenuComponent.clearSelection();
    clearButton = fixture.nativeElement.querySelector('#clear-button');
    expect(clearButton).toBeNull();
  });

});
