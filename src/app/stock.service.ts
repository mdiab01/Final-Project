import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class StockService {
  url: string = "https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=";
  api: string = "94JFK9YXEMH7A3V5"
  api2: string = "http://meanstack-2018-5-mahmud-phortonssf.c9users.io:8080/api/AppUsers/"
  // url2: string = "https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=MSFT&apikey=demo"
  
  stocks = "";
  
  userId = window.sessionStorage.getItem ('userId');
  token = window.sessionStorage.getItem ('token');
  
  constructor(private _http:HttpClient) { }
  
  getStocks(stocks) {
    return this._http.get(this.url + stocks + "&apikey=" + this.api + "&outputsize=compact")
    // return this._http.get(this.url2)
  }
  
  postStock(userId, token, userinfo) {
    return this._http.post(this.api2 + userId + "/favorites?access_token=" + token, userinfo)
  }

  saveStock(userId, token, userinfo) {
    return this._http.post(this.api2 + userId + "/favorites?access_token=" + token, userinfo)
  }
  
  geteStock(userId, token) {
    return this._http.get(this.api2 + userId + "/favorites?access_token=" + token)
  }
}
