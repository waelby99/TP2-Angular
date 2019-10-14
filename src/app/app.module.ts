import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BindingComponentComponent } from './binding-component/binding-component.component';
import { TableauComponent } from './tableau/tableau.component';
import { PersonneComponent } from './personne/personne.component';
import { CalculComponent } from './calcul/calcul.component';
import { CandidatViewComponent } from './candidat-view/candidat-view.component';
import { Tp3Component } from './tp3/tp3.component';
import { ProfilComponent } from './profil/profil.component';
import {FormsModule} from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    BindingComponentComponent,
    TableauComponent,
    PersonneComponent,
    CalculComponent,
    CandidatViewComponent,
    Tp3Component,
    ProfilComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
