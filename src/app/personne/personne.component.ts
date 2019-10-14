import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personne',
  templateUrl: './personne.component.html',
  styleUrls: ['./personne.component.css']
})
export class PersonneComponent implements OnInit {
name:string="popey";
link:string="1.jpg";
age:number=16;
bool=true;

v(){
  var x=this.age;
  if(x>18){
    this.bool=false;
  }
  return(this.bool);
}
  constructor() { }

  ngOnInit() {
  }

}
