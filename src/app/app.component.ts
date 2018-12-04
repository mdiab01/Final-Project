import { Component } from '@angular/core';
import { StockService } from './stock.service';
import { MainpageComponent } from './mainpage/mainpage.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'Final-Project';
  // stocks: string;
  // results;
   
  constructor(public _api:StockService){}
  
  // getStocks() {
  //   this._api.getStocks(this.stocks)
  //   .subscribe((res:any) => {
  //     this.results = res.results;
  //   })
  // }
}
