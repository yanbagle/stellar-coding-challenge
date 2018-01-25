import {Component, Input, OnChanges, OnInit, SimpleChange} from '@angular/core';

@Component({
  selector: 'app-dropdown-menu',
  templateUrl: './dropdown-menu.component.html',
  styleUrls: ['./dropdown-menu.component.css']
})
export class DropdownMenuComponent implements OnInit, OnChanges {

  @Input() dropdownList: string[];
  @Input() name: string;
  @Input() defaultOpt: string;
  public currentSelection = '';
  public hasSelection = false;

  constructor() { }

  ngOnInit() {
  }

  public setCurrentSelection(selection) {
    this.currentSelection = selection;
    this.hasSelection = true;
  }

  public clearSelection () {
    this.currentSelection = this.defaultOpt;
    this.hasSelection = false;
  }

  public ngOnChanges (changes: {[propName: string]: SimpleChange}) {
    if (changes['defaultOpt']) {
      this.currentSelection = this.defaultOpt;
    }
  }
}
