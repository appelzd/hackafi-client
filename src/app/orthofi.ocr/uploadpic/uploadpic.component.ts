import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {HttpClientProxyService} from '../httpClientProxyService'

@Component({
  selector: 'app-uploadpic',
  templateUrl: './uploadpic.component.html',
  styleUrls: ['./uploadpic.component.css']
})
export class UploadPicComponent implements OnInit {

  constructor(private http:HttpClientProxyService) { }

  ngOnInit() {
  }


  @Output() filechanged = new EventEmitter<any>();

  fileChanged(imageUploader){
    let g = imageUploader;
    
    let reader = new FileReader();

    reader.onload = event =>
    {
        this.filechanged.emit(event.target["result"]);
    }

    reader.readAsDataURL(imageUploader["files"][0]);
  }
}
