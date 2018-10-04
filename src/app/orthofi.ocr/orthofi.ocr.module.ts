import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InsurancecardComponent } from './insurancecard/insurancecard.component';
import { HttpClientModule } from "@angular/common/http"
import { MatCardModule, MatFormFieldModule } from "@angular/material"
import { UploadpicComponent } from './uploadpic/uploadpic.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    MatCardModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
     UploadpicComponent
  ],
  exports: [
    InsurancecardComponent
  ],
  declarations: [InsurancecardComponent]
})
export class OcrModule { }
