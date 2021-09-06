import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { SwiperModule } from 'swiper/angular';

import { HomeComponent } from './home/home.component';
import { CategoriesComponent } from './home/categories/categories.component';
import { MainSliderComponent } from './home/main-slider/main-slider.component';

@NgModule({
  declarations: [
    HomeComponent,
    CategoriesComponent,
    MainSliderComponent
  ],
  imports: [
    HttpClientModule,
    CommonModule,
    RouterModule,
    SwiperModule
  ],
  exports: [
  ]
})
export class PagesModule { }
