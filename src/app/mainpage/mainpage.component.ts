import { Component, OnInit } from '@angular/core';
import { StockService } from '../stock.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent {
 title = 'M.A.D.Stocks';
  stocks: string;
  results;
  dataarray = [];
  fav = {
    favorites: "amzn"
  }

  constructor(public _api:StockService, private router:Router) { }
  
 saveStock() {
    this._api.saveStock(window.sessionStorage.userId, window.sessionStorage.token, this.fav)
    .subscribe((res:any) => {
      console.log(res)
    })
  }

  getLogout() {
    window.sessionStorage.clear();
    this.router.navigateByUrl('login')
  }
  
  getStocks() {
    this._api.getStocks(this.stocks)
    .subscribe((res:any) => {
      console.log(res["Time Series (Daily)"])
      
      this.results = res["Time Series (Daily)"]
      
      let info = Object.entries(this.results)
      let info2 = []
      let info3 = []
      let info4 = []
      let info5 = []
      
      for(let i = 0; i < info.length - 1; i++) {
        info2.push(info[i]["1"]["1. open"])
      }

      for(let i = 0; i < info.length - 1; i++) {
        info3.push(info[i]["1"]["2. high"])
      }
      
       for(let i = 0; i < info.length - 1; i++) {
        info4.push(info[i]["1"]["3. low"])
      }
      
       for(let i = 0; i < info.length - 1; i++) {
        info5.push(info[i]["1"]["4. close"])
      }
      // console.log(this.results["2018-07-19"]["4. close"])
      // console.log(info)
      // console.log(info2)
      // this.results = res["Time Series (Daily)"]
      
      // const data2 = [];
      
      // for (var key in this.results) {
      //   this.dataarray.push(this.results[key]["4. close"]);
      //   console.log(this.dataarray)
      //   data2.push (this.dataarray.push(this.results[key]["4. close"]))
      //   // data2.push (Object.entries(this.results["Time Series (Daily)"]))
      // }
      // console.log(data2)
      // this.lineChartData[0].data = this.dataarray;
      // // console.log(this.lineChartData[0].data)   
       
      // this.lineChartData.splice(8)
      // // console.log(this.lineChartData)
      
      this.lineChartData = [{data: info2, label: "Open" }, {data: info3, label: "High" }, {data: info4, label: "Low" }, {data: info5, label: "Close" }]
    })
  
  }
  public lineChartData:Array<any> = [
    {data: [], label: 'Open'},
    {data: [], label: 'High'},
    {data: [], label: 'Low'},
    {data: [], label: 'Close'}
    
  ];  
  public lineChartLabels:Array<any> = ['Jan.', 'Feb', 'March', 'April', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  public lineChartOptions:any = {
    responsive: true
  };
  public lineChartColors:Array<any> = [
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: '#FDD006',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: '#FF8400',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: '#FF5500',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: '#C92100',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
  public lineChartLegend:boolean = true;
  public lineChartType:string = 'line';
 
  public randomize():void {
    let _lineChartData:Array<any> = new Array(this.lineChartData.length);
    for (let i = 0; i < this.lineChartData.length; i++) {
      _lineChartData[i] = {data: new Array(this.lineChartData[i].data.length), label: this.lineChartData[i].label};
      for (let j = 0; j < this.lineChartData[i].data.length; j++) {
        _lineChartData[i].data[j] = Math.floor((Math.random() * 100) + 1);
      }
    }
    this.lineChartData = _lineChartData;
  }
 
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }

}
