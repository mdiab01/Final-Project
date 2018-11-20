import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class StockService {
  url: string = "https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=";
  api: string = "94JFK9YXEMH7A3V5"
  
  stocks = "msft";
  
  constructor(private _http:HttpClient) { }
  
  getStocks(stocks) {
    return this._http.get(this.url + stocks + "&apikey=" + this.api)
  }
}