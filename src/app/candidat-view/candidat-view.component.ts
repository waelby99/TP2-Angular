import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-candidat-view',
  templateUrl: './candidat-view.component.html',
  styleUrls: ['./candidat-view.component.css']
})
export class CandidatViewComponent implements OnInit {
tabCandidats = [
{nom:'Popey',image:'../assets/popey.jpg', nb:16, parti:true},
{nom:'Sam',image:'../assets/happy.jpg', nb:14, parti:false },
{nom:'Donald',image:'../assets/donald.png', nb:44, parti:false}
];
onfollow(i:number){
  this.tabCandidats[i].nb++;
}
titre:string="liste des candidats";

  constructor() { }

  ngOnInit() {
  }

}
