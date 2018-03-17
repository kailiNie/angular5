import { Component, OnInit } from '@angular/core';

import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css'],
})

export class TableListComponent implements OnInit {
  
  private stocks:Array<Stock>;

  constructor() {}
  //初始化
  ngOnInit() {
    this.stocks = [
      new Stock(1,'测试1'，3.5),
      new Stock(2,'测试2'，1.5),
      new Stock(3,'测试3'，2.5),
      new Stock(4,'测试4'，3.5),
      new Stock(5,'测试5'，4.5)
    ]
  }


  delete(stock){
    const { id } = stock;
    // const stockObj  = new Stock(1,'ss',2);
    this.stocks = this.stocks.splice(0,this.stocks.length-1);
    // this.stocks = stockObj.deleteStock(this.stocks,id); 
    console.log(this.stocks)
  }
}




export class Stock  {
	constructor(public id:number,public name:string,public rating:number) {}
  deleteStock(stock,id){

        return stock.splice(0);
 
  }
}