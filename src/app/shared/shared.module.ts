import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDividerModule} from '@angular/material/divider';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { MatMenuModule} from '@angular/material/menu';
import {MatListModule } from '@angular/material/list';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { from } from 'rxjs';
import { PieComponent } from './components/pie/pie.component';
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { IgxDoughnutChartModule} from "igniteui-angular-charts";
import {IgxRingSeriesModule} from "igniteui-angular-charts";
// import { AreaComponent } from './widgets/area/area.component';
// import { HighchartsChartModule } from 'highcharts-angular';
// import { CardComponent } from './widgets/card/card.component';
// import { PieComponent } from './widgets/pie/pie.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    PieComponent,
    // AreaComponent,
    // CardComponent,
    // PieComponent
  ],
  imports: [
    CommonModule,
    MatDividerModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    FlexLayoutModule,
    MatMenuModule,
    MatListModule,
    RouterModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
		IgxDoughnutChartModule,
		IgxRingSeriesModule
    // HighchartsChartModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    // AreaComponent,
    // CardComponent,
    PieComponent
  ]
})
export class SharedModule { }
