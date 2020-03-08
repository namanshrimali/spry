import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FacadeComponent } from './dashboard/facade/facade.component';
import { BoardsComponent } from './dashboard/boards/boards.component';
import { HomeComponent } from './dashboard/home/home.component';


const routes: Routes = [
  {
    path: '',
    component: FacadeComponent,
    children: [
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
      },
      {
        path: 'products',
        component: BoardsComponent
      },
      {
        path: 'home',
        component: HomeComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
