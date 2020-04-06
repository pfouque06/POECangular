import { Component, OnInit, Inject, Input } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

// interface DialogData {
//   email: string;
// }

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  //myEmail: String;

  constructor(public dialogRef: MatDialogRef<ModalComponent>,
    //@Inject(MAT_DIALOG_DATA) public data: DialogData) {
    @Inject(MAT_DIALOG_DATA) public data: any) {
      //this.myEmail = data.email;
    }

  ngOnInit(): void {
  }

  onSubmitClick(): void {
    // this.myEmail = this.data.email;
    // console.log(this.myEmail);
    console.log(this.data.email);

    //this.dialogRef.close({event:'close',email: this.data.email});
    // this.dialogRef.close(this.myEmail);
    this.dialogRef.close(this.data.email);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
