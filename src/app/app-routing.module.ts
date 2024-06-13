import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { DashboardComponent } from './layout/dashboard/dashboard.component';
import { TablesComponent } from './layout/tables/tables.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { QuicklinkStrategy } from 'ngx-quicklink';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './login/login.component';
import { Login2Component } from './login2/login2.component';

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
        component: TablesComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'utilities',
        loadChildren: () => import('./utilities/utilities.module').then(m => m.UtilitiesModule)
      }
    ]
  },
  { path: 'login', component: LoginComponent,
    title: 'Login',
    data: {
      roles: ['admin', 'user']
    }
  },
  { path: 'login2', component: Login2Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true,
    preloadingStrategy: QuicklinkStrategy
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
