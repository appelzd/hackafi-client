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
      this.card = data as InsuranceCard 
    })
    this.card.ImageUrl = 'https://s3-us-west-2.amazonaws.com/appel-hack-too/delta+dental.JPG';
  }
  showUploader() {
    this.showuploader = true;
  }

  onFileChanged(event)
  {
    console.log('start post');
    console.log(event);
      this.http.processCard(event).subscribe(
        data => 
        {
          console.log('finihs post');
          console.log(data);
          this.card = data as InsuranceCard
        });
  }
}
