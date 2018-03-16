/**
 * 组件
 */
import { Component,OnInit } from '@angular/core';
import {Router,NavigationEnd} from '@angular/router'
import  'rxjs/add/operator/filter';

//组件元数据装饰类
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
//ts类
export class AppComponent implements OnInit{
  pageTitle : '';

  constructor(private router:Router) {
  		router.events
  		.filter(event => event instanceof NavigationEnd)
  		.subscribe((event:NavigationEnd) =>{
  			if(event.url === '/home'){
  				this.pageTitle = '首页';
  			}else{
  				this.pageTitle = '股票信息管理';
  			}
  		});

  }
  
  ngOnInit() {

    console.log('进入1212')
  }
}


