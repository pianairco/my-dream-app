import {Component, Inject, OnInit} from '@angular/core';
import {
  ButtonConfig,
  FormConfig,
  InputConfig,
  OptionConfig,
  RadioConfig
} from '../../component/form-maker/form-maker.component';
import {Router} from '@angular/router';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';
import {FormMakerDialogComponent} from '../../component/mt-form-maker/mt-form-maker.component';

@Component({
  selector: 'app-group-sender',
  templateUrl: './group-sender.component.html',
  styleUrls: ['./group-sender.component.css']
})
export class GroupSenderComponent implements OnInit {
  obj: object = {};

  formConfig : FormConfig = {
    title: 'پنل ارسال گروهی',
    // new InputConfig('text', 'شماره فرستنده', 'sender', null, null, null),
    inputs: [
      new InputConfig('text', 'عنوان ارسال', 'title', null, 'outline', null,null),
      new InputConfig('select', 'شماره فرستنده', 'sender', null,null, [
        new OptionConfig("09128899098", "09128899098", false),
        new OptionConfig("09128899093", "09128899093", false)
      ], null),
      new InputConfig('text-array', 'شماره گیرندگان', 'deliveries', null,null,null, null),
      new InputConfig('textarea', 'متن پیامک', 'bodyMessage', null,null, null,null),
      // new InputConfig('date', 'تاریخ', 'date', null, 'outline', null,null),
      new InputConfig('radio', 'نحوه وارد کردن مخاطبین', 'sendType', null,null, null,[
        new RadioConfig("وارد کردن مستقیم شماره ها", "1", null),
        new RadioConfig("دفتر تلفن", "2", null),
        new RadioConfig("فایل متن", "3", null)
      ]),
    ],
    buttons: [
      new ButtonConfig('ارسال', 'modal', [{
        show: {name: 'sendType', equal: "1"},
        title: 'تایید ارسال تست',
        description: 'ارسال تست را انجام نداده اید. آیا میخواهید به مرحله بعد بروید؟',
        yesRoute: '/home/send-direct',
        noRoute: null,
      }, {
        show: {name: 'sendType', equal: "2"},
        title: 'تایید ارسال تست',
        description: 'ارسال تست را انجام نداده اید. آیا میخواهید به مرحله بعد بروید؟',
        yesRoute: '/home/send-contact',
        noRoute: null,
      }, {
        show: {name: 'sendType', equal: "3"},
        title: 'تایید ارسال تست',
        description: 'ارسال تست را انجام نداده اید. آیا میخواهید به مرحله بعد بروید؟',
        yesRoute: '/home/send-file',
        noRoute: null,
      }]),
      // new ButtonConfig('انصراف', 'clear', null),
    ]
  }

// {title: 'تایید ارسال تست', description: 'ارسال تست را انجام نداده اید. آیا میخواهید به مرحله بعد بروید؟', route: '/home/sms-sender'}
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    console.log(JSON.stringify(this.formConfig))
  }

  onSubmit(obj) {
    console.log(JSON.stringify(this.formConfig))
    console.log(JSON.stringify(obj));
  }

  radioSelect(radioConfig: RadioConfig) {
    if(radioConfig.modal != null) {
      this.openDialog(radioConfig.modal);
    }
  }

  btnClick(btn) {
    console.log(btn, this.obj)
    if(btn.type === 'clear') {

    } else if(btn.type === 'modal') {
      for(let modal of btn.modals) {
        if(this.obj[modal.show.name] === modal.show.equal) {
          this.openDialog(modal);
          break;
        }
      }
    }
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
  templateUrl: 'group-sender-dialog.component.html',
})
export class GroupSenderDialogComponent {

  constructor(
    private router: Router,
    public dialogRef: MatDialogRef<GroupSenderDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: object) {
  }

  okClick () {
    this.router.navigate([this.data['yesRoute']])
    this.dialogRef.close();
  }

  cancelClick(): void {
    if(this.data['noRoute']) {
      this.router.navigate([this.data['noRoute']])
    }
    this.dialogRef.close();
  }
}
