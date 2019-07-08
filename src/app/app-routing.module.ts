import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FlexBoxComponent } from './flex-box/flex-box.component';
import { GridComponent } from './grid/grid.component';
import { Grid2Component } from './grid/grid2.component';
import { Grid3Component } from './grid/grid3.component';
import { OmosComponent } from './omos/omos.component';
import { ProdukterComponent } from './produkter/produkter.component';
import { KontaktComponent } from './kontakt/kontakt.component';

const routes: Routes = [  
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent},
  { path: 'omos', component: OmosComponent},
  { path: 'produkter', component: ProdukterComponent},
  { path: 'kontakt', component: KontaktComponent},
  { path: 'flexbox', component: FlexBoxComponent},
  { path: 'grid', component: GridComponent},
  { path: 'grid2', component: Grid2Component},
  { path: 'grid3', component: Grid3Component}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
