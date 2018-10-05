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

    url: string = "http://localhost:53219/insurance/card";

    getInsuranceCard(): Observable<any> {
        return this.http.get(this.url);
    }

    processCard(event) {
        console.log('return http call')
        console.log(event);
        return this.http.post(this.url, event); 
    }
}


