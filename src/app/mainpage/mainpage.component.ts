import { Component, OnInit } from '@angular/core';
import { StockService } from '../stock.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent {
 title = 'Final-Project';
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
      
      let list = Object.entries(this.results)
      let list2 = []
      let list3 = []
      
      for(let i = 0; i < list.length - 1; i++) {
        list2.push(list[i]["1"]["4. close"])
      }

      for(let i = 0; i < list.length - 1; i++) {
        list3.push(list[i]["1"]["1. open"])
      }
      // console.log(this.results["2018-07-19"]["4. close"])
      console.log(list)
      console.log(list2)
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
      
      this.lineChartData = [{data: list2, label: "Series A" }, {data: list3, label: "Series B" },]
    })
  
  }
  public lineChartData:Array<any> = [
    {data: [], label: 'Series A'},
    {data: [], label: 'Series B'},
    
  ];  
  public lineChartLabels:Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public lineChartOptions:any = {
    responsive: true
  };
  public lineChartColors:Array<any> = [
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
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
