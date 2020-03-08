import { Component, OnInit } from '@angular/core';
import { DashboardData } from '../model/dashboard-data';
import { DashboardService } from '../service/dashboard.service';

@Component({
  selector: 'app-boards',
  templateUrl: './boards.component.html',
  styleUrls: ['./boards.component.sass']
})
export class BoardsComponent implements OnInit {
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
  constructor(private dashboardService: DashboardService) { }

  ngOnInit(): void {
  }

}
