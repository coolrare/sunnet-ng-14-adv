import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { DashboardComponent } from './layout/dashboard/dashboard.component';
import { TablesComponent } from './layout/tables/tables.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      // {
      //   path: '', redirectTo: 'dashboard', pathMatch: 'full'
      // },
      {
        path: '',
        component: DashboardComponent
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'tables', redirectTo: 'tables/1', pathMatch: 'full'
      },
      {
        path: 'tables/:id',
        component: TablesComponent
      },
      {
        path: 'utilities',
        loadChildren: () => import('./utilities/utilities.module').then(m => m.UtilitiesModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true,
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
