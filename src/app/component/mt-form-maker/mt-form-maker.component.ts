import {Component, Input, OnInit, Output, EventEmitter, Inject} from '@angular/core';
import {FormConfig, RadioConfig} from '../form-maker/form-maker.component';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';
import {Router} from '@angular/router';
import * as moment from 'jalali-moment';

@Component({
  selector: 'app-mt-form-maker',
  templateUrl: './mt-form-maker.component.html',
  styleUrls: ['./mt-form-maker.component.css']
})
export class MtFormMakerComponent implements OnInit {
  @Input() formConfig: FormConfig;
  @Output() submitClick = new EventEmitter<object>();

  obj: object = {};

  constructor(public dialog: MatDialog) { }

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
    console.log("sss", JSON.stringify(this.obj));
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

  radioSelect(radioConfig: RadioConfig) {
    if(radioConfig.modal != null) {
      this.openDialog(radioConfig.modal);
    }
  }

  date = ''

  dateChange(event: any, dateInput: any,picker:any) {
    var faDate = dateInput.value;
    moment.locale('fa');
    var enDateMomentFormat  = moment(faDate).locale('en');
    var enDate = new Date(enDateMomentFormat.toLocaleString());
    picker._validSelected = enDate;
    picker.startAt = enDate;
  }

  openDialog(data): void {
    const dialogRef = this.dialog.open(FormMakerDialogComponent, {
      width: '250px',
      data: data
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed => ', result);
    });
  }
}

@Component({
  selector: 'form-maker-dialog',
  templateUrl: 'form-maker-dialog.component.html',
})
export class FormMakerDialogComponent {

  constructor(
    private router: Router,
    public dialogRef: MatDialogRef<FormMakerDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: object) {
  }

  okClick () {
    this.router.navigate([this.data['route']])
    this.dialogRef.close();
  }

  cancelClick(): void {
    this.dialogRef.close();
  }
}
