import {Component, Inject, OnInit} from '@angular/core';
import {RestService} from "../../service/rest.service";
import {DialogDataExampleDialog} from "../login/login.component";
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Router} from "@angular/router";

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css']
})
export class GroupComponent implements OnInit {
  wait = false;
  readyToSend = false;
  pageId = 'master';
  model: {
    text: string;
    senderNumber: string;
    inputType: any;
  } = {
    'text': '',
    'senderNumber': '',
    'inputType': 0
  };
  smsSenders = ['09128899098', '09128899093'];
  panelOpenState = false;
  constructor( private restService: RestService,
               private _snackBar: MatSnackBar,
               private router: Router,
               public dialog: MatDialog) {}

  ngOnInit(): void {
  }

  onSubmit(obj) {
  }
  ceil(value) {
    return Math.ceil(value)
  }

  nextStep() {
    if(!this.model.senderNumber) {
      this.dialog.open(DialogDataExampleDialog, {
        data: {
          title: 'خطا',
          message: 'لطفا شماره فرستنده را وارد نمایید.'
        }
      });
    } else if(!this.model.text) {
      this.dialog.open(DialogDataExampleDialog, {
        data: {
          title: 'خطا',
          message: 'لطفا متن را وارد نمایید.'
        }
      });
    } else {
      if (this.model.inputType == 'text-file') {
        this.pageId = 'text-file';
      } else if (this.model.inputType == 'direct') {
        this.pageId = 'direct';
      }
    }

    // const dialogRef = this.dialog.open(UploadFileDialogComponent, {
    //   width: '500px',
    //   data: {
    //     title: 'ورود شماره از طریق فایل',
    //   }
    // });
    // dialogRef.afterClosed().subscribe(result => {
    //   console.log('The dialog was closed => ', result);
    //   if(result.status === 0) {
    //     this.readyToSend = true;
    //   } else if(result.status === 1) {
    //     this.model.inputType = 0;
    //   }
    // });
  }


  onUploadClicked(file) {
    console.log(file)
  }

  onSelectedFilesChanged(file) {
    console.log(file)
    this.readyToSend = true;
  }

  backToMaster() {
    this.model.inputType = 'master';
    this.pageId = 'master';
  }

  send() {
    if(!this.model.senderNumber || !this.model.inputType) {
      this.dialog.open(DialogDataExampleDialog, {
        data: {
          title: 'خطا',
          message: 'لطفا شماره فرستنده را وارد نمایید.'
        }
      });
    } else if(!this.model.text || !this.model.inputType) {
      this.dialog.open(DialogDataExampleDialog, {
        data: {
          title: 'خطا',
          message: 'لطفا متن پیام را وارد نمایید.'
        }
      });
    } else {
      this.restService.sendGroupSms(this.model).then(res => {
        this._snackBar.open('پیامک با موفقیت ارسال گردید.', "پیغام", {duration: 5 * 1000});
      }, err => {
      });
    }
  }

  groupSend() {
    if(!this.model.senderNumber || !this.model.inputType) {
      this.dialog.open(DialogDataExampleDialog, {
        data: {
          title: 'خطا',
          message: 'لطفا شماره فرستنده را وارد نمایید.'
        }
      });
    } else if(!this.model.text || !this.model.inputType) {
      this.dialog.open(DialogDataExampleDialog, {
        data: {
          title: 'خطا',
          message: 'لطفا متن پیام را وارد نمایید.'
        }
      });
    } else {
      this.restService.sendGroupSms(this.model).then(res => {
        this._snackBar.open('پیامک با موفقیت ارسال گردید.', "پیغام", {duration: 5 * 1000});
      }, err => {
      });
    }
  }
}

@Component({
  selector: 'upload-file-dialog',
  templateUrl: 'upload-file-dialog.component.html',
})
export class UploadFileDialogComponent implements OnInit{

  constructor(
    private router: Router,
    public dialogRef: MatDialogRef<GroupDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: object) {
  }

  ngOnInit(): void {
    console.log(JSON.stringify(this.data))
  }

  onUploadClicked(file) {
    this.dialogRef.close({
        status: 0,
        file: file
      });
  }

  onSelectedFilesChanged(file) {
  }

  okClick () {
  }

  cancelClick(): void {
    this.dialogRef.close({
      status: 1,
      file: null
    });
  }
}

@Component({
  selector: 'group-dialog',
  templateUrl: 'group-dialog.component.html',
})
export class GroupDialogComponent implements OnInit{

  constructor(
    private router: Router,
    public dialogRef: MatDialogRef<GroupDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: object) {
  }

  ngOnInit(): void {
    console.log(JSON.stringify(this.data))
  }

  okClick () {
    console.log({status: 'ok', data: this.data})
    // this.router.navigate([this.data['yesRoute']])
    this.dialogRef.close({status: 'ok', data: this.data});
  }

  cancelClick(): void {
    if(this.data['noRoute']) {
      this.router.navigate([this.data['noRoute']])
    }
    this.dialogRef.close('cancel');
  }
}


