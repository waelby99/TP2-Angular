import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tp3',
  templateUrl: './tp3.component.html',
  styleUrls: ['./tp3.component.css']
})
export class Tp3Component implements OnInit {
tab=[15,0,2,8,25];


onclick(indice){
  console.log(indice);
}
  constructor() { }

  ngOnInit() {
  }

}
