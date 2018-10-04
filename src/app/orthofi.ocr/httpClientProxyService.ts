import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http"

@Injectable({
    providedIn: "root"
})

export class HttpClientProxyService
{
constructor(private http: HttpClient){}
}


