import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {
titre:string="liste des profils";
profils=["Admin", "User", "Visitor"];
profil="Visitor";
liste=" ";
  constructor() { }

  ngOnInit() {
  }

}
