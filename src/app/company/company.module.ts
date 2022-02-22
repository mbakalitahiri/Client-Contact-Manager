import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompaniesComponent } from './companies/companies.component';
import { CompaniesRoutingModule } from './companies.routing';
import { CompanyPageComponent } from './company-page/company-page.component';



@NgModule({
  declarations: [CompaniesComponent, CompanyPageComponent],
  imports: [
    CommonModule,
    CompaniesRoutingModule
  ]
})
export class CompanyModule { }
