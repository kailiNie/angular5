import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})

export class TableListComponent implements OnInit {
  
  private stocks:Array<Stock>;

  constructor() {}
  //初始化
  ngOnInit() {
    this.stocks = [
    	  new Stock(1,'测试1'，3.5)]
  }

}


export class Stock  {
	constructor(public id:number,
				public name:string,
				public rating:number) {
	}
}