import { Component, OnInit } from '@angular/core';
import {HttpClientProxyService} from "../httpClientProxyService";
import {InsuranceCard} from "./insuranceCardModel"
import {MatCard, MatCardContent, MatFormField} from "@angular/material"

@Component({
  selector: 'app-insurancecard',
  templateUrl: './insurancecard.component.html',
  styleUrls: ['./insurancecard.component.css']
})
export class InsurancecardComponent implements OnInit {

  constructor(private http: HttpClientProxyService) { }

  card: InsuranceCard = new InsuranceCard();

  ngOnInit() {
    this.http.getInsuranceCard().subscribe((data) => {
    
        let g= ''; 
      this.card = data as InsuranceCard; 
    
    })
  }
}
