//table组件 具有排序功能 传进来表头
import { Component, OnInit,Input,Output } from '@angular/core';
import { Http } from '@angular/http';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { HttpServices } from '../../common-services/http-service/http.service'
import "rxjs/Rx"
import {Observable} from 'rxjs';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css'],
})

export class TableListComponent implements OnInit {
  //  API信息 
   @Input()
   public tableParams : any;

   public stocks :any[] = [];
 
  constructor(public http:Http) {
    console.log(this.tableParams);
 
  }
  //初始化
  ngOnInit() {
    this.query();
  }

  query(){
  	this.http.get(this.tableParams.api).map(response => response.json()).subscribe(
  		data => this.stocks = data
  	)
  }
  //查询查询数据
  reload(){
  	this.query();
  }
  //进度条
  getColor(re){
    return  `${re}%`
  }

  sort (params,property){
    if(params === 'drop' ){
       this.stocks = this.stocks.sort(this.riseSort(property));
    }else{
      this.stocks = this.stocks.sort(this.dropSort(property));
    }
        
    
  }
   //降序
  dropSort(property){
    return function(a,b){
        var value1 = a[property];
        var value2 = b[property];
        return value1 - value2;
    }
  }
  //升序
 riseSort(property){
    return function(a,b){
        var value1 = a[property];
        var value2 = b[property];
      return value2 - value1;
    }
  }

 
}




 