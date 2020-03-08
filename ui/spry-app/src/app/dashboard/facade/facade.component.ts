import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { DashboardService } from '../service/dashboard.service';
import { NavigationEnd, Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-facade',
  templateUrl: './facade.component.html',
  styleUrls: ['./facade.component.sass']
})
export class FacadeComponent implements OnInit {
  activeComponent: string;
  constructor( private router: Router,
               private route: ActivatedRoute, private dashboardService: DashboardService) { }

  ngOnInit(): void {
    this.activeComponent = this.route.snapshot.children[0].url[0].path;
  }
  navigateTo(event: Event) {
    this.router.navigate(['../', event]);
  }
}
