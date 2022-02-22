import { CanActivateViaAuthGuard } from './../guards/can-activate-via-auth.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientPageComponent } from './client-page/client-page.component';

const routes: Routes = [
  {
    path: '',
    component: ClientPageComponent,
    canActivate: [CanActivateViaAuthGuard],
  },
  {
    path: ':id',
    component: ClientPageComponent,
    canActivate: [CanActivateViaAuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientRoutingModule {}
