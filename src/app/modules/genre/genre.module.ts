import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GenreRoutingModule } from './genre-routing.module';
import { MaterialModule } from '..';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    GenreRoutingModule,
    MaterialModule
  ]
})
export class GenreModule { }
