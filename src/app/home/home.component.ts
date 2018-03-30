import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

	  //table参数
   public tableParams : any =  {
     'api': 'api/stock',
     'apiType': 'get',
     'apiParam' : '',
     'title' : '黑名单',
     'thead' :  ['序号','MAC地址','速率','流量','最近活动','白名单','关联IP地址','等级信息','物理位置识别','识别更新','MAC厂商']
   };


  constructor() { }

  ngOnInit() {
  }

}
