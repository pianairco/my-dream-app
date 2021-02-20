import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {FormConfig} from '../form-maker/form-maker.component';

@Component({
  selector: 'app-mt-form-maker',
  templateUrl: './mt-form-maker.component.html',
  styleUrls: ['./mt-form-maker.component.css']
})
export class MtFormMakerComponent implements OnInit {
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
    const clone = JSON.parse(JSON.stringify(this.obj));
    for(let input of this.formConfig.inputs) {
      if (input.type === 'text-array') {
        if (clone[input.name]) {
          let x = clone[input.name].split("\n");
          clone[input.name] = x;
        } else {
          clone[input.name] = [];
        }
      }
    }
    this.submitClick.emit(clone);
  }
}
