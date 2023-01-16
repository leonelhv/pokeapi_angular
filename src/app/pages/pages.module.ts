import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { DetailComponent } from './detail/detail.component';
import { ComponentsModule } from '../components/components.module';
import { RouterLink } from '@angular/router';

@NgModule({
  declarations: [HomeComponent, DetailComponent],
  imports: [CommonModule, ComponentsModule, RouterLink],
  exports: [HomeComponent, DetailComponent],
})
export class PagesModule {}
