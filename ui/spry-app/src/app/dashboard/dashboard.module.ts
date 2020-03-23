import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatDialogModule} from '@angular/material/dialog';
import {BoardsComponent} from './boards/boards.component';
import {HomeComponent} from './home/home.component';
import {FacadeComponent} from './facade/facade.component';
import { MaterialModule } from '../material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductCreateDialogComponent } from './product-create-dialog/product-create-dialog.component';


@NgModule({
  declarations: [BoardsComponent, HomeComponent, FacadeComponent, ProductCreateDialogComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    FacadeComponent
  ],
})
export class DashboardModule { }
