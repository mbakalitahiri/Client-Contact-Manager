import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientRoutingModule } from './client.routing';
import { ClientPageComponent } from './client-page/client-page.component';
import { ClientFormComponent } from './client-form/client-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { CustomMaterialModule } from '../custom-material/custom-material.module';

@NgModule({
  declarations: [ClientPageComponent, ClientFormComponent],
  imports: [
    CommonModule,
    ClientRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    CustomMaterialModule,
  ],
  providers:[],
  exports: [ClientPageComponent, ClientFormComponent],
})
export class ClientModule {}
