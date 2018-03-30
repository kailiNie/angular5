import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
@Component({
  selector: 'app-animate',
  templateUrl: './animate.component.html',
  styleUrls: ['./animate.component.css']
  //动画
  // animations: [
  //   trigger('flyInOut', [
  //     state('in', style({transform: 'translateX(0)'})),
  //     transition('void => *', [
  //       style({transform: 'translateX(-100%)'}),
  //       animate(1000)
  //     ]),
  //     transition('* => void', [
  //       animate(1000, style({transform: 'translateX(100%)'}))
  //     ])
  //   ]),
  //    trigger('heroState', [
  //   state('inactive', style({
  //     backgroundColor: '#eee',
  //     transform: 'scale(1)'
  //   })),
  //   state('active',   style({
  //     backgroundColor: '#cfd8dc',
  //     transform: 'scale(1.1)'
  //   })),
  //   transition('inactive => active', animate('10ms ease-in')),
  //   transition('active => inactive', animate('100ms ease-out'))
  // ])
  // ]
})
export class AnimateComponent implements OnInit {
  //table参数
   public tableParams : any =  {
     'api': 'api/stocks',
     'apiType': 'get',
     'apiParam' : '',
     'title' : '黑名单',
     'thead' :  ['序号','MAC地址','速率','流量','最近活动','白名单','关联IP地址','等级信息','物理位置识别','识别更新','MAC厂商']
   };


  constructor() { }

  ngOnInit() {
  	 
  }
   
}


 