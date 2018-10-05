import { Component, OnInit } from '@angular/core';
import { HttpClientProxyService } from "../httpClientProxyService";
import { InsuranceCard } from "./insuranceCardModel"
import { MatCard, MatCardContent, MatFormField } from "@angular/material"

@Component({
  selector: 'app-insurancecard',
  templateUrl: './insurancecard.component.html',
  styleUrls: ['./insurancecard.component.css']
})
export class InsuranceCardComponent implements OnInit {

  constructor(private http: HttpClientProxyService) { }

  card: InsuranceCard = new InsuranceCard();
  showuploader: boolean;

  ngOnInit() {
    this.http.getInsuranceCard().subscribe((data) => {
      this.card = new InsuranceCard();
      this.card.CarrierName = data.Data['CarrierName'];
      this.card.CarrierType = data.Data['CarrierType'];
      this.card.Group = data.Data['Group'] ;
      this.card.ImageUrl = data.Data['ImageUrl'] ? data.Data['ImageUrl'] : this.card.ImageUrl;
      this.card.MemberId = data.Data['MemberId'];
    })
  }
  showUploader() {
    this.showuploader = true;
  }

  onFileChanged(event)
  {
    console.log('start post');
      this.http.processCard(event).subscribe(
        data => 
        {
          console.log('finish post');
          
          this.card = data as InsuranceCard;
           if(data['ImageUrl'] ) 
             this.card.ImageUrl = data['ImageUrl'] ;
            else 
             this.card.ImageUrl = event;
        });

        this.card.ImageUrl = event; 
  }
}
