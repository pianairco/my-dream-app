import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';

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
}

export class InputConfig {
  type: string;
  appearance: string = 'fill';
  title: string;
  name: string;
  default: any;
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

  constructor(title, value) {
    this.title = title;
    this.value = name;
  }
}
