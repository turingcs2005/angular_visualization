import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColorScaleBarComponent } from './color-scale-bar/color-scale-bar.component';
import { NgColorScaleModule } from 'ng-color-scale';


@NgModule({
  declarations: [
    ColorScaleBarComponent
  ],
  imports: [
    CommonModule,
    NgColorScaleModule
  ]
})
export class VisualizationsModule { }
