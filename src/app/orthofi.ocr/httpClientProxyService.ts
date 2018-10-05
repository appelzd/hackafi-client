import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http"
import { RequestOptions } from "@angular/http";
import { InsuranceCard } from "./insurancecard/insuranceCardModel";
import { Observable } from "rxjs/internal/Observable";
import { tap } from "rxjs/operators";

@Injectable({
    providedIn: "root"
})

export class HttpClientProxyService {
    constructor(private http: HttpClient) { }

    httpHeaders = 
    {'Content-Type':  'text/plain'}
  
    httpOptions = {
        withCredentials: false,
        headers: this.httpHeaders
    }

    httpOptions2 = {
        withCredentials: false,
    }

    url: string = "http://localhost:53219/card/1";
    postUrl: string = "http://localhost:53219/card/add";

    getInsuranceCard(): Observable<any> {
        return this.http.get(this.url,  this.httpOptions2);
    }

    processCard(event) {
        console.log('return http call')
        console.log(event);
        var removeString = 'data:image/jpeg;base64,';
        var sendthis = event.slice(removeString.length)

        return this.http.post(this.postUrl, sendthis, this.httpOptions); 
    }
}


