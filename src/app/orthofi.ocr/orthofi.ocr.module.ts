import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InsurancecardComponent } from './insurancecard/insurancecard.component';
import {HttpClientModule} from "@angular/common/http"
import { HttpClientProxyService } from './httpClientProxyService';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    InsurancecardComponent
  ],
  declarations: [InsurancecardComponent]
})
export class OcrModule { }
