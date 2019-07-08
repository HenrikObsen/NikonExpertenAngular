import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FlexBoxComponent } from './flex-box/flex-box.component';
import { GridComponent } from './grid/grid.component';
import { Grid2Component } from './grid/grid2.component';
import { Grid3Component } from './grid/grid3.component';
import { HttpClientModule } from '@angular/common/http';
import { KatBoxComponent } from './Home/kat-box/kat-box.component';
import { ProdukterComponent } from './produkter/produkter.component';
import { OmosComponent } from './omos/omos.component';
import { KontaktComponent } from './kontakt/kontakt.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FlexBoxComponent,
    GridComponent,
    Grid2Component,
    Grid3Component,
    KatBoxComponent,
    ProdukterComponent,
    OmosComponent,
    KontaktComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
