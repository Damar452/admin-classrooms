import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { GeneralTableComponent } from './general-table/general-table.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { PipesModule } from '../pipes/pipes.module';
import { AnalyticsCardComponent } from './analytics-card/analytics-card.component';
import { FooterComponent } from './footer/footer.component';
import { SubtitleBoxComponent } from './subtitle-box/subtitle-box.component';

@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    GeneralTableComponent,
    AnalyticsCardComponent,
    FooterComponent,
    SubtitleBoxComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    PipesModule,
    ReactiveFormsModule
  ],
  exports: [
    HeaderComponent,
    SidebarComponent,
    GeneralTableComponent,
    AnalyticsCardComponent,
    FooterComponent,
    SubtitleBoxComponent,
  ]
})
export class ComponentsModule { }
