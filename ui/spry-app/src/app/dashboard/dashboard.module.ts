import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BoardsComponent} from './boards/boards.component';
import {HomeComponent} from './home/home.component';
import {FacadeComponent} from './facade/facade.component';
import { MaterialModule } from '../material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppRoutingModule } from '../app-routing.module';


@NgModule({
  declarations: [BoardsComponent, HomeComponent, FacadeComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    AppRoutingModule,
  ],
  exports: [
    FacadeComponent,
  ],
})
export class DashboardModule { }
