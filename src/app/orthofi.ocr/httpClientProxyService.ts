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

    newHeaders: HttpHeaders = new HttpHeaders().set("Access-Control-Allow-Origin", "http://localhost:53219");

    url: string = "http://localhost:53219/insurance";

    getInsuranceCard(): Observable<any> {


        let t = this.http.get(this.url)
        t.pipe(
            tap(h => console.log(t))
        )
        return t;
    }

    processCard(event) {

    }
}


