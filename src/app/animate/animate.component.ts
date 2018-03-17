import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
@Component({
  selector: 'app-animate',
  templateUrl: './animate.component.html',
  styleUrls: ['./animate.component.css'],
  animations: [
    trigger('flyInOut', [
      state('in', style({transform: 'translateX(0)'})),
      transition('void => *', [
        style({transform: 'translateX(-100%)'}),
        animate(1000)
      ]),
      transition('* => void', [
        animate(1000, style({transform: 'translateX(100%)'}))
      ])
    ]),
     trigger('heroState', [
    state('inactive', style({
      backgroundColor: '#eee',
      transform: 'scale(1)'
    })),
    state('active',   style({
      backgroundColor: '#cfd8dc',
      transform: 'scale(1.1)'
    })),
    transition('inactive => active', animate('10ms ease-in')),
    transition('active => inactive', animate('100ms ease-out'))
  ])
  ]
})
export class AnimateComponent implements OnInit {
  //私有化对象 默认空对象
  private stocks:Array<animal> = [];

  constructor() { }

  ngOnInit() {
  	 
  }
  //获取最小ID
  getId(){
   return this.stocks.length+1;
  }


  delete(stock){
    const { id } = stock;
    // const stockObj  = new Stock(1,'ss',2);
    this.stocks = this.stocks.splice(0,this.stocks.length-1);
    // this.stocks = stockObj.deleteStock(this.stocks,id); 
    console.log(this.stocks)
  }

  addData(){
  	const anime = new animal(this.getId(),'22',Math.random()*5);
  	this.stocks.push(anime);
  	console.log('进入');
  }

  toggleState(stock){
        //stock.state = stock.state === 'active' ? 'inactive' : 'active'  ;
 
  }
}




export class animal  {
	constructor(public id:number,public name:string,public rating:number) {}
}
