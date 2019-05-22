import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { AuthGuardService } from './auth/auth-guard.service';

const routes: Routes = [
  { path: 'pages', canActivate: [AuthGuardService], loadChildren: 'app/pages/pages.module#PagesModule' },
  { path: 'auth', loadChildren: 'app/auth/auth.module#AuthModule' },
  { path: '', redirectTo: 'pages', pathMatch: 'full' },
  { path: '**', redirectTo: 'pages' },
];

const config: ExtraOptions = {
  useHash: true,
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
