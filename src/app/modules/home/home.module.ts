import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { LayoutComponent } from './pages/layout/layout.component';
import { MaterialModule } from '..';
import { HomePageComponent } from './pages/home-page/home-page.component';

import { GenrePageComponent } from './pages/genre-page/genre-page.component';
import { CountryComponent } from './pages/country/country.component';
@NgModule({
  declarations: [
    LayoutComponent,
    HomePageComponent,
    GenrePageComponent,
    CountryComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MaterialModule
  ]
})
export class HomeModule { }
