import {Component, Input, OnInit, Output, EventEmitter, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-form-maker',
  templateUrl: './form-maker.component.html',
  styleUrls: ['./form-maker.component.css']
})
export class FormMakerComponent implements OnInit {
  @Input() formConfig: FormConfig;
  @Output() submitClick = new EventEmitter<object>();

  obj: object = {};

  constructor() { }

  ngOnInit(): void {
    for(let input of this.formConfig.inputs) {
      if (input.hasOwnProperty('default') && input['default']) {
        this.obj[input.name] = input.default;
      } else if(input.type === 'text') {
        this.obj[input.name] = '';
      } else if(input.type === 'textarea') {
        this.obj[input.name] = '';
      } else if(input.type === 'select') {
        this.obj[input.name] = undefined;
      } else if(input.type === 'radio') {
        this.obj[input.name] = undefined;
      } else if(input.type === 'check') {
        this.obj[input.name] = false;
      }

    }
  }

  submit() {
    this.submitClick.emit(this.obj);
  }
}

export class FormConfig {
  title: string;
  inputs: InputConfig[];
  buttons: ButtonConfig[];
}

export class InputConfig {
  type: string;
  appearance: string = 'fill';
  title: string;
  name: string;
  default: any;
  hasHint: boolean = false;
  options: OptionConfig[];
  radios: RadioConfig[];

  constructor(type, title, name, defaultValue, appearance, options, radios) {
    this.type = type;
    this.title = title;
    this.name = name;
    this.default = defaultValue;
    this.appearance = appearance;
    this.options = options;
    this.radios = radios;
  }

  setHasHint(hasHint): InputConfig {
    this.hasHint = hasHint;
    return this;
  }
}

export class OptionConfig {
  title: string;
  value: any;
  isSelected: boolean;

  constructor(title, value, isSelected) {
    this.title = title;
    this.value = name;
    this.isSelected = isSelected;
  }
}

export class RadioConfig {
  title: string
  value: any;
  modal: {
    title: string,
    description: string,
    route: string
  };
  disabled: boolean;
  activate: boolean;

  constructor(title, value, modal, disabled, activate) {
    this.title = title;
    this.value = value;
    this.modal = modal;
    this.disabled = disabled;
    this.activate = activate;
  }
}

export class ButtonConfig {
  title: string
  type: string;
  modals: ButtonModalConfig[];
  route: string;

  constructor(title, type, modals) {
    this.title = title;
    this.type = type;
    this.modals = modals;
  }
}

export class ButtonModalConfig {
  show: {name: string, equal: any};
  title: string;
  description: string;
  yesRoute: string;
  noRoute: string;
}
