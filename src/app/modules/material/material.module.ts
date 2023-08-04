import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input'
import { MatButtonModule } from '@angular/material/button'; 
import { MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
@NgModule({
  declarations: [],
  exports: [
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatTabsModule
  ]
})
export class MaterialModule { }