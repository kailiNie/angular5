/**
 * 组件
 */
import {
  AfterContentChecked, 
  AfterContentInit, 
  AfterViewChecked, 
  AfterViewInit, 
  Component, 
  DoCheck, 
  OnChanges,
  OnInit
} from '@angular/core';
import {Router,NavigationEnd} from '@angular/router';
import  'rxjs/add/operator/filter';

//组件元数据装饰类
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
//ts类
export class AppComponent implements OnInit {

  private  pageTitle : "";

  constructor(private router:Router) {
   
  }
  

  ngOnInit(){
    
  }

 

}


