import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { SpinnerComponent } from 'src/spinner/spinner.component';


@NgModule({
  declarations: [
    HomeComponent,
    SpinnerComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class HomeModule { }
