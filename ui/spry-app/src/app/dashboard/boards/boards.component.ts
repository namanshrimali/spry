import { Component, OnInit, Inject } from '@angular/core';
import { DashboardData } from '../model/dashboard-data';
import { DashboardService } from '../service/dashboard.service';
import {MatDialog} from '@angular/material/dialog';
import { ProductCreateDialogComponent } from '../product-create-dialog/product-create-dialog.component';

export interface DialogData {
  name: string;
}
@Component({
  selector: 'app-boards',
  templateUrl: './boards.component.html',
  styleUrls: ['./boards.component.sass']
})
export class BoardsComponent implements OnInit {
  product;
  userAssociatedProducts: DashboardData = {
    all: [
      {id: '2', name: 'Spry Agile Product',
      previewPicture: 'C:/Users/naman/Documents/Spry/ui/spry-app/src/assets/images/product-card.jpg',
      isStarred: false},
      {id: '3', name: 'IBM Agile Product',
      previewPicture: 'C:/Users/naman/Documents/Spry/ui/spry-app/src/assets/images/product-card.jpg',
      isStarred: false}
  ],
  starred: [
    {id: '1', name: 'Product Management System',
    previewPicture: 'C:/Users/naman/Documents/Spry/ui/spry-app/src/assets/images/product-card.jpg',
    isStarred: true},
  ]
};
  constructor(private dashboardService: DashboardService, public dialog: MatDialog) { }
  ngOnInit(): void {
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(ProductCreateDialogComponent, {
      width: '270px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.product = result;
      console.log(this.product);
    });
  }
}
