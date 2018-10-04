import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { OcrModule } from "./orthofi.ocr/orthofi.ocr.module";
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    OcrModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
