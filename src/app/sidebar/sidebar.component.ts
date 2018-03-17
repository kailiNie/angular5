import { Component, OnInit } from '@angular/core';
import{ Router }  from '@angular/router'
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
	private routers;


  constructor(public router:Router) {

  }

  ngOnInit() {
  	this.routers=[{"id":1,"name":"首页","url":'home'},
  				  {"id":2,"name":"股票管理","url":'tableList'},
  				  {"id":3,"name":"动画","url":'animate'}]
  }

  nav(router){
  	 this.router.navigate([router.url]);
  }

}
