import { Component, OnInit } from '@angular/core';
import { SSL_OP_NO_TLSv1_2, SSL_OP_NO_TLSv1_1 } from 'constants';
import { eventNames } from 'cluster';

@Component({
  selector: 'app-calcul',
  templateUrl: './calcul.component.html',
  styleUrls: ['./calcul.component.css']
})
export class CalculComponent implements OnInit {
titre:string="operation de calcul";
c:number;
p:number;
f:number;
l:number;
onKey(event:KeyboardEvent){

  this.c=(<HTMLInputElement>event.target).value*(<HTMLInputElement>event.target).value;
  
  this.l=(<HTMLInputElement>event.target).value;
}
onKeyup(event:KeyboardEvent){
this.f=(<HTMLInputElement>event.target).value;
}
onClick(event:MouseEvent){
  var  x=parseInt(this.l);
  var y=parseInt(this.f);
  this.p=x+y;
 
}

  constructor() { }

  ngOnInit() {
  }

}
