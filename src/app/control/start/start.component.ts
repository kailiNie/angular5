import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {
  @Input()
  rating:number = 0;
  stars:Boolean[];
  constructor() {}

  ngOnInit() {
  	this.stars = [];
  	for(let i = 1;i<=5;i++){
  		this.stars.push(i>this.rating)
  	}
  }

}
