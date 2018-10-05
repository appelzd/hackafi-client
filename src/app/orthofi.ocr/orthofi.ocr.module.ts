import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InsuranceCardComponent } from './insurancecard/insurancecard.component';
import { HttpClientModule } from "@angular/common/http"
import { MatCardModule, MatFormFieldModule } from "@angular/material"
import { UploadPicComponent } from './uploadpic/uploadpic.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";


@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    MatCardModule,
    BrowserAnimationsModule,
    MatFormFieldModule],
  exports: [
    InsuranceCardComponent
  ],
  declarations: [InsuranceCardComponent, UploadPicComponent]
})
export class OcrModule { }
