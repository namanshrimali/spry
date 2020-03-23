import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from '../boards/boards.component';
import { Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-product-create-dialog',
  templateUrl: './product-create-dialog.component.html'
})
export class ProductCreateDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<ProductCreateDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}
    productFormControl = new FormControl('', [
      Validators.required,
      Validators.pattern('[A-Za-z0-9 ]*'),
      Validators.minLength(5),
      Validators.maxLength(30)
    ]);
  onNoClick(): void {
    this.dialogRef.close();
  }
}
