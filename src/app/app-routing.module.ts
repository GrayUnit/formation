import { NgModule } from '@angular/core';
import {
  Routes,
  RouterModule,
  PreloadAllModules,
} from '@angular/router';
import { PageLoginComponent } from './login/pages/page-login/page-login.component';

const routes: Routes = [
  { path: "login", component: PageLoginComponent },
  { path: "", redirectTo: "/login", pathMatch: "full"},
  {
    path: "clients",
    loadChildren: () => import('./clients/clients.module').then(module => module.ClientsModule),
  },
  {
    path: "orders",
    loadChildren: () => import('./orders/orders.module').then(module => module.OrdersModule),
  },
  {
    path: "**",
    loadChildren: () => import('./page-not-found/page-not-found.module').then(module => module.PageNotFoundModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    enableTracing: false,
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
